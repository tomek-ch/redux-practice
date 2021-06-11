import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux';

function NewNote(props) {
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const handleChange = e => {
        const { value } = e.target;
        setText(value);
    };

    const handleClick = () => {
        dispatch(addNote(text));
        setText('');
    };

    return (
        <div>
            <textarea
                value={text}
                onChange={handleChange}
            />
            <button onClick={handleClick}>Add</button>
        </div>
    );
}

export default NewNote;