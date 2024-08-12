$(document).ready(function () {
<<<<<<< HEAD
    $("#btnlogin").on('click', function () {
        $('#form').on('click', function (event) {
            event.preventDefaut()
        })

        var email = $('#email').val()
        var password = $('#password').val()
        var confirm = $('#confim').val()

        if (email != '' && password != '' && confirm != '') {
            if (password === confirm) {
                $.ajax({
                    url: 'http://localhost:3333/user',
                    method: 'post',
=======
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
>>>>>>> a4029d012b1e4f114310ab02bb5aa08838e97b64
                    cache: false,
                    dataType: 'json',
                    data: {
                        email: email,
<<<<<<< HEAD
                        senha: password
                    },
                    success: function () {
                        alert('usuario cadastrado')
                        $.ajax({
                            url: 'http://localhost:3333/login',
                            method: 'post',
                            cache: false,
                            dataType: 'json',
                            data: {
                                email: email,
                                senha: password
                            }
                        })
                        $('#form').each(function () {
                            this.reset()
                        })
=======
                        senha: senha
                    },

                    success: function () {
                        alert(' usuario adicionado com sucesso')
>>>>>>> a4029d012b1e4f114310ab02bb5aa08838e97b64
                    },
                    error: function (error) {
                        console.log(error)
                    }
                })
            } else {
<<<<<<< HEAD
                alert('as senhas devem ser iguais')
            }
        } else {
            alert('preencha corretamente')
        }

=======
                alert('Preencha corretamente')
            }
        }


>>>>>>> a4029d012b1e4f114310ab02bb5aa08838e97b64
    })
})