const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': 'Li Guang',
            'birthday': '98126',
            'gender': 'Male',
            'job': 'Developer'
            },
            {
              'id': 2,
              'image': 'https://placeimg.com/64/64/2',
              'name': 'Li Jin',
              'birthday': '9012',
              'gender': 'Male',
              'job': 'Engineer'
            },
            {
              'id': 3,
              'image': 'https://placeimg.com/64/64/3',
              'name': 'Indiago',
              'birthday': '8912',
              'gender': 'Male',
              'job': 'Manager'
            }  
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));