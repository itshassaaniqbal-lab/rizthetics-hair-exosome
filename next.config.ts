import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repositoryBasePath = "/rizthetics-hair-exosome";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export" as const,
        basePath: repositoryBasePath,
        assetPrefix: repositoryBasePath,
        trailingSlash: true,
        images: { unoptimized: true },
        // The static Pages build does not include the Cloudflare-only worker/DB
        // entrypoints, whose runtime types are supplied by the Sites build.
        typescript: { ignoreBuildErrors: true },
      }
    : {}),
};

export default nextConfig;

