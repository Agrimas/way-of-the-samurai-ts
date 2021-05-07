import React, {Component} from 'react';
import preloaderPhoto from './../../../assets/img/loader.svg';

class Preloader extends Component {
    render() {
        return (
            <div>
                <img src={preloaderPhoto} alt=""/>
            </div>
        );
    }
}

export default Preloader;