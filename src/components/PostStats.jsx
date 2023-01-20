import { Flex, Text, Avatar } from "@mantine/core";
import { FiArchive, FiMessageCircle, FiClock } from "react-icons/fi";
import { CgArrowsExchange } from "react-icons/cg";
import { getFormattedDistanceToNow, formatIpfImage } from "../helpers/utils";
import placeholderUser from "../assets/placeholder_user.png";
import styles from "../styles/post.module.scss";

export default function PostStats({
  totalAmountOfCollects,
  totalAmountOfMirrors,
  totalAmountOfComments,
  picture,
  handle,
  createdAt,
}) {
  const authorPicture = formatIpfImage(picture?.original?.url) || placeholderUser;
  const date = getFormattedDistanceToNow(new Date(createdAt));
  return (
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

      <Flex gap={10}>
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

      <Text sx={{ display: "flex", alignItems: "center" }} mb={3}>
        <FiClock style={{ marginRight: "5px" }} />
        {date}
      </Text>
    </Flex>
  );
}
