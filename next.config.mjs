import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repo = "freerecall-site";
const useBasePath = process.env.NEXT_PUBLIC_USE_BASE_PATH !== "false";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: useBasePath ? `/${repo}` : "",
  assetPrefix: useBasePath ? `/${repo}/` : "",
  trailingSlash: false,
  outputFileTracingRoot: __dirname,
  transpilePackages: ["motion"],
};

export default nextConfig;
