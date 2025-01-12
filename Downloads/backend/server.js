const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware para permitir CORS
app.use(cors());

// Rota para obter gatinhos aleatórios
app.get('/api/cats', async (req, res) => {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/images/search');
    const catData = response.data;
    res.json({ cat: catData[0].url });
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    res.status(500).json({ error: 'Não foi possível obter dados da API' });
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
