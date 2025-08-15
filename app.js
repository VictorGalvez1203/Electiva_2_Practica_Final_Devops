const express = require('express');
const app = express();
const PORT = 3008;

app.get('/', (req, res) => {
    res.send('Hola Mundo desde Express ITLA, por victor Galvez/2023-1836 desplegado en Render, Practica Final Devops');
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
    });
}

module.exports = app;

