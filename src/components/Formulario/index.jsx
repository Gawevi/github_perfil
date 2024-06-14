import { useState, useEffect } from "react"

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    //useEffect é uma função chamada sempre que há alteração no estado
    //Caso a função seja apenas criada, qualquer mudança irá chamar a função useEffect
    //Colocando [] após a função é possível determinar o que a função deve observar
    //[] vazios fazem a função iniciar apenas quando o estado é "montado"/iniciado
    //É também possível utilizar a função "return () => {}" com os [] vazios para chamar
    //a função também quando o estado é "desmontado"/finalizado
    //Para escolher o que a função deve observar é necessário passar o nome da constante ou variável observada dentro dos []
    useEffect(() => {
        console.log("O componente iniciou");

        return () => {
            console.log("O componente finalizou");
        }
    }, []);

    const alteraNome = (evento) => {
        setNome(evento.target.value);
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>{nome} foi aprovado</p>
            )
        } else {
            return (
                <p>{nome} foi reprovado</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota Matéria A" onChange={evento => setMateriaA(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota Matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota Matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario