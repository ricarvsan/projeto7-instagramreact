export default function Storie(props) {   
    return (     
            <div class="story">
                <div class="imagem">
                    <img src={props.src} alt={props.alt} />
                </div>
                <div class="usuario">
                    {props.user}
                </div>
            </div>
    )
};