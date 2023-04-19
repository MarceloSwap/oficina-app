import React, { useState } from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import CadastroVeiculo from './CadastroVeiculo';
import ListarVeiculos from './ListarVeiculos';
import ConsultarPlaca from './ConsultarPlaca';

function Layout() {
  const [tipoUsuario, setTipoUsuario] = useState(1);
  const [showCadastroVeiculo, setShowCadastroVeiculo] = useState(false);
  const [showListarVeiculos, setShowListarVeiculos] = useState(false);

  const mudancaUsusario = (newType) => {
    setTipoUsuario(newType);
  };

  const lidarCadastroVeiculoClick = () => {
    setShowCadastroVeiculo(true);
    setShowListarVeiculos(false);
  };

  const lidarListarVeiculosClick = () => {
    setShowListarVeiculos(true);
    setShowCadastroVeiculo(false);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Gestão de serviço oficina</Typography>
          <Button color="inherit" onClick={() => mudancaUsusario(1)} style={{ marginLeft: '60%' }}>
            Usuário 1
          </Button>
          <Button color="inherit" onClick={() => mudancaUsusario(2)}>
            Usuário 2
          </Button>
        </Toolbar>
      </AppBar>
      {tipoUsuario === 1 && (
        <div style={{ marginTop: 20 }}>
          <Button variant="contained" onClick={lidarCadastroVeiculoClick}>Cadastro Entrada de veículo</Button>
          <Button variant="contained" onClick={lidarListarVeiculosClick} style={{ marginLeft: '2%' }} >Alterar Status</Button>
          {showCadastroVeiculo && <CadastroVeiculo />}
          {showListarVeiculos && <ListarVeiculos />}
        </div>
      )}
      {tipoUsuario === 2 && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
          <ConsultarPlaca />
        </div>
      )}
    </div>
  );
}

export default Layout;