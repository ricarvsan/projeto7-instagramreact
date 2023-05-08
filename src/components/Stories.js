import Storie from "./Storie";

const stories = [{
    src: "assets/img/9gag.svg",
    alt: "9gag",
    user: "9gag"
},
{
    src: "assets/img/meowed.svg",
    alt: "meowed",
    user: "meowed"
},
{
    src: "assets/img/barked.svg",
    alt: "barked",
    user: "barked"
},
{
    src: "assets/img/nathanwpylestrangeplanet.svg",
    alt: "nathanwpylestrangeplanet",
    user: "nathanwpylestrangeplanet"
},
{
    src: "assets/img/wawawicomics.svg",
    alt: "wawawicomics",
    user: "wawawicomics"
},
{
    src: "assets/img/respondeai.svg",
    alt: "respondeai",
    user: "respondeai"
},
{
    src: "assets/img/filomoderna.svg",
    alt: "filomoderna",
    user: "filomoderna"
},
{
    src: "assets/img/memeriagourmet.svg",
    alt: "memeriagourmet",
    user: "memeriagourmet"
},
{
    src: "assets/img/9gag.svg",
    alt: "9gag",
    user: "9gag"
}];

export default function Stories() {
    return (
        <div class="stories">
            {stories.map(storie => <Storie src={storie.src} alt={storie.alt} user={storie.user} />)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}