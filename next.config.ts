import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "github.com"
            }
        ]
    }
};

export default nextConfig;
