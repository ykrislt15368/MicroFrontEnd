/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options;
    config.experiments = {
      topLevelAwait: true,
      layers: true,
    };
    config.plugins.push(
      new NextFederationPlugin({
        name: 'child2',
        remotes: {
          shell: `shell@http://localhost:8080/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        shared: {},
        exposes: {
          "./ChildApp2": "./src/pages/index.tsx",
          "./page2": "./src/pages/page2.tsx",
          // './pages-map': './pages-map.js',
        },
        extraOptions: {
          automaticAsyncBoundary: true,
          exposePages: true
        }
      })
    );
    return config;
  }
}

module.exports = nextConfig
