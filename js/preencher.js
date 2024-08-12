$(document).ready(function () {
    {
        var $select1 = $("#raca")
        $select1.empty()
        $select1.append('<option value="">escolha uma raca</option>')
        $.ajax({
            url: 'http://localhost:3333/raca',
            method: 'get',
            success: function (result) {
                $.each(result, function (index, item) {
                    $select1.append("<option value=" + item.cod_raca + ">" + item.nome + "</option>")
                })
            },
            error: function (error) {
                console.log(error)
            }
        })
    }
    {
        var $select2 = $("#classe")
        $select2.empty()
        $select2.append('<option value="">escolha uma classe</option>')
        $.ajax({
            url: 'http://localhost:3333/classe',
            method: 'get',
            success: function (result) {
                $.each(result, function (index, item) {
                    $select2.append("<option value=" + item.cod_classe + ">" + item.nome + "</option>")
                })

            },
            error: function (error) {
                console.log(error)
            }
        })
    }

    $('#btnSalvar').on('click', function () {
        $('#form').on('click', function (event) {
            event.preventDefault()
        })

        var forca = $('#forca').val()
        var des = $('#destreza').val()
        var con = $('#constituicao').val()
        var int = $('#inteligencia').val()
        var sab = $('#sabedoria').val()
        var car = $('#carisma').val()
        var nome = $('#nome').val()
        var classe = $('#classe').val()
        var raca = $('#raca').val()
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