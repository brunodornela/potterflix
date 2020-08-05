import React from 'react';

function FormField({label, name, type, value, onChange}){
    return(
        <div>
            <label>
                {label}:
                <input name={name} type={type} onChange={onChange} value={value} />
            </label>
        </div>
    );
}

export default  FormField;