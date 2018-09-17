const express = require('express');
const morgan = require('morgan');
const { json } = require('body-parser');

const app = express();

app.use(morgan('combined'));

app.all('/mirror', (req, res) => {
    const response = {
        headers: {
            request: req.headers,
            response: res.headers
        },
        query: req.query,
        params: req.params,
        body: req.body
    };

    console.log(JSON.stringify(response));

    res.json(response);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started listening on port ${port}`);
});
