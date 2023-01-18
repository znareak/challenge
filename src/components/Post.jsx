import { Image, Grid } from "@mantine/core";
import { formatIpfImage } from "../helpers/utils";

export default function Post({ id, metadata, ...props }) {
  const { /*content, description,*/ media } = metadata;
  const { url, width = 300, height = 300 } = media[0]?.original;
  const src = formatIpfImage(url);

  return (
    <Grid.Col span={3} key={id}>
      <Image
        src={src}
        width={width}
        height={height}
        radius="md"
        loading="lazy"
        withPlaceholder
      />
    </Grid.Col>
  );
}
