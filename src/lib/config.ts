export const siteConfig = {
    name: "Yehia Mohammed",
    url: "https://yehia-mohammed.dev", // Replace with your actual domain
    ogImage: "/images/og-image.png", // Path to your open graph image
    description:
      "موقع Yehia Mohammed لمشاركة المعارف والتجارب في البرمجة، تطوير الواجهات الأمامية، تنظيم الوقت، وتطوير الذات.",
    links: {
      youtube: "https://www.youtube.com/@yehia-official",
      instagram: "https://instagram.com",
      telegram: "https://telegram.org",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
    },
    structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Yehia Mohammed',
        url: 'https://yehia-mohammed.dev', // Replace with your actual domain
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://yehia-mohammed.dev/search?q={search_term_string}', // Replace with your actual domain
          'query-input': 'required name=search_term_string',
        },
    },
  };
  
  export type SiteConfig = typeof siteConfig;
  