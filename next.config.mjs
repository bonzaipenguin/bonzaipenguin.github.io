const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/bonzaipenguin.github.io/' : '',
  basePath: isProd ? '/bonzaipenguin.github.io' : '',
  output: 'export'
};

export default nextConfig;