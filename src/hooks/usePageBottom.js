import { useState, useEffect } from "react";

const usePageBottom = ({ isLoading, isFetching, node }) => {
  const [reachedBottom, setReachedBottom] = useState(false);

  useEffect(() => {
    if (isLoading || isFetching) return;
    const node = document.getElementById("loadmore");

    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio <= 0.5) return setReachedBottom(false);
      setReachedBottom(true);
    });
    intersectionObserver.observe(node);
    return () => intersectionObserver.unobserve(node);
  }, [isLoading, isFetching, node]);

  return reachedBottom;
};

export default usePageBottom;
