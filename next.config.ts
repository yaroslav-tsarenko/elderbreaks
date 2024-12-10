import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        config.infrastructureLogging = {
            level: 'error', // Suppresses non-critical warnings
        };

        return config;
    },
};

export default nextConfig;
