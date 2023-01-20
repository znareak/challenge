import { Flex } from "@mantine/core";
import { formatIpfImage } from "../helpers/utils";
import placeholderUser from "../assets/placeholder_user.png";
import Author from "./Author";
import Stats from "./Stats";
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

  return (
    <Flex
      className={styles.overlay}
      direction="column"
      justify="flex-end"
      p={12}
    >
      <Author src={authorPicture} username={handle} />
      <Stats
        {...{
          totalAmountOfCollects,
          totalAmountOfMirrors,
          totalAmountOfComments,
          createdAt,
        }}
      />
    </Flex>
  );
}
