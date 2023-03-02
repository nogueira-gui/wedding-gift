/** @type {import('next').NextConfig} */

const { parsed: localEnv } = require('dotenv').config()
const nextConfig = {
  reactStrictMode: true,
  env: {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
  }
}

module.exports = nextConfig
