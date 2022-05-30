import { MouseEventHandler, useEffect, useState } from "react";
import Api from "../../api/api";
import "../dogs/Dogs.css"

type ApiDogs = {
     bred_for:string,
     breed_group:string,
      height:{
          imperial: string,
          metric: string
      },
     id: number, 
     image:{
        height:number,
        id: string,
        url: string,
        width:number
     },
     life_span: string,
     name: string,
     origin: string,
     reference_image_id:string,
     temperament:string,
    weight:{
        imperial: string,
        metric:string,
    },
    
}

export default function Cards (){
    const delay = 5;
    const [dogs, setDogs] = useState<ApiDogs>();
    const [idDogs, setIDogs] = useState(Math.floor((Math.random()*172)+0));

    useEffect(()=>{
        
        Api.get('/breeds?attach_breed='+idDogs).then((res) =>{          
                setDogs(res.data[idDogs]); 
              
            }).catch((err) => {
                console.error("ops! ocorreu um erro" + err);
        });
        // return () => window.clearInterval(timeoutID );
    },[]);
    
return(
    <div className="dogs">
            <img src={dogs?.image.url} alt="" />
            <button >Próximo</button>
            <ul className='ulDogs' key={dogs?.id}>
                <h2>{dogs?.name}</h2>
                <li><b>Tempo de vida:</b> {dogs?.life_span}(anos)</li>
                <li>Temperamento: {dogs?.temperament}</li>
                <li>Criado para: {dogs?.bred_for}</li>
                <li>Grupo criado: {dogs?.breed_group}</li>
                <li>Altura imperial: {dogs?.height.imperial}</li>
                <li>Altura Métrica: {dogs?.height.metric}</li>
                <li>Peso Imperial: {dogs?.weight.imperial}</li>
                <li>Peso Métrico: {dogs?.weight.metric}</li>
                

            </ul>
            
      </div>
 );
}