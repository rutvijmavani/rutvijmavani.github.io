/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // ensures static export
    basePath: '',
    assetPrefix: '',
    images: {
        unoptimized: true, // disables Next.js image optimization (required for static export)
    }
};
export default nextConfig;
