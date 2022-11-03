// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol";

contract CatERC20 is ERC20PresetFixedSupply {
    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        address owner
    ) ERC20PresetFixedSupply(name, symbol, initialSupply, owner) {}
    
    // override dicimals, default is 18
    function decimals() public pure override returns (uint8) {
        return 0;
    }
}
