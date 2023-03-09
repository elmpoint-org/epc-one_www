const isDev = process.env.NODE_ENV === 'development';

const api = isDev ? 'http://localhost:3000' : 'https://api.elmpoint.xyz';

export { isDev, api };
