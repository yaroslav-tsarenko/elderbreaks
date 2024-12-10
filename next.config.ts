import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        // Suppress non-critical warnings
        config.infrastructureLogging = {
            level: 'error',
        };

        return config;
    },

    // Disable output file tracing to avoid file locking issues
    outputFileTracing: false,
};

export default nextConfig;
