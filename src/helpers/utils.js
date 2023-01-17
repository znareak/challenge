export function formatIpfImage(urlIpfs) {
  const url = urlIpfs.replace("ipfs://", "https://lens.infura-ipfs.io/ipfs/");
  return url;
}
