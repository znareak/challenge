import { useState, useEffect, useRef } from "react";
import { getPostComments } from "../lensQueries/getPostComments";

export default function useComments(id) {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);
  const isCommentsAvailable = comments.length > 0;
  const initialPageLoaded = useRef(false);

  useEffect(() => {
    if (initialPageLoaded.current) return;
    (async () => {
      try {
        setError(null);
        const data = await getPostComments(id);
        setComments(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
    initialPageLoaded.current = true;
  }, [id]);

  return {
    comments,
    isCommentsAvailable,
    isLoading,
    error,
  };
}
