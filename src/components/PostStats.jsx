import { Flex } from "@mantine/core";
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
  const authorPicture = picture?.original?.url;

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
