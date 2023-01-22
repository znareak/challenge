import { Grid } from "@mantine/core";
import { Link } from "react-router-dom";
import styles from "../styles/post.module.scss";
import Post from "./Post";

export default function ExplorePostsList({
  posts,
  isPostsAvailable,
  span = 3,
  ...props
}) {
  if (!isPostsAvailable) return <h2>There aren't posts yet</h2>;

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
