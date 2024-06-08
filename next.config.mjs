import {join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = dirname(__filename); 

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // pageExtensions: ['api.ts'],
  sassOptions: {
    includePaths: [join(__dirname, 'src', 'styles')],
  },
  compiler: {
    styledComponents: {
      ssr: true,
      minify: true
    }
  }
};

export default nextConfig;
