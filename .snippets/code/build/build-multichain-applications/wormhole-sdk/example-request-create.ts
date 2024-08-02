// creating a transfer request fetches token details
// since all routes will need to know about the tokens
const tr = await routes.RouteTransferRequest.create(wh, {
  from: sender.address,
  to: receiver.address,
  source: sendToken,
  destination: destinationToken,
});

// resolve the transfer request to a set of routes that can perform it
const foundRoutes = await resolver.findRoutes(tr);
console.log(
  'For the transfer parameters, we found these routes: ',
  foundRoutes
);