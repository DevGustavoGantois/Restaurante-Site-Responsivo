let Botao_menuCelular = document.querySelector('#mobile_btn');
let menu_celular = document.querySelector('#menu_mobile');
let Botaofechar_menu = document.querySelector('#close_btn');
let inicioDaPagina = document.querySelector('.sessao-inicial');
let SessaoCardapio = document.querySelector('.menu-cardapio');
let SessaoAvaliacoes = document.querySelector('#testemunhas');


const sessoes = document.querySelectorAll('section');
const navItens = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    
    const PosicaoScroll = window.pageYOffset || document.documentElement.scrollTop;

    let sessaoAtivaIndex = 0;

    if (PosicaoScroll <= 0) {
        header.style.boxShadow = 'none';
    } else {
        header.style.boxShadow = '5px 1px 5px rgba(0,0,0,0.1)';
    }

    sessoes.forEach((sessao, i) => {
        const sessaoTopo = sessao.offsetTop - 96;
        const sessaoAbaixo = sessaoTopo + sessao.offsetHeight;

        if (PosicaoScroll >= sessaoTopo && PosicaoScroll < sessaoAbaixo) {
            sessaoAtivaIndex = i;
            return false;
        }
    });

    navItens.forEach((item, index) => {
        if (index === sessaoAtivaIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});
/*Criando efeito para página*/

document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.call-to-action', {
        origin: 'left',
        duration: 2000,
        distance: '10%'
    });
});

document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.prato-logo', {
        origin: 'right',
        duration: 2000,
        distance: '10%'
    });
});

document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.menu-cardapio', {
        origin: 'left',
        duration: 2000,
        distance: '10%'
    })
});

document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.menu-cardapio', {
        origin: 'left',
        duration: 2000,
        distance: '10%'
    })
});

document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('#testemunhas', {
        origin: 'right',
        duration: 2000,
        distance: '10%'
    })
});


