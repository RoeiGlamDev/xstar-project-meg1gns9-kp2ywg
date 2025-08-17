export default {
  reactStrictMode: true,
  images: {
    domains: []
},
  experimental: {
    optimizeCss: true
},
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
});
    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
},
          {
            key: 'X-Frame-Options',
            value: 'DENY'
},
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
},
        ]
},
    ];
  }
};