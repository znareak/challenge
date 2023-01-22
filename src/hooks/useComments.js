import { useState, useEffect, useCallback, useRef } from "react";
import { getPostComments } from "../lensQueries/getPostComments";
import usePageBottom from "./usePageBottom";

export default function useComments(id) {
  const [isLoading, setLoading] = useState(true);
  const [isFetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);
  const isCommentsAvailable = comments.length > 0;
  const initialPageLoaded = useRef(false);
  const [nextCursor, setNextCursor] = useState(null);
  const isReachedBottom = usePageBottom({ isLoading, isFetching });

  const getComments = useCallback(
    async (cursor) => {
      try {
        setError(null);
        setFetching(true);
        const { items, pageInfo } = await getPostComments(id, cursor);
        const next = pageInfo?.next;
        setComments((prev) => [...prev, ...items]);
        setNextCursor(next);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
        setFetching(false);
      }
    },
    [id]
  );

  useEffect(() => {
    if (initialPageLoaded.current) return;
    getComments();

    initialPageLoaded.current = true;
  }, [getComments]);

  useEffect(() => {
    if (isReachedBottom && nextCursor) getComments(nextCursor);
  }, [isReachedBottom, nextCursor, getComments]);

  // useEffect(() => {
  //   if (initialPageLoaded.current) return;
  //   (async () => {
  //     try {
  //       setError(null);
  //       const data = await getPostComments(id);
  //       setComments(data);
  //     } catch (err) {
  //       setError(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   })();
  //   initialPageLoaded.current = true;
  // }, [id]);

  return {
    comments,
    isCommentsAvailable,
    isLoading,
    isFetching,
    error,
  };
}
