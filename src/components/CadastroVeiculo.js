import { Button, Card, CardContent, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios'
import React from 'react'



function CadastroVeiculo(props) {

    const [marca, setMarca] = React.useState("")
    const [modelo, setModelo] = React.useState("")
    const [placa, setPlaca] = React.useState("")
    const [status_, setStatus_] = React.useState("")
    const [dono, setDono] = React.useState("")
    const [whatsapp, setWhatsapp] = React.useState("")

    function cadastrarVeiculo() {
        axios.post("http://localhost:3000/api/carro", {
            "marca": marca, "modelo": modelo, "placa": placa, "status_": status_, "dono": dono, "whatsapp": whatsapp
        }).then(r => {
            alert("Veículo foi cadastrado!")
        })
    }

    return (
        <Card>
            <CardContent>
                <div>{props.texto}</div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ width: '60%', marginTop: '14px' }}>
                        <TextField value={marca} onChange={(e) => { setMarca(e.target.value) }} fullWidth id="outlined-basic" label="Marca" variant="outlined" />
                    </div>
                    <div style={{ width: '60%', marginTop: '14px' }}>
                        <TextField value={modelo} onChange={(e) => { setModelo(e.target.value) }} fullWidth id="outlined-basic" label="Modelo" variant="outlined" />
                    </div>
                    <div style={{ width: '60%', marginTop: '14px' }}>
                        <TextField value={placa} onChange={(e) => { setPlaca(e.target.value) }} fullWidth id="outlined-basic" label="Placa" variant="outlined" />
                    </div>
                    <div style={{ width: '60%', marginTop: '14px' }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={status_}
                                label="status_"
                                onChange={(e) => { setStatus_(e.target.value) }}
                            >
                                <MenuItem value={"Veículo recebido"}>Veículo recebido</MenuItem>
                                <MenuItem value={"Serviço Iniciado"}>Serviço Iniciado</MenuItem>
                                <MenuItem value={"Aguardando Peça"}>Aguardando Peça</MenuItem>
                                <MenuItem value={"Serviço Finalizado"}>Serviço Finalizado</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div style={{ width: '60%', marginTop: '14px' }}>
                        <TextField value={dono} onChange={(e) => { setDono(e.target.value) }} fullWidth id="outlined-basic" label="Dono" variant="outlined" />

                    </div>
                    <div style={{ width: '60%', marginTop: '14px' }}>
                        <TextField value={whatsapp} onChange={(e) => { setWhatsapp(e.target.value) }} fullWidth id="outlined-basic" label="WhatsApp" variant="outlined" />
                    </div>

                    <div style={{ width: '60%', display: 'flex', marginTop: '14px', justifyContent: 'left' }}>
                        <Button variant="contained" onClick={() => { cadastrarVeiculo() }}>Salvar</Button> <Button style={{ marginLeft: '2%' }} variant="contained" color="error">Cancelar</Button>
                    </div>
                </div>

            </CardContent>
        </Card>
    )
}
export default CadastroVeiculo