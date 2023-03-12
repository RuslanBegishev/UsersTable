import React from 'react';
import './Card.css';

export default class Card extends React.Component {
    static defaultProps = {
        id: 0,
        email: '',
        firstName: '',
        lastName: '',
        avatar: ''
    }
    render() {
        const { email, firstName, lastName, avatar, onClick } = this.props;
        return (
            <div className={'card'} onClick={onClick}>
                <div className="card__image">
                    <img src={avatar}/>
                </div>
                <h2 className={'card__title'}>{firstName} {lastName}</h2>
                <div className={'card__subtitle'}>
                    <a href={`mailto:${email}`}>{email}</a>
                </div>
            </div>
        );
    }
}
