/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: async (config, { dev }) => {
    if (dev) {
      const ESLintPlugin = (await import('eslint-webpack-plugin')).default

      config.plugins.push(new ESLintPlugin({
        extensions: ['js', 'ts', 'tsx'],
        failOnWarning: true
      }))
    }
    return config
  },
  reactStrictMode: true
}

export default nextConfig
