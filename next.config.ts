import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  env: {
    DATABASE_URL: "file:./prisma/dev.db",
  },
};

export default nextConfig;
