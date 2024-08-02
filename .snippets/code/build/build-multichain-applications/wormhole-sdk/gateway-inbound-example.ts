console.log(
  `Beginning transfer into Cosmos from ${
    src.chain.chain
  }:${src.address.address.toString()} to ${
    dst.chain.chain
  }:${dst.address.address.toString()}`
);

const xfer = await GatewayTransfer.from(wh, {
  token: token,
  amount: amount,
  from: src.address,
  to: dst.address,
} as GatewayTransferDetails);
console.log('Created GatewayTransfer: ', xfer.transfer);

const srcTxIds = await xfer.initiateTransfer(src.signer);
console.log('Started transfer on source chain', srcTxIds);

const attests = await xfer.fetchAttestation(600_000);
console.log('Got Attestations', attests);