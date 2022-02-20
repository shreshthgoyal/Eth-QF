// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

import "./GetProject.sol";

contract Funding is GetProject {
    uint256 public matchingFund = 0;
    bool public isMatchingRound = false;
    mapping(address => uint256) public sponsorToDonation;
    address[] public sponsors;
    address public managerAdd = 0x9e0FB6dA4122e6dF03BF928FCf97F2Bf02333225;

    function contribute(uint256 _projectId) public payable {
        require(msg.sender != projects[_projectId].projectOwner);

        projects[_projectId].fund += msg.value;
        projects[_projectId].unpaid += msg.value;
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
            sponsors.push(msg.sender);
        }

        if (matchingFund >= 15000000000000000000) {
            isMatchingRound = true;
        }
    }

    function sqrt(uint256 x) public pure returns (uint256 y) {
        uint256 z = (x + 1) / 2;
        y = x;
        while (z < y) {
            y = z;
            z = (x / z + z) / 2;
        }

        return y;
    }

    function clrMatching() public {
        uint256 totalMatchingSum;
        for (uint256 i = 0; i < projects.length; i++) {
            projects[i].matchingSum = projects[i].rootSum * projects[i].rootSum;
            totalMatchingSum = totalMatchingSum + projects[i].matchingSum;
        }

        for (uint256 j = 0; j < projects.length; j++) {
            projects[j].matchingShare =
                (projects[j].matchingSum * matchingFund) /
                totalMatchingSum;
            projects[j].unpaid += projects[j].matchingShare;
            projects[j].lifetimeMatching += projects[j].matchingShare;
        }

        matchingFund = 0;
        isMatchingRound = false;
    }

    function getAllSponsors() public view returns (address[] memory) {
        return sponsors;
    }

    function sendMatchingShares(uint256 _id) public {
        payable(projects[_id].projectOwner).transfer(projects[_id].unpaid);
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function resetMatching(uint256 _projectId) public {
        projects[_projectId].rootSum = 0;
        projects[_projectId].matchingShare = 0;
        projects[_projectId].matchingSum = 0;
        projects[_projectId].unpaid = 0;
    }
}
