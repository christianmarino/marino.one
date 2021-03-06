module.exports = {
  siteTitle: 'Marino.one', // <title>
  manifestName: 'Resume',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/`, // This path is subpath of your hosting https://domain/portfolio
  firstName: 'Christian',
  lastName: ' Marino',
  // social
  socialLinks: [
    {
      icon: 'fas fa-envelope',
      name: 'Email',
      url: 'mailto:contact@marino.one',
    },
    {
      icon: 'fab fa-keybase',
      name: 'Keybase',
      url: 'https://keybase.io/christianmarino',
    },
    {
      icon: 'fab fa-github',
      name: 'Github',
      url: 'https://github.com/ChristianMarino',
    },
    {
      icon: 'fab fa-linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/christian-marino-480117145/',
    },
    {
      icon: 'fa fa-key',
      name: 'GPG Key',
      url: 'https://raw.githubusercontent.com/christianmarino/marino.one/master/public/ChristianMarino.asc',
    },
  ],
  email: 'contact@marino.one',
  address: 'Costa Mesa, CA',
};
