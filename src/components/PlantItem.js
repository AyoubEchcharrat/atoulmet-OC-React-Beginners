import CareScale from "./CareScale"
import monstera from '../assets/monstera.jpg'
export default function PlantItem({ id, cover, name, light, water }) {



    return (
        <div>
            <img src={monstera} className="lmj-plant-item" alt="plant" />
            {name}
            <CareScale careType='water' scaleValue={water} />
            <CareScale careType='light' scaleValue={light} />
        </div>
    )
}