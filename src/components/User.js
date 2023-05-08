export default function User() {
    let nome = "catanacomics";

    function alteraNome() {
        nome = prompt('Digite seu nome:');
    }

    return (
        <div class="usuario">
            <img src="assets/img/catanacomics.svg" alt="imagem de perfil" />
            <div class="texto">
                <span>
                    <strong>{nome}</strong>
                    <ion-icon name="pencil" onClick={() => alteraNome()}></ion-icon>
                </span>
            </div>
        </div>
    );
}