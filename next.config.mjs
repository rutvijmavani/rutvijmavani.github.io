/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // ensures static export
    basePath: '/rutvijmavani.github.io',
    assetPrefix: '/rutvijmavani.github.io/',
    images: {
        unoptimized: true, // disables Next.js image optimization (required for static export)
    }
};
export default nextConfig;
