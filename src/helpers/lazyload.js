export default function lazyLoad(image) {
  function fn(entrie, observer) {
    const element = entrie[0]?.target;
    const source = element.getAttribute("data-src");
    if (entrie[0]?.isIntersecting && source) {
      element.src = source;

      element.addEventListener("load", (e) => {
        element.classList.add("loaded");
        observer.unobserve(e.target);
        element.removeAttribute("data-src");
      });
    }
  }

  if ("IntersectionObserver" in window) {
    const InObserver = new IntersectionObserver(fn);
    InObserver.observe(image);
  } else {
    console.error("IntersectionObserver no implemented this browser");
  }
}
