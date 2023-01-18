import { Grid } from "@mantine/core";
import Post from "./Post";

export default function ExplorePostsList({ posts, isPostsAvailable }) {
  if (!isPostsAvailable) return <h2>There aren't posts yet</h2>;

  return (
    <Grid gutter={10}>
      {posts.map(({id, ...post}) => (
        <Post key={id} {...post} />
      ))}
    </Grid>
  );
}
