/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const ESLintPlugin = require('eslint-webpack-plugin')

      config.plugins.push(new ESLintPlugin({
        extensions: ['js', 'ts', 'tsx'],
        failOnWarning: true
      }))
    }
    return config
  },
  reactStrictMode: true
}

module.exports = nextConfig
