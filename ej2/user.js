let boton = document.getElementById("btn");
const usuario = document.getElementById('usuario');
const contraseña = document.getElementById('contraseña');

async function login(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response.json();
  }

async function init() {
    await login('http://localhost:3010/login', {
        user: usuario.value,
        password: contraseña.value,
    }).then(res => {
        if( res.data == true ){
            document.getElementById('log').style.display = 'block';
        }else{
            document.getElementById('error').style.display = 'block';
        }
    }).catch(error => {
        console.log(error);
    });
}
boton.addEventListener('click', () =>{
    init();
    document.getElementById('login').style.display = 'none';
    document.getElementById('error').style.display = 'none';
})