import React from "react";
import { Button } from '../Button';
import './card.css';


export const createCard = ({
    size = "small",
    title,
    description, ...props
}) => {
    return (
    <>
    <div className={['card', `card--${size}`, 'wrapper'].join(' ')}{...props}>
        <div className={['card__left']}>
            <div className={['card__flag']}></div>
            <div className={['card__balance']}>
                <p>Total Balance{title}</p>
                <h3>10.000,00$ {description}</h3>
            </div>
        </div>
        <div className={['card__right']}>
            <Button label={'Deposit'} size={'medium'}/>
            <Button label={'Exchange'} icon={'IconAerialLift'}/>
            <Button label={'Payout'}/>
        </div>
    </div>
    </>
    )
}