import React from 'react'
import { useField } from "formik";

import { Main, Error, Label } from './FormStyle'

function TextInput({ label, ...props}) {
    const [field, meta] = useField(props)

    return (
        <>
            <Main>
                <Label htmlFor={props.id || props.name}>{label}</Label>
                <input {...field} {...props}/>
                {meta.touched && meta.error ? (
                    <Error>{meta.error}</Error>
                ) : null}
            </Main>           
        </>
    )
}

export default TextInput
