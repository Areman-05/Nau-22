import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "thumb.wikimedia.org",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/exposiciones", destination: "/programa", permanent: false },
      { source: "/exposiciones/:slug", destination: "/programa/:slug", permanent: false },
      { source: "/obras", destination: "/programa", permanent: false },
      { source: "/obras/:slug", destination: "/programa", permanent: false },
      { source: "/carrito", destination: "/", permanent: false },
      { source: "/checkout", destination: "/", permanent: false },
      { source: "/visitar", destination: "/info", permanent: false },
      { source: "/la-nau", destination: "/info", permanent: false },
    ];
  },
};

export default nextConfig;
