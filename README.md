[![Contributors][contributors-shield]][contributors-url]
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h1 align="center">ETH QF</h1>
  <p align="center">
   We fund with the community.  For the community.
   <br />
  </p>
</p>
<p align ="center">
<img src="https://gcdnb.pbrd.co/images/PNMAEIBhZYNl.png?o=1" alt="ethqf" border="0">
</p>
<br />

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary><br />
  <ol>
    <li>
      <a href="#about-the-project">What is Eth QF?</a>
      </li>
     <li>
         <a href="#flow">Project Design</a>
      </li>
      <li>
      <a href="#screenshots">Screenshots</a>
      </li>
      <li>
         <a href="#video">Demonstration Video</a>
      </li>
    <li><a href="#features">Features</a>
    </li>
    <li><a href="#technologies-used">Technologies, Libraries and Packages Used</a>
    </li>
      <li><a href="#local-setup">Local Setup</a></li>
      <li><a href="#next">What Next?</a></li>
    <li><a href="#team">Team Members</a></li>
  </ol>
</details>


<div id="about-the-project" />

<!-- ABOUT THE PROJECT -->
# What is Eth QF?

[Eth QF](https://github.com/shreshthgoyal/QF) is a decentralised platform that enables crowdfunding for projects on Ethereum ecosystem. Eth QF provides projects funding through the concept of Quadratic Funding. We at Eth QF, fund the community for the community.

### Why Blockchain?

* **Time efficient :** Blockchain allows us to make the entire process decentralized, where neither of the parties has all of the power. It offers transparency and connects the borrower directly to the lender; with no middlemen involved. The process is automated and hence a lot faster than traditional lending methods.
* **Fair Interest Rates :** Since blockchain is immutable, the interest rate once decided upon cannot be changed later in an unfair way. The lender gets to specify the desired interest rate beforehand and the borrower gets to choose the interest rate he wants from the ones offered by the different lenders.
* **Seamless repayment :** Blockchain also removes the worry of the lenders of having their loans repaid. If the borrower does not repay the loan before the specified due date, the lenders have the mortgage submitted by the borrower which can then be auctioned off.
* 
### What is Quadratic Funding?

* **Quadratic Funding converts 1$ to 20$!!**

Quadratic investment is a concept that extends ideas from quadratic vote casting to a mechanism for investing.
The **matching pool** is at the heart of Quadratic funding.
A matching pool is a money pool that is provided by matching companions. Matching partners are businesses, individuals, or even protocols that assist with public goods tasks. The funds collected in the matching pool are used to multiply individual contributions to exceptional initiatives.

You can learn more about  Quadratic Funding [here](https://finematics.com/quadratic-funding-explained/).

### Why Quadratic Funding?

* **Community driven :** In Quadratic Funding, the algorithm used after each CLR Matching Round, checks the number of contributors who donated to a certain project, in layman terms, the higher the number of contributors higher will be the amount supported to a project.
* **Need of the hour :** Crowd funding schemes for public goods have a fundamental weakness- the match amount for a project is proportional to the sum of contributions it receives during a stipulated period of time, whereas if community has more demand for some project than the other, proportion should not be equal. CLR Matching solves this problem.

<div id="flow" />

# Project Design

<p align ="center">
<img src="https://i.ibb.co/z54hX1v/Untitled-Workspace.png" alt="reva" border="0">
</p>

<div id="screenshots" />

# Screenshots

Screenshots of our DApp are added to [this link](https://photos.app.goo.gl/rM9hR66io1JGBUfEA).

<div id="video" />

# Demonstration 

Demonstration of our Dapp is added to [this link](https://vimeo.com/645497797).
You can checkout the presentation [here](https://prezi.com/view/3FpSC5ii5PdE3s3mumji/).
Our Project Workflow is added to [this link](https://app.milanote.com/1N2f911lxmcl1C?p=JnqtrMZqLIf).

<div id="features" />

<!-- GETTING STARTED -->
# Features

* Borrowers can create their loan proposal with the amount they want, their favourable repayment due date and CID of their mortgage uploaded on IPFS.
> As of now we are using a decentralised public IPFS gateway. To use our DApp generate your file CID [here](https://www.dreamlink.cloud/) before adding it as a mortgage.
* Lender's can verify the borrower's data and send their proposal with their favourable interest rate.
* Borrower's can choose multiple lenders of their interest.
* Borrower can repay the loan anytime they want before the due date and amortized loan will be transacted.
* After the repayment date has passed, borrower cannot repay the loan and their mortgage will be revoked and auctioned off.

<div id="technologies-used" />

# Technologies, Libraries and Packages Used

1. ReactJS + Hooks
2. Ethereum
3. Solidity
4. Truffle
5. MetaMask
6. Ganache
7. Web3
8. jQuery
9. Firebase 


<div id="local-setup" />

# Local Setup

> **Pre-Requisites**
> React
> Ganache 
> MetaMask
> Truffle
1. Fork this repository.
2. Clone the repository
   ```sh
    git clone https://github.com/shreshthgoyal/QF.git
    ```
3. Open the folder in which you cloned the repository.
4. Open Ganache to run your local blockchain.
5. Run this command to build your smart contracts.
    ```sh
    truffle init
    truffle test
    truffle migrate --reset
    ```
6. Update your config.js present in root directory using abi and address present in build files.
7. Run on your local host and connect your wallet with metamask to perfrom the transactions.
8. To start your application run the following command in your terminal.
   ```sh
   npm start
   ```
   

> Star this repository ✨ or send us some ethers at 0x08C5374DfB9Df1A5D42C76a00AcA277CF98ABe50

<div id="next" />

# What Next?

* We can create a local IPFS gateway to store the files and create CIDs.
* We can have user profile system for project managers.
* We can have a archive feature where we can show history of previous Matching Rounds.

<div id="team" />
<!-- CONTACT -->

# Team

Team Number - **5**

- #### Team Members
    - [Rishabh Kumar](https://github.com/rish78)
    - [Shreshth Goyal](https://github.com/shreshthgoyal)
    - [Kshitij Ayush](https://github.com/kshitij-404)
# 

[contributors-shield]: https://img.shields.io/github/contributors/shreshthgoyal/QF.svg?style=for-the-badge
[contributors-url]: https://github.com/shreshthgoyal/QF
