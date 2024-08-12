$(document).ready(function () {
    $("#btnsalvar").on("click", function () {
        $(".form").on("click", function (event) {
            event.preventDefault()
        })
        var email = $(".email").val()
        var senha = $(".password").val()
        var confirm = $(".confirm").val()



        if (email != '' && senha != '' && confirm != '') {
            if (senha == confirm) {
                console.log(email);
                console.log(senha);
                console.log(confirm);
                $.ajax({
                    url: 'http://localhost:3333/user',
                    method: 'POST',
                    cache: false,
                    dataType: 'json',
                    data: {
                        email: email,
                        senha: senha
                    },

                    success: function () {
                        alert(' usuario adicionado com sucesso')
                    },
                    error: function (error) {
                        console.log(error)
                    }
                })
            } else {
                alert('Preencha corretamente')
            }
        }


    })
})