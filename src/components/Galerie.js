import "../styles/Galerie.css"
import Aperitif1 from "../assets/aperitif/aperitif-1.jpeg"
import Aperitif2 from "../assets/aperitif/aperitif-2.jpeg"
import Aperitif3 from "../assets/aperitif/aperitif-3.jpeg"
import Aperitif4 from "../assets/aperitif/aperitif-4.jpeg"
import Aperitif5 from "../assets/aperitif/aperitif-5.jpeg"
import Aperitif6 from "../assets/aperitif/aperitif-6.jpeg"
import Aperitif7 from "../assets/aperitif/aperitif-7.jpeg"
import Aperitif8 from "../assets/aperitif/aperitif-8.jpeg"

function Galerie() {
    
    return(
        <div className="galerie">
            <div className="galerie-1">
                <img className="aperitif-galerie" src={Aperitif1} alt="photo d'un plat malgache"/>
                <img className="aperitif-galerie" src={Aperitif2} alt="photo d'un plat malgache"/>
                <img className="aperitif-galerie" src={Aperitif3} alt="photo d'un plat malgache"/>
                <img className="aperitif-galerie" src={Aperitif4} alt="photo d'un plat malgache"/>
            </div>
            <div className="galerie-2">
                <img className="aperitif-galerie" src={Aperitif5} alt="photo d'un plat malgache"/>
                <img className="aperitif-galerie" src={Aperitif6} alt="photo d'un plat malgache"/>
                <img className="aperitif-galerie" src={Aperitif7} alt="photo d'un plat malgache"/>
                <img className="aperitif-galerie" src={Aperitif8} alt="photo d'un plat malgache"/>
            </div>
        </div>
    );

}

export default Galerie