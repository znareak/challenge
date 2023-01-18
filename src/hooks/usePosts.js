import { useState, useEffect } from "react";
import { getPosts } from "../helpers/api";

export default function usePosts() {
  // This state could be managed by react-query or swc of vercel
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isPostsAvailable = posts.length > 0;

  useEffect(() => {
    (async () => {
      try {
        setError(null);
        const res = await getPosts();
        setPosts(res?.items || []);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return {
    posts,
    isLoading,
    error,
    isPostsAvailable,
  };
}
