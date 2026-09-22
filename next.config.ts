import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/cases/integracao-sap-crm", destination: "/cases/integracao-crm-sap", permanent: true },
      { source: "/cases/automacao-de-compras", destination: "/cases/portal-fornecedores-sap", permanent: true },
      { source: "/cases/projeto-ams", destination: "/cases/ams-sap", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
