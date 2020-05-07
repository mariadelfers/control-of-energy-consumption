import React from 'react';
import { storiesOf } from '@storybook/react';
import Room from '.';

storiesOf('Room', module)
    .add('default', () => ( <
        Room imageUrl = 'https://images.fravega.com/s250/c67fb6d07b70f6e98ed8ac71649e9067.jpg'
        imageAlt = 'Lavado 1'
        roomName = 'Cuarto de Lavado'
        roomDescription = 'Muestra de un tipo de cuarto, acompañado de una imagen o un ícono, Diseño Responsivo ' / >
    ))