import { Routes, Route } from 'react-router-dom';
import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <MyRoute>
            {' '}
            {}
            <Page404 /> {}
          </MyRoute>
        }
      />
    </Routes>
  );
}
