import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

export default function SEO({ title }) {
  const { pathname } = useLocation();

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href={pathname} />
    </Helmet>
  );
}
