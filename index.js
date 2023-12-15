const app = require('./app');
const db = require('./config/db');
const UserModel = require('./model/user.model');
const TodoModel = require('./model/todo.model');


const port = 2005;

app.get('/',(req,res) => {
    res.send('Halooo Christiaa, lagi apa sayangggkuu???')
})

app.listen(port,()=> {
    console.log(`Server Listening on Port http://localhost:${port}`);
})