const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');

// Load configuration
dotenv.config();

// Connect to Database
mongoose.connect(process.env.DB_URL, { 
    useNewUrlParser: true,
    useCreateIndex: true
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (e) => {
    console.error(`🙅🏻‍♂️ ${e.message}`);
});

// Set port
app.set('port', process.env.PORT || 3000);

// Start the server
app.listen(app.get('port'), () => { 
    console.log(`Server started on port ${app.get('port')}`) 
});