require('dotenv').config()

module.exports = {
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  PORT: process.env.PORT
}
