document.getElementById("loginButton").addEventListener("click", function() {
    var overlay = document.getElementById("overlay");
    overlay.classList.add("move-left");

    setTimeout(function() {
        overlay.innerHTML = `
            <h1>Ainda não nos conhecemos?</h1>
            Crie uma nova conta para acessar nosso site.<br>
            <button id="createAccountButton">Criar uma conta</button>
        `;

        document.getElementById("createAccountButton").addEventListener("click", function() {
            overlay.classList.remove("move-left");
            
            setTimeout(function() {
                overlay.innerHTML = `
                    <h1>Já nos conhecemos?</h1>
                    Faça login em uma conta já existente.<br>
                    <button id="loginButton">Fazer Login</button>
                `;
                // Reatach event listener to the login button after reverting
                document.getElementById("loginButton").addEventListener("click", function() {
                    var overlay = document.getElementById("overlay");
                    overlay.classList.add("move-left");
                });
            }, 500);
        });
    }, 500); // Espera a animação terminar antes de alterar o conteúdo
});
