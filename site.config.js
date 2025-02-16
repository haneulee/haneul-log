const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Haneul",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "frontend developer & media designer",
    bio: `I am Haneul, a Frontend Developer with a decade of experience in web development, 
specializing in React, JavaScript, and user interface design. My work spans interactive web applications, 
video management systems, and large-scale dashboard solutions.

Currently, I am pursuing a Master's in Media Design at HEAD Genève, where I explore the intersection of 
technology, design, and interaction. My focus is on creating innovative digital experiences that blend 
technical expertise with artistic vision.`,
    email: "lovesky4294@gmail.com",
    linkedin: "hnlee",
    github: "haneulee",
    instagram: "merci.bien",
  },
  projects: [],
  // blog setting (required)
  blog: {
    title: "haneul-log 👩🏻‍💻",
    description: "welcome to haneul-log 👩🏻‍💻!",
    scheme: "dark", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://haneul-log.vercel.app",
  since: "", // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
