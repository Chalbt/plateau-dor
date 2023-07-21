import "../styles/Prestation.css"

function Prestation({ image, title, description }) {

    return (
        <div className="prestation">
            <img className="image-prestation" src={image} alt="photo d'un plat"/>
            <div className="prestation-description">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
      </div>
    );

}

export default Prestation