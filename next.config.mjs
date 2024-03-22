/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'simple-custom-next-auth.vercel.app'
        }]
    }
};

export default nextConfig;
