module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0f4ffd7605402b71405b0e5e7aaf0c38'),
  },
});
