import React, { useState } from 'react';
import SignInUpModal from './SignInUpModal';

export default {
  title: 'Modal',
};

const StandardModal = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      <button
        className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-pink-500 rounded shadow outline-none active:bg-pink-600 hover:shadow-lg focus:outline-none"
        type="button"
        style={{ transition: 'all .15s ease' }}
        onClick={() => {
          setShowModal(true);
        }}
      >
        Open large modal
      </button>
      <SignInUpModal
        showModal={showModal}
        onClose={() => setShowModal(false)}
      ></SignInUpModal>
    </>
  );
};

export const standard = () => {
  return <StandardModal />;
};
