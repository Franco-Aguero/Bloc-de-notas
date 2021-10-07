import React from 'react';
import { Link } from "react-router-dom";
import s from '../Notes/cardNote.module.css'

function CardNote({title, note, id, borrar}){

    return(
        <Link to={`/note/${id}`} className={s.container}>
        
            <div className={s.padher}>
                <span id={s.titl}>{title}</span>
                <span id={s.data}>{note}</span>
            </div>
            
        </Link>
    )
}
export default CardNote;