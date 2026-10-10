import { useLocation } from 'react-router-dom';
import { buildJsonLd, getRouteMeta } from '../config/seo';
import { usePageMeta } from '../hooks/usePageMeta';

/** Mount once inside <Router>: applies the metadata for the current route. */
export const RouteSEO: React.FC = () => {
  const { pathname } = useLocation();
  const meta = getRouteMeta(pathname);
  usePageMeta(meta, buildJsonLd(pathname, meta));
  return null;
};
