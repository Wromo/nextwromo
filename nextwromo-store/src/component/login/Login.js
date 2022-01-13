import Link from 'next/link';
import Common from '@component/login/Common';

const Login = ({ onShowRegister, setModalOpen }) => {
  return (
    <>
      <div className="overflow-hidden bg-white mx-auto">
        <div className="text-center mb-6">
          <Link href="/">
            <a className="text-3xl font-bold font-serif">Login</a>
          </Link>
          <p className="text-sm md:text-base text-gray-500 mt-2 mb-8 sm:mb-10">
            Login with your email and password
          </p>
        </div>

        <Common onShowRegister={onShowRegister} setModalOpen={setModalOpen} />
        <div className="text-center text-sm text-gray-900 mt-4">
          <div className="text-gray-500 mt-2.5">
            Not have a account ?
            <button
              onClick={() => onShowRegister(true)}
              className="text-gray-800 hover:text-green-500 font-bold mx-2"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
