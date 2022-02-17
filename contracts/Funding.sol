// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

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
            uint256 sq = (sqrt(msg.value * 10000)) / 100;
            projects[_projectId].rootSum += sq;
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
            projects[i].matchingSum = projects[i].rootSum * projects[i].rootSum;
            totalMatchingSum = totalMatchingSum + projects[i].matchingSum;
        }

        for (uint256 i = 0; i < projects.length; i++) {
            projects[i].matchingShare =
                (projects[i].matchingSum / totalMatchingSum) *
                matchingFund;
        }
    }
}
