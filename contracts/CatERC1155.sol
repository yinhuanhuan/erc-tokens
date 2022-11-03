// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC1155/presets/ERC1155PresetMinterPauser.sol";

contract CatERC1155 is ERC1155PresetMinterPauser {
    constructor(string memory uri) ERC1155PresetMinterPauser(uri) {}
}
