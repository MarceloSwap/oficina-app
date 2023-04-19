import { Card, CardContent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material'
import axios from 'axios'
import React from 'react'

function ListarVeiculos(props) {

    const [rows, setRows] = React.useState([])

    React.useEffect(() => {
        axios.get("http://localhost:3000/api/carros").then(
            r => {
                setRows(r.data.result)
            }
        )

    }, [])

    const handleAlterarStatus = (row) => {
        // aqui você pode implementar a lógica para alterar o status do item
        console.log('Alterar status do item:', row)
    }

    return (
        <Card>
            <div><h4>{props.texto}</h4></div>

            <CardContent>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Marca</TableCell>
                                <TableCell align="right">Modelo</TableCell>
                                <TableCell align="right">Placa</TableCell>
                                <TableCell align="right">Status</TableCell>
                                <TableCell align="right">Cliente</TableCell>
                                <TableCell align="right">WhatsApp</TableCell>
                                <TableCell align="right">Ações</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.marca}
                                    </TableCell>
                                    <TableCell align="right">{row.modelo}</TableCell>
                                    <TableCell align="right">{row.placa}</TableCell>
                                    <TableCell align="right">{row.status_}</TableCell>
                                    <TableCell align="right">{row.dono}</TableCell>
                                    <TableCell align="right">{row.whatsapp}</TableCell>
                                    <TableCell align="right">
                                        <Button variant="contained" onClick={() => handleAlterarStatus(row)}>Alterar Status</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    )
}
export default ListarVeiculos
