/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DATABASE_URI: process.env.DATABASE_URL,
  },
  experimental: {
    instrumentationHook: true,
  },
  headers: async () => {
    return [
      {
        source: "/api/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-Requested-With, Content-Type, Accept",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
