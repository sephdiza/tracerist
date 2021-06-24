import React from 'react'
import { useField } from 'formik'

import { Main, Error } from './FormStyle'

function CheckBox({ children, ...props}) {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <>
            <Main>
                <label className="checkbox-input">
                    <input type="checkbox" {...field} {...props} />
                    {children}
                </label>
                {meta.touched && meta.error ? (
                    <Error style={{transform: 'translateY(-2rem)'}}>{meta.error}</Error>
                ) : null}
            </Main>
            
        </>
    )
}

export default CheckBox
