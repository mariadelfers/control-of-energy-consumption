import React from 'react';
import './styles.css';

const Room = ({ roomName, roomDescription, imageUrl, imageAlt }) => ( <
    article className = 'room' >
    <
    div className = 'image-container' >
    <
    img src = { imageUrl }
    alt = { imageAlt }
    /> < /
    div > <
    div className = 'info-container' >
    <
    h1 > { roomName } < /h1> <
    p > { roomDescription } < /p> < /
    div > <
    /article>

)

export default Room;