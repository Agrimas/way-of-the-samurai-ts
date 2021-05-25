import React, {Component} from 'react';
import preloaderPhoto from './../../../assets/img/loader.svg';
import Classes from './Preloader.module.css';

class Preloader extends Component {
    render() {
        return (
            <div className={Classes.container}>
                <img src={preloaderPhoto} alt=""/>
            </div>
        );
    }
}

export default Preloader;