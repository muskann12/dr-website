/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://dryousufmemon.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  autoLastmod: true,
  
  // Exclude specific paths
  exclude: [
    '/admin/*',
    '/404',
    '/500',
    '/api/*'
  ],
  
  // Transform function for each page
  transform: (config, path) => {
    // Custom priority for important pages
    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : config.changefreq,
      priority: path === '/' ? 1.0 : path.startsWith('/services') ? 0.9 : config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
  
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api'],
      },
    ],
  },
    additionalPaths: async (config) => [
      await config.transform(config, '/treatments/varicose-veins-latest'),
    ],
  }