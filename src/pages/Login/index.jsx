import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  return (
    <>
      <Container>
        <Title>
          Login
          <small>oi</small>
        </Title>
        <Paragrafo>Lorem ipsum dolor</Paragrafo>
        <button type="button">Enviar</button>
      </Container>
    </>
  );
}
