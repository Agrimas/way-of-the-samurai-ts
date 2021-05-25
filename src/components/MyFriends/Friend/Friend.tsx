import React from 'react';
import Classes from './Friend.module.css';

export function Friend({name}: { name: string }) {
    return (
        <div className={Classes.item}>
            <img src="https://img.novosti-n.org/upload/ukraine/499685.jpg" alt=""/>
            {name}
        </div>
    );
}