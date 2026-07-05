/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 静态打包适配GitHub Pages
  images: {
    unoptimized: true // 解决图片路径404问题
  }
}

module.exports = nextConfig