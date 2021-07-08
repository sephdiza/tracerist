import React, {useState, useEffect, useRef} from 'react'

import { useHistory } from 'react-router';
import { useFormik } from 'formik';
import *  as Yup from 'yup'
import { regions, getProvincesByRegion, getCityMunByProvince, getBarangayByMun } from 'phil-reg-prov-mun-brgy'
import { useAuth } from '../../../contexts/AuthContext';
import { firestore } from '../../../firebase';

import Nav from '../../../components/Nav'
import { Button } from '../../../components/Button'
import { EditDetailsWrapper, Form, EditInput, Label, BtnWrap, Error, StyledSelect} from '../EditDetails/EditDetailsStyle'

function UpdateEstab() {
    const [regionApi, setRegionApi] = useState("")
    const [provinceApi, setProvinceApi] = useState("")
    const [cityApi, setCityApi] = useState("")
    const [barangayApi, setBarangayApi] = useState("")
    const [loading, setLoading] = useState("")
    const emailRef = useRef()
    const passwordRef = useRef()
    const { currentUser, updateEmail, updatePassword, userData } = useAuth()
    const history = useHistory()
    
    useEffect(() => {
        setRegionApi(regions)
    }, [userData])

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
            password: '',
            confirmpassword: '', 
            estabName: userData.estabName,
            description: userData.description,  
            contactno: userData.contactno,
            region: userData.region,
            province: userData.province,
            city: userData.city,
            bgy: userData.bgy,
            housestreet: userData.housestreet
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email('*Invalid email address').required('*Required'),
            password: Yup.string()
            .min(6, '*Must be 6 characters or more'),
            confirmpassword: Yup.string()
            .oneOf([Yup.ref('password'), null], "*Password doesn't match"),
            estabName: Yup.string()
            .required('*Required'),
            description: Yup.string()
            .required('*Required'),
            contactno: Yup.string()
            .min(11, "Must be 11 characters")
            .max(11, "Must be 11 characters")
            .required('*Required'),
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
            const promises = []
            setLoading(true)

            const editUser = async(user) => {
                const userRef = firestore
                    .collection(`users`)
                    .doc(user.uid)
                const doc = await userRef.get()
                if (!doc.exists) {
                    console.log('No such document!');
                } else {
                    try{
                        userRef.set({ 
                            email: values.email,
                            estabName: values.estabName,
                            description: values.description,  
                            contactno: values.contactno,
                            region: values.region,
                            province: values.province,
                            city: values.city,
                            bgy: values.bgy,
                            housestreet: values.housestreet
                        }, {merge: true})
                    } catch(e) {
                        console.log("Error on updating:", e)
                    }
                    
                }
            }
            editUser(currentUser)

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
                { !userData ? <h3>Loading...</h3> : (
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
 
                     <Label htmlFor="estabName">
                         Establishment Name</Label>
                     <EditInput
                         id="estabName"
                         type="text"
                         {...formik.getFieldProps('estabName')}
                     />
                     {formik.touched.estabName && formik.errors.estabName ? (
                         <Error>{formik.errors.estabName}</Error>
                     ) : null}
 
                     <Label htmlFor="description">Description</Label>
                     <EditInput
                         id="description"
                         type="text"
                         {...formik.getFieldProps('description')}
                     />
                     {formik.touched.description && formik.errors.description ? (
                         <Error>{formik.errors.description}</Error>
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
                             <option>{userData.region}</option>
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
                             <option>{userData.province}</option>
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
                             <option>{userData.city}</option>
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
                             <option>{userData.bgy}</option>
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
                     ) : null}

                     <BtnWrap>
                         <Button primary type="submit" disabled={formik.isValid === false || loading}>Update</Button> 
                     </BtnWrap>
                     </Form>
                )}
                                         
                </EditDetailsWrapper> 
                          
        </>
    )
}

export default UpdateEstab
