module.exports = {
    google: {
      clientID: process.env.GOOGLE_CLIENT_ID, // Replace with your Google OAuth2 client ID
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, // Replace with your Google OAuth2 client secret
      callbackURL: 'http://localhost:5000/auth/google/callback', // Replace with your Google OAuth2 callback URL
    },
  };
  