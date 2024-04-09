import React, {useState} from 'react'
import './Form.css'
import Responce from '../Responce/Responce'

export default function Form(props){
    const [fio, setfio] = useState('')
    const [sex, setsex] = useState('')
    const [country, setcountry] = useState('')

    const [responce, setresponce] = useState('')

    const send_results = async() => {
        fetch(props.host+props.form_request_route, {
            method: 'POST',
            headers:{
                'content-type': 'application/json;charser=utf-8'
            },
            body: JSON.stringify({"fio": fio, "sex": sex, "country": country}),
            credentials: 'include'
        })
        .then(responce => {
            responce.json().then(res=>{
                setresponce(res.body)
            })
            
        })
    }

    return(
        <div className='Form'>
            {/* <form> */}
                <table>
                    <tbody>
                        <tr>
                            <td colSpan={2}>
                                <b>Форма для отправки на сайт</b>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Автор фотографии</b>
                            </td>
                            <td>
                                <tr>
                                    <td>
                                        Фамилия И.О.
                                    </td>
                                    <td>
                                        <input type="text" name="fio" onChange={event=>setfio(event.target.value)}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Пол
                                    </td>
                                    <td>
                                        <tr>
                                            <td>
                                                <input type='radio' name='sex' value={"male"} onChange={event=>setsex(event.target.value)}></input> Мужской
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type='radio' name='sex' value={"female"} onChange={event=>setsex(event.target.value)}></input> Женский
                                            </td>
                                        </tr>

                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Страна
                                    </td>
                                    <td>
                                        <select name='country' onChange={event=>setcountry(event.target.value)}>
                                            <option value="Russia" >Россия</option>
                                            <option value="Not Russia 1">Не Россия 1</option>
                                            <option value="Not Russia 2">Не Россия 2</option>
                                        </select>
                                    </td>
                                </tr>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button onClick={send_results}>
                                    Send
                                </button>
                            </td>
                        </tr>
                        <tr>
                            Я устал, я мухожук
                        </tr>
                    </tbody>
                </table>
            {/* </form> */}
            <Responce 
                responce = {responce}
            />
        </div>
    )
}