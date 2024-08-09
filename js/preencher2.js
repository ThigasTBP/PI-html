$(document).ready(function () {
    $('#btnSalvar').on('click', function () {
        $('#form').on('click', function (event) {
            event.preventDefault()
        })
        var teste = $('#codigo').val()
        var nome = $('#nome').val()
        

        console.log(teste);
        console.log(nome)
                
        if (teste != '' && nome != '' ) {
            $.ajax({
                url: 'http://localhost:3333/teste',
                method: 'POST',
                cache: false,
                dataType: 'json',
                data: {
                    teste: teste,
                    nome: nome
                },

                success: function () {
                    alert('teste adicionado com sucesso')
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