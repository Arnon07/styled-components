import React from 'react';
import { Container, Head, Titulo, BemVindo } from './styles';

function App() {
  return (
    <Container>
        <Head>
            <Titulo>Projeto Styled</Titulo>
        </Head>
            <BemVindo cor="00FF00" tamanho={35}>Bem Vindo</BemVindo>
    </Container>
  );
}

export default App;
