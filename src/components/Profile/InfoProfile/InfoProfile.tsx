import React from 'react';
import Clasess from './InfoProfile.module.css';

export function InfoProfile() {
    return (
        <div className={Clasess.container}>
            <img className={Clasess.main_photo} src="https://storge.pic2.me/c/1360x800/778/58619cae890e5.jpg"
                 alt="Main photo"/>
            <h1>My profile</h1>
            <p>Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae cupiditate, delectus
                deleniti esse est exercitationem incidunt iusto maxime natus, nulla obcaecati omnis perferendis possimus
                sequi sit sunt voluptas voluptatum.</p>
        </div>
    )
}

