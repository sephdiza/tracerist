import React, {useState, useEffect} from 'react'

import { useFormik } from 'formik';
import *  as Yup from 'yup'
import { regions, getProvincesByRegion, getCityMunByProvince, getBarangayByMun } from 'phil-reg-prov-mun-brgy'

import { Button } from '../../../components/Button'
import { EditDetailsWrapper, Form, EditInput, StyledSelect, Label, BtnWrap, Error} from './EditDetailsStyle'

function EditDetails({ user, url }) {
    const [regionApi, setRegionApi] = useState("")
    const [provinceApi, setProvinceApi] = useState("")
    const [cityApi, setCityApi] = useState("")
    const [barangayApi, setBarangayApi] = useState("")

    const [firstname, setFirstname] = useState(user.firstname);
    const [middlename, setMiddlename] = useState(user.middlename);
    const [lastname, setLastname] = useState(user.lastname);
    const [username, setUsername] = useState(user.username);
    const [housestreet, setHousestreet] = useState(user.address[0].housestreet);
    const [bgy, setBgy] = useState(user.address[0].bgy);
    const [city, setCity] = useState(user.address[0].city);
    const [province, setProvince] = useState(user.address[0].province);
    const [region, setRegion] = useState(user.address[0].region);
    const [contactno, setContactno] = useState(user.contactno);
    const [email, setEmail] = useState(user.email);
    const [gender, setGender] = useState(user.gender);
    const [bdate, setBdate] = useState(user.bdate);
    const [pobirth, setPobirth] = useState(user.pobirth);
    const [nationality, setNationality] = useState(user.nationality);
    const [civilstatus, setCivilstatus] = useState(user.civilstatus);
    const [mothermaiden, setMothermaiden] = useState(user.mothermaiden);
    const [empstatus, setEmpstatus] = useState(user.empstatus);
    const [employer, setEmployer] = useState(user.employer);
    
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
            username: username,
            firstName: firstname,
            middleName: middlename, 
            lastName: lastname, 
            email: email, 
            contactno: contactno,
            region: region,
            province: province,
            city: city,
            bgy: bgy,
            housestreet: housestreet,
            birthdate: bdate,
            pobirth: pobirth,
            nationality: nationality,
            civilstatus: civilstatus,
            mothermaiden: mothermaiden,
            empstatus: empstatus,
            employer: employer,
        },
        validationSchema: Yup.object().shape({
            username: Yup.string()
            .min(6, '*Must be 6 characters or more')
            .required('*Required'),
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
            email: Yup.string().email('*Invalid email address').required('*Required'),
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
            fetch(`http://localhost:8000/user/${user.id}`, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  "firstname": values.firstName,
                  "middlename": values.middleName,
                  "lastname": values.lastName,
                  "address": [
                      {
                      "housestreet": values.housestreet,
                      "bgy": values.bgy,
                      "city": values.city,
                      "province": values.province,
                      "region": values.region
                      }
                  ],
                  "contactno": values.contactno,
                  "email": values.email,
                  "username": values.username,
                  "gender": "",
                  "bdate": values.birthdate,
                  "pobirth": values.pobirth,
                  "nationality": values.nationality,
                  "civilstatus": values.civilstatus,
                  "mothermaiden": values.mothermaiden,
                  "empstatus": values.empstatus,
                  "employer": values.employer,
                })
            })
            alert('Your changes have been saved!');
            window.location.reload();
        }
    })

    return (
        <>
            <h2>Edit details</h2>
                <EditDetailsWrapper>
                <h3 style={{marginTop: '3rem'}}>Main Details</h3>
                <Form onSubmit={formik.handleSubmit}>
                
                    <Label htmlFor="username" >Username</Label>
                    <EditInput
                        id="username"
                        type="text"
                        {...formik.getFieldProps('username')}
                    />
                    {formik.touched.username && formik.errors.username ? (
                        <Error>{formik.errors.username}</Error>
                    ) : null}

                    <Label htmlFor="firstName">First Name</Label>
                    <EditInput
                        id="firstName"
                        type="text"
                        {...formik.getFieldProps('firstName')}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <Error>{formik.errors.firstName}</Error>
                    ) : null}

                    <Label htmlFor="middleName">Middle Name</Label>
                    <EditInput
                        id="middleName"
                        type="text"
                        {...formik.getFieldProps('middleName')}
                    />
                    {formik.touched.middleName && formik.errors.middleName ? (
                        <Error>{formik.errors.middleName}</Error>
                    ) : null}

                    <Label htmlFor="lastName">Last Name</Label>
                    <EditInput
                        id="lastName"
                        type="text"
                        {...formik.getFieldProps('lastName')}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <Error>{formik.errors.lastName}</Error>
                    ) : null}

                    <Label htmlFor="email">Email Address</Label>
                    <EditInput
                        id="email"
                        type="text"
                        {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <Error>{formik.errors.email}</Error>
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
                    ) : null}


                    {/* ----------OTHER DETAILS---------- */}
                    <h3 style={{marginTop: '3rem'}}>Other Details</h3>
                    
                    <Label htmlFor="birthdate">BirthDate</Label>
                    <EditInput
                        id="birthdate"
                        type="date"
                        {...formik.getFieldProps('birthdate')}
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
                    />                    

                    <BtnWrap>
                        <Button primary type="submit">Update</Button> 
                    </BtnWrap>
                    </Form>
                                        
                </EditDetailsWrapper> 
                          
        </>
    )
}

export default EditDetails
