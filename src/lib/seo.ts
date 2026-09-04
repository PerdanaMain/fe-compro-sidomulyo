import { SITE_CONFIG } from "./config";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": SITE_CONFIG.fullName,
    "image": `${SITE_CONFIG.url}/images/hero-bg.jpg`,
    "@id": SITE_CONFIG.url,
    "url": SITE_CONFIG.url,
    "telephone": SITE_CONFIG.phone,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SITE_CONFIG.address.street,
      "addressLocality": SITE_CONFIG.address.city,
      "addressRegion": SITE_CONFIG.address.province,
      "postalCode": SITE_CONFIG.address.postalCode,
      "addressCountry": SITE_CONFIG.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": SITE_CONFIG.geo.latitude,
      "longitude": SITE_CONFIG.geo.longitude
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.instagram.com/sidomuljo.karoseri",
      "https://www.facebook.com/sidomuljokaroseri"
    ]
  };
}
