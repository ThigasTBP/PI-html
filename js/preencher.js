$(document).ready(function(){
   $('#btnSalvar').on('click',function(){
    $('#form').on('click', function(event){
        event.preventDefault()
    })
    var nome = $('#nome').val()
    var raca = $('#raca').val()
    var classe = $('#classe').val()
    var forca = $('#forca').val()
    var des = $('#destreza').val()
    var con = $('#constituicao').val()
    var int = $('#inteligencia').val()
    var sab = $('#sabedoria').val()
    var car = $('#carisma').val()

    console.log(nome)
    console.log(raca)

    if (nome != '' && raca != '' && classe != '' && forca != '' && des != '' && con != '' && int != '' && sab != '' && car !='') {
        console.log('teste'),
        $.ajax({
            url: 'http://localhost:3333/personagem',
            method: 'POST',
            cache: false,
            dataType:'json',
            data: {
                nome: nome,
                forca: forca,
                destreza: des,
                constituicao: con,
                inteligencia: int,
                sabedoria: sab,
                carisma: car,
                cod_raca: raca,
                cod_classe: classe

            },
            
            success: function() {
                alert('perssonagem adicionado com sucesso')
                $('#form').each(function () {
                    this.reset()
                })
                location.reload()
            },
            error: function(error){
                console.log(error)
            }
        })
    } else {
        alert('Preencha corretamente')
    }
   })
})