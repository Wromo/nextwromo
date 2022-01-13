import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { GoogleLogin } from 'react-google-login';

//internal import
import UserServices from '@services/UserServices';
import { UserContext } from '@context/UserContext';
import { notifyError, notifySuccess } from '@utils/toast';

const useLoginSubmit = (setModalOpen) => {
  const router = useRouter();
  const { redirect } = router.query;
  const { dispatch } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = ({ name, email, password }) => {
    if (name) {
      UserServices.userRegister({ name, email, password })
        .then((res) => {
          if (res) {
            dispatch({
              type: 'USER_LOGIN',
              payload: res,
            });
            Cookies.set('userInfo', JSON.stringify(res));
            notifySuccess(res.status);
            router.push(redirect || '/');
            setModalOpen(false);
          }
        })

        .catch((err) => {
          notifyError(err ? err.response.data.message : err.message);
        });
    } else {
      UserServices.userLogin({
        email,
        password,
      })
        .then((res) => {
          if (res) {
            dispatch({ type: 'USER_LOGIN', payload: res });
            Cookies.set('userInfo', JSON.stringify(res));
            router.push(redirect || '/');
            notifySuccess('Login Success!');
            setModalOpen(false);
          }
        })
        .catch((err) => {
          notifyError(err ? err.response.data.message : err.message);
        });
    }
  };

  const handleGoogleSignIn = (user) => {
    if (user) {
      UserServices.signUpWithProvider({
        name: user.profileObj.name,
        email: user.profileObj.email,
        image: user.profileObj.imageUrl,
      })
        .then((res) => {
          if (res) {
            dispatch({ type: 'USER_LOGIN', payload: res });
            Cookies.set('userInfo', JSON.stringify(res));
            notifySuccess('Login success!');
            router.push(redirect || '/');
            setModalOpen(false);
          }
        })

        .catch((err) => {
          notifyError(err.message);
          setModalOpen(false);
        });
    }
  };

  return {
    handleSubmit,
    submitHandler,
    handleGoogleSignIn,
    register,
    errors,
    GoogleLogin,
  };
};

export default useLoginSubmit;
