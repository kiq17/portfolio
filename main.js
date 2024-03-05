const header = document.querySelector("header");
/* FIXANDO O POSICIONAMENTO DO HEADER */

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 10);
});

/* ANIMAÇÃO DO INDICAR DO MENU */

let list = document.querySelectorAll(".list");

function classes() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", classes));

/* MOVIMENTAÇÃO DOS LINKS INTERNOS */

class scrollSuave {
  constructor(links) {
    this.linkElements = document.querySelectorAll(links);
    this.addClique();
  }

  handleClique(evento) {
    evento.preventDefault();
    const href = evento.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    window.scrollTo({
      top: section.offsetTop - 100,
      behavior: "smooth",
    });
  }

  addClique() {
    this.linkElements.forEach((link) => {
      link.addEventListener("click", this.handleClique);
    });
  }
}

const scroll = new scrollSuave('a[href^="#"]');

/* FUNÇÃO PARA ATIVAR O INDICADOR AO EVENTO DE SCROLL */

const li = document.querySelectorAll(".list");

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionAltura = section.clientHeight;

    /* PARA AIVAR O INDICADOR QUANDO 1/3 DA SECTION APARECER NA TELA BASTA ULIZAR (sectionTop - sectionAltura / 3), MAS PARA UTLIZAR SOMENTO O TOPO USE sectionTop */

    if (scrollY >= sectionTop - sectionAltura / 3) {
      current = section.getAttribute("id");
    }
  });
  li.forEach((lista) => {
    if (lista.getAttribute("data-id") == current) {
      lista.classList.add("active");
    } else {
      lista.classList.remove("active");
    }
  });
});

/* ANIMAÇÕES */

window.sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1500,
  delay: 100,
  reset: true,
});

sr.reveal(".img-sobre", { origin: "left" });
sr.reveal(".texto-sobre", { origin: "right" });
sr.reveal(".img", { interval: 200 });
sr.reveal(".swiper-slide", { origin: "left", interval: 400 });
sr.reveal(".contato-info", { origin: "left" });
sr.reveal(".contato-form");

/* Tooltips */

const icons = document.querySelectorAll(".techs figure img");

icons.forEach((img) => {
  img.parentElement.style = "width: 50px; height: 50px; position: relative;";
  img.parentElement.addEventListener("mouseenter", () => {
    const div = document.createElement("div");
    div.setAttribute("id", img.alt);
    img.parentElement.appendChild(div);
    div.style =
      "position: absolute; width: max-content; border-radius: 12px; padding: 10px; font-size: 15px; background-color: #71717a; color: white;";
    div.textContent = img.alt;
  });

  img.parentElement.addEventListener("mouseleave", () => {
    const div = document.getElementById(img.alt);

    div.remove();
  });
});
