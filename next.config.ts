import withPWA from "next-pwa";

const config = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
})({
  experimental: {
    // No need for appDir anymore
  },
  turbopack: {},
});

export default config;
