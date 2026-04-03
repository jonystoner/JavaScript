// função auxilia para retornar true quando a tela for memor que 980px

function isMobile() {
    return window.innerWidth <= 980;
};

//==============
// Menu Lateral 
//=============

// trazendo o menu lateral 
const sidebar = document.getElementById("sidebar");
//selecionando a area principal do conteudo 
const content = document.getElementById("content");
//seleciona o botão e abre o menu lateral 
const menuToggleBtn = document.getElementById("menuToggleBtn");
//seleiocna o botão de fechar qye abre para o mobile
const closeSidebarBtn = document.getElementById("closeSidebarBtn");
//traz o fundo escuro quando ha a arbetura do menu 
const overlay = document.getElementById("overlay");


//========================================
// funções de funcionamento do menu mobile
//========================================

function openSidebarMobile() {
    //adicionar a classe que rece o menu 
    sidebar.classList.add("open");
    // TRAZ O OVERLAY 
    overlay.classList.add("show");
    //impedir a rolagem da tela do fundo
    document.body.classList.add("no-scroll");

};

function closeSidebarMobile() {
    //removendo  a classe que rece o menu 
    sidebar.classList.remove("open");
    // esconde O OVERLAY 
    overlay.classList.remove("show");
    //libera a rolagem da pagina
    document.body.classList.remove("no-scroll");
};

//=========================================
// funções de funcionamento do menu desktop
//=========================================

function toggleSidebarDesktop() {
    //o mobile é recolhido ou expandido
    sidebar.classList.toggle("collapsed");
    //ajusta o conteudo do site principal 
    content.classList.toggle("expanded")
};

//=========================================
// Construção da logica de abrir e fechar
//=========================================

function handleMenuToggle() {
    if (isMobile()) {
        if (sidebar.classList.contains("open")) {

            closeSidebarMobile();
        } else {
            openSidebarMobile();
        }
    }
    else {
        toggleSidebarDesktop();
    };
}

// ===================
//Eventos do menu
//==================

//adicionando o eevento de abertura do menu
menuToggleBtn.addEventListener("click", handleMenuToggle);
//adicionand o evento para fechamneto do menu via bottão 
closeSidebarBtn.addEventListener("click", closeSidebarMobile);
//adicionando o evento de fechamento clicando no overlay
overlay.addEventListener("click", closeSidebarMobile);

//========================
//Modal
//===============

//botão princiapl que abre o modal geral 
const openGeneralModalBtn = document.getElementById("openGeneralModalBtn")
//eestrutura principal do modal 
const modal = document.getElementById("modal")
//elementos internos do modal 
const modalTitle = document.getElementById("modalTitle")
const modaltext = document.getElementById("modalText")

//botões para fechamento do modal 
const closeModalBtn = document.getElementById("closeModalBtn")
const closeModalFooterBtn = document.getElementById("closeModalFooterBtn")



function openModal(title, text) {
    modalTitle.textContent = title;
    modaltext.textContent = text;

    modal.classList.add("show")

    document.body.classList.add("no-scroll")

}

function closeModal() {
    modal.classList.remove("show")

    document.body.classList.remove("no-scroll")

}


//=============
//evento modal 
//=============

openGeneralModalBtn.addEventListener("click", function () {
    openModal(
        "projeto de revisão",
        "Esse projeto foi pensado por causa da revisão com foco em interações comuns no front end cusca modal carrosel menu lateral cards"
    );
});


closeModalBtn.addEventListener("click", closeModal);

closeModalFooterBtn.addEventListener("click", closeModal);




//==============
//model de cards
//===============

const openCadrModalButtons = document.querySelectorAll(".open-card-modal");


openCadrModalButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const card = button.closest(".card");
        const title = card.querySelector("h4").textContent;
        const text = card.querySelector("p").textContent;
        openModal(title, text);
    });
})

//==============
//barra de busca
//===============

const searchInput = document.getElementById("searchInput");

const card = document.querySelectorAll(".card");

const emptyState = document.getElementById("emptyState");

// pegar o testado que foi digitado e compara 

searchInput.addEventListener("input", function () {
    //remove os epaços e deixa a minuscula 
    const term = searchInput.value.toLowerCase().trim();

    let visibleCard = 0;
    //percorre a lista de cars
    card.forEach(function (cards) {
        //busca os titulos dos cards
        const title = cards.querySelector("h4").textContent.toLowerCase();

        if (title.includes(term)) {
            cards.classList.remove("hidden-card");
            visibleCard++;
        } else {
            cards.classList.add("hidden-card");
        }
    });

    if (visibleCard === 0) {
        emptyState.classList.add("show")
    }
    else {
        emptyState.classList.remove("show")
    }
});


//==============
//Carrossel de slides
//===============

//buscando pelo id os elementos de dentro do html importante frisa que os campos devem ser iguais
const carouselImage = document.getElementById("carouselImage");
const carouselTitle = document.getElementById("carouselTitle");
const carouselText = document.getElementById("carouselText");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

//criando o objeto 
const slides = [
    {
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
        title: "revisão pratica com javascript",
        text: "um exemplo simples para trabalhar com eventos funções arrays e manipulação de dom"
    },
    {
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
        title: "codigo que pose ser reaproveitado",
        text: "a estrurura visual e as interações podem servir de base para portifolios dashborards e paginas institucionais"
    },
      {
        image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1400&q=80",
        title: "construções por etapas ",
        text: "podemos desenvolver cada recusro separadamente e depois integrar tudo no mesmo projeot "
    },
]

//estou criado uma variavel que per
let currentSlide = 0;

function renderSlide(){
    const slide = slides[currentSlide]
    //pega a imagem onde cno slide 
    carouselImage.src = slide.image
    //pega o testo no slide 
    carouselImage.alt = slide.title
    carouselTitle.textContent = slide.title
    carouselText.textContent = slide.text
};

//botão de proximo que pega a posição que ele esta e acresenta mais para ir pro proximo 
nextBtn.addEventListener("click",function(){
    currentSlide++;

    if(currentSlide >= slides.length) {
        currentSlide = 0;
    }
    renderSlide()
});

prevBtn.addEventListener("click", function(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = slides.length -1;
    }
    renderSlide();
});



//==============
//fechar modal com a tecla esc
//===============

document.addEventListener("keydown", function(event){
    if(event.key== "Escape"){
        closeModal();
        if(isMobile() && sidebar.classList.contains("open")){
            closeSidebarMobile();
        }
    }
})

renderSlide();



//==============
//facordeon
//===============




const faqItem = document.querySelectorAll(".faq-item");

faqItem.forEach(function(item){
    const questionBtn = item.querySelector(".faq-question");  

    questionBtn.addEventListener("click", function() {
        faqItem.forEach(i => {
            if( i !== item) {
                
                i.classList.remove("active")
            };
        });
        item.classList.toggle("active");

    })
})