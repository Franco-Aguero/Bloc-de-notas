export const ADD_NOTE = 'ADD_NOTE';
export const SAERCH_NOTE = 'SEARCH_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
let ID = 1;

export function addNote(data){
    return{
        type:ADD_NOTE, 
        payload:{
            title: data.title,
            note: data.note,   
            id:ID++/* {state,notes: [...state.notes, action.payload]} */
        }
    }
}

export function deletNote(id){
    return{ type:DELETE_NOTE, payload:id}
}

export function searchNote(nameNote){
    return{
        type:SAERCH_NOTE,
        payload:nameNote
    }
}