$(document).ready(function () {
    var $select1 = $("#selecao")
    $select1.empty()
    $.ajax({
        url: 'http://localhost:3333/raca',
        method: 'get',
        success: function (result) {
            $.each(result, function (index, item) {
                $select1.append('<button class="btnraca" type="button" id="' + item.cod_raca + '">' + item.nome + '</button>')
            })
        },
        error: function (error) {
            console.log(error)
        }
    })
    $(document).on('click', '.btnraca', function () {
        var $descrition = $("#descricao")
        $descrition.empty()
        var id = $(this).attr('id')
        $.ajax({
            url: 'http://localhost:3333/raca/' + id,
            method: 'get',
            success: function (result) {
                $descrition.html("<h1>" + result.nome + "</h1> <hr>")
                if (result.forca == null || result.destreza == null || result.constituicao == null || result.sabedoria == null || result.inteligencia == null || result.carisma == null) {
                    $descrition.append("<h3> +2 em três atributos diferentes </h3>")
                }else{
                    $descrition.append("<h3> força: "+result.forca+" <br> destreza: "+result.destreza+" <br> constituição: "+result.constituicao+" <br> sabedoria: "+result.sabedoria+" <br> inteligencia: "+result.inteligencia+" <br> carisma: "+result.carisma+" <br></h3>")
                }
                $descrition.append("<h3> tamanho: "+result.tamanho+" <br> deslocamento: "+result.deslocamento+" metros </h3>")
            },
            error: function (error) {
                console.log(error)
            }
        })
    })
})
