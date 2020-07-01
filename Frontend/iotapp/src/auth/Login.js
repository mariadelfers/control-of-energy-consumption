import React from 'react';

export default function SignIn({email, password}) {

    function checkUser(email, password){
        var request = new XMLHttpRequest();
        request.onreadystatechange = (e) => {
          if (request.readyState !== 4) {
            return;
          }
          if (request.status === 200) {
            console.log('success', request.responseText);
            //this.showAlertRepeatedName();
          } else {
            console.warn('error');
            //this.createRoom(name, type, stage);
          } 
        };
        request.open('GET', 'http://localhost:5000/login?username=' + email + '&password=' + password);
        request.send();
    }

  return (
    <div>

        <div class="limiter">
            <div class="container-login100">
                <div class="wrap-login100">
                    <form class="login100-form validate-form">
                        <span class="login100-form-title p-b-26">
                            Bienvenido
                        </span>

                        <div class="wrap-input100 validate-input">
                            <input  placeholder="Email" class="input100" type="text" name="email" value={email} />
                        </div>

                        <div class="wrap-input100 validate-input" data-validate="Enter password">
                            <span class="btn-show-pass">
                                <i class="zmdi zmdi-eye"></i>
                            </span>
                            <input placeholder="Password" class="input100" type="password" name="pass" value={password} />
                        </div>

                        <div class="container-login100-form-btn">
                            <div class="wrap-login100-form-btn">
                                <div class="login100-form-bgbtn"></div>
                                <button onClick={checkUser(email, password)}
                                class="login100-form-btn">
                                    Login
                                </button>
                            </div>
                        </div>

                        <div class="text-center">
                            <span class="txt1">¿No tienes cuenta?</span>
                            <a class="txt2" href="#">Regístrate</a>
                            <br></br><br></br><br></br>
                            <p className="copyright">Control del Consumo Eléctrico © 202</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    </div>
  );
}