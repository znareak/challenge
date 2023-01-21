import { Image } from "@mantine/core";
import { formatIpfImage } from "../helpers/utils";
import useLazyloadImage from "../hooks/useLazyloadImage";
import placeholder from "../assets/placeholder.svg";
import PostStats from "./PostStats";
import { memo } from "react";

function Post({ metadata: { media }, profile, createdAt, stats }) {
  const { totalAmountOfComments, totalAmountOfMirrors, totalAmountOfCollects } = stats;
  const src = formatIpfImage(media[0]?.original.url);
  const { ref } = useLazyloadImage(src);
  console.log("RENDER Post");

  return (
    <>
      <Image
        width="100%"
        height="100%"
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

export default memo(Post);
