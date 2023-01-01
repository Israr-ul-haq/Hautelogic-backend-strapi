module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dd4d4c5d4f10a02456570b4410041d19'),
  },
  
});

