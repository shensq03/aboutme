/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // 匹配仓库名，关键配置
  basePath: "/aboutme",
  trailingSlash: true,
  images: { unoptimized: true }
}

export default nextConfig