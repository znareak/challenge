import { useState, useEffect } from "react";

const usePageBottom = ({ isLoading, node }) => {
  const [reachedBottom, setReachedBottom] = useState(false);

  useEffect(() => {
    if (isLoading) return;
    const node = document.getElementById("loadmore");

    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio <= 0.5) return setReachedBottom(false);
      setReachedBottom(true);
    });
    intersectionObserver.observe(node);
    return () => intersectionObserver.unobserve(node);
  }, [isLoading, node]);

  return reachedBottom;
};

export default usePageBottom;
