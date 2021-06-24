import React from 'react'
import { useField } from 'formik'

import { Main, Error, Label } from './FormStyle'

function Select({ label, ...props }) {
    const [field, meta, helpers] = useField(props); 
    const { setValue, setError } = helpers;

    const setFieldProps = (selectedOption) => {
        setValue(selectedOption.target.value)
        setError(null)   
    }

    return (
        <>
            <Main>
                <Label htmlFor={props.id || props.name}>{label}</Label>
                <select {...props} onChange={selectedOption => setFieldProps(selectedOption)}/>
                {meta.touched && meta.error ? (
                    <Error>{meta.error}</Error>
                ) : null}
            </Main>          
        </>
    )
}

export default Select
