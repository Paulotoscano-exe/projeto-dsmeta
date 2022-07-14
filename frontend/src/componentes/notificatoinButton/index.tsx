import icon from '../../assets/imagens/notification-icon.svg'
import './styles.css'

function NotificationButton() {
    return(
        <div className="botao-vermelho">
            <img src={icon} alt="icone de notificação" />
        </div>
    )
}

export default NotificationButton