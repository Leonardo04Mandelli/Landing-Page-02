function ValidarCamposFormLogin(){
    if(document.formLogin.email.value.trim() === ""){
        alert("Preencha o campo E-MAIL! Obrigatório!!");
        document.formLogin.email.focus();
        return false;
    }

    if(document.formLogin.senha.value.trim() == ""){
        alert("Preencha o campo SENHA! Obrigatório!!");
        document.formLogin.senha.focus();
        return false;
    }
}

function ValidarCamposFormCadastro(){
    if(document.formCadastro.name.value.trim() === ""){
        alert("Preencha o campo NOME! Obrigatório!!");
        document.formCadastro.name.focus();
        return false;
    }

    if(document.formCadastro.email.value.trim() === ""){
        alert("Preencha o campo EMAIL! Obrigatório!!");
        document.formCadastro.email.focus();
        return false;
    }

    if(document.formCadastro.telefone.value.trim() === ""){
        alert("Preencha o campo TELEFONE! Obrigatório!!");
        document.formCadastro.telefone.focus();
        return false;
    }

    if(document.formCadastro.nascimento.value === ""){
        alert("Preencha o campo DATA DE NASCIMENTO! Obrigatório!!");
        document.formCadastro.nascimento.focus();
        return false;
    }

    if(document.formCadastro.curso.value === ""){
        alert("Selecione um Curso! Obrigatório");
        document.formCadastro.curso.focus();
        return false;
    }

    if(document.formCadastro.senha.value.trim() === ""){
        alert("Preencha o campo SENHA! Obrigatório!!");
        document.formCadastro.senha.focus();
        return false;
    }

    if(document.formCadastro.senha.value.length < 8 || document.formCadastro.senha.value.length > 10){
        alert("A senha deve conter no mínimo 8 e máximo 10 caracteres!");
        document.formCadastro.senha.focus();
        return false;
    }

    if(document.formCadastro.repSenha.value.trim() === ""){
        alert("Preencha o campo REPETIR SENHA! Obrigatório!!");
        document.formCadastro.repSenha.focus();
        return false;
    }

    if(document.formCadastro.repSenha.value.trim() != document.formCadastro.senha.value.trim()){
        alert("Os campos SENHA E REPETIR SENHA não conferem!");
        document.formCadastro.repSenha.focus();
        return false;
    }
}