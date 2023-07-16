import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';

const Home = lazy(() => import('../pages/home/Home'));
const Register = lazy(() => import('../pages/register/Register'));
const Login = lazy(() => import('../pages/login/Login'));
// const Contacts = lazy(() => import('../pages/contacts/Contacts'));
const ProfilePage = lazy(() => import('../pages/profilePage/ProfilePage'));
const UpdateProfilePage = lazy(() =>
  import('../pages/updateProfilePage/updateProfilePage')
);

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute
              redirectTo="/profile"
              component={<ProfilePage />}
            ></PrivateRoute>
          }
        >
          {' '}
        </Route>

        <Route
          path="/profile/update"
          element={
            <PrivateRoute
              redirectTo="/update"
              component={<UpdateProfilePage />}
            ></PrivateRoute>
          }
        ></Route>
        <Route
          path="/contacts"
          element={
            // <PrivateRoute redirectTo="/contacts" component={<Contacts />} />
            <div>users</div>
          }
        />
      </Route>
    </Routes>
  );
};
export default App;
