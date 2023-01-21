import { enUS } from "date-fns/locale";
import { formatDistanceToNowStrict } from "date-fns";

export function getFormattedDistanceToNow(date) {
  const options = {
    locale: {
      ...enUS,
      formatDistance: (unit, count) => {
        const units = {
          xDays: `${count}d ago`,
          xHours: `${count}h ago`,
          xMinutes: `${count}mins ago`,
          xMonths: `${count}mo ago`,
          xSeconds: `${count} secs ago`,
          xYears: `${count}y ago`,
        };
        return units[unit] || "%d h ago";
      },
    },
  };

  return formatDistanceToNowStrict(date, options);
}

export function formatIpfImage(urlIpfs) {
  if (!urlIpfs) return "";
  const url = urlIpfs.replace("ipfs://", "https://lens.infura-ipfs.io/ipfs/");
  return url;
}
