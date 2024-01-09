import { Suspense, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Div,
  Title,
  User,
  UserMail,
  Container,
  BtnLogout,
} from './Layout.styled';
import { removeToken } from '../../Service/api';
import { currentUserThunk, logoutThunk } from '../../redux/auth/thunks';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
// import { currentUserThunk, logoutThunk } from '../../redux/Auth/thunks';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(state => state.auth.token);
  const email = useSelector(state =>
    state.auth.user ? state.auth.user.email : null
  );

  const handleClick = () => {
    if (isAuth) {
      dispatch(logoutThunk());
      removeToken();
      navigate('/login');
    } else {
      navigate('/login');
    }
  };

  useEffect(() => {
    if (!isAuth) dispatch(currentUserThunk());
  }, [dispatch, isAuth]);

  return (
    <Div>
      <Container>
        <Title>Phonebook</Title>
        {isAuth ? (
          <User>
            <UserMail>{email}</UserMail>
            <nav>
              <BtnLogout type="button" onClick={handleClick}>
                Log Out
              </BtnLogout>
            </nav>
          </User>
        ) : (
          <User>
            <nav>
              <BtnLogout type="button" onClick={handleClick}>
                Log In
              </BtnLogout>
            </nav>
          </User>
        )}
      </Container>

      {isAuth && (
        <Suspense fallback={<div>Loading page...</div>}>
          {children}
          <Outlet />
        </Suspense>
      )}

      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Div>
  );
};
export default Layout;
