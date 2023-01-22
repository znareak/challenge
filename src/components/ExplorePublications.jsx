import { Title, Loader } from "@mantine/core";
import usePosts from "../hooks/usePosts";
import ExploreFilters from "./ExploreFilters";
import PostsLoader from "./PostsLoader";
import ExplorePostList from "./ExplorePostsList";
import LoadMore from "./LoadMore";

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
    <>
      {error && (
        <Title order={4}>
          An unexpected error ocurred: <code>{error.message}</code>
        </Title>
      )}

      {isLoading ? (
        <PostsLoader />
      ) : (
        <>
          <ExploreFilters {...{ currentSort, onChangeSort }} />
          <ExplorePostList {...{ isPostsAvailable, posts }} />
        </>
      )}
      
      {!isLoading && isFetching && (
        <Loader sx={{ margin: "auto", display: "block" }} mt="2rem" />
      )}
      <LoadMore {...{ isLoading, isFetching }} />
    </>
  );
}
