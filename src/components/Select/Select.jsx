import { useState } from 'react'
import './Select.css'

export default function Select({children, changeHandler}) {

    let [option, setOption] = useState('1')

    return(
        <select 
        className='custom-select'
        value={option}
        onChange={e => {

            if(changeHandler){ changeHandler(e.target.value) }
            setOption(e.target.value)

        }}>
           {children.map((opt, index) => {
                return <option value={index} key={index}>{opt}</option>
           })}
        </select>
    )
}
