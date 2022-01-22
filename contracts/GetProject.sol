// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract GetProject {
    address public owner = msg.sender;

    enum ProjectState {
        ACTIVE,
        UNACTIVE
    }

    struct Project {
        uint256 projectId;
        address projectOwner;
        uint256 fund;
        ProjectState state;
        string title;
        string pitch;
        string githubLink;
        string category;
    }

    Project[] public projects;

    function listProject(
        string memory _title,
        string memory _pitch,
        string memory _githubLink,
        string memory _category
    ) public {
        uint256 _projectId = projects.length;
        projects.push(
            Project(
                _projectId,
                owner,
                0,
                ProjectState.ACTIVE,
                _title,
                _pitch,
                _githubLink,
                _category
            )
        );
    }

    function getAllProjects() public view returns (Project[] memory) {
        return projects;
    }
}
