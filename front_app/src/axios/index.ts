/**
 * @file Rest client.
 */

import { default as axiosImport } from 'axios'

export const axios = () => {
  const defaultOptions = {
    baseURL: import.meta.env.VITE_URL_API,
  }

  const api = axiosImport.create(defaultOptions)

  return {
    get: (url: string, options = {}) => api.get(url, { ...defaultOptions, ...options }),
    post: (url: string, data?: object, options = {}) => api.post(url, data, { ...defaultOptions, ...options }),
    delete: (url: string, options = {}) => api.delete(url, { ...defaultOptions, ...options }),
  }
}

export default axios()
