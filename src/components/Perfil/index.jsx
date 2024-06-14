//Para importar um arquivo css:
// import './perfil.css'

//Para importar um arquivo module.css:
import styles from './Perfil.module.css'

//Há duas formas de realizar a ação desejada abaixo, exibir nome e imagem do perfil
//A primeira segue o que foi feito abaixo
//A segunda forma é semelhante, onde a função não recebe nenhum argumento
//"Perfil" em App.jsx não precisa das propriedades "endereco" e "nome", mas é necessário criar:
//  "const usuario = {
//     nome: 'Haru',
//     avatar: 'https://github.com/gawevi.png'
// }"
//E depois "usuario.nome" e "usuario.avatar" seriam passados em img e h3

const Perfil = ({ nomeUsuario }) => {
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} />
            <h1 className={styles.name}>{nomeUsuario}</h1>
        </header>
    )
}

export default Perfil;