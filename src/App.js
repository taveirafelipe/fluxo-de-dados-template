import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import  FormularioCadastro  from "./components/FormularioCadastro/FormularioCadastro";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [imagemApp, setImagemApp] = useState('')
  const [descricaoApp, setDescricaoApp] = useState('')
  const [tituloApp, setTituloApp] = useState('')

  const [imagem, setImagem] = useState('https://picsum.photos/536/354')
  const [descricao, setDescricao] = useState('Lorem Ipsum')
  const [titulo, setTitulo] = useState('Este é um título')

  const atualiza = () =>{
    if(imagemApp !== '' && descricaoApp !== '' && tituloApp !== ''){
    setImagem(imagemApp)
    setDescricao(descricaoApp)
    setTitulo(tituloApp)
    // console.log(imagemApp)
    // console.log(descricaoApp)
    }else{
      alert('Digite valores válidos!')
    }
  }
  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header />
          <FormularioCadastro 
          atualiza={atualiza} 
          imagem={imagemApp}
          setImagem={setImagemApp} 
          descricao={descricaoApp}
          setDescricao={setDescricaoApp}
          titulo={tituloApp}
          setTitulo={setTituloApp}/>
        </aside>
        <TelaDaPostagem titulo={titulo} imagem={imagem} descricao={descricao}/>
      </Container>
    </>
  );
}

export default App;
