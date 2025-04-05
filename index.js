const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (request, response)=>{
    response.send('Hei Maailma!');
});

app.listen(PORT, () => {
    console.log(`Palvelin päällä portissa ${PORT}`);
});