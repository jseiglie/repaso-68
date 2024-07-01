import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";

export const Footer = () =>{ 
	const {store, actions} = useContext(Context);

	return (
	<footer className={`footer mt-auto py-3 text-center  ${store.auth? 'bg-warning' : ''}`}>
		<p>
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<a href="http://www.4geeksacademy.com">4Geeks Academy</a>
		</p>
	</footer>
);}
