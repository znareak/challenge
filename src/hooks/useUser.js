import { useState, useEffect, useRef } from "react";
import { getUserProfile } from "../lensQueries/getUserProfile";

export default function useUser(id) {
  const initialPageLoaded = useRef(false);
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (initialPageLoaded.current) return;
    (async () => {
      try {
        setError(null);
        const data = await getUserProfile(id);
        setUser(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();

    initialPageLoaded.current = true;
  }, [id]);

  return {
    user,
    isLoading,
    error,
  };
}
