import "../card/Card.css"

type ApiDogs = {
    bred_for?: string,
    breed_group?: string,
    height?:string
    id?: number,
    image?: string
    life_span?: string,
    name?: string,
    temperament?: string,
    weight?: string,
    className?:string,
    display: string,
    classDiv: string,
    onClick:React.MouseEventHandler<HTMLButtonElement>
}


export default function Card(props: ApiDogs){
 
    const { bred_for, breed_group, height, id, image, life_span, name, temperament, weight, className, display, classDiv, onClick} = props;
 
    return <button className={className} key={id} onClick ={onClick}>
        <img src={image} alt="" />
            <h2>{name}</h2>
            <div className={classDiv} key={id} style={{ display }}>
               <p><b>Tempo de vida:</b> {life_span}(anos)</p>
                <p>Temperamento: {temperament}</p>
                <p>Criado para: {bred_for}</p>
                <p>Grupo criado: {breed_group}</p>
                <p>Altura Métrica: {height}</p>
                <p>Peso Métrico: {weight}</p> 
            </div>
    </button>;
}