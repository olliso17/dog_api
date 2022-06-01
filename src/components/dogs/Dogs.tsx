import Card from "components/card/Card";
import React from "react";
import { useEffect, useState } from "react";
import Api from "../../api/api";




export default function Dogs() {
    const [dogs, setDogs] = useState<[]>();
    // const [idDogs, setIDogs] = useState(Math.floor((Math.random() * 172) + 0));
    const[show, setShow]=useState(false);
    const[showImg, setShowImg]=useState(true);

    useEffect(() => {

        Api.get('/breeds').then((res) => {
            setDogs(res.data);

        }).catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });

    }, []);

    function aparece(){
        
        setShow(current =>!current);  

    }

    return (
        <React.Fragment>
            {dogs?.map(dog =>
                <Card onClick={aparece}
                    classDiv = 'aparece-div'
                    display= {show?'block':'none'}
                    className="card-dog" key={dog['id']} image={dog['image']['url']}
                    bred_for={dog['bred_fo']} breed_group={dog['breed_group']}
                    height={dog['height']['metric']} life_span={dog['life_span']}
                    name={dog['name']} temperament={dog['temperament']}
                    id={dog['id']} weight={dog['weight']['metric']}

                />

            )}
        </React.Fragment>

    );




}