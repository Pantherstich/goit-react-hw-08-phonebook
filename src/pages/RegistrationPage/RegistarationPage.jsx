import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { registerThunk } from '../../redux/auth/thunks';
import RegistrForm from 'components/RegistrForm/RegistrForm';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.token);
  const navigate = useNavigate();

  const register = body => {
    dispatch(registerThunk(body));
  };
  useEffect(() => {
    isAuth && navigate('/contacts');
  }, [isAuth, navigate]);

  return <RegistrForm register={register} />;
};

export default RegistrationPage;
