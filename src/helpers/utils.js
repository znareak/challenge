export function formatIpfImage(urlIpfs) {
  if (!urlIpfs) return "";
  const url = urlIpfs.replace("ipfs://", "https://lens.infura-ipfs.io/ipfs/");
  return url;
}
