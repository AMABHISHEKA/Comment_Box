import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetails';

const App = () => {
    return(
        <div className="ui container comments">
            <CommentDetails author="sam" timeAgo="Today at 6:00 PM" content="Nice Blog" avatar={faker.image.avatar()}/>
            <CommentDetails author="Alexa" timeAgo="Today at 12:00 AM" content="Nice Content" avatar={faker.image.avatar()}/>
            <CommentDetails author="Roo" timeAgo="Yesterday at 1:00 PM" content="Good One" avatar={faker.image.avatar()}/>
        </div>

    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));