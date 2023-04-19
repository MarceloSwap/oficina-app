import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';

function ConsultaPlaca(props) {
  const [placa, setPlaca] = useState('');
  const [carro, setCarro] = useState(null);

  async function consultar() {
    try {
      const response = await axios.get(`http://localhost:3000/api/carro/${placa}`);
      setCarro(response.data.result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <Typography variant="h7">Consultar Status do Veículo Pela Placa</Typography>
      </div>


      <TextField
        label="PLACA"
        value={placa}
        onChange={(event) => setPlaca(event.target.value)}
        variant="outlined"
      />
      <Button variant="contained" onClick={consultar} style={{ marginLeft: 10 }}>
        Consultar
      </Button>
      {carro && (
        <div>
          <Typography variant="h6">{carro.marca} - {carro.modelo}</Typography>
          <Typography variant="body1">Placa: {carro.placa}</Typography>
          <Typography variant="body1">Status: {carro.status_}</Typography>
          <Typography variant="body1">Dono: {carro.dono}</Typography>
          <Typography variant="body1">WhatsApp: {carro.whatsapp}</Typography>
        </div>
      )}
    </div>
  );
}

export default ConsultaPlaca;
