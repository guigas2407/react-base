import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';
import { useDispatch } from 'react-redux';
import * as actions from '../../store';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(actions.request());
  }

  return (
    <>
      <Container>
        <Title>
          Login
          <small>oi</small>
        </Title>
        <Paragrafo>Lorem ipsum dolor</Paragrafo>
        <button type="button" onClick={handleClick}>
          Enviar
        </button>
      </Container>
    </>
  );
}
