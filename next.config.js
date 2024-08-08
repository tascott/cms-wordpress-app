if(!process.env.WORDPRESS_API_URL) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}

const wordPressUrl = process.env.WORDPRESS_API_URL.startsWith('http')
  ? process.env.WORDPRESS_API_URL
  : `http://${process.env.WORDPRESS_API_URL}`;

const {protocol,hostname,port} = new URL(wordPressUrl);

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: protocol.slice(0,-1),
        hostname,
        port,
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '*.gravatar.com',
      },
      {
        protocol: 'https',
        hostname: '*.gravatar.com',
      },
    ],
  },
};