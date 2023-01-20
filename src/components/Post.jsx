import { Image, Grid, Flex, Text, Avatar } from "@mantine/core";
import { formatIpfImage } from "../helpers/utils";
import { FiArchive, FiCalendar, FiMessageCircle } from "react-icons/fi";
import { CgArrowsExchange } from "react-icons/cg";

import useLazyloadImage from "../hooks/useLazyloadImage";
import placeholder from "../assets/placeholder.svg";
import placeholderUser from "../assets/placeholder_user.png";
import styles from "../styles/post.module.scss";

export default function Post({
  metadata: { media },
  profile = {},
  stats,
  ...props
}) {
  const { totalAmountOfComments, totalAmountOfMirrors, totalAmountOfCollects } =
    stats;
  // const {
  //   /*content, description,*/
  //   media,
  // } = metadata;
  const { url, width = 300, height = 300 } = media[0]?.original;
  const { handle, picture } = profile;

  const src = formatIpfImage(url);
  const authorPicture =
    formatIpfImage(picture?.original?.url) || placeholderUser;
  const { ref } = useLazyloadImage(src);

  return (
    <Grid.Col span={3} className={styles.col}>
      <Image
        width={width}
        height={height}
        radius="md"
        loading="lazy"
        src={placeholder}
        imageRef={ref}
        withPlaceholder
      />
      <Flex
        className={styles.overlay}
        direction="column"
        justify="flex-end"
        p={12}
      >
        <Flex align="center" mb={10}>
          <Avatar
            src={authorPicture}
            alt={`Creator ${handle}`}
            radius="xl"
            mr={5}
            size="sm"
          />
          <Text c="lime.5">@{handle}</Text>
        </Flex>

        <Flex gap={15}>
          <Text sx={{ display: "flex", alignItems: "center" }} mb={3}>
            <FiArchive style={{ marginRight: "5px" }} />
            {totalAmountOfCollects}
          </Text>

          <Text sx={{ display: "flex", alignItems: "center" }} mb={3}>
            <CgArrowsExchange style={{ marginRight: "5px" }} />
            {totalAmountOfMirrors}
          </Text>

          <Text sx={{ display: "flex", alignItems: "center" }} mb={3}>
            <FiMessageCircle style={{ marginRight: "5px" }} />
            {totalAmountOfComments}
          </Text>
        </Flex>
      </Flex>
    </Grid.Col>
  );
}
