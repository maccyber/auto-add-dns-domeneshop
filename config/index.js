module.exports = {
  rootDomain: process.env.ROOT_DOMAIN || 't-fk.no',
  domain: process.env.DOMAIN || 'http://www.domeneshop.no',
  loginUrl: process.env.LOGIN_URL || 'https://www.domeneshop.no/login',
  url: process.env.URL || 'https://www.domeneshop.no/admin?edit=dns&id=',
  id: process.env.ID || 100000,
  auth: {
    username: process.env.USERNAME || 'username@email.com',
    password: process.env.PASSWORD || 'password'
  }
}

