module.exports = {
  __experimentalThemes: [
    { resolve: '@weknow/gatsby-theme-drupal-boina', options: { root: __dirname } }
  ],
  siteMetadata: {
    title: `${process.env.SITE_NAME}`,
    domain: `${process.env.PROJECT_URL}`
  },
  plugins: [
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-embed-video',
          '@weknow/gatsby-remark-drupal',
          '@weknow/gatsby-remark-twitter',
          'gatsby-remark-embed-video',
          'gatsby-remark-responsive-iframe',
          {
            resolve: 'gatsby-remark-embed-gist',
            options: {
              includeDefaultCss: true
            }
          }
        ]
      }
    }
  ]
};
