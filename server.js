const express = require('express');
let users = require('./routes/users');

const app = express();

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/about', (req, res) => res.send('about'));
//Define Routes
app.use('/api/users', users);
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('server started on PORT ' + PORT));
