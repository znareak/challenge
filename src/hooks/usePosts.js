import { useState, useEffect, useCallback, useRef } from "react";
import { getPosts } from "../helpers/api";
import nProgress from "nprogress";
import usePageBottom from "./usePageBottom";
 
export default function usePosts() {
  // This state could be managed by react-query or swc of vercel
  const prevSort = useRef(null);
  const [currentSort, setSort] = useState("LATEST");
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isFetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  const isPostsAvailable = posts.length > 0;
  const isReachedBottom = usePageBottom({ isLoading, isFetching });
  const initialPageLoaded = useRef(false);
  const [nextCursor, setNextCursor] = useState(null);

  const onChangeSort = (sort) => {
    setSort(sort);
    setNextCursor(null);
  };

  const getPublications = useCallback(
    async ({ cursor, sorted } = {}) => {
      try {
        nProgress.start();
        setError(null);
        setFetching(true);
        const { items, next } = await getPosts({ cursor, sort: currentSort });
        setPosts((prevPosts) => {
          // if the user applies a sort filter then:
          // it's necessary update the state without join the previus posts in the old state
          return sorted ? items : [...prevPosts, ...items];
        });
        setNextCursor(next);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
        setFetching(false);
        nProgress.done();
      }
    },
    [currentSort]
  );

  useEffect(() => {
    if (initialPageLoaded.current) return;
    getPublications();

    initialPageLoaded.current = true;
  }, [getPublications]);

  useEffect(() => {
    if (isReachedBottom && nextCursor) getPublications({ cursor: nextCursor });

    if (currentSort !== prevSort.current) {
      getPublications({ sorted: true });
      prevSort.current = currentSort;
    }
  }, [isReachedBottom, nextCursor, currentSort, getPublications]);

  return {
    posts,
    isLoading,
    isFetching,
    error,
    isPostsAvailable,
    onChangeSort,
    currentSort,
  };
}
