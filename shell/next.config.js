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
        name: 'shell',
        remotes: {
          child1: `child1@http://localhost:8081/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          child2: `child2@http://localhost:8082/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          //child3: `child3@http://localhost:8083/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        shared: {},
        exposes: {},
        extraOptions: {
          //exposePages: true
        }
      })
    );
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/child1/:path*',
        destination: '/child1/:path*', // Assuming /child1 is the path for the child1 app
      },
      {
        source: '/child2/:path*',
        destination: '/child2/:path*', // Assuming /child2 is the path for the child2 app
      },
      {
      // Rewrite the destination to the remote path in the child2 app for the /page2 route
      source: '/page2/:path*',
      destination: '/child2/page2/:path*', // Assuming /child2 is the path for the child2 app
    },
    ];
  },
}

module.exports = nextConfig
