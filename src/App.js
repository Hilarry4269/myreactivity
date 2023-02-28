import { Link } from "react-router-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Router } from "react-router-dom";
import { Routes } from "react-router-dom";
import ReactDOM from "react-dom";
import ContactUs from "./component/ContactUs";
import AboutUs from "./component/AboutUs";
import Login from "./component/Login"
import Navbar from "./component/NavBar";
import Footer from "./component/Footer";
import SearchBar from "./component/SearchBar";
import Home from "./component/Home";
import "./component/Home.css";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/AboutUs">AboutUs</Link>
            </li>
            <li>
              <Link to="/ContactUs">ContactUs</Link>
            </li>
            <li>
              <Link to="/SearchBar">Search</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route
          exact
          path="/"
          element={
            <main>
              <h1>Welcome to my Website!</h1>
              <p>This is My Blog React Project.</p>
            </main>
          }
        />

        <Route
          path="/AboutUs"
          element={
            <main>
              <h1>About</h1>
              <p>This is the about page.</p>
            </main>
          }
        />

        <Route
          path="/ContactUs"
          element={
            <main>
              <h1>Contact</h1>
              <p>This is the contact page.</p>
            </main>
          }
        />

        <Route
          path="/SearchBar"
          element={
            <main>
              <h1>Search</h1>
              <p>This is my Search page</p>
            </main>
          }
        />

        <Route
           path="/Login"
          element={() => (
            <main>
              <Login/>
            </main>
          )}
        />
      </Routes>

      <footer>
        <p>This is a Footer</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
