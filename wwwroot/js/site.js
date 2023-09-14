// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function exibirMensagemErro(campo, alerta) { 
    var mensagemErro = document.getElementById("mensagens-erro");  
    mensagemErro.textContent = alerta;  
    mensagemErro.classList.add("error-message");
    campo.classList.add("campo-erro");  
}  

/* Função para limpar a mensagem de erro no formulário */
function limparMensagemErro(campo) {  
    var mensagemErro = document.getElementById("mensagens-erro");  
    mensagemErro.textContent = "";  
    mensagemErro.classList.remove("error-message");
    campo.classList.remove("campo-erro");  
}

function validaEmail() {  
    let campoEmail = document.getElementById("email").value.trim(); // Remove espaços em branco  
 
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campoEmail)) {  
        exibirMensagemErro(document.getElementById("email"), "Email deve estar no formato exemplo@email.com");  
        return false;  
    } else {  
        limparMensagemErro(document.getElementById("email"));  
        return true;  
    }  
}  


var elForm = document.getElementById("formulario");
elForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (validaEmail()) {
        
        $.ajax({
            url: $(this).attr("action"), // A URL para onde o formulário será enviado (a mesma action)
            type: "POST",
            data: $(this).serialize(), // Serializa os dados do formulário para envio
            
            success: function (response) {
                
                $("#feedback-btn").empty()

                var button = $("<button>")
                .text("Voltar ao Formulário")
                .addClass("btn btn-primary btn-return")
                .click(function () {
                    $("#form-container").show();
                    $("#feedback-container").hide();
                    $("#feedback-btn").hide();
                    $("#feedback-message").hide();
                });

                $("#feedback-btn").append(button);

                if (response.success) {
                    $("#form-container form")[0].reset();
                    $("#form-container").hide();
                    $("#feedback-container").show().html(response.message);
                    $("#feedback-message").show();
                    $("#feedback-btn").show();
                    $("#feedback-btn").append(button);
                    $("#feedback-message").show().addClass("feedback-success");
                    $("#feedback-container button").addClass("btn btn-primary");
                    $("#feedback-container button").addClass("btn btn-primary");

                } else {
                    $("#form-container").hide();
                    $("#feedback-container").show().html(response.message);
                    $("#feedback-btn").show();
                    $("#feedback-btn").append(button);
                    $("#feedback-container button").addClass("btn btn-primary");
                    $("#feedback-container").show().addClass("alert-danger");              
                }
            },
        });
    }
});