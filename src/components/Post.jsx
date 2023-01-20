import { Image } from "@mantine/core";
import { formatIpfImage } from "../helpers/utils";
import useLazyloadImage from "../hooks/useLazyloadImage";
import placeholder from "../assets/placeholder.svg";
import PostStats from "./PostStats";

export default function Post({
  metadata: { media },
  profile,
  createdAt,
  stats,
}) {
  const { totalAmountOfComments, totalAmountOfMirrors, totalAmountOfCollects } =
    stats;
  // const {
  //   /*content, description,*/
  //   media,
  // } = metadata;

  const { url, width = 300, height = 300 } = media[0]?.original;
  const src = formatIpfImage(url);
  const { ref } = useLazyloadImage(src);

  return (
    <>
      <Image
        width={width}
        height={height} 
        radius="md"
        loading="lazy"
        src={placeholder}
        imageRef={ref}
        withPlaceholder
      />
      <PostStats
        {...{
          totalAmountOfCollects,
          totalAmountOfMirrors,
          totalAmountOfComments,
          ...profile,
          createdAt,
        }}
      />
    </>
  );
}
