$(document).ready(function () {
    var pontos = 20
    var forca = 10
    var destreza = 10
    var constituicao = 10
    var sabedoria = 10
    var inteligencia = 10
    var carisma = 10
    var $pontuacao = $("#boxpontos")
    $("#pforca").on('click', function () {
        pontos = pontos-1
        forca = forca+1
        $("#calcforca").html("<h1> 0 + 10 + "+(forca-10)+" = </h1>")
        $pontuacao.html("<h1>" + pontos + "</h1>")
    })
    $("#mforca").on('click', function(){
        pontos = pontos+1
        forca = forca-1
        $("#calcforca").html("<h1> 0 + 10 + "+(forca-10)+" = </h1>")
        $pontuacao.html("<h1>" + pontos + "</h1>")
    })
    $("#pdestreza").on('click', function () {
        pontos = pontos-1
        destreza = destreza+1
        $("#calcdestreza").html("<h1> 0 + 10 + "+(destreza-10)+" = </h1>")
        $pontuacao.html("<h1>" + pontos + "</h1>")
    })
    $("#mdestreza").on('click', function(){
        pontos = pontos+1
        destreza = destreza-1
        $("#calcdestreza").html("<h1> 0 + 10 + "+(destreza-10)+" = </h1>")
        $pontuacao.html("<h1>" + pontos + "</h1>")
    })
    $("#pconstituicao").on('click', function () {
        pontos = pontos-1
        constituicao = constituicao+1
        $("#calcconstituicao").html("<h1> 0 + 10 + "+(constituicao-10)+" = </h1>")
        $pontuacao.html("<h1>" + pontos + "</h1>")
    })
    $("#mconstituicao").on('click', function(){
        pontos = pontos+1
        constituicao = constituicao-1
        $("#calcconstituicao").html("<h1> 0 + 10 + "+(constituicao-10)+" = </h1>")
        $pontuacao.html("<h1>" + pontos + "</h1>")
    })
    $("#psabedoria").on('click', function () {
        pontos = pontos-1
        sabedoria = sabedoria+1
        $("#calcsabedoria").html("<h1> 0 + 10 + "+(sabedoria-10)+" = </h1>")
        $pontuacao.html("<h1>" + pontos + "</h1>")
    })
    $("#msabedoria").on('click', function(){
        pontos = pontos+1
        sabedoria = sabedoria-1
        $("#calcsabedoria").html("<h1> 0 + 10 + "+(sabedoria-10)+" = </h1>")
        $pontuacao.html("<h1>" + pontos + "</h1>")
    })
    $("#pinteligencia").on('click', function () {
        pontos = pontos-1
        inteligencia = inteligencia+1
        $("#calcinteligencia").html("<h1> 0 + 10 + "+(inteligencia-10)+" = </h1>")
        $pontuacao.html("<h1>" + pontos + "</h1>")
    })
    $("#minteligencia").on('click', function(){
        pontos = pontos+1
        inteligencia = inteligencia-1
        $("#calcinteligencia").html("<h1> 0 + 10 + "+(inteligencia-10)+" = </h1>")
        $pontuacao.html("<h1>" + pontos + "</h1>")
    })
    $("#pcarisma").on('click', function () {
        pontos = pontos-1
        carisma = carisma+1
        $("#calccarisma").html("<h1> 0 + 10 + "+(carisma-10)+" = </h1>")
        $pontuacao.html("<h1>" + pontos + "</h1>")
    })
    $("#mcarisma").on('click', function(){
        pontos = pontos+1
        carisma = carisma-1
        $("#calccarisma").html("<h1> 0 + 10 + "+(carisma-10)+" = </h1>")
        $pontuacao.html("<h1>" + pontos + "</h1>")
    })
})