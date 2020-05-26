import React, {useState} from 'react';
import {Popup} from './../popup';

export function CustomTable(props) {

    const [expenseList, setExpenseList] = useState([
        {
            'sno': 1,
            'date': '2020-05-12',
            'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            'type': 'income',
            'amount': 600,
            'summary': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            'sno': 2,
            'date': '2020-05-02',
            'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            'type': 'income',
            'amount': 500,
            'summary': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            'sno': 3,
            'date': '2020-05-28',
            'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            'type': 'income',
            'amount': 1500,
            'summary': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
    ]);
    const [showPopup, setPopup] = useState(false);
    const [editData, setEditData] = useState({});
    const [listLength, setLength] = useState(0);
    const editItem = (id) => {
        const updateItem = expenseList.find((item) => item.sno === id);
        setPopup(true);
        setEditData(updateItem);
    }
    const renderTableItems = (expenseList) => {
        return expenseList.map((item, index) => {
            return (<tr>
                <td>
                    {item.sno}
                </td>
                <td>{item.date}</td>
                <td>{item.description}</td>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.summary}</td>
                <td><button onClick={() => editItem(item.sno)}>Edit</button></td>
            </tr>
            )
        })
    }

    const setHidePopup = (hidePopup) => {
        setPopup(hidePopup);
    }

    const showForm = () => {
        setPopup(true);
        setEditData({});
        setLength(expenseList.length)
    }

    const setData = (data) => {
        const isExisting = expenseList && expenseList.find((item, index) => item.sno === data.sno);
        const updatedData = expenseList;
        if(isExisting) {
            const getIndex = expenseList && expenseList.findIndex((item, index) => item.sno === data.sno);
            updatedData[getIndex].amount = data.amount;
            setExpenseList(updatedData)
        } else {
            const cData = data;
            updatedData.push(cData);
            setExpenseList([
                ...updatedData
            ]); 
        }                   
        setPopup(false);
    }

    return (
        <>
        <div className="container">
        <div className="row">
        <div className="col-2 offset-10" style={{padding: '10px'}}><button onClick={() => showForm()} className="btn btn-secondary">Add Details</button></div>
        <div className="col-12">
        <table className="table table-striped table-bordered table-hover">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Date</th>
                    <th scope="col">Description</th>
                    <th scope="col">Income/Expense</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Summary</th>
                    <th scope="col">Edit</th>
                </tr>
            </thead>
            <tbody>
                {renderTableItems(expenseList)}
            </tbody>
        </table>
        </div>
        {showPopup && <Popup data={editData} sendLength ={listLength} hidePopup={(hidePopup) => setHidePopup(hidePopup)} getUpdatedData={(updatedData) => setData(updatedData)} /> }
        </div>
        </div>
        </>
    )
}