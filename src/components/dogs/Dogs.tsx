import Card from "components/card/Card";
import ImageCard from "components/imageCard/ImageCard";
import React from "react";
import { useEffect, useState } from "react";
import Api from "../../api/api";
import '../dogs/Dogs.css'




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

    return (
        <React.Fragment>

            {dogs?.map(
                dog => <div className="card-envolve">
                    <ImageCard  className={'image-dog'} name={dog['name']} image={dog['image']['url']}></ImageCard>
                    <Card className={'card-dog-description'}
                        name={dog['name']}
                        key={dog['id']} life_span ={dog['life_span']}
                        temperament={dog['temperament']} bred_for ={dog['bred_for']}
                        breed_group={dog['breed_group']} height={dog['height']['metric']}
                        weight = {dog['weight']['metric']}></Card>
                </div>


            )}

        </React.Fragment>

    );




}