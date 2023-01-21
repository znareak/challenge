import usePostsByUser from "../hooks/usePostsByUser";
import ExplorePostsList from "./ExplorePostsList";

export default function PostsUser({ id }) {
  const { posts, isLoading, isFetching, error, isPostsAvailable } = usePostsByUser(id);

  return (
    <div>
      <ExplorePostsList gutter={8} {...{ posts, isPostsAvailable }} />
      <div id="loadmore" />
    </div>
  );
}
