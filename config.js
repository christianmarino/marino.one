module.exports = {
  siteTitle: 'Marino.one', // <title>
  manifestName: 'Resume',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/marino.one/`, // This path is subpath of your hosting https://domain/portfolio
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
      icon: 'fa fa-keybase',
      name: 'Keybase',
      url: 'https://keybase.io/christianmarino',
    },
    {
      icon: 'fa fa-github',
      name: 'Github',
      url: 'https://github.com/ChristianMarino',
    },
    {
      icon: 'fa fa-key',
      name: 'GPG Key',
      url: 'https://marino.one/ChristianMarino.asc',
    },
  ],
  email: 'contact@marino.one',
  address: 'Costa Mesa, CA',
};
