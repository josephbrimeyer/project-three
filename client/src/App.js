import React from "react";
// import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile/index";
import Dashboard from "./pages/Dashboard";
// import Form from "./components/Form/index";
// function SignIn() {
//   return <h3> Sign in! </h3>;
// }

function App() {
  let isLoggedIn = false;
  if (isLoggedIn) {
    return <Dashboard />;
  } else {
    return <Profile />;
  }
}
export default App;
