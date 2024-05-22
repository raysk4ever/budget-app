/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      ssr: true,
      minify: true
    }
  }
};

export default nextConfig;
