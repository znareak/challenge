import { useState, useEffect, useRef } from "react";
import { getPost } from "../lensQueries/getPost";

export default function usePost(id) {
  const initialPageLoaded = useRef(false);
  const [post, setPost] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (initialPageLoaded.current) return;
    (async () => {
      try {
        setError(null);
        const data = await getPost(id);
        setPost(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();

    initialPageLoaded.current = true;
  }, [id]);

  return {
    post,
    isLoading,
    error,
  };
}
