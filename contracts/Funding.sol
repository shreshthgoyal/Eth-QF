// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./GetProject.sol";

contract Funding is GetProject {
    uint256 public matchingFund = 0;
    bool public isMatchingRound = false;
    mapping(address => uint256) public sponsorToDonation;

    function contribute(uint256 _projectId) public payable {
        require(msg.sender != projects[_projectId].projectOwner);

        projects[_projectId].fund += msg.value;
        projects[_projectId].contributors++;

        if (isMatchingRound) {
            projects[_projectId].matchingContributors++;
            projects[_projectId].matchingContributions.push(msg.value);
        }
    }

    function donateToMatchingFund() public payable {
        matchingFund += msg.value;
        if (sponsorToDonation[msg.sender] != 0) {
            sponsorToDonation[msg.sender] += msg.value;
        } else {
            sponsorToDonation[msg.sender] = msg.value;
        }
    }

    function sqrt(uint256 x) private pure returns (uint256 y) {
        uint256 z = (x + 1) / 2;
        y = x;
        while (z < y) {
            y = z;
            z = (x / z + z) / 2;
        }
    }

    function clrMatching() public {
        uint256 totalMatchingSum = 0;
        for (uint256 i = 0; i < projects.length; i++) {
            uint256 individualSum = 0;
            for (
                uint256 j = 0;
                j < projects[i].matchingContributions.length;
                j++
            ) {
                uint256 sq = (
                    sqrt(projects[i].matchingContributions[j] * 10000)
                ) / 100;
                individualSum = individualSum + sq;
            }
            individualSum = individualSum * individualSum;
            projects[i].matchingSum = individualSum;
            totalMatchingSum = totalMatchingSum + individualSum;
        }

        for (uint256 i = 0; i < projects.length; i++) {
            projects[i].matchingShare =
                (projects[i].matchingSum / totalMatchingSum) *
                matchingFund;
        }
    }
}
