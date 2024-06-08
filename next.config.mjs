import { join } from 'node:path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [join(process.cwd(), './src/shared/styles')],
    prependData: `@import "~#styles/mixins.scss";`,
  }
}

export default nextConfig
