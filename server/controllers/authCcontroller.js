const { OAuth2Client } = require('google-auth-library');
const authConfig = require('../config/authConfig');
const User = require('../models/User');

const client = new OAuth2Client(authConfig.googleClientId);

async function verifyGoogleToken(token) {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: authConfig.googleClientId,
  });
  const payload = ticket.getPayload();
  return payload;
}

exports.googleLogin = async (req, res) => {
  try {
    const { idToken } = req.body;
    const payload = await verifyGoogleToken(idToken);
    
    let user = await User.findOne({ googleId: payload.sub });
    if (!user) {
      user = new User({
        googleId: payload.sub,
        name: payload.name,
        email: payload.email,
      });
      await user.save();
    }

    // You can use any JWT library to generate a token and send it back to the client.
    const token = generateJWTToken(user._id);

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Failed to authenticate with Google' });
  }
};
