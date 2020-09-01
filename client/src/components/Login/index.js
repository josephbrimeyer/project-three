import React from "react";

function Login() {
  return;
  $(document).ready(() => {
    // Getting references to our form and inputs
    const loginForm = $("form.login");
    const emailInput = $("input#email-input");
    const passwordInput = $("input#password-input");
    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", (event) => {
      event.preventDefault();
      const userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim(),
      };
      if (!userData.email || !userData.password) {
        return;
      }
      // If we have an email and password we run the loginUser function and clear the form
      loginUser(userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");
    });
    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(email, password) {
      $.post("/api/login", {
        email: email,
        password: password,
      })
        .then(() => {
          window.location.replace("/members");
          // If there's an error, log the error
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
}
export default Login;

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <!-- Compiled and minified JavaScript, Materialize-->
//     <link
//       rel="stylesheet"
//       type="text/css"
//       href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
//     />

//     <link rel="stylesheet" type="text/css" href="css/style.css" />

//     <script
//       src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
//       integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
//       crossorigin="anonymous"
//     ></script>
//     <script
//       src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
//       integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
//       crossorigin="anonymous"
//     ></script>
//     <script
//       src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
//       integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
//       crossorigin="anonymous"
//     ></script>

//     <link rel="stylesheet" href="css/style.css" type="text/css" />
//     <script
//       src="https://code.jquery.com/jquery-3.5.0.min.js"
//       integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ="
//       crossorigin="anonymous"
//     ></script>
//   </head>

//   <body class="d-flex flex-column min-vh-100" id="moviePage">
//     <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
//       <a class="navbar-brand" href="index.html">DevConnect</a>
//       <button
//         class="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarSupportedContent"
//         aria-controls="navbarSupportedContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span class="navbar-toggler-icon"></span>
//       </button>

//       <div class="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul class="navbar-nav mr-auto">
//           <li class="nav-item active">
//             <a class="nav-link" href="login.html"
//               >Member Login<span class="sr-only">(current)</span></a
//             >
//           </li>

//           <li class="nav-item">
//             <a class="nav-link" href="signup.html">Sign Up</a>
//           </li>
//         </ul>
//         <input type="text" placeholder="Search..." id="searchbar" />
//       </div>
//     </nav>

//     <div class="container">
//       <div class="row">
//         <div class="col-md-6 col-md-offset-3">
//           <h2>Login Form</h2>
//           <form class="login">
//             <div class="form-group">
//               <label for="exampleInputEmail1">Email address</label>
//               <input
//                 type="email"
//                 class="form-control"
//                 id="email-input"
//                 placeholder="Email"
//               />
//             </div>
//             <div class="form-group">
//               <label for="exampleInputPassword1">Password</label>
//               <input
//                 type="password"
//                 class="form-control"
//                 id="password-input"
//                 placeholder="Password"
//               />
//             </div>
//             <button type="submit" class="btn btn-default">Login</button>
//           </form>
//           <br />
//           <p>Or sign up <a href="/">here</a></p>
//         </div>
//       </div>
//     </div>

//     <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
//     <!-- <script type="text/javascript" src="js/login.js"></script> -->

//     <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
//     <script type="text/javascript" src="js/login.js"></script>
//   </body>
// </html>
