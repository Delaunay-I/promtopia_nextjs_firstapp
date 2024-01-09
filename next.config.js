/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
          pathname: '**',
        },
      ],
      },
}

module.exports = nextConfig


// const nextConfig = {
//     experimental: {
//       appDir: true,
//       serverComponentsExternalPackages: ["mongoose"],
//     },
//     images: {
//       domains: ['lh3.googleusercontent.com'],
//     },
//     webpack(config) {
//       config.experiments = {
//         ...config.experiments,
//         topLevelAwait: true,
//       }
//       return config
//     }
//   }