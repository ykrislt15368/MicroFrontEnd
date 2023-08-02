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
        name: 'child1',
        remotes: {},
        filename: 'static/chunks/remoteEntry.js',
        shared: {
          // react: { singleton: true }, 'react-dom': { singleton: true }
        },
        exposes: {
          './card': './src/components/Card',
          './header': './src/components/Header',
          './blog': './src/pages/blog/index',
          './ChildApp1':'./src/pages/index.tsx'
        },
        extraOptions: {
          exposePages: true
        }
      })
    );
    return config;
  }
}

module.exports = nextConfig
