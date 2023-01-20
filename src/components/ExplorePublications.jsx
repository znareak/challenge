import { Title, Box, Loader } from "@mantine/core";
import usePosts from "../hooks/usePosts";
import ExploreFilters from "./ExploreFilters";
import PostsLoader from "./PostsLoader";
import ExplorePostList from "./ExplorePostsList";

export default function ExplorePublications() {
  const {
    posts,
    isLoading,
    isFetching,
    error,
    isPostsAvailable,
    currentSort,
    onChangeSort,
  } = usePosts();

  return (
    <Box component="section" mb="2rem">
      <ExploreFilters {...{ currentSort, onChangeSort }} />

      {error && (
        <Title order={4}>
          An unexpected error ocurred: <code>{error.message}</code>
        </Title>
      )}

      {isLoading ? (
        <PostsLoader />
      ) : (
        <ExplorePostList {...{ isPostsAvailable, posts }} />
      )}

      <div id="loadmore" />
      
      {!isLoading && isFetching && (
        <Loader sx={{ margin: "8px auto", display: "block" }} />
      )}
    </Box>
  );
}
