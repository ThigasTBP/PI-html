$(document).ready(function () {
    let valor = []
    for (let index = 0; index < 6; index++) {
        let result = []
        for (let index2 = 0; index2 < 4; index2++) {
            result.push(Math.ceil(Math.random() * 6))
        }
        result.sort((a, b) => a - b)
        result.shift()
        result = result[0] + result[1] + result[2]
        if (result <= 6) {
            index = index - 1
        } else {
            valor.push(result)
        }
    }
    $('#valor1').html(valor[0].toString().padStart(2, '0'))
    $('#valor2').html(valor[1].toString().padStart(2, '0'))
    $('#valor3').html(valor[2].toString().padStart(2, '0'))
    $('#valor4').html(valor[3].toString().padStart(2, '0'))
    $('#valor5').html(valor[4].toString().padStart(2, '0'))
    $('#valor6').html(valor[5].toString().padStart(2, '0'))

    $('#valor1').on("click", function () {
        guardar = valor[0]
    })
    $('#valor2').on("click", function () {
        guardar = valor[1]
    })
    $('#valor3').on("click", function () {
        guardar = valor[2]
    })
    $('#valor4').on("click", function () {
        guardar = valor[3]
    })
    $('#valor5').on("click", function () {
        guardar = valor[4]
    })
    $('#valor6').on("click", function () {
        guardar = valor[5]
    })

    $("#forca").on('click', function () {
        forca = guardar
        guardar = 0
        $("#calcforca").html("<h1> 0 + " + (forca) + " = </h1>")
    })

    $("#destreza").on('click', function () {
        destreza = guardar
        guardar = 0
        $("#calcdestreza").html("<h1> 0 + " + (destreza) + " = </h1>")
    })

    $("#constituicao").on('click', function () {
        constituicao = guardar
        guardar = 0
        $("#calcconstituicao").html("<h1> 0 + " + (constituicao) + " = </h1>")
    })

    $("#sabedoria").on('click', function () {
        sabedoria = guardar
        guardar = 0
        $("#calcsabedoria").html("<h1> 0 + " + (sabedoria) + " = </h1>")
    })

    $("#inteligencia").on('click', function () {
        inteligencia = guardar
        guardar = 0
        $("#calcinteligencia").html("<h1> 0 + " + (inteligencia) + " = </h1>")
    })

    $("#carisma").on('click', function () {
        carisma = guardar
        guardar = 0
        $("#calccarisma").html("<h1> 0 + " + (carisma) + " = </h1>")
    })
})