import './Input.css'
import { useState } from 'react';

export default function Input({changeHandler}) {

    let [value, setValue] = useState('')
    
    return (
        <div className='custom-input'>

            <input
            type='text'
            placeholder='R$ 00,00'
            value={value}
            onChange={e => {

                let value = e.target.value
                let newValue = (changeHandler) ? changeHandler(value) : value
                setValue(newValue)
            
            }}/>
            
        </div>
    )
}
