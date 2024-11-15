import app from './src/inbound/rest/router.js';
import { initializeFirebaseApp } from './src/utils/serviceAccountKey.js';

const port = process.env.PORT || 8080;
const host = process.env.HOST || '127.0.0.1';

app.listen(port, host, () => {
  initializeFirebaseApp();
  console.log(`App listening on port ${port}!`);
  console.log(`Environment ${process.env.NODE_ENV}!`);
});
