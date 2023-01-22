import { useState, useEffect, useRef } from "react";
import { getPost } from "../lensQueries/getPost";
import { useNavigate } from "react-router-dom";

export default function usePost(id) {
  const initialPageLoaded = useRef(false);
  const [post, setPost] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (initialPageLoaded.current) return;
    (async () => {
      try {
        setError(null);
        const data = await getPost(id);
        if (!data) {
          return navigate("/404");
        }
        setPost(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();

    initialPageLoaded.current = true;
  }, [id, navigate]);

  return {
    post,
    isLoading,
    error,
  };
}
