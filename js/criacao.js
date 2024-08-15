$(document).ready(function () {
    var forca = $('#forca').val()
    var des = $('#destreza').val()
    var con = $('#constituicao').val()
    var int = $('#inteligencia').val()
    var sab = $('#sabedoria').val()
    var car = $('#carisma').val()
    var nome = $('#nome').val()
    var classe = $('#classe').val()
    var raca


    var $select1 = $("#selecao1")
    $select1.empty()
    $.ajax({
        url: 'http://localhost:3333/raca',
        method: 'get',
        success: function (result) {
            $('.selecao1').hide()
            $.each(result, function (index, item) {
                $select1.append('<button class="btnraca" type="button" id="' + item.cod_raca + '">' + item.nome + '</button>')
            })
        },
        error: function (error) {
            console.log(error)
        }
    })

    var $select2 = $("#selecao2")
    $select2.empty()
    $.ajax({
        url: 'http://localhost:3333/classe',
        method: 'get',
        success: function (result) {
            $('.selecao2').hide()
            $.each(result, function (index, item) {
                $select2.append('<button class="btnclasse" type="button" id="' + item.cod_classe + '">' + item.nome + '</button>')
            })
        },
        error: function (error) {
            console.log(error);

        }
    })

    $(document).on('click', '.btnraca', function () {
        var $descrition = $("#descricao")
        $descrition.empty()
        let id = $(this).attr('id')
        raca = id
        $.ajax({
            url: 'http://localhost:3333/raca/' + id,
            method: 'get',
            success: function (result) {
                $descrition.html("<h1>" + result.nome + "</h1> <hr>")
                if (result.forca == null || result.destreza == null || result.constituicao == null || result.sabedoria == null || result.inteligencia == null || result.carisma == null) {
                    $descrition.append("<h3> +2 em três atributos diferentes </h3>")
                } else {
                    $descrition.append("<h3> força: " + result.forca + " <br> destreza: " + result.destreza + " <br> constituição: " + result.constituicao + " <br> sabedoria: " + result.sabedoria + " <br> inteligencia: " + result.inteligencia + " <br> carisma: " + result.carisma + " <br></h3>")
                }
                $descrition.append("<h3> tamanho: " + result.tamanho + " <br> deslocamento: " + result.deslocamento + " metros </h3>")
            },
            error: function (error) {
                console.log(error)
            }
        })
    })
    $(document).on('click', '.btnclasse', function () {
        var $descrition = $("#descricao")
        $descrition.empty()
        let id = $(this).attr('id')
        classe = id
        $.ajax({
            url: 'http://localhost:3333/classe/' + id,
            method: 'get',
            success: function (result) {
                $descrition.html("<h1>" + result.nome + "</h1> <hr>")
                $descrition.append("<h3> vida: " + result.vida + " + " + result.vida_nivel + " por nivel <br> mana: " + result.mana + " por nivel <br> proficiencias: " + result.proficiencia_arma + ", " + result.proficiencia_armadura + ", " + result.proficiencia_escudo + " </h3>")

            },
            error: function (error) {
                console.log(error)
            }
        })
    })



    $(document).on('click', '#changec', function () {
        $('.selecao1').hide()
        $('.selecao2').show()
    })

    $(document).on('click', '#changer', function () {
        $('.selecao2').hide()
        $('.selecao1').show()
    })

    $(".aleatoria").hide()
    $(".distribuir").hide()

    $(document).on('click', '#opcaodis', function () {
        $('.distribuir').show()
        $('.geracao').hide()
    })

    $(document).on('click', '#opcaoale', function () {
        $('.aleatoria').show()
        $('.geracao').hide()
    })

    $(document).on('click', '#btnconfirm', function () {
        $('#form').on('click', function (event) {
            event.preventDefault()
        })
        if (nome != '' && raca != '' && classe != '' && forca != '' && des != '' && con != '' && int != '' && sab != '' && car != '') {
            $.ajax({
                url: 'http://localhost:3333/personagem',
                method: 'post',
                cache: false,
                dataType: 'json',
                data: {
                    forca: forca,
                    destreza: des,
                    constituicao: con,
                    inteligencia: int,
                    sabedoria: sab,
                    carisma: car,
                    nome: nome,
                    nivel_total: 1,
                    cod_classe: classe,
                    cod_raca: raca,
                },

                success: function () {
                    alert('perssonagem adicionado com sucesso')
                    $('#form').each(function () {
                        this.reset()
                    })
                    location.reload()
                },
                error: function (error) {
                    console.log(error)
                }
            })
        } else {
            alert('Preencha corretamente')
        }
    })
})