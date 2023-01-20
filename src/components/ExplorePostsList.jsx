import { Grid } from "@mantine/core";
import { Link } from "react-router-dom";
import styles from "../styles/post.module.scss";
import Post from "./Post";

export default function ExplorePostsList({ posts, isPostsAvailable }) {
  if (!isPostsAvailable) return <h2>There aren't posts yet</h2>;

  return (
    <Grid gutter={12}>
      {posts.map(({ id, ...post }) => (
        <Grid.Col span={3} className={styles.col} key={id}>
          <Link to={`/post/${id}`} style={{ color: "inherit" }}>
            <Post {...post} />
          </Link>
        </Grid.Col>
      ))}
    </Grid>
  );
}
