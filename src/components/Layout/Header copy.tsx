import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import LoginForm from '../user/Login/Form';
import SignUpForm from '../user/SignUp/Form';
import styles from './Header.module.scss';

enum STATUS {
  LOGGED_OUT,
  LOGGED_IN,
  SIGN_IN,
  SIGN_UP,
}
export default function Header() {
  const [status, setStatus] = useState(STATUS.LOGGED_OUT);
  const router = useRouter();
  const createSignInUpButton = (isSignIn) => {
    if (isSignIn === undefined) {
      return (
        <button
          className="my-2 btn btn-link my-sm-0"
          type="submit"
          data-toggle="modal"
          data-target="#signInUpModal"
          data-backdrop="static"
          data-keyboard="false"
          onClick={() => setStatus(STATUS.SIGN_IN)}
        >
          Sign In/Up
        </button>
      );
    } else if (isSignIn === 'true') {
      return (
        <Link href="/signUp">
          <button
            className="my-2 btn btn-link my-sm-0"
            type="submit"
            data-toggle="modal"
            data-target="#signInUpModal"
            data-backdrop="static"
            data-keyboard="false"
            onClick={() => {
              console.log(1);
            }}
          >
            Sign Up
          </button>
        </Link>
      );
    } else {
      return (
        <Link href="/signIn">
          <button
            className="my-2 btn btn-link my-sm-0"
            type="submit"
            data-toggle="modal"
            data-target="#signInUpModal"
            data-backdrop="static"
            data-keyboard="false"
            onClick={() => {
              console.log(1);
            }}
          >
            Sign In
          </button>
        </Link>
      );
    }
  };
  return (
    <>
      <nav
        className={`navbar ${styles.navbar} navbar-expand-lg navbar-light bg-light`}
      >
        <a className="navbar-brand" href="#">
          <Image
            src="/images/logo.png"
            height={25}
            width={25}
            alt="Web Price Watcher Logo"
          ></Image>
          Web Price Watcher
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="mr-auto navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
          {createSignInUpButton(router.query.isSignIn)}
        </div>
      </nav>
      {/* Sign In/Up Modal  */}
      <div
        className="modal fade"
        id="signInUpModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="signInUpModalLabel"
      >
        <div
          className={`modal-dialog ${styles['modal-dialog']}`}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {status === STATUS.SIGN_IN
                  ? 'Log In'
                  : status === STATUS.SIGN_UP
                  ? 'Create an Account'
                  : null}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {status === STATUS.SIGN_IN ? (
                <LoginForm
                  onSignUp={() => setStatus(STATUS.SIGN_UP)}
                ></LoginForm>
              ) : status === STATUS.SIGN_UP ? (
                <SignUpForm
                  onSignIn={() => setStatus(STATUS.SIGN_IN)}
                ></SignUpForm>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
