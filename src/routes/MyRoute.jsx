import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MyRoute({ children, isClosed }) {
  const isLoggedIn = false;

  if (isClosed && !isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  children: PropTypes.element.isRequired,
  isClosed: PropTypes.bool,
};
