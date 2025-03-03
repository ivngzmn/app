const millionLint = process.env.USE_MILLION_LINT ? require("@million/lint").next() : (config) => config;

const interests = [
  "javascript",
  "python",
  "java",
  "typescript",
  "angular",
  "csharp",
  "cpp",
  "php",
  "c",
  "ruby",
  "ai",
  "ml",
  "react",
  "golang",
  "rust",
  "svelte",
  "vue",
  "kubernetes",
  "clojure",
  "kotlin",
  "android",
];

/** @type {import('next').NextConfig} */
module.exports = millionLint({
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  experimental: {
    instrumentationHook: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.github.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/user/:username/highlights",
        destination: "/user/:username?tab=highlights",
        permanent: true,
      },
      {
        source: "/user/:username/contributions",
        destination: "/user/:username?tab=contributions",
        permanent: true,
      },
      {
        source: "/user/:username/recommendations",
        destination: "/user/:username?tab=recommendations",
        permanent: true,
      },
      {
        source: "/user/:username/requests",
        destination: "/user/:username?tab=requests",
        permanent: true,
      },
      {
        source: "/lists/:listId",
        destination: "/lists/:listId/overview",
        permanent: true,
      },
      {
        source: "/lists/:listId/contributors",
        destination: "/lists/:listId/overview",
        permanent: true,
      },
      {
        source: "/hub/lists/find",
        destination: "/",
        permanent: true,
      },
      {
        source: "/hub/lists/new",
        destination: "/",
        permanent: true,
      },
      {
        source: "/hub/lists",
        destination: "/",
        permanent: true,
      },
      {
        source: "/hub/insights/:insightId/accept",
        destination: "/",
        permanent: true,
      },
      {
        source: "/hub/insights/:insightId/edit",
        destination: "/",
        permanent: true,
      },
      {
        source: "/hub/insights",
        destination: "/",
        permanent: true,
      },
      {
        source: "/hub/insights/new",
        destination: "/workspaces/new",
        permanent: true,
      },
      ...interests.map((interest) => {
        return {
          source: `/${interest}/:tool(dashboard|reports|contributors|activity)`,
          destination: `/explore/topic/${interest}/:tool`,
          permanent: true,
        };
      }),
      {
        source: "/star-search/waitlist",
        destination: "/star-search",
        permanent: true,
      },
      {
        source: "/user/:user((?!settings|notifications$).*)",
        destination: "/u/:user",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/explore/topic/:topic",
        destination: "/explore/topic/:topic/dashboard/filter/recent",
      },
    ];
  },
});

// Injected content via Sentry wizard below

const { withSentryConfig } = require("@sentry/nextjs");
module.exports = millionLint(
  withSentryConfig(
    module.exports,
    {
      // For all available options, see:
      // https://github.com/getsentry/sentry-webpack-plugin#options

      // Suppresses source map uploading logs during build
      silent: true,
      org: "opensauced",
      project: process.env.NODE_ENV === "production" ? "app-opensauced" : "beta-app-opensauced",
    },
    {
      // For all available options, see:
      // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

      // Upload a larger set of source maps for prettier stack traces (increases build time)
      widenClientFileUpload: true,
      // Transpiles SDK to be compatible with IE11 (increases bundle size)
      transpileClientSDK: false,
      // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
      tunnelRoute: "/monitoring",
      // Hides source maps from generated client bundles
      hideSourceMaps: true,
      // Automatically tree-shake Sentry logger statements to reduce bundle size
      disableLogger: true,
    }
  )
);
