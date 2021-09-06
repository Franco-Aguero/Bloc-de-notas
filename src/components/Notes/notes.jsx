import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connect, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { deletNote } from "../../actions/Actions";
import CardNote from "./cardNote";

import s from "./notes.module.css";

function Notes({store}) {  
 /*  useEffect( ()=>{console.log(burro)}, [burro]) */
  return (
    <div className={s.container}>
      <div className={s.padher}>
        {store &&
          store.map((el) => ( 
              <CardNote
                key={el.id}
                id={el.id}
                note={el.note}
                title={el.title}
              />
          ))}
      </div>
    </div>
  );
}

/* const burro = useSelector(state => state.notes) */


function mapStateToProps(state) {
  return {
    store: state.notes
  };
}

/* const dispatch= useDispatch()
dispatch(deletNote(sai)) */
export default connect(mapStateToProps)(Notes);

 /*  <Link to={`/note/${el.id}`} className={s.dl}>  En el CSS a LO ULTIMO
 <CardNote
 key={el.id}
 id={el.id}
 note={el.note}
 title={el.title}
/>
</Link>
 */

/* <div className={s.padher}>
 */

