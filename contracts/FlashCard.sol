// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract FlashCard {
  uint public fcid;
  string public answer;
  string public hint;
  string public mediaLink;
  string public text;

  constructor (string memory _mediaLink, string _answer) {
      mediaLink = _mediaLink;
      answer = _answer;
      // chainlink VRF
      fcid = 69;

  }

//   modifier restricted() {
//     require(
//       msg.sender == owner,
//       "This function is restricted to the contract's owner"
//     );
//     _;
//   }

}