import axios from "axios"
import { useEffect, useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { Sale } from "../../models/sale"
import { BASE_URL } from "../../utils/request"
import NotificationButton from '../notificatoinButton'
import './styles.css'

function CardExterno() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365))
    const max = new Date()

    const [dataMinima, setDataMinima] = useState(min)
    const [dataMaxima, setDataMaxima] = useState(max)

    const [sales, setSales] = useState<Sale[]>([])

    useEffect(() => {

        const dMin = dataMinima.toISOString().slice(0, 10)
        const dMax = dataMaxima.toISOString().slice(0, 10)

        axios.get(`${BASE_URL}/sales?minDate=${dMin}&maxDate=${dMax}`)
            .then(response => {
                setSales(response.data.content)
            })
    }, [dataMinima, dataMaxima])

    return(
        <div className="cardInterno">
            <h2 className="cardInterno-titulo">Vendas</h2>
            <div>
                <div className="container-form">
                    <DatePicker
                        selected={dataMinima}
                        onChange={(date: Date) => setDataMinima(date)}
                        className="form-controle"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="container-form">
                    <DatePicker
                        selected={dataMaxima}
                        onChange={(date: Date) => setDataMaxima(date)}
                        className="form-controle"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div>
                <table className="tabelaVendas">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map(sale => {
                            return(
                                <tr key={sale.id}>
                                    <td className="show992">{sale.id}</td>
                                    <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                                    <td>{sale.sellerName}</td>
                                    <td className="show992">{sale.visited}</td>
                                    <td className="show992">{sale.deals}</td>
                                    <td>{sale.amount.toFixed(2)}</td>
                                    <td>
                                        <div className="container-botao-vermelho">
                                            <NotificationButton saleId={sale.id}/>
                                        </div>
                                    </td>                                        
                                </tr> 
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CardExterno