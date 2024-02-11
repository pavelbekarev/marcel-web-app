import { useEffect, useState } from "react";
import "../styles/Slider.scss";
import axios from "axios";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";

const Slider = () => {
    const url1 = "https://api.unsplash.com/photos/random/?client_id=W_svICIqdwVBQnQ3RwP57C4s6B1U4vxpg7rOHg_PRrY&count=4";
    const [character, setCharacter] = useState<any[]>([]);
    const [img, setImg] = useState<any>();

    useEffect(() => {
        axios.get(url1).then(res => {
            setCharacter(res.data);
        })
    }, [])

    return (
        <div className="slider__wrapper">
            <div className="slider__items">
                {
                    character && character.map((el) => {
                        return (
                            <div className="slider__item">
                                <img key={el.user.id} src={el.urls.regular} alt="" />
                            </div>
                        )
                    })
                }
            </div>

            <div className="load-button">
                <a href="">Загрузить</a>
            </div>
        </div>
    );
}


export default Slider;