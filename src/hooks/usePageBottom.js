import { useState, useEffect } from "react";

const usePageBottom = ({ isLoading, isFetching }) => {
  const [reachedBottom, setReachedBottom] = useState(false);

  useEffect(() => {
    const node = document.getElementById("loadmore");
    if (isLoading || isFetching || !node) return;

    const intersectionObserver = new IntersectionObserver((entries) => {
      setReachedBottom(entries[0].isIntersecting);
    });
    intersectionObserver.observe(node);
    return () => intersectionObserver.unobserve(node);
  }, [isLoading, isFetching]);

  return reachedBottom;
};

export default usePageBottom;
