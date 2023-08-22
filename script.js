let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        };
    })



    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);


    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active');

};

let darkModeIcon = document.querySelector('#darkMode-icon')

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('modo-escuro');
};


function validarFormulario(event) {
    event.preventDefault();

    // Verificar se os campos obrigatórios estão vazios
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var cpf = document.getElementById("cpf").value;

    if (nome === "" || email === "" || senha === "" || cpf === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        exibirMensagem(event);
    }

    console.log
}

function exibirMensagem(event) {

    event.preventDefault();
    var mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.style.display = "block";
    mensagemDiv.style.position = "fixed";
    mensagemDiv.style.top = "50%";
    mensagemDiv.style.left = "50%";
    mensagemDiv.style.transform = "translate(-50%, -50%)";
    mensagemDiv.classList.remove("mensagem-aparecendo"); // Remove a classe antes de adicioná-la novamente
    setTimeout(function () {
        mensagemDiv.classList.add("mensagem-aparecendo");
    }, 100);
}


function fechar() {
    var mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.style.display = "none"
}