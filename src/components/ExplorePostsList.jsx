import { Grid, Alert } from "@mantine/core";
import { Link } from "react-router-dom";
import { FiAlertCircle } from "react-icons/fi";

import styles from "../styles/post.module.scss";
import Post from "./Post";

export default function ExplorePostsList({
  posts,
  isPostsAvailable,
  span = 3,
  ...props
}) {
  if (!isPostsAvailable) {
    return (
      <Alert
        icon={<FiAlertCircle size={16} />}
        title="There is nothing to show"
        color="gray"
      >
        No one has published any post yet
      </Alert>
    );
  }
  return (
    <Grid gutter={12} {...props}>
      {posts.map(({ id, ...post }) => (
        <Grid.Col
          xs={12}
          sm={6}
          md={4}
          lg={span}
          className={styles.col}
          key={id}
        >
          <Link to={`/post/${id}`} style={{ color: "inherit" }}>
            <Post {...post} />
          </Link>
        </Grid.Col>
      ))}
    </Grid>
  );
}
