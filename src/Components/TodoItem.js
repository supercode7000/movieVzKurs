import React from 'react';

const TodoItem = (props) => {
    // console.log(props)
    return (
        <article>
            <input
                type="checkbox"
                name="" id=""
                checked={props.completed}
                onChange={() => props.handleChangeProps(props.id)} />
            <label htmlFor="">{props.todo}</label>
        </article>
        //immutable
    );
}

export default TodoItem;