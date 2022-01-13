import React, { useState } from 'react';
import Login from '@component/login/Login';
import MainModal from '@component/modal/MainModal';
import Register from '@component/login/Register';

const LoginModal = ({ modalOpen, setModalOpen }) => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="inline-block w-full max-w-lg p-10 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
        {showRegister ? (
          <Register onShowLogin={setShowRegister} setModalOpen={setModalOpen} />
        ) : (
          <Login onShowRegister={setShowRegister} setModalOpen={setModalOpen} />
        )}
      </div>
    </MainModal>
  );
};

export default React.memo(LoginModal);
