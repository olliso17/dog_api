import { ApiDogs } from "components/type/TypeDog";
import "../imageCard/ImageCard.css"



export default function Card(props: ApiDogs){
 
    const { image,name,className} = props;
 
    return <>
        <img src={image} alt={name} className={className} />
           
    </>;
}