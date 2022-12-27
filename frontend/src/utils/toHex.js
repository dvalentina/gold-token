function toHex(s) {
  if (s === undefined) return;
  const hex = Number(s).toString(16);
  return "0x" + hex;
}

export default toHex;
