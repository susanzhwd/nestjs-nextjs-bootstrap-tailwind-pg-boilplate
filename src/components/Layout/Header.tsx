import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';
import userContainer from '../../containers/user';
import { STATUS } from '../../enums';
import SignInUpModal from '../SignInUpModal';

const StylesMenuItem = styled.a(
  () =>
    tw`px-3 text-xs font-medium leading-5 text-black transition duration-150 ease-in-out bg-white rounded-md hover:text-white hover:bg-black focus:outline-none focus:text-white focus:bg-gray-700`,
);

const StyledSignInUpButton = styled.a(
  () =>
    tw`flex px-1 text-xs text-black transition duration-150 ease-in-out cursor-pointer hover:bg-gray-200 focus:bg-black`,
);

export default function Header() {
  const userC = userContainer.useContainer();
  console.log(111111111111, userC.user);
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState(STATUS.LOGGED_OUT);
  const router = useRouter();
  const createSignInUpButton = (pathname: string) => {
    if (pathname !== '/signIn' && pathname !== '/signUp') {
      return (
        <>
          <StyledSignInUpButton
            onClick={(e) => {
              console.log(4444444444, userC.user);
              e.preventDefault();
              setShowModal(true);
              setStatus(STATUS.SIGN_IN);
            }}
          >
            Sign In
          </StyledSignInUpButton>{' '}
          <span className="-mt-0.5">/</span>{' '}
          <StyledSignInUpButton
            onClick={(e) => {
              e.preventDefault();
              setShowModal(true);
              setStatus(STATUS.SIGN_UP);
            }}
          >
            Sign Up
          </StyledSignInUpButton>
        </>
      );
    } else if (pathname === '/signIn') {
      return (
        <Link href="/signUp">
          <StyledSignInUpButton>Sign Up</StyledSignInUpButton>
        </Link>
      );
    } else {
      return (
        <Link href="/signIn">
          <StyledSignInUpButton>Sign In</StyledSignInUpButton>
        </Link>
      );
    }
  };
  return (
    <>
      <nav className="bg-gray-200">
        <div className="px-2 mx-auto max-7xl sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-8">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                className="inline-flex items-center justify-center text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                aria-label="Main menu"
                aria-expanded="false"
              >
                <svg
                  className="block h-4 4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className="hidden h-4 4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
              <div className="flex items-center flex-shrink-0">
                <div className="flex lg:hidden">
                  <Image
                    className="h-5 auto"
                    src="/images/logo.png"
                    height={25}
                    width={25}
                    alt="Web Price Watcher Logo"
                  ></Image>
                </div>
                <img
                  className="hidden h-4 auto lg:block"
                  src="https://tailwindui.com/img/logos/v1/workflologo-on-dark.svg"
                  alt="Workflow logo"
                />
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex">
                  <StylesMenuItem href="#">Dashboard</StylesMenuItem>
                  <StylesMenuItem href="#" className="ml-4">
                    Team
                  </StylesMenuItem>
                  <StylesMenuItem href="#" className="ml-4">
                    Projects
                  </StylesMenuItem>
                  <StylesMenuItem href="#" className="ml-4">
                    Calendar
                  </StylesMenuItem>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {!userC.user ? (
                createSignInUpButton(router.pathname as string)
              ) : (
                <>
                  <button
                    className="flex p-1 text-gray-400 transition duration-150 ease-in-out border-2 border-transparent rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
                    aria-label="Notifications"
                  >
                    <svg
                      className="h-4 4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </button>
                  <div className="relative ml-3">
                    <div>
                      <button
                        className="flex text-xs transition duration-150 ease-in-out border-2 border-transparent rounded-full focus:outline-none focus:border-white"
                        id="user-menu"
                        aria-label="User menu"
                        aria-haspopup="true"
                      >
                        <img
                          className="w-4 h-4 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </button>
                    </div>
                    <div className="absolute right-0 hidden w-48 mt-2 origin-top-right rounded-md shadow-w-lg">
                      <div
                        className="py-1 bg-white rounded-md shadow-w-xs"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu"
                      >
                        <a
                          href="#"
                          className="block px-4 text-xs leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                          role="Stylesmenuitem"
                        >
                          Your Profile
                        </a>
                        <a
                          href="#"
                          className="block px-4 text-xs leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                          role="Stylesmenuitem"
                        >
                          Settings
                        </a>
                        <a
                          href="#"
                          className="block px-4 text-xs leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                          role="Stylesmenuitem"
                        >
                          Sign out
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="hidden">
          <div className="px-2 pt-2 pb-3">
            <StylesMenuItem href="#" className="block">
              Dashboard
            </StylesMenuItem>
            <StylesMenuItem href="#" className="block mt-1">
              Team
            </StylesMenuItem>
            <StylesMenuItem href="#" className="block mt-1">
              Projects
            </StylesMenuItem>
            <StylesMenuItem href="#" className="block mt-1">
              Calendar
            </StylesMenuItem>
          </div>
        </div>
      </nav>
      <SignInUpModal
        showModal={showModal}
        status={status}
        onClose={() => setShowModal(false)}
        onStatusChange={setStatus}
      ></SignInUpModal>
    </>
  );
}
