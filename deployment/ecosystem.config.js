module.exports = {
  apps : [{
    name: 'movie-analyst-ui',
    script: 'server.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production'
    },
    // env_production: {
    //   APP_PORT: 8080,
    //   API_URL: 'http://localhost:3000',
    // }
  }]
};