import "../Assets/Login.css"
import React from "react"

const Login = () => {
    return (
        <div className="log">
            <div class="main">
                <input type="checkbox" id="chk" aria-hidden="true"></input>

                <div class="signup">
                    <form />
                    <label for="chk" aria-hidden="true">Sign up</label>
                    <input type="text" name="txt" placeholder="Enter your Name" required="" />
                    <input type="email" name="email" placeholder="Email" required="" />
                    <input type="password" name="pswd" placeholder="Password" required="" />
                    <button type="submit" id="signup" onclick="f1()">Sign up</button>
                </div>

                <div class="login">
                    <form />
                    <label for="chk" aria-hidden="true">Login</label>
                    <input type="email" name="email" placeholder="Email" required="" />
                    <input type="password" name="pswd" placeholder="Password" required="" />
                    <a href="/"><button type="submit">Login</button></a>
                </div>
            </div>

    {/* <script>
        function f1(){
            var a = document.getElementById("signup").value;
            
            window.location.assign(/HomePage);
        }
    </script> */}

            </div>
    );
}

export default Login;