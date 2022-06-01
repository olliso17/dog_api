import Card from "components/Card";
import React from "react";
import { useEffect, useState } from "react";
import Api from "../../api/api";
import "../dogs/Dogs.css"



export default function Dogs() {
    const [dogs, setDogs] = useState<[]>();
    // const [idDogs, setIDogs] = useState(Math.floor((Math.random() * 172) + 0));

    useEffect(() => {

        Api.get('/breeds').then((res) => {
            setDogs(res.data);

        }).catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });

    }, []);
    console.log(dogs);
    return (
        <React.Fragment>
            {dogs?.map(dog =>
                <Card key={dog['id']} image={dog['image']['url']}
                    bred_for={dog['bred_fo']} breed_group={dog['breed_group']}
                    height={dog['height']['metric']} life_span={dog['life_span']}
                    name={dog['name']} temperament={dog['temperament']}
                    id={dog['id']} weight={dog['weight']['metric']}

                />

            )}
        </React.Fragment>

    );




}