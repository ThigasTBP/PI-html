$(document).ready(function () {
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
                    cache: false,
                    dataType: 'json',
                    data: {
                        email: email,
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
                    },
                    error: function (error) {
                        console.log(error)
                    }
                })
            } else {
                alert('as senhas devem ser iguais')
            }
        } else {
            alert('preencha corretamente')
        }

    })
})