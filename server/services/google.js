import { google } from 'googleapis';

const googleConfig = {
    clientId: process.env.GOOGLE_CLIENT_ID, // e.g. asdfghjkljhgfdsghjk.apps.googleusercontent.com
    clientSecret: process.env.GOOGLE_CLIENT_SECRET, // e.g. _ASDFA%DFASDFASDFASD#FAD-
    redirect: 'https://your-website.com/google-auth', // this must match your google api settings
};

function createConnection () {
    return new google.auth.OAuth2(...googleConfig);
}