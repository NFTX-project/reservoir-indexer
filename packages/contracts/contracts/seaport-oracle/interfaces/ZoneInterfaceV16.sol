// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {ZoneParameters, Schema} from "../lib/ConsiderationStructs.sol";

interface ZoneInterfaceV16 {
  function authorizeOrder(
    ZoneParameters calldata zoneParameters
  ) external returns (bytes4 authorizeOrderMagicValue);

  function validateOrder(
    ZoneParameters calldata zoneParameters
  ) external returns (bytes4 validOrderMagicValue);

  function getSeaportMetadata()
    external
    view
    returns (
      string memory name,
      Schema[] memory schemas // map to Seaport Improvement Proposal IDs
    );
}
