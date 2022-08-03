var formulario = document.querySelector('form')

formulario.addEventListener('submit', function(e){

        // bloqueia a atualização pós pesquisa
        e.preventDefault()

        // site usado como fonte de dados
        let urlForm = "https://pokeapi.co/api/v2/pokemon/";

        // atalho do index
        let nome = document.getElementById("name")

        // resultado apresentado no alerta
        urlForm = urlForm + this.name.value

        // deixa o resultado all minusculo
        urlForm = urlForm.toLocaleLowerCase()

        //
        let resposta  = document.getElementById("content")

        //
        let imagem = document.getElementById("imgPokemon")

        //
        let html = ' '
        
        fetch(urlForm)
                .then(resposta => resposta.json())
                .then(function(data){
                        console.log(data)
                        html = 'Nome: ' + maiuscula(data.name) + '<br>'
                        html = html + 'Tipo: ' + maiuscula(data.types[0].type.name)
                        resposta.innerHTML = html

                        imagem.innerHTML = "<img src='"+ data.sprites.front_default +"'><img src='"+ data.sprites.back_default + "'>"
        })
        .catch(function(err) {
                err == 'SyntaxError: Unexpected token N in JSON at position 0' ? html = 'Pokémon não encontrado!' : html = `Erro ${err}`; 
                resposta.innerHTML = html
        })

});

function maiuscula(val){
        return val[0].toUpperCase() + val.substr(1)
}