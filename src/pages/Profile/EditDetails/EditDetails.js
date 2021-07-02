import React, {useState, useEffect, useRef} from 'react'

import { useHistory } from 'react-router';
import { useFormik } from 'formik';
import *  as Yup from 'yup'
import { regions, getProvincesByRegion, getCityMunByProvince, getBarangayByMun } from 'phil-reg-prov-mun-brgy'
import { useAuth } from '../../../contexts/AuthContext';

import Nav from '../../../components/Nav'
import { Button } from '../../../components/Button'
import { EditDetailsWrapper, Form, EditInput, Label, BtnWrap, Error} from './EditDetailsStyle'

function EditDetails() {
    const [regionApi, setRegionApi] = useState("")
    const [provinceApi, setProvinceApi] = useState("")
    const [cityApi, setCityApi] = useState("")
    const [barangayApi, setBarangayApi] = useState("")
    const [loading, setLoading] = useState("")
    const emailRef = useRef()
    const passwordRef = useRef()
    const { currentUser, updateEmail, updatePassword } = useAuth()
    const history = useHistory()
    
    useEffect(() => {
        setRegionApi(regions)
    }, [])

    const updateRegion = e => {
        setProvinceApi(getProvincesByRegion(`${e.target.value}`))
        formik.values.region = e.target.selectedOptions[0].text
        
    }

    const updateProvince = e => {
        setCityApi(getCityMunByProvince(`${e.target.value}`))
        formik.values.province = e.target.selectedOptions[0].text
        
    }

    const updateCity = e => {       
        setBarangayApi(getBarangayByMun(`${e.target.value}`))
        formik.values.city = e.target.selectedOptions[0].text
              
    }

    const updateBgy = e => {
        formik.values.bgy = e.target.selectedOptions[0].text
        
    }

      const formik = useFormik({
        initialValues: {
            email: currentUser.email,
            password: currentUser.password,
            confirmpassword: currentUser.password,
            // firstname: firstname,
            // middlename: middlename, 
            // lastname: lastname, 
            // contactno: contactno,
            // housestreet: housestreet,
            // region: region,
            // province: province,
            // city: city,
            // bgy: bgy,              
            // bdate: bdate,
            // pobirth: pobirth,
            // nationality: nationality,
            // civilstatus: civilstatus,
            // mothermaiden: mothermaiden,
            // empstatus: empstatus,
            // employer: employer,
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email('*Invalid email address').required('*Required'),
            password: Yup.string()
            .min(6, '*Must be 6 characters or more'),
            confirmpassword: Yup.string()
            .oneOf([Yup.ref('password'), null], "*Password doesn't match"),
            // firstname: Yup.string()
            // .max(15, '*Must be 15 characters or less')
            // .required('*Required')
            // .matches(/^[aA-zZ\s]+$/, '*Invalid format'),
            // middlename: Yup.string()
            // .max(15, '*Must be 15 characters or less')
            // .required('*Required')
            // .matches(/^[aA-zZ\s]+$/, '*Invalid format'),
            // lastname: Yup.string()
            // .max(20, '*Must be 20 characters or less')
            // .required('Required')
            // .matches(/^[aA-zZ\s]+$/, '*Invalid format'),
            // contactno: Yup.string()
            // .min(11, "Must be 11 characters")
            // .max(11, "Must be 11 characters")
            // .required('*Required'),            
            // region: Yup.string()
            //     .required('*Required'),
            // province: Yup.string()
            //     .required('*Required'),
            // city: Yup.string()
            //     .required('*Required'),
            // bgy: Yup.string()
            //     .required('*Required'),
            // housestreet: Yup.string()
            //     .required('*Required') 
        }),
        onSubmit: values => { 
            const promises = []
            setLoading(true)

            if (emailRef.current.value !== currentUser.email) {
                promises.push(updateEmail(emailRef.current.value))
            }
            if (passwordRef.current.value) {
                promises.push(updatePassword(passwordRef.current.value))
            }
            
            Promise.all(promises).then(() => {
                history.push("/profile")
            }).catch(() => {
                alert("Failed to udpate profile")
            }).finally(() => {
                setLoading(false)
            })
        }
    })

    return (
        <>  
            <Nav />
            <h2 style={{marginLeft:'20vw'}}>Update Profile</h2>
                <EditDetailsWrapper>
                <h3 style={{marginTop: '3rem'}}>Main Details</h3>
                <Form onSubmit={formik.handleSubmit}>
                
                    <Label htmlFor="email">Email Address</Label>
                    <EditInput
                        id="email"
                        type="text"
                        ref={emailRef}
                        {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <Error>{formik.errors.email}</Error>
                    ) : null}

                    <Label htmlFor="password" >Password</Label>
                    <EditInput
                        id="password"
                        type="password"
                        ref={passwordRef}
                        placeholder="Leave blank to unchange"
                        {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <Error>{formik.errors.password}</Error>
                    ) : null}

                    <Label htmlFor="confirmpassword" >Confirm Password</Label>
                    <EditInput
                        id="confirmpassword"
                        type="password"
                        placeholder="Leave blank to unchange"
                        {...formik.getFieldProps('confirmpassword')}
                    />
                    {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
                        <Error>{formik.errors.confirmpassword}</Error>
                    ) : null}

                    {/* <Label htmlFor="firstname">First Name</Label>
                    <EditInput
                        id="firstname"
                        type="text"
                        {...formik.getFieldProps('firstname')}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <Error>{formik.errors.firstName}</Error>
                    ) : null}

                    <Label htmlFor="middlename">Middle Name</Label>
                    <EditInput
                        id="middlename"
                        type="text"
                        {...formik.getFieldProps('middlename')}
                    />
                    {formik.touched.middlename && formik.errors.middlename ? (
                        <Error>{formik.errors.middlename}</Error>
                    ) : null}

                    <Label htmlFor="lastname">Last Name</Label>
                    <EditInput
                        id="lastname"
                        type="text"
                        {...formik.getFieldProps('lastname')}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <Error>{formik.errors.lastName}</Error>
                    ) : null}

                    

                    <Label htmlFor="email">Contact No.</Label>
                    <EditInput
                        id="contactno"
                        type="text"
                        {...formik.getFieldProps('contactno')}
                    />
                    {formik.touched.contactno && formik.errors.contactno ? (
                        <Error>{formik.errors.contactno}</Error>
                    ) : null}

                    <Label htmlFor='region'>Region</Label>
                    <StyledSelect
                        label="Region" 
                        name="region" 
                        onChange={updateRegion}
                        onBlur={formik.handleBlur}>
                            <option>{region}</option>
                            {regionApi && regionApi.map(reg => (
                            <option key={reg.reg_code}
                            value={reg.reg_code}>{reg.name}</option>
                        ))}
                    </StyledSelect>
                    {formik.touched.region && formik.errors.region ? (
                        <Error>{formik.errors.region}</Error>
                    ) : null}

                    <Label htmlFor='province'>Municipality | Province</Label>
                    <StyledSelect 
                        label="Province" 
                        name="province" 
                        onChange={updateProvince}
                        onBlur={formik.handleBlur}>
                            <option>{province}</option>
                            {provinceApi && provinceApi.map(prov => (
                                <option key={prov.prov_code} value={prov.prov_code}>{prov.name}</option>
                            ))}
                    </StyledSelect>
                    {formik.touched.province && formik.errors.province ? (
                        <Error>{formik.errors.province}</Error>
                    ) : null}

                    <Label htmlFor='city'>City</Label>
                    <StyledSelect 
                        label="City" 
                        name="city"
                        onChange={updateCity}
                        onBlur={formik.handleBlur}>
                            <option>{city}</option>
                            {cityApi && cityApi.map(mun => (
                                <option key={mun.mun_code} value={mun.mun_code}>{mun.name}</option>
                            ))}
                    </StyledSelect>
                    {formik.touched.city && formik.errors.city ? (
                        <Error>{formik.errors.city}</Error>
                    ) : null}

                    <Label htmlFor='bgy'>Barangay</Label>
                    <StyledSelect 
                        label="Bgy" 
                        name="bgy"
                        onChange={updateBgy}
                        onBlur={formik.handleBlur}>
                            <option>{bgy}</option>
                            {barangayApi && barangayApi.map(bgy => (
                                <option key={bgy.name}>{bgy.name}</option>
                            ))}
                    </StyledSelect>
                    {formik.touched.bgy && formik.errors.bgy ? (
                        <Error>{formik.errors.bgy}</Error>
                    ) : null}

                    <Label htmlFor="housestreet">Street No., Street</Label>
                    <EditInput
                        id="housestreet"
                        type="text"
                        {...formik.getFieldProps('housestreet')}
                    />
                    {formik.touched.housestreet && formik.errors.housestreet ? (
                        <Error>{formik.errors.housestreet}</Error>
                    ) : null} */}


                    {/* ----------OTHER DETAILS---------- */}
                    <h3 style={{marginTop: '3rem'}}>Other Details</h3>
                    
                    {/* <Label htmlFor="bdate">Birth Date (MM/DD/YYYY)</Label>
                    <EditInput
                        id="bdate"
                        type="date"
                        {...formik.getFieldProps('bdate')}
                    />

                    <Label htmlFor="pobirth">Place of Birth</Label>
                    <EditInput
                        id="pobirth"
                        type="text"
                        {...formik.getFieldProps('pobirth')}
                    />

                    <Label htmlFor="nationality">Nationality</Label>
                    <EditInput
                        id="nationality"
                        type="text"
                        {...formik.getFieldProps('nationality')}
                    />

                    <Label htmlFor="civilstatus">Civil Status</Label>
                    <EditInput
                        id="civilstatus"
                        type="text"
                        {...formik.getFieldProps('civilstatus')}
                    />

                    <Label htmlFor="mothermaiden">Mother's Maiden Name</Label>
                    <EditInput
                        id="mothermaiden"
                        type="text"
                        {...formik.getFieldProps('mothermaiden')}
                    /> 

                    <Label htmlFor="empstatus">Employment Status</Label>
                    <EditInput
                        id="empstatus"
                        type="text"
                        {...formik.getFieldProps('empstatus')}
                    />

                    <Label htmlFor="employer">Company Name</Label>
                    <EditInput
                        id="employer"
                        type="text"
                        {...formik.getFieldProps('employer')}
                    />                     */}

                    <BtnWrap>
                        <Button primary type="submit" disabled={loading}>Update</Button> 
                    </BtnWrap>
                    </Form>
                                        
                </EditDetailsWrapper> 
                          
        </>
    )
}

export default EditDetails
