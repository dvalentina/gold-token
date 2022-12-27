function shortenAddress(address) {
  let substring1 = address.toString().slice(0, 5);
  let substring2 = address.toString().slice(-4);
  return substring1 + "..." + substring2;
}

export default shortenAddress;
