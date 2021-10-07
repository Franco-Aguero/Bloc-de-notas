import{ ADD_NOTE, SAERCH_NOTE, DELETE_NOTE} from '../actions/Actions'

const initialState = {
    notes: []
    
}

function rootReducers(state= initialState, action){
    switch(action.type){
        case ADD_NOTE:
            return {
                notes: [...state.notes, action.payload] }
            
        case DELETE_NOTE:
            return{
                notes: state.notes.filter(el => el.id !== action.payload)
            }
                
        default:
            return state;
    }
   
};
export default rootReducers;
/* state.notes.concat(action.payload) */ 

/* {state,
                note: [...state.notes, action.payload] 
            } */