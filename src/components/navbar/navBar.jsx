import React from 'react';
import Search from './search';
import {Link} from 'react-router-dom';

import s from '../style/navBar.module.css'

export default function NavBar(){
    
    return(

        <div className={s.container}>
            <Search/>
            <div>
                <Link to='/NoteCre'><button className={s.btnAdd}>+</button></Link>
            </div>
                
        </div>
    )
}