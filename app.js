const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const campaignRouter = require('./router/campaign.router');
const uploadRouter = require('./router/upload.router');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use('/api', campaignRouter);
app.use('/api', uploadRouter);


global.__basedir = __dirname;
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});