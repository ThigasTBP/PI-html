$(document).ready(function () {
    $('#btnSalvar').on('click', function () {
        $('#form').on('click', function (event) {
            event.preventDefault()
        })
        var cod_personagem = $('#codigo').val()
        var nome = $('#nome').val()
        var raca = $('#raca').val()
        var classe = $('#classe').val()
        var forca = $('#forca').val()
        var des = $('#destreza').val()
        var con = $('#constituicao').val()
        var int = $('#inteligencia').val()
        var sab = $('#sabedoria').val()
        var car = $('#carisma').val()

        console.log(cod_personagem);
        console.log(nome)
        console.log(raca)
        console.log(classe);
        console.log(forca);
        console.log(des);
        console.log(con);
        console.log(int);
        console.log(sab);
        console.log(car);
        
        if (cod_personagem != '' && nome != '' && raca != '' && classe != '' && forca != '' && des != '' && con != '' && int != '' && sab != '' && car != '') {
            $.ajax({
                url: 'http://localhost:3333/personagem',
                method: 'post',
                cache: false,
                dataType: 'json',
                data: {
                    cod_personagem: cod_personagem,
                    forca: forca,
                    destreza: des,
                    constituicao: con,
                    inteligencia: int,
                    sabedoria: sab,
                    carisma: car,
                    nome: nome,
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