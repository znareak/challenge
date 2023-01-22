import React from "react";

export default function LoadMore({ isLoading, isFetching }) {
  if (isLoading || isFetching) return null;
  
  return <div id="loadmore" data-desc="Infinite Scroll target" />;
}
