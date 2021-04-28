import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import state, {
    addMessage,
    addPost,
    subscriber,
    updateTextareaValueDialog,
    updateTextareaValueMyPosts
} from './redux/state';

function rerender() {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App appState={state} addPost={addPost} updateTextareaValueMyPosts={updateTextareaValueMyPosts}
                     addMessage={addMessage} updateTextareaValueDialog={updateTextareaValueDialog}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

subscriber(rerender);

rerender();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
