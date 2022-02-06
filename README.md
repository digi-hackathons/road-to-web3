# Preface
Hello world! We are LingoSwap.


# Live Demo(URL)



# IMPORTANT NOTE (If there is)



# Road-to-Web3-2022--LingoSwap
This is the official ETHGlobal Road to Web3 2022 submission for our project "LingoSwap".


# Our Vision
What would the world be like where you could earn money while learning something new?

### Evolving society with decentralized education

This is what we would like to achieve.

LingoSwap is an educational community providing Learn2Earn app, a totally different style of learning.
NFTs,Web3 Dapps have revolutionizingly changed the profit distribution system of our world. 

There are so many people in the world who can't have an access to education.
Our team strongly believe that education is the most important solutions to achieve the peaceful world and financial independence of individuals.


We begin with language category.

The team at LingoSwap embraces the expanding culture around NFT-sharing and community driven art collecting, however, we also wanted to explore how NFTs could be not just digital art, but digital accolades.


# How it works?

1.
2.
3.
4.
5.


For example: 
Arjun dislikes his job, but he hates updating his resume even more. Arjun has been putting off doing that for weeks now, however he won't get a new job unless he updates his resume. Arjun needs a plan and someone to hold him accountable to the task. 

Arjun logs onto OnTrac and gives the Dapp his wallet address plus the address of his trustworthy friend Bara. Andy specifies what his task is, what it takes to complete the task, his deadline, and the amount of cryptocurrency he is willing to lose if he doesn't complete the task in time. Behind the scenes, a smart contract will stream money out of Arjun's wallet and into a vault at a set flow rate until the deadline is reached. 

Now Arjun feels a sense of urgency to get this task done quickly! If Arjun doesn't complete the task by the deadline, or if he chooses to give up, the money will move from the vault into Bara's wallet address.

If Arjun completes the task, it is reviewed by his partner Bara. If Bara agrees that the task is finished, the vault money moves back into Arjun's wallet. As a reward for finishing the task, the Dapp will mint him his own exclusive NFT. These NFT rewards will be crucial to the OnTrac culture, as OnTrac users can show off their "Trophy rooms" of NFTs!

We have also implemented a 3rd party "Judge" that is optional. The Judge is an extra layer of verification; it can be a real person or it can be a contract writing it's own custom logic. This opens up a wealth of possibilities for creating a more trustless system, as online organizations that provide certifications (Coursera, Udemy) can integrate their API's into the Judge contract and set their own rules and their own NFT rewards.


# The Future of LingoSwap
We will expand the category of learning.
Especially, programming category.
There are millions of tech jobs in the world and the number of that has been increasing year after year.
However, it costs money to learn programming in some cases.
We would like to change that situation and advanced the education system all over the world.



# How it's made

Frontend:


Backend:


# How it Works:
1. User initiates a task to complete, connects their wallet + enters the address of a trusted partner
2. User picks a deadline and a max price (in crypto-tokens) they are willing to lose if they fail to complete their task
3. With the help of [SuperFluid](https://www.superfluid.finance/home)'s SDK will stream money using SuperFluid from User's wallet into a vault at a steady rate until the deadline hits
4. If they pass, they get their money back and a minted NFT, if they give up early or fail to complete, the money moves from the vault into their trusted partner's wallet and they get no NFT.
5. OnTrac has potential to restructure independent learning online, freelance work agreements, and promote a culture of self-improvement backed by science and code.



Contract Deployments:

-| Rinkeby | Mumbai 
-|---------|--------
[superAccountabilityX](./SuperAccountabilityX.sol)| [0x919753ca7f9d9B24a93e4823B9b8cB657bA5e0b5](https://rinkeby.etherscan.io/address/0x919753ca7f9d9B24a93e4823B9b8cB657bA5e0b5) | [0xCdd7bDdF25c18c3830a60b73b5BFc40Ee3E60088](https://mumbai.polygonscan.com/address/0xCdd7bDdF25c18c3830a60b73b5BFc40Ee3E60088) 
[superAccountabilityNFT](./SuperAccountabilityNFT.sol) | [0x1eD52D1aD1633EBdA246dF5f5E543a8300014535](https://rinkeby.etherscan.io/address/0x1eD52D1aD1633EBdA246dF5f5E543a8300014535) | [0xfB4979C9d002bfeB26E21012CaD954fCb3791022](https://mumbai.polygonscan.com/address/0xfB4979C9d002bfeB26E21012CaD954fCb3791022) 

We also deployed a simple version of OnTrac ([SimpleAccountability.sol](./SuperAccountabilityX.sol)) on Harmony at address [0x1B11B9AD3f07aC613f20d4009337D64653A67B67](https://explorer.harmony.one/address/0x1b11b9ad3f07ac613f20d4009337d64653a67b67) since Superfluid is not deployed on there.

