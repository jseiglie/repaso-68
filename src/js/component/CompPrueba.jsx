import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const CompPrueba = ({ datoUno, datoDos }) => {
    const { store, actions } = useContext(Context)


    const handleSelect = (name) => {
        actions.selectName(name)
    }

    return (
        <>
            <p>{datoUno}</p>
            <p>{datoDos}</p>
            <p>da al boton para logear al usuario!.. cuidado!</p>
            <button onClick={() => actions.login()}>
                log user
            </button>
            <button onClick={actions.nextName}>next name</button>
            <div className="d-flex justify-content-center">
                {store.nombres.map((el, i)=> <div key={i} className="card" style={{ width: '18rem' }}>
                    <h2>{el}</h2>
                    <button onClick={()=>handleSelect(el)}>select name</button>
                </div>)}
            </div>

        </>

    )

}