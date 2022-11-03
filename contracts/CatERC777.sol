// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC777/presets/ERC777PresetFixedSupply.sol";

contract CatERC777 is ERC777PresetFixedSupply {
    constructor(
        string memory name,
        string memory symbol,
        address[] memory defaultOperators,
        uint256 initialSupply,
        address owner
    ) ERC777PresetFixedSupply(name, symbol, defaultOperators, initialSupply, owner) {}
    
    // override dicimals, default is 18
    function decimals() public pure override returns (uint8) {
        return 0;
    }
}
