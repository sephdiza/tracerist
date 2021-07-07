import React, { useState, useEffect, useRef } from 'react'
import { useAuth } from '../../contexts/AuthContext'

import { regions, getProvincesByRegion, getCityMunByProvince, getBarangayByMun } from 'phil-reg-prov-mun-brgy'
import { useFormik } from 'formik';
import *  as Yup from 'yup'
import { useHistory } from 'react-router-dom'

import { Title, Form, StyledSelect, SelectLabel, Input, CheckboxLabel, BtnWrap, Error } from './RegIndividualStyle';
import { Button } from '../../components/Button'
import HalfBg from '../../components/HalfBg'
import { MainWrapper, RightWrapper } from '../../components/HalfBgStyle'
import { ImUser } from 'react-icons/im'


const RegIndividual = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const firstNameRef = useRef()
    const [loading, setLoading] = useState(false)
    const [region, setRegion] = useState("")
    const [province, setProvince] = useState("")
    const [city, setCity] = useState("")
    const [barangay, setBarangay] = useState("")
    const history = useHistory()
    const { signup, currentUser } = useAuth()

    

    useEffect(() => {
        setRegion(regions)
    }, [])

    const selectRegion = e => {
        setProvince(getProvincesByRegion(`${e.target.value}`))
        formik.values.region = e.target.selectedOptions[0].text
        formik.errors.region = null
    }

    const selectCity = e => {
        setCity(getCityMunByProvince(`${e.target.value}`))
        formik.values.province = e.target.selectedOptions[0].text
        formik.errors.province = null
    }

    const selectBgy = e => {       
        setBarangay(getBarangayByMun(`${e.target.value}`))
        formik.values.city = e.target.selectedOptions[0].text
        formik.errors.city = null       
    }

    const selectedBgy = e => {
        formik.values.bgy = e.target.selectedOptions[0].text
        formik.errors.bgy = null
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmpassword: '', 
            firstName: '',
            middleName: '', 
            lastName: '',  
            contactno: '',
            acceptedTerms: false,
            region: '',
            province: '',
            city: '',
            bgy: '',
            housestreet: ''
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email('*Invalid email address').required('*Required'),
            password: Yup.string()
            .min(6, '*Must be 6 characters or more')
            .required('*Required'),
            confirmpassword: Yup.string()
            .required('*Required')
            .oneOf([Yup.ref('password'), null], "*Password doesn't match"),
            firstName: Yup.string()
            .max(15, '*Must be 15 characters or less')
            .required('*Required')
            .matches(/^[aA-zZ\s]+$/, '*Invalid format'),
            middleName: Yup.string()
            .max(15, '*Must be 15 characters or less')
            .required('*Required')
            .matches(/^[aA-zZ\s]+$/, '*Invalid format'),
            lastName: Yup.string()
            .max(20, '*Must be 20 characters or less')
            .required('Required')
            .matches(/^[aA-zZ\s]+$/, '*Invalid format'),
            contactno: Yup.string()
            .min(11, "Must be 11 characters")
            .max(11, "Must be 11 characters")
            .required('*Required'),
            acceptedTerms: Yup.boolean()
                .required('*Required')
                .oneOf([true], '*You must accept the terms and conditions.'),
            region: Yup.string()
                .required('*Required'),
            province: Yup.string()
                .required('*Required'),
            city: Yup.string()
                .required('*Required'),
            bgy: Yup.string()
                .required('*Required'),
            housestreet: Yup.string()
                .required('*Required') 
        }),
        onSubmit: values => {
            try {
                setLoading(true)
                signup(values.email,
                    values.password,
                    values.firstName,
                    values.middleName,
                    values.lastName,
                    values.contactno,
                    values.region,
                    values.province,
                    values.city,
                    values.bgy,
                    values.housestreet,
                    "Individual"
                    )
            } catch {
                alert('Failed to signup')
            }
            setLoading(false)
            history.push('register-hd-individual')                             
        }
    })

    return (
        <>
            <MainWrapper>
                <HalfBg />
                <RightWrapper style={{alignItems: 'flex-start'}}>
                    
                    <Form onSubmit={formik.handleSubmit}>
                        <Title>
                            <h1><ImUser/> Register as individual</h1>
                            <p>Step 2 of 3 - Personal Information</p>
                            <p>Please fill in your details below.</p>
                        </Title>
                        <SelectLabel htmlFor="email" >Email</SelectLabel>
                        <Input
                            id="email"
                            type="text"
                            placeholder="jdcruz@email.com"
                            ref={emailRef}
                            {...formik.getFieldProps('email')}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <Error>{formik.errors.email}</Error>
                        ) : null}

                        <SelectLabel htmlFor="password">Password</SelectLabel>
                        <Input
                            id="password"
                            type="password"
                            placeholder="******"
                            ref={passwordRef}
                            {...formik.getFieldProps('password')}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <Error>{formik.errors.password}</Error>
                        ) : null}

                        <SelectLabel htmlFor="confirmpassword">Confirm Password</SelectLabel>
                        <Input
                            id="confirmpassword"
                            type="password"
                            placeholder="******"
                            {...formik.getFieldProps('confirmpassword')}
                        />
                        {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
                            <Error>{formik.errors.confirmpassword}</Error>
                        ) : null}


                        <SelectLabel htmlFor="firstName">First Name</SelectLabel>
                        <Input
                            id="firstName"
                            type="text"
                            placeholder="Juan"
                            ref={firstNameRef}
                            {...formik.getFieldProps('firstName')}
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <Error>{formik.errors.firstName}</Error>
                        ) : null}
 
                        <SelectLabel htmlFor="middleName">Middle Name</SelectLabel>
                        <Input
                            id="middleName"
                            type="text"
                            placeholder="Luna"
                            {...formik.getFieldProps('middleName')}
                        />
                        {formik.touched.middleName && formik.errors.middleName ? (
                            <Error>{formik.errors.middleName}</Error>
                        ) : null}

                        <SelectLabel htmlFor="lastName">Last Name</SelectLabel>
                        <Input
                            id="lastName"
                            type="text"
                            placeholder="Dela Cruz"
                            {...formik.getFieldProps('lastName')}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <Error>{formik.errors.lastName}</Error>
                        ) : null}

                    <SelectLabel htmlFor="email">Contact No. </SelectLabel>
                        <Input
                            id="contactno"
                            type="text"
                            placeholder="09XXXXXXXXX"
                            {...formik.getFieldProps('contactno')}
                        />
                        {formik.touched.contactno && formik.errors.contactno ? (
                            <Error>{formik.errors.contactno}</Error>
                        ) : null}
                        
                        <SelectLabel htmlFor='region'>Region</SelectLabel>
                        <StyledSelect 
                            label="Region" 
                            name="region" 
                            onChange={selectRegion}
                            onBlur={formik.handleBlur}>
                                <option hidden>- Select -</option>
                                {region && region.map(reg => (
                                <option key={reg.reg_code}
                                value={reg.reg_code}>{reg.name}</option>
                            ))}
                        </StyledSelect>
                        {formik.touched.region && formik.errors.region ? (
                            <Error>{formik.errors.region}</Error>
                        ) : null}
                        
                        <SelectLabel htmlFor='province'>Municipality | Province</SelectLabel>
                        <StyledSelect 
                            label="Province" 
                            name="province" 
                            onChange={selectCity}
                            onBlur={formik.handleBlur}>
                                <option hidden>- Select -</option>
                                {province && province.map(prov => (
                                    <option key={prov.prov_code} value={prov.prov_code}>{prov.name}</option>
                                ))}
                        </StyledSelect>
                        {formik.touched.province && formik.errors.province ? (
                            <Error>{formik.errors.province}</Error>
                        ) : null}
                        
                        <SelectLabel htmlFor='city'>City</SelectLabel>
                        <StyledSelect 
                            label="City" 
                            name="city"
                            onChange={selectBgy}
                            onBlur={formik.handleBlur}>
                                <option hidden>- Select -</option>
                                {city && city.map(mun => (
                                    <option key={mun.mun_code} value={mun.mun_code}>{mun.name}</option>
                                ))}
                        </StyledSelect>
                        {formik.touched.city && formik.errors.city ? (
                            <Error>{formik.errors.city}</Error>
                        ) : null}

                        <SelectLabel htmlFor='bgy'>Barangay</SelectLabel>
                        <StyledSelect 
                            label="Bgy" 
                            name="bgy"
                            onChange={selectedBgy}
                            onBlur={formik.handleBlur}>
                                <option hidden>- Select -</option>
                                {barangay && barangay.map(bgy => (
                                    <option key={bgy.name}>{bgy.name}</option>
                                ))}
                        </StyledSelect>
                        {formik.touched.bgy && formik.errors.bgy ? (
                            <Error>{formik.errors.bgy}</Error>
                        ) : null}
                        
                        <SelectLabel htmlFor="housestreet">Street No., Street</SelectLabel>
                        <Input
                            id="housestreet"
                            type="text"
                            placeholder="House No., Street"
                            {...formik.getFieldProps('housestreet')}
                        />
                        {formik.touched.housestreet && formik.errors.housestreet ? (
                            <Error>{formik.errors.housestreet}</Error>
                        ) : null}
                
                        <CheckboxLabel name="acceptedTerms">
                            <input type="checkbox" {...formik.getFieldProps('acceptedTerms')}/> 
                            <p style={{display: 'inline-block'}}>I accept the terms and agreement.</p>
                        </CheckboxLabel>
                        {formik.touched.acceptedTerms && formik.errors.acceptedTerms ? (
                            <Error>{formik.errors.acceptedTerms}</Error>
                        ) : null}

                        <BtnWrap>
                            <Button primary type="submit" disabled={loading}>Submit</Button> 
                        </BtnWrap>
                    </Form>
                </RightWrapper>
            </MainWrapper> 
        </>
    )
}

export default RegIndividual
