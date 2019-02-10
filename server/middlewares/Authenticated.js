const passport = require('passport')
const { ExtractJwt, Strategy } = require('passport-jwt')

const User = require('./../models/User')

const passportMiddleware = () => {
  const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.TOKEN_SECRET
  }

  return passport.use(
    new Strategy(options, async (payload, done) => {
      const user = await User.findById(payload.user_id).select('-password')
      return done(null, user || false)
    })
  )
}

exports.middleware = () => passportMiddleware().authenticate('jwt', { session: false })
