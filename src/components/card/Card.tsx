import { ApiDogs } from "components/type/TypeDog";
import "../card/Card.css";

export default function Card(props: ApiDogs) {

    const { bred_for, breed_group, height, idCard, name, life_span, temperament, weight, className } = props;

    return (
        <div className={className} key={idCard}  >
            <h1>{name}</h1>
            <p><b>Tempo de vida:</b> {life_span}(anos)</p>
            <p><b>Temperamento: </b> {temperament}</p>
            <p><b>Criado para:</b> {bred_for}</p>
            <p><b>Grupo criado:</b> {breed_group}</p>
            <p><b>Altura Métrica:</b> {height}</p>
            <p><b>Peso Métrico:</b> {weight}</p>
        </div>
    );

}
