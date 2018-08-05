// Module dependencies
import express from 'express';
import helmet from 'helmet';
import path from 'path';

import webpack from 'webpack';
import webpackConfig from '../../webpack.config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';

const app = express();


// Configuration
app.disable('x-powered-by');
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);


// Middleware
app.use(helmet());
app.use(express.static(path.join(__dirname, '../../dist')));
app.use(webpackDevMiddleware(webpack(webpackConfig)));


// Test route
app.get('/test', (req, res) => {
  res.json({ message: 'test' });
})


// Main
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});


// Export app
module.exports = app.listen(
  app.get('port'),
  () => console.log(`Running on localhost:${app.get('port')}`)
);
