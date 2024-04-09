import React from "react";
import './Responce.css'

export default function Responce(props){
    const translate = {
        "male": "мужской",
        "female": "женский",
        "Russia": "Россия",
        "Not Russia 1": "Не Россия 1",
        "Not Russia 2": "Не Россия 2",
    }
    return(
        <div className="Responce">
            <ul>
                <li>ФИО: {props.responce.fio}</li>
                <li>Пол: {translate[props.responce.sex]}</li>
                <li>Страна: {translate[props.responce.country]}</li>
            </ul>
        </div>
    )
}