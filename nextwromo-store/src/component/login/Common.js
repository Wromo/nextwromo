import React, { useState } from 'react';
import { Switch } from '@headlessui/react';
import { ImFacebook, ImGoogle } from 'react-icons/im';
import { FiLock, FiMail, FiUser } from 'react-icons/fi';

import Error from '@component/form/Error';
import InputArea from '@component/form/InputArea';
import useLoginSubmit from '@hooks/useLoginSubmit';

const Common = ({ onShowRegister, setModalOpen }) => {
  const [enabled, setEnabled] = useState(false);
  const {
    handleSubmit,
    submitHandler,
    handleGoogleSignIn,
    GoogleLogin,
    register,
    errors,
  } = useLoginSubmit(setModalOpen);

  return (
    <>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col justify-center"
      >
        <div className="grid grid-cols-1 gap-5">
          {!onShowRegister && (
            <div className="form-group">
              <InputArea
                register={register}
                label="Name"
                name="name"
                type="text"
                placeholder="Full Name"
                Icon={FiUser}
              />

              <Error errorName={errors.name} />
            </div>
          )}

          <div className="form-group">
            <InputArea
              register={register}
              defaultValue="justin@gmail.com"
              label="Email"
              name="email"
              type="email"
              placeholder="Email"
              Icon={FiMail}
            />
            <Error errorName={errors.email} />
          </div>

          <div className="form-group">
            <InputArea
              register={register}
              defaultValue="12345678"
              label="Password"
              name="password"
              type="password"
              placeholder="Password"
              Icon={FiLock}
            />

            <Error errorName={errors.password} />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-shrink-0">
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? 'bg-blue-600' : 'bg-gray-200'
                } relative inline-flex items-center h-6 rounded-full w-11`}
              >
                <span className="sr-only">Enable notifications</span>
                <span
                  className={`${
                    enabled ? 'translate-x-6' : 'translate-x-1'
                  } inline-block w-4 h-4 transform bg-white rounded-full`}
                />
              </Switch>
            </div>
            <div className="flex ms-auto">
              <button
                type="button"
                className="text-end text-sm text-heading ps-3 underline hover:no-underline focus:outline-none"
              >
                Forgot password?
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-600 transition-all focus:outline-none my-1"
          >
            {onShowRegister ? <span>Login</span> : <span>Register</span>}
          </button>
        </div>
      </form>
      <div className="my-8 after:bg-gray-100 before:bg-gray-100 fo10t-sans text-center font-medium">
        OR
      </div>

      <div className="flex justify-between flex-col lg:flex-row">
        <button className="text-sm inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-serif text-center justify-center rounded-md focus:outline-none text-gray-600 bg-gray-100 shadow-sm md:px-2 my-1 sm:my-1 md:my-1 lg:my-0 lg:px-3 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-blue-600 h-11 md:h-12 w-full mr-2">
          <ImFacebook /> <span className="ml-2">Login With Facebook</span>
        </button>

        <GoogleLogin
          clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`}
          render={(renderProps) => (
            <button
              className="text-sm inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-serif text-center justify-center rounded-md focus:outline-none text-gray-600 bg-gray-100 shadow-sm md:px-2 my-1 sm:my-1 md:my-1 lg:my-0 lg:px-3 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-red-500 h-11 md:h-12 w-full"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <ImGoogle /> <span className="ml-2">Login With Google</span>
            </button>
          )}
          onSuccess={handleGoogleSignIn}
          onFailure={handleGoogleSignIn}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </>
  );
};

export default Common;
