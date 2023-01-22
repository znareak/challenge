import { useState, useEffect, useRef } from "react";
import { getUserProfile } from "../lensQueries/getUserProfile";
import { useNavigate } from "react-router-dom";

export default function useUser(id) {
  const initialPageLoaded = useRef(false);
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (initialPageLoaded.current) return;
    (async () => {
      try {
        setError(null);
        const data = await getUserProfile(id);
        if (!data) {
          return navigate("/404");
        }
        setUser(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();

    initialPageLoaded.current = true;
  }, [id, navigate]);

  return {
    user,
    isLoading,
    error,
  };
}
