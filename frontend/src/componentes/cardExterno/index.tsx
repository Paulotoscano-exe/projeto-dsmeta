import { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import NotificationButton from '../notificatoinButton'
import './styles.css'

function CardExterno() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365))
    const max = new Date()
    const [dataMinima, setDataMinima] = useState(min)
    const [dataMaxima, setDataMaxima] = useState(max)


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
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">11/07/2022</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55.300,00</td>
                            <td>
                                <div className="container-botao-vermelho">
                                    <NotificationButton />
                                </div>
                            </td>                                        
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">11/07/2022</td>
                            <td>Ana</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55.300,00</td>
                            <td>
                                <div className="container-botao-vermelho">
                                <NotificationButton />
                                </div>
                            </td>                                        
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">11/07/2022</td>
                            <td>Ana</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55.300,00</td>
                            <td>
                                <div className="container-botao-vermelho">
                                <NotificationButton />
                                </div>
                            </td>                                        
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">11/07/2022</td>
                            <td>Ana</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55.300,00</td>
                            <td>
                                <div className="container-botao-vermelho">
                                <NotificationButton />
                                </div>
                            </td>                                        
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">11/07/2022</td>
                            <td>Ana</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55.300,00</td>
                            <td>
                                <div className="container-botao-vermelho">
                                <NotificationButton />
                                </div>
                            </td>                                        
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CardExterno