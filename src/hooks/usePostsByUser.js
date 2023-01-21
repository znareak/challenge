import { useState, useEffect, useCallback, useRef } from "react";
import { getUserPosts } from "../lensQueries/getUserPosts";
import nProgress from "nprogress";
import usePageBottom from "./usePageBottom";

export default function usePostsByUser(id) {
  // This state could be managed by react-query or swc of vercel
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isFetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  const isPostsAvailable = posts.length > 0;
  const isReachedBottom = usePageBottom({ isLoading, isFetching });
  const initialPageLoaded = useRef(false);
  const [nextCursor, setNextCursor] = useState(null);
  const getPublications = useCallback(
    async (cursor) => {
      try {
        nProgress.start();
        setError(null);
        setFetching(true);
        const { items, pageInfo } = await getUserPosts(id, cursor);
        const next = pageInfo?.next;
        setPosts((prevPosts) => [...prevPosts, ...items]);
        setNextCursor(next);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
        setFetching(false);
        nProgress.done();
      }
    },
    [id]
  );

  useEffect(() => {
    if (initialPageLoaded.current) return;
    getPublications();

    initialPageLoaded.current = true;
  }, [getPublications]);

  useEffect(() => {
    if (isReachedBottom && nextCursor) getPublications(nextCursor);
  }, [isReachedBottom, nextCursor, getPublications]);

  return {
    posts,
    isLoading,
    isFetching,
    error,
    isPostsAvailable,
  };
}
