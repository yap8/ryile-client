import axios from 'axios'
import config from './config'

const api = axios.create({
  baseURL: config.url[config.current],
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
})

export { api }
