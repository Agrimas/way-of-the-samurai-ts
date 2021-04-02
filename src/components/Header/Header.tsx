import React from 'react';
import Classes from './Header.module.css';

export function Header() {
    return (
        <div className={Classes.Header}>
            <img className={Classes.logo}
                src="https://image.winudf.com/v2/image1/Y29tLmRveHVhbnZpbmgucmVhY3RibG9nc19pY29uXzE1ODg4MDQ2MTdfMDY4/icon.png?w=100&fakeurl=1"
                alt=""/>
        </div>
    )
}