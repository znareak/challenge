import { Image, Grid } from "@mantine/core";
import { formatIpfImage } from "../helpers/utils";
import useLazyloadImage from "../hooks/useLazyloadImage";
import placeholder from "../assets/placeholder.svg";

export default function Post({ metadata, ...props }) {
  const { /*content, description,*/ media } = metadata;
  const { url, width = 300, height = 300 } = media[0]?.original;
  const src = formatIpfImage(url);
  const { ref } = useLazyloadImage(src);

  return (
    <Grid.Col span={3}>
      <Image
        width={width}
        height={height}
        radius="md"
        loading="lazy"
        src={placeholder}
        imageRef={ref}
        withPlaceholder
      />
    </Grid.Col>
  );
}
