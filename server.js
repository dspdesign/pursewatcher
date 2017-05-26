const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev');

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'index.html'))
);

app.listen(port, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.info(`==> 🚧  Webpack development
            server listening on port ${port}`);
    }
});
