import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import React, {useState} from 'react';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);
    const changeTitleHandler = () => {
        setTitle('Update!');
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            <button onClick={changeTitleHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;