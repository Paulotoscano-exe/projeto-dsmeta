import logo from '../../assets/imagens/logo1.svg'
import './styles.css'

function Header() {
    return(
        <header className="cabecalho">
            <div className="cabecalho-conteudo">
                <img src={logo} alt="Imagem de Logo do projeto DSMeta" />
                <h1>DSMeta</h1>
                <p>Desenvolvido por <a href="#" target="_blank" rel="noopender">Paulo Toscano</a></p>
            </div>
        </header>
    )
}

export default Header