const BASE_URL = process.env.NODE_ENV === 'production'
  ? 'http://your-production-api-url.com/api/'
  : 'http://localhost:3000/api/';

export { BASE_URL };
