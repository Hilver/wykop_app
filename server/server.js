const app = require('./app');

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('App is already hosted on http://localhost:' + port))
