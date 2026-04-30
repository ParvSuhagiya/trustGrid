/**
 * useSEO — sets document.title and meta description dynamically per route.
 * @param {string} title       Page title (will be appended with " | TrustGrid")
 * @param {string} description Meta description for the page
 */
import { useEffect } from 'react';

const SITE_NAME = 'TrustGrid';

export default function useSEO({ title, description }) {
  useEffect(() => {
    // Update <title>
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    if (description) metaDesc.setAttribute('content', description);

    // Update OG title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', document.title);

    // Update OG description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && description) ogDesc.setAttribute('content', description);
  }, [title, description]);
}
