import "../head.css"

export default function Header(){

    function hoverImage(){
        console.log("You hovered over the image!")
    }

    return(
        <div className="top" onMouseOver={hoverImage}>
            <img src="images/bot.png" alt="robot icon" />
            <h2>Chef Claude</h2>
        </div>
    )
}