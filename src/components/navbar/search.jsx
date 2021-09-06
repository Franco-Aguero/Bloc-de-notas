import React from 'react';
import {useState} from 'react';

import s from '../style/Search.module.css'
import ImgSearch from '../style/img/Search.png'

export default function Search(){
    
    const [nameNote, setNameNote ] = useState('');

    function handelChange(e){
        setNameNote({nameNote: e.target.value})
    }
    function ho(){
        alert('Holaaa')
    }
    return(

        <div>
            <form onSubmit={ () => nameNote ? ho(): alert('Escriba algo.')}>{/* Para que se envie si hay algo en el input. */}
                <div className={s.container}>
                    <input id={s.inp} type="text" name="nameOfNote" value={nameNote.value} onChange={e => handelChange(e)} placeholder="Search..."/>
                    <button id={s.btn} ><img id={s.img} src={ImgSearch}/></button>
                </div>
                
            </form>
                
        </div>
    )
}