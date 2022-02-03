//Para os homens, podemos usar a fórmula: TMB = 66 + (13,8 x peso em kg.) + (5 x altura em cm) - (6,8 x idade em anos).
//Para as mulheres, usa-se a fórmula: TMB = 655 + (9,6 x peso em kg.) + (1,8 x altura em cm) - (4,7 x idade em anos).

//Event listener
$("#buttonClear").click(function() {
    document.getElementById('sex').checked = false;
    $("#weight").val("");
    $("#height").val("");
    $("#age").val("");
    $("#result").html("");
});

$("#buttonCalculate").click(function() {
    var sex = document.getElementById('sex').checked;
    var weight = $("#weight").val();
    var height = $("#height").val();
    var age = $("#age").val();
    var result = $("#result");
    result.html(calculate(sex, weight, height, age));
})

//Function to get all the values
function calculate(sex, weight, height, age) {

    if (weight == "") {
        return "Erro - Peso não preenchido!";
    } else if (height == "") {
        return "Erro - Altura não preenchida!";
    } else if (age == "") {
        return "Erro - Idade não preenchida!";
    } else {
        if (sex) {
            var tmb = Math.floor(66 + (13.8 * weight) + (5 * height) - (6.8 * age));
            return tmb;
        } else if (!sex) {
            var tmb = Math.floor(655 + (9.6 * weight) + (1.8 * height) - (4.7 * age));
            return tmb;
        } else {
            return "Erro!";
        }
    } 
}

