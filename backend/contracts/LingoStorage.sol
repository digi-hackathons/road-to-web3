pragma solidity ^0.8.0;

contract LingoStorage {
    // https://gateway.pinata.cloud/ipfs/QmRqcTyPLu2PCfAwQEZN121myWEYpb5E5udKLygBYYUVVL?preview=1
    string constant images_dir_cid = "QmRqcTyPLu2PCfAwQEZN121myWEYpb5E5udKLygBYYUVVL";
    function get_images_dir_cid() public view returns (string memory) {
        return images_dir_cid;
    }
}
