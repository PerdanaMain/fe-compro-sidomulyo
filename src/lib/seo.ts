import { SITE_CONFIG } from "./config";
import { ServiceItem } from "@/data/services";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    "additionalType": "https://schema.org/AutoRepair",
    "name": SITE_CONFIG.fullName,
    "image": `${SITE_CONFIG.url}/images/hero-bg.png`,
    "@id": SITE_CONFIG.url,
    "url": SITE_CONFIG.url,
    "telephone": SITE_CONFIG.phone,
    "email": SITE_CONFIG.email,
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
    "hasMap": "https://maps.google.com/maps?q=-7.403257,112.568877&z=16",
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
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Sidoarjo"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Surabaya"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Gresik"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Pasuruan"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Malang"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Jawa Timur"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/sidomulyoabadhi",
      "https://facebook.com/sidomulyoabadhi",
      "https://youtube.com/@sidomulyoabadhi",
      "https://www.tiktok.com/@sidomulyoabadhi"
    ]
  };
}

export function generateServiceSchema(service: ServiceItem) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.fullDescription,
    "provider": {
      "@type": "AutoBodyShop",
      "name": SITE_CONFIG.name,
      "url": SITE_CONFIG.url
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Sidoarjo, Surabaya & Jawa Timur"
    },
    "serviceType": service.title
  };
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.item.startsWith("http") ? crumb.item : `${SITE_CONFIG.url}${crumb.item}`
    }))
  };
}


