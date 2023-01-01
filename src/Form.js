import { useState } from "react";

function Form() {
    const [err, setErr] = useState(false)
    const [formData, setFromData] = useState({})
    const onSubmit = function(e) {
        e.preventDefault()
        setErr(true)
        console.log(`email: ${formData.email}, nickname: ${formData.nickname}, adress: ${formData.adress}`)
    }
    const onChange = function(e){
        let data = e.currentTarget.value
        let name = e.currentTarget.name
        setFromData(prev => {
            return({
                ...prev, [name]: data
            })
        }) 
    }
    return(
        <form onSubmit={onSubmit}>
            <input onChange={onChange} type="email" name="email"/>
            {!formData.email && err ? "Введіть будь ласка свій email":""}
            <input onChange={onChange} type="text" name="nickname"/>
            {!formData.nickname && err ? "Введіть будь ласка свій nickname":""}
            <input onChange={onChange} type="text" name="adress"/>
            {!formData.adress && err ? "Введіть будь ласка свій adress":""}
            <button>Submit</button>
            <p>{err}</p>
        </form>
    )
}

export default Form