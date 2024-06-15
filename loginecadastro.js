var firebaseConfig = {
    apiKey: "AIzaSyDKy08i8dJ4syN19H3MaIkWjqUSHo5tVLc",
    authDomain: "portugues-em-acao---site-32ce8.firebaseapp.com",
    projectId: "portugues-em-acao---site-32ce8",
    storageBucket: "portugues-em-acao---site-32ce8.appspot.com",
    messagingSenderId: "962198771315",
    appId: "1:962198771315:web:d98a2630a7539b020abc06"
};

firebase.initializeApp(firebaseConfig);

var auth = null;

function cadastrar() {
    firebase.auth().createUserWithEmailAndPassword(document.getElementById("emailcadastro").value, document.getElementById("senhacadastro").value)
        .then(function(user) {
            alert("Cadastrado realizado com sucesso. Seja bem vindo(a) ao Português em Ação!");
            auth = user;
            window.location.href = "loginecadastro.html";
        }).catch(function(error) {
            alert("Falha ao realizar o cadastro. Tente novamente!");
        });
}


function login() {
    var email = document.getElementById("emaillogin").value;
    var senha = document.getElementById("senhalogin").value;

    firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(function(user) {
            auth = user;
            window.location.href = "home.html";
        }).catch(function(error) {
            alert("Email e/ou senha incorreto(s). Por favor, tente novamente!");
        });
}