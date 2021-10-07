import React, { useState } from 'react';
import Note from '../Notes/notes'
import s from './refactorNote.module.css';
import {deletNote} from '../../actions/Actions';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

export default function RefactorNote({id}){
    const store = useSelector(state => state.notes);
    const dispatch = useDispatch();
    const ho =  store.filter(el => el.id === id);
    const [modify, setModify] = useState({
        mNote: '',
        mTitle:''
    })
     function handleChange(e){
         setModify({
             ...modify,
            [e.target.name] : e.target.value/* PUSE EL OBJETO COMO VALOR DE MI TEXT TAREA, NO FUNCIONA NADA */
        })
     }
       
    return(
        <div>

            <form className={s.container}/*  onSubmit={ (e) => handleSubmit(e)} */>
                <div className={s.lineText}>
                    <hr  id={s.line}/>
                    <textarea id={s.inpNote} name="mNote" value={modify.mNote}  onChange={ e => handleChange(e) }  placeholder='Your Notes'>{ho[0].note}</textarea>
                </div>
                
                {/* <input id={s.btn} type="submit" value='add' /> */}
                <div className={s.children}>

                    <input id={s.nameNote} type="text" name="title" /* value={data.title} onChange={ e => handleChange(e) } */ placeholder="Note of name"/>
                    <button id={s.btn} type="submit">add</button>
                    <Link to='/'><button id={s.btnClose}>X</button></Link>
                    
                </div>
                <br />
                <button className={s.btn_DELETE} onClick={ () => dispatch(deletNote(id))}>Delete</button>
            </form>
        </div>
    )
}


/* CUANDO SE AGARRA UN ID DE LA URL  SIEMPRE HAY QUE TRANSFORMARLO EN INT */
/* store.map(el => el.id === id? 
            <div className={s.container}>
            <h1> burro{el.note}</h1>
            </div>
        : <span>no hay nada</span> 
 */

        /* if(ho){
    return(
        
        <div className={s.container}>
            
            <span>{ho.title}</span>
            
        </div>
    )}
    return(
        <span style='background-color: red'>no existe</span>
    ) */