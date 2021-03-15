import React from 'react';

const coco = (props) => (
    <div>
        <h1>{props.name}</h1>
        <p>Age: {props.age}</p>
        <style jsx>{`
            p {
                color: blue;
            },
            div {
                background-color: green;
                padding: 20px
            }
        `}
        </style>
    </div>
);

export default coco;