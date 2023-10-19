import { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import backgroundImage from './assets/code.jpg'

const GlobalCSS = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family: 'Rajdhani', sans-serif;
}
`
const Body = styled.body`
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

const Container = styled.div`
 text-align: center;
    opacity: 0.9;
    height: 80vh;
    width: 40vw;
    background-color: rgb(5, 130, 220);
    display: flex;
    flex-direction: column;
    border: solid;
    border-radius: 8px;
    box-shadow: 2px 2px 2px 2px;

    form{
    width: 38vw;
    height: 3vh;
    display: flex;
    }

    input{
        width: 26vw;
        border-radius: 5px;
        height: 3vh;
        border: solid;
        background-color: #b8ddfd;
    }
`

const PrimeiroTitulo = styled.h1`
   background-color: rgb(222, 200, 7);
    width: 40vw;
    border: solid;
    box-shadow: 2px 2px 2px 2px;
    border-radius: 6px; 
`

const Lista = styled.ol`
padding-left: 25px;
background-color:rgb(228, 133, 235);
border: solid;
border-radius: 8px;
    li{
    font-size: 1.4rem;
    font-weight: 800;
    box-shadow: 0.8px 0.8px 0.8px 0.8px;
    background-color: rgb(222, 200, 7);
    
  }
`


const PrimeiraSection = styled.section`
    width: 25vw;
    height: 80vh;
    display: flex;
    
`

const Botao = styled.button`
     width: 8vw;
    background-color: rgb(228, 133, 235);
    font-weight: 800;
    transition: 300ms;

  &:hover{
    scale: 1.02;
    transition: 300ms;
    opacity: 1;
    cursor: pointer;
  }
`

function App() {

  //Criando as variáveis de estado. A primeira delas, criará um array vazio, onde o conteúdo poderá ser atualizado (useState), ou seja, a partir dai
  //O conteúdo poderá ser incrementado e manipulado.
  //A segunda irá guardar os valores digitados no campo, por isso está marcado como uma string ('')
  const [arrayDeTarefas, setArrayDeTarefas] = useState([])
  const [guardarTarefa, setGuardarTarefa] = useState('')


  //Criando uma função com parâmetro 'item' para manipular os elementos recebidos dentro de uma variável.
  const CapturaDeValor = (item) => {
    setGuardarTarefa(item.target.value) // item é uma representação para os valores dentro da variável de estado 'guardarTarefa',
    // é um nome genérico para manipular elementos. com auxilio do target e value vamos selecionar o valor que será digitado no input.
  }
  //Agora já armazenado o valor dentro da função, é necessário agora inserir o conteúdo capturado dentro do array, para isso, será criada uma nova função

  const AdicionarAoArray = (e) => {
      e.preventDefault();
    if(guardarTarefa.trim() === ""){
      alert("Por favor, digite sua tarefa")
    } else if (arrayDeTarefas.length < 10){
      setArrayDeTarefas(arrayDeTarefas.concat(guardarTarefa))
      setGuardarTarefa('');
    } else{
      alert("limite de tarefas excedido")
    }
    
 }
  return (
    <>
      <GlobalCSS />
      <Body>
        <Container>
          <PrimeiroTitulo>Lista de Tarefas</PrimeiroTitulo>
          <form onSubmit={AdicionarAoArray}>
          <input  type="text" name="inEscrita" id="inEscrita" placeholder='Digite sua tarefa '
            onChange={CapturaDeValor} value ={guardarTarefa}
          />
          </form>
          <Botao onClick={AdicionarAoArray}>Enviar tarefa</Botao>

          <Lista>{arrayDeTarefas.map((item) => (
            <li>{item}</li>
          ))}
          </Lista>
        </Container>
      </Body>
    </>

  )
}

export default App
