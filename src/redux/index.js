import { createStore } from 'redux';

export const addNote = text => ({
    type: 'ADD',
    payload: text,
});

export const removeNote = id => ({
    type: 'REMOVE',
    payload: id,
});

export const editNote = (id, newText) => ({
    type: 'EDIT',
    payload: {
        id,
        newText,
    },
});

const reducer = (notes = JSON.parse(localStorage.getItem('notes')) || [], action) => {
    switch (action.type) {
        case 'ADD':
            return [{
                id: new Date().getTime(),
                text: action.payload,
            }, ...notes];
        case 'REMOVE':
            return notes.filter(note => note.id !== action.payload);
        case 'EDIT':
            return notes.map(note => note.id === action.payload.id ? {
                id: action.payload.id,
                text: action.payload.newText,
            } : note);
        default:
            return notes;
    }
}

const store = createStore(reducer);
store.subscribe(() => {
    console.log(store.getState());
    localStorage.setItem('notes', JSON.stringify(store.getState()));
});

export default store;