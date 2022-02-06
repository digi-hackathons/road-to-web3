pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract LingoStorage is Ownable {

    string images_dir_cid = "QmRqcTyPLu2PCfAwQEZN121myWEYpb5E5udKLygBYYUVVL";

    function set_metadata_cid(string calldata cid) public onlyOwner () {
        images_dir_cid = cid;
    }

    function get_images_dir_cid() public view returns (string memory) {
        return images_dir_cid;
    }
}
