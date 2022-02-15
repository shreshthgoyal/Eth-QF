const address = "0xC57b4993E33b023766f5C1cfecf73aaE116f9cAa";
const abi =  [
  {
    "inputs": [],
    "name": "getAllProjects",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "projectId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "projectOwner",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "fund",
            "type": "uint256"
          },
          {
            "internalType": "enum GetProject.ProjectState",
            "name": "state",
            "type": "uint8"
          },
          {
            "internalType": "string",
            "name": "title",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "pitch",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "githubLink",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "category",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "contributors",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "matchingContributors",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "matchingSum",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "matchingShare",
            "type": "uint256"
          }
        ],
        "internalType": "struct GetProject.Project[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "isMatchingRound",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_title",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_pitch",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_githubLink",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_category",
        "type": "string"
      }
    ],
    "name": "listProject",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "matchingFund",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "projectIdToProject",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "projectId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "projectOwner",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "fund",
        "type": "uint256"
      },
      {
        "internalType": "enum GetProject.ProjectState",
        "name": "state",
        "type": "uint8"
      },
      {
        "internalType": "string",
        "name": "title",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "pitch",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "githubLink",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "category",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "contributors",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "matchingContributors",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "matchingSum",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "matchingShare",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "projects",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "projectId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "projectOwner",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "fund",
        "type": "uint256"
      },
      {
        "internalType": "enum GetProject.ProjectState",
        "name": "state",
        "type": "uint8"
      },
      {
        "internalType": "string",
        "name": "title",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "pitch",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "githubLink",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "category",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "contributors",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "matchingContributors",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "matchingSum",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "matchingShare",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "sponsorToDonation",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_projectId",
        "type": "uint256"
      }
    ],
    "name": "contribute",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  },
  {
    "inputs": [],
    "name": "donateToMatchingFund",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  },
  {
    "inputs": [],
    "name": "clrMatching",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

exports.address = address;
exports.abi = abi;