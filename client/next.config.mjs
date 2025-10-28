// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["avatars.githubusercontent.com"],
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ Required for static export on Render
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};

export default nextConfig;
