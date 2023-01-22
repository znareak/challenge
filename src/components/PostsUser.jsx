import usePostsByUser from "../hooks/usePostsByUser";
import ExplorePostsList from "./ExplorePostsList";
import PostsLoader from "./PostsLoader";
import LoadMore from "./LoadMore";
import { Text } from "@mantine/core";

export default function PostsUser({ id }) {
  const { posts, isLoading, isFetching, error, isPostsAvailable } = usePostsByUser(id);

  if (error) return <Text>A error ocurred: {error}</Text>;

  if (isLoading) return <PostsLoader withFilter={false} />;

  return (
    <>
      <ExplorePostsList gutter={8} {...{ posts, isPostsAvailable }} />
      <LoadMore {...{ isLoading, isFetching }} />
    </>
  );
}
