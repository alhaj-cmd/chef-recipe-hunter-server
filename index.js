const express = require("express");
const cors =require('cors');


const app = express();
app.use(cors());

const allFakeData = require("./fakeData.json");

app.get('/allData', (req, res) => {
    console.log('fake data')
    res.send(allFakeData);
})
app.get('/allData:id', (req, res) => {
   const id = req.params.id;
   console.log(id)
})

app.listen(5000, () => {
    console.log('server is running');
})