/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/:path*', 
            destination: 'https://zenspire-f5ec6.et.r.appspot.com/api/v1/:path*', 
          },
        ];
      },
};

export default nextConfig;
