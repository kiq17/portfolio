const header = document.querySelector('header');
/* FIXANDO O POSICIONAMENTO DO HEADER */

window.addEventListener('scroll', ()=> {
    header.classList.toggle('sticky', window.scrollY > 10);
});


/* ANIMAÇÃO DO INDICAR DO MENU */

let list = document.querySelectorAll('.list');

function classes() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) => item.addEventListener('click', classes));

/* ABRIR E FECHAR PARTE DO FRONT-END E BACK-END NA SESSAO CONHECIMENTOS*/

const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const quetion = e.currentTarget.parentElement.parentElement;
        quetion.classList.toggle("mostrar");
    });
});


/* MOVIMENTAÇÃO DOS LINKS INTERNOS */

class scrollSuave {
    constructor(links) {
        this.linkElements = document.querySelectorAll(links)
        this.addClique();
    }

    handleClique(evento) {
        evento.preventDefault();
        const href = evento.currentTarget.getAttribute('href');
        const section = document.querySelector(href)
        window.scrollTo({
            top: section.offsetTop - 100,
            behavior: 'smooth'
        })
    }

    addClique() {
        this.linkElements.forEach(link => {
            link.addEventListener('click', this.handleClique)
        })
    }

    
}

const scroll = new scrollSuave('a[href^="#"]');

/* FUNÇÃO PARA ATIVAR O INDICADOR AO EVENTO DE SCROLL */

const li = document.querySelectorAll('.list')

const sections = document.querySelectorAll('section')


window.addEventListener('scroll', ()=>{
    let current = ''
    sections.forEach(section=>{
        const sectionTop = section.offsetTop
        const sectionAltura = section.clientHeight

        if(pageYOffset >= (sectionTop - sectionAltura / 3)){
            current = section.getAttribute('id')
        }
    })
    li.forEach(lista =>{
        if(lista.getAttribute('data-id') == current){
            lista.classList.add('active')
        } else{
            lista.classList.remove('active')
        }
    })
})
