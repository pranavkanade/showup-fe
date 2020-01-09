import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

const BACKEND_URI_DEV = 'http://localhost:3001';

export const request = axios.create({
  baseURL: BACKEND_URI_DEV,
  timeout: 1000
});

export const generatePath = (template: string, params: any = {}) => {
  if (!template) return template;
  let result = template || '';
  for (let key in params) {
    result = result.replace(`:${key}?`, params[key]);
    result = result.replace(`:${key}`, params[key]);
  }
  return result;
};
