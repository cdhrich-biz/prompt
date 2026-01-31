import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // GitHub Pages(static) 배포를 위한 설정
  // - Pages는 프로젝트 페이지로 서빙되므로 basePath(/prompt)가 필요
  // - Next export를 위해 output: "export" 사용
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
