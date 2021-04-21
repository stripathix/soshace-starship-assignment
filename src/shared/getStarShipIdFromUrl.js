const getStarShipIdFromUrl = (url) => {
  const starShipUrlComponents = url.split("/");
  const starShipId = starShipUrlComponents[starShipUrlComponents.length - 2];
  return starShipId;
}
export {
  getStarShipIdFromUrl
}