const express = require('express');

const app = express();
const path = require('path');

app.use(express.static('dist'));

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(process.env.PORT || 3045, () => {
    console.log(process.env.NODE_ENV || 3045);
});
