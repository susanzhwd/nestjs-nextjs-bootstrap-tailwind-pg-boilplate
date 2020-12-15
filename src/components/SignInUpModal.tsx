import React from 'react';
import ReactModal from 'react-modal';
import { STATUS } from '../enums';
import LoginForm from './user/LoginForm';
import SignUpForm from './user/SignUpForm';

interface SignInUpModalProps {
  showModal?: boolean;
  status?: STATUS;
  onClose?: () => void;
  onStatusChange?: (status: STATUS) => void;
  children?: any;
}

const ModalHeader = ({ onClose, children }: SignInUpModalProps) => {
  return (
    <div className="flex flex-row items-center justify-between px-2.5 py-1 mb-3 border-b border-gray-300 border-solid rounded-t">
      <h3 className="flex-1 text-xl font-semibold">{children}</h3>
      <button
        className="block object-center -mt-1 -mr-1 text-3xl text-black bg-transparent border-0 outline-none focus:outline-none"
        onClick={(e) => {
          e.preventDefault();
          onClose();
        }}
      >
        ×
      </button>
    </div>
  );
};

export default function SignInUpModal({
  showModal,
  status,
  onClose,
  onStatusChange,
}: SignInUpModalProps) {
  return (
    <ReactModal
      isOpen={showModal}
      className="max-w-md p-0 mx-auto mt-10 bg-white border rounded-sm"
    >
      <ModalHeader onClose={onClose}>
        {status === STATUS.SIGN_IN
          ? 'Sign In'
          : status === STATUS.SIGN_UP
          ? 'Create an Account'
          : null}
      </ModalHeader>

      {status === STATUS.SIGN_IN ? (
        <LoginForm onSignUp={() => onStatusChange(STATUS.SIGN_UP)}></LoginForm>
      ) : status === STATUS.SIGN_UP ? (
        <SignUpForm
          onSignIn={() => onStatusChange(STATUS.SIGN_IN)}
        ></SignUpForm>
      ) : null}
    </ReactModal>
  );
}
// ReactModal.setAppElement('.ReactModalPortal');

// export default function Modal({ showModal, onClose }: SignInUpModalProps) {
//   console.log(222222222222, showModal);
//   return (
//     <>
//       {showModal ? (
//         <>
//           <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
//             <div className="relative w-auto max-w-6xl mx-auto my-6">
//               {/*content*/}
//               <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
//                 {/*header*/}
//                 <ModalHeader onClose={onClose}>Modal Title</ModalHeader>
//                 {/*body*/}
//                 <div className="relative flex-auto p-6">
//                   <p className="my-4 text-lg leading-relaxed text-gray-600">
//                     I always felt like I could do anything. That’s the main
//                     thing people are controlled by! Thoughts- their perception
//                     of themselves! They're slowed down by their perception of
//                     themselves. If you're taught you can’t do anything, you
//                     won’t do anything. I was taught I could do everything.
//                   </p>
//                 </div>
//                 {/*footer*/}
//                 <div className="flex items-center justify-end p-6 border-t border-gray-300 border-solid rounded-b">
//                   <button
//                     className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase outline-none background-transparent focus:outline-none"
//                     type="button"
//                     style={{ transition: 'all .15s ease' }}
//                     onClick={onClose}
//                   >
//                     Close
//                   </button>
//                   <button
//                     className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-green-500 rounded shadow outline-none active:bg-green-600 hover:shadow-lg focus:outline-none"
//                     type="button"
//                     style={{ transition: 'all .15s ease' }}
//                     onClick={onClose}
//                   >
//                     Save Changes
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
//         </>
//       ) : null}
//     </>
//   );
// }
