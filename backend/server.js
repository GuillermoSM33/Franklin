const express = require('express');
const mysql = require('mysql');
const WebSocket = require('ws');
const cors = require('cors'); // Importar el paquete CORS

const app = express();
const port = 3000;

// Aplicar el middleware CORS a todas las rutas
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'barco_iot'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conexión exitosa a la base de datos MySQL');
});

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Cliente conectado al WebSocket');

  const sendAllData = () => {
    const sqlQueries = [
      'SELECT * FROM sensor_lluvia',
      'SELECT * FROM sensor_temperatura',
      'SELECT * FROM sensor_temperaturahumedad',
      'SELECT * FROM giroscopio',
      'SELECT * FROM sensor_ultrasonico'
    ];

    const fetchData = () => {
      sqlQueries.forEach(query => {
        db.query(query, (err, result) => {
          if (err) throw err;
          ws.send(JSON.stringify({ route: query, data: result }));
        });
      });
    };

    const intervalId = setInterval(fetchData, 1000); 

    ws.on('close', () => {
      console.log('Cliente desconectado del WebSocket');
      clearInterval(intervalId);
    });
  };

  sendAllData();
});


app.get('/sensor_lluvia', (req, res) => {
  const sql = 'SELECT * FROM sensor_lluvia';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.get('/sensor_temperatura', (req, res) => {
  const sql = 'SELECT * FROM sensor_temperatura';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.get('/sensor_temperaturahumedad', (req, res) => {
  const sql = 'SELECT * FROM sensor_temperaturahumedad';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error al ejecutar la consulta SQL:', err);
      return res.status(500).json({ error: 'Error al obtener los datos de temperatura y humedad' });
    }
    res.json(result);
  });
});


app.get('/giroscopio', (req, res) => {
  const sql = 'SELECT * FROM giroscopio';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.get('/sensor_ultrasonico', (req, res) => {
  const sql = 'SELECT * FROM sensor_ultrasonico';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

