import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/doctors/rashanthi-perera",
        destination: "/doctors/rashanthie-perera",
        permanent: true,
      },
      {
        source: "/doctors/sanjaya-walawe-nayaka",
        destination: "/doctors/sanjaya-walawenayaka",
        permanent: true,
      },
      {
        source: "/doctors/v-g-abeywickrama",
        destination: "/doctors/vg-abeywickrama",
        permanent: true,
      },
      {
        source: "/doctors/a-w-p-manjula",
        destination: "/doctors/awp-manjula",
        permanent: true,
      },
      {
        source: "/doctors/tharaka-nanayakkara",
        destination: "/doctors/tharaka-s-nanayakkara",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
