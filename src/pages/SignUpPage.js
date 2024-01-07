import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import { firebaseAuth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <>
      <Container>
        <BackgroundImage />
        <div className="content">
          <Header login />
          <div className="body">
            <div className="text">
              <h1>Unlimited Movies, Tv Shows and more</h1>
              <h4>Watch anywhere, Cancel Anytime</h4>
              <h6>
                Ready to Watch ? Enter You email to create or restart membership
              </h6>
            </div>
            <div className="form">
              {showPassword ? (
                <input
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={formValues.password}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              ) : (
                <input
                  type="email"
                  placeholder="Enter email address"
                  name="email"
                  value={formValues.email}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              )}

              {!showPassword ? (
                <button onClick={() => setShowPassword(true)}>
                  Get Started
                </button>
              ) : (
                <button onClick={handleSignIn}>Sign Up</button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.79);
    height: 100vh;
    width: 100vw;
    grid-template-columns: 15vh 85vh;
    .body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .text {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin: 3rem;
      font-size: 2rem;
      color: #fff;
    }
    h1 {
      padding: 0 25rem;
      text-shadow: 0 5px 10px white;
    }
    h4 {
      /* margin-top: -1.5rem; */
    }
    h6 {
    }
  }
  .form {
    display: grid;
    width: 60%;
    grid-template-columns: ${({ showPassword }) =>
      showPassword ? "1fr 1fr" : "2fr 1fr"};
    input {
      color: black;
      padding: 1.2rem;
      font-size: 1.2rem;
      width: 45rem;
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 0.5rem 1rem;
      background-color: red;
      color: white;
      border: none;
      cursor: pointer;
      font-size: 1.05rem;
      width: 10rem;
    }
  }
`;
export default SignUpPage;
