import { Title, Paragrafo } from './styled';
import { Cointainer } from '../../styles/GlobalStyles';

export default function Login() {
  return (
    <>
      <Cointainer>
        <Title>
          Login
          <small>oi</small>
        </Title>
        <Paragrafo>Lorem ipsum dolor</Paragrafo>
        <button type="button">Enviar</button>
      </Cointainer>
    </>
  );
}
