import './App.css';
import {Route} from 'react-router-dom';
import {useSelector} from 'react-redux'

import createNote from './components/createNote';
import NavBar from './components/navbar/navBar'
import Notes from './components/Notes/notes'
import RefactorNote from './components/Notes/refactorNote'


function App() {
  const store = useSelector(state => state.notes);
  return (
    <div>
      <Route path='/' component={NavBar}/>
      <Route exact path='/NoteCre' component={createNote}/>
      <Route path='/' component={Notes}/>
      <Route path="/note/:id" render={({match}) => <RefactorNote nota={store.filter(el => el.id === (parseInt(match.params.id)))[0] }/>}    />{/* TRANSFORME EL ID DE STRING A INT  ya me llega un objeto labural el conmponente*/}
       {/* component visualition note*/}
    </div>
  );
}

export default App;
