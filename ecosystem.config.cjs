module.exports = {
  apps: [
    {
      name: "migrasi",
      cwd: __dirname,
      script: "app.js",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
