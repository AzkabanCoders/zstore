/* eslint-disable no-console, no-use-before-define */
'use strict';


import Express from 'express';
import webpack from 'webpack';
import React from 'react';
import { renderToString } from 'react-dom/server';
import webpackDevMiddleware from 'webpack-dev-middleware';
// import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../webpack.config';

const app = new Express();
const port = 3002;

// set up webpack hot module.
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

// app.use(webpackHotMiddleware(compiler));
app.use(handleRender);

function handleRender(req, res) {
  const html = renderToString(
    <h1>Dot</h1>
  );
  res.send(renderFullPage(html));
}
// TODO: get from file
function renderFullPage(html) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="MobileOptimized" content="320">
        <meta name="HandheldFriendly" content="True">
        <meta http-equiv="cleartype" content="on">
        <meta charset="ISO-8859-1">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="mobile-web-app-title" content="Zstore - Your shop anywhere.">
        <meta name="theme-color" content="#00ACFF">
        <title>Zstore - Your shop anywhere.</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="style/app.css">
      </head>
      <body>
        <div id="app">${html}</div>
        <!--<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=fetch,Intl.~locale.en,Intl.~locale.pt"></script>-->
        <script src="vendor.js"></script>
        <script src="app.js"></script>
      </body>
    </html>
  `;
}

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`Zstore is running on http://localhost:${port}/`);
  }
});
