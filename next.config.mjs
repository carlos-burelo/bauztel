import { join } from 'node:path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [join(process.cwd(), './src/shared/styles')],
    prependData: `@import "~#styles/mixins.scss";`,
  }
}

export default nextConfig
