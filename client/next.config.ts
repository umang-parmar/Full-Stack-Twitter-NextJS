import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
  domains:["avatars.githubusercontent.com"]
  }
};

export default nextConfig;


// why images : Runtime Error: Image with src "https://avatars.githubusercontent.com/u/255396886?v=4" is missing required "width" property.