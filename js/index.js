//Function to calculate my age, and update on my page
function calculateAge() {
    var date = new Date();
    var year = date.getFullYear();
    var myAge = year - 2003;
    console.log(myAge);

    var text = document.querySelector(".about-description").innerHTML = "Meu nome é Leonardo Gian Pottmayer, tenho " + myAge + " anos, nascido em Pomerode - SC. Comecei a estudar programação há algum tempo. Hoje estou cursando Ciência da Computação na Universidade Regional de Blumenau  - FURB, embora prefira aprender por conta própria, pesquisando várias tecnologias para maximizar meu conhecimento"
}