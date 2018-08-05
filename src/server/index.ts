// Module dependencies
import * as express from 'express';
import * as helmet from 'helmet';
import * as path from 'path';
import wds from './wds';

const app = express();
wds(app);


// Configuration
app.disable('x-powered-by');
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);


// Middleware
app.use(helmet());
app.use(express.static(path.join(__dirname, '../../dist')));


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
