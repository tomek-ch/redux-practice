import React from 'react';
import { useSelector } from 'react-redux';

import Note from './Note';

function Notes() {
    const notes = useSelector(state => state);
    const noteElements = notes.map(note => <Note key={note.id} id={note.id} text={note.text} />);

    return (
        <>
            {noteElements}
        </>
    )
}

export default Notes;