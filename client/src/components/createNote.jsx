import React from 'react';
import {useState} from 'react'
import { connect } from 'react-redux'
import {addNote} from '../actions/Actions'
import {Link} from 'react-router-dom'

import s from './style/createNote.module.css'

function Nota({addNotes}){
   
    const [data, setData] = useState({
        note:'',        /* si hay mas de un estado,hay que ponerle los puntitos */
        title:''
    });
    function handleChange(e){
        setData({
            ...data,    /* asi como los puse en esta linea */
            [e.target.name] : e.target.value})
    }
    
     function handleSubmit(e){
        e.preventDefault()
        addNotes(data)  
        setData({note:'', title:''})
        alert('you note ah sido guardada')
     }

    return(
        <div>

            <form className={s.container} onSubmit={ (e) => handleSubmit(e)}>
                <div className={s.lineText}>
                    <hr  id={s.line}/>
                    <textarea id={s.inpNote} name="note" value={data.note}  onChange={ e => handleChange(e) } placeholder='Your Notes'></textarea>
                </div>
              
                {/* <input id={s.btn} type="submit" value='add' /> */}
                <div className={s.children}>

                    <input id={s.nameNote} type="text" name="title" value={data.title} onChange={ e => handleChange(e) } placeholder="Note of name"/>
                    <button id={s.btn} type="submit">add</button>
                    <Link to='/'><button id={s.btnClose}>X</button></Link>
                    
                </div>
            </form>
            
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return{
        addNotes : data => dispatch(addNote(data))
    }
}
 
export default connect(null, mapDispatchToProps)(Nota);





/* Aca van las notas creadas (NameOfNotes)*/

