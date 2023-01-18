import { useState, useEffect, useCallback, useRef } from "react";
import { getPosts } from "../helpers/api";
import usePageBottom from "./usePageBottom";

export default function usePosts() {
  // This state could be managed by react-query or swc of vercel
  const [sort, setSort] = useState("LATEST");
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isPostsAvailable = posts.length > 0;
  const isReachedBottom = usePageBottom({ isLoading });
  const initialPageLoaded = useRef(false);
  const [nextCursor, setNextCursor] = useState(null);

  const onChangeSort = (sort) => {
    setSort(sort);
  };

  const getPublications = useCallback(
    async (cursor) => {
      try {
        setError(null);
        const { items, next } = await getPosts({ cursor, sort });
        setPosts((prevPosts) => [...prevPosts, ...items]);
        setNextCursor(next);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [sort]
  );

  useEffect(() => {
    if (initialPageLoaded.current) return;
    getPublications();

    initialPageLoaded.current = true;
  }, [getPublications]);

  useEffect(() => {
    if (isReachedBottom && nextCursor) {
      getPublications(nextCursor);
    }
  }, [isReachedBottom, nextCursor, getPublications]);

  return {
    posts,
    isLoading,
    error,
    isPostsAvailable,
    onChangeSort,
    sort,
  };
}
