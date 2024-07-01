import React, { useContext, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CompPrueba } from "../component/CompPrueba.jsx";
import { Card } from "../component/Card.jsx";

export const Home = () => {
	//desestructurar 
	const { store, actions } = useContext(Context)
	const [error, setError] = useState(false)

	return (
		<div className="text-center mt-5">
			<h2>Esto es home!</h2>
			{store.selected ? <p>nombre seleccionado: {store.selected}</p> : <p>selecciona un nombre!</p>}
			<p>a jorge le dicen {store.jorge}</p>
			<CompPrueba datoUno={'el 1'} datoDos={'el 2'} />
			{store.characters ? store.characters.map(el => <Card key={el.id} src={el.image} name={el.name} />) : <h2>loading</h2>}
		</div>
	);
}