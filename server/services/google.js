const { google } = require('googleapis');

const googleConfig = {
    clientId: process.env.GOOGLE_CLIENT_ID, // e.g. asdfghjkljhgfdsghjk.apps.googleusercontent.com
    clientSecret: process.env.GOOGLE_CLIENT_SECRET, // e.g. _ASDFA%DFASDFASDFASD#FAD-
    redirect: `postmessage`, // this must match your google api settings
};


/**
 * This scope tells google what information we want to request.
 */
const defaultScope = [
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/userinfo.email',
];

function createConnection () {
    return new google.auth.OAuth2(
        googleConfig.clientId,
        googleConfig.clientSecret,
        googleConfig.redirect
    );
}

/**
 * Get a url which will open the google sign-in page and request access to the scope provided (such as calendar events).
 */
function getConnectionUrl(auth) {
    return auth.generateAuthUrl({
      access_type: 'offline',
      prompt: 'consent', // access type and approval prompt will force a new refresh token to be made each time signs in
      scope: defaultScope
    });
}

/**
 * Create the google url to be sent to the client.
 */
exports.getGoogleUrl = () => {
    const auth = createConnection(); 
    const url = getConnectionUrl(auth);
    return url;
}


function getGooglePlusApi(auth) {
    return google.plus({ version: 'v1', auth });
}


function extractUser(data) {
    const email = data.emails[0].value;
    const googleId = data.id;
    const name = `${data.name.givenName} ${data.name.familyName}`;
    const avatar = data.image.url;

    return { email, name, googleId, avatar };
}

/**
 * Part 2: Take the "code" parameter which Google gives us once when the user logs in, then get the user's email and id.
 */
exports.getGoogleAccountFromCode = async (code) => {
    const auth = createConnection();
    const data = await auth.getToken(code);
    const tokens = data.tokens;
    auth.setCredentials(tokens);
    const plus = getGooglePlusApi(auth);
    const user = await plus.people.get({ userId: 'me' });

    return {
        user: extractUser(user.data),
        tokens
    };
}