import React, {useState, useEffect} from 'react';
import './add-expense-form.css';

export function AddExpenseForm(props) {
    const [fieldValue, setFieldValue] = useState({
        sno: 0,
        date: '',
        description: '',
        type: 'income',
        amount: '',
        summary: ''
    });

    useEffect(() => {
        const updateData = {
            sno: props.data.sno ? props.data.sno : props.length+1,
            date: props.data.date ? props.data.date : new Date(),
            description: props.data.description ? props.data.description : fieldValue.description, 
            type: props.data.type ? props.data.type : fieldValue.type,
            amount: props.data.amount ? props.data.amount : fieldValue.amount,
            summary: props.data.summary ? props.data.summary : fieldValue.summary
        };
        setFieldValue({
            ...fieldValue,
            ...updateData
        });
    }, []);

    const updateFieldValue = (event) => {
        setFieldValue({
            ...fieldValue,
            [event.target.name] : event.target.value
        })
    }

    const sendFormData = (e) => {
        e.preventDefault();
        props.sendData(fieldValue);
    }
    return (
        <form className="custom-form">
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Date:</label>
                <input type="date" className="form-control" 
                id="exampleInputEmail1" aria-describedby="emailHelp" 
                placeholder="Date" 
                name="date"
                value={fieldValue.date}
                onChange={(event) => updateFieldValue(event)}
                />                     
            </div>
            <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Description</label>
                    <input type="text"                   
                    onChange={(event) => updateFieldValue(event)}
                    name="description"
                    className="form-control" id="exampleInputPassword1" placeholder="Description" />
            </div>
            <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Type</label>
                    <select className="custom-select" name="type" value={fieldValue.type} onChange={(event) => updateFieldValue(event)}>
                        <option value="income" selected>Income</option>
                        <option value="expense">Expense</option>
                    </select>
            </div>
            <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Amount</label>
                    <input type="text" 
                    value={fieldValue.amount}     
                    name="amount"               
                    onChange={(event) => updateFieldValue(event)}
                    className="form-control" id="exampleInputPassword1" placeholder="Amount" />
            </div>
            <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Summary</label>
                    <input type="text" 
                    value={fieldValue.summary}     
                    name="summary"               
                    onChange={(event) => updateFieldValue(event)}
                    className="form-control" id="exampleInputPassword1" placeholder="Summary" />
            </div>
            <button type="submit" onClick={(event) => sendFormData(event) }className="btn btn-primary">Submit</button>
            </form>
                    )
}