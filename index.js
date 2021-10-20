const express = require('express');
const cors = require('cors')
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('wow!!! hello from node second code');
})

const users = [
    { id: 0, name: 'Shabana', email: 'shabana@gmail.com', phone:'0178888888888'},
    { id: 1, name: 'Shabnr', email: 'Shabnr@gmail.com', phone:'0178888888888'},
    { id: 2, name: 'Srabonti', email: 'Srabonti@gmail.com', phone:'0178888888888'},
    { id: 3, name: 'Sonia', email: 'Sonia@gmail.com', phone:'0178888888888'},
    { id: 4, name: 'Susmita', email: 'Susmita@gmail.com', phone:'0178888888888'}
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    } else {
        res.send(users);
    }
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send('post got hitted');
    res.json(newUser);
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango','apple', 'banana']);
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('tok marka ammm');
})
























app.listen(port, () => {
    console.log('listen to port',port);
})