import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Smath" commentAvatar={faker.image.avatar()} timeAgo="Today at 6:00PM" content="Nice blog post!" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Gardy" commentAvatar={faker.image.avatar()} timeAgo="Today at 3:40PM" content="Really love it!"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Valery" commentAvatar={faker.image.avatar()} timeAgo="Yesterday at 9:15 AM" content="Thanks!"/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);