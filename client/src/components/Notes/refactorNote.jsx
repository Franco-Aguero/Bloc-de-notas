import React, { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';
import {Link} from 'react-router-dom'

import s from './refactorNote.module.css';
import Lapiz from '../style/img/lapizModif.png'

export default function RefactorNote({nota}){
  /* crear una var 'true and false' */
  /* button que cambie ese true o false */
  /* cambiar a onChange */
  /* const dispatch = useDispatch(); */
  /* let prueba = false

  const cambioPrueba = (e) =>{
    e.preventDefault()
    setModifData({
      ...modifData, modificar:''
    })
   
  } */

  const [modifData, setModifData] = useState({
    note:'' ,       
    title:'',
   /*  modificar: 'readonly' */
  });

  function handleChange(e){
    setModifData({
          ...modifData,    
          [e.target.name] : e.target.value})
    }

  function handleSubmit(e){
      e.preventDefault()
      /* addNotes(modifData)  */ 
      setModifData({note:'', title:''})
      alert('you note ah sido guardada')
  }   

    return(
      nota ? (
        <div>
          <form className={s.container} /* onSubmit={ (e) => handleSubmit(e) } */ >
                <div className={s.lineText}>
                    <hr  id={s.line}/>        {/*ACA HACIA QUE SI PRUEBA ERA IGUAL A F QUE ME PONGA COMO VALOR LO QUE VENIA COMO PROP  */}
                    <textarea id={s.inpNote} name="note" value={/* prueba?modifData.note  :  */ nota.note}  onChange={ e => handleChange(e)}  placeholder='Your Notes' /* (prueba)? readonly="readonly": null */></textarea>{/* Y LUEGO PARA MODIFICAR USABA A MI */}
              </div>
              
                {/* <input id={s.btn} type="submit" value='add' /> */}
                <div className={s.children}>

                    <input id={s.nameNote} type="text" name="title" value={nota.title /* modifData.title */} /* readonly */ onChange={ e => handleChange(e) } placeholder="Note of name"/>
                    <button id={s.btn} type="submit">add</button>{/* ONCLINK PARA CAMBIAR PRUEBA A T  Y ASI PODER MODIFICAR, PERO NO ME SALIO  */}
                    <button className={s.btnLapiz} /* onClick={ (e) => cambioPrueba(e)} */ ><img src={Lapiz} className={s.imgLapiz}/></button>
                    <Link to='/'><button id={s.btnClose}>X</button></Link>
                    
                </div>
            </form>
        </div>
      )

      : <div  className={s.prueba}>
        no existe lo que esta buscando. Aprete en este boton, lo dirijira a la principal
        </div> 

  )
}

/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<TODO LO QUE ESTA COMENTO FUE INTENTO DE TRAER LA NOTE MEDIANTE LA STORE>>>>>>>>>>>>>>>>>>>>>>>>>>>
PERO NO PUDE; NO ENCONTRE LA FORMA DE COMO PASAR EL VALOR QUE TRAIGO CON EL FILTER por props  Y PODER MANDARLO A MIS INPUTS 
                    <<<<<<<<<<<<<<<<<<<<<<<<<<<Y LUEGO PODER MODIFICARLOS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>        */




/* PORQUE NO FUNCIONA?? 
nota && (<div className={s.prueba}>
            <span >{nota.title}</span>
            {console.log(nota)}
        </div>)
         (<span>no existe</span>) 
 */


/* store.filter(el => (el.id === id) ?(
            <div>{el.title}</div>
            )
            : <span>'no hay nada'</span>
            ) */