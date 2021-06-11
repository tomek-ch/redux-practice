import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editNote, removeNote } from '../redux';

function Note(props) {
    const dispatch = useDispatch();
    const [text, setText] = useState(props.text);

    const handleChange = e => {
        const { value } = e.target;
        setText(value);
        dispatch(editNote(props.id, value));
    };

    const handleClick = () => dispatch(removeNote(props.id));

    return (
        <div>
            <textarea
                value={text}
                onChange={handleChange}
            />
            <button onClick={handleClick}>Remove</button>
        </div>
    );
}

export default Note;