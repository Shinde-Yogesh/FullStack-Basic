import express from "express";
const app = express();

// app.get('/', (req, res) => {
//     res.send("Server is ready")
// })

// get the list of 5 jokes
app.get('/api/jokes',(req,res) =>{
    const jokes = [
        {
            id:1,
            title:'A Joke',
            content:'This is a joke'
        },
        {
            id:2,
            title:'Another Joke',
            content:'This is another joke'
        },
        {
            id:3,
            title:'third Joke',
            content:'This is third joke'
        },
        {
            id:4,
            title:'four Joke',
            content:'This is fout joke'
        },
        {
            id:5,
            title:'five Joke',
            content:'This is five joke'
        },
    ]
    res.send(jokes)
})



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
})