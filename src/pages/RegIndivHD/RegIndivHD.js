import React, { useState, useEffect, useRef } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { firestore } from '../../firebase';

import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom'


import { Title, BtnWrap } from '../RegIndividual/RegIndividualStyle';
import { StyledForm, RadioLabel, RadioWrapper, QuestionWrapper, Question, SubQuestion, CheckboxLabel, Error } from './RegIndivHDStyles'
import { Button } from '../../components/Button'
import HalfBg from '../../components/HalfBg'
import { MainWrapper, RightWrapper } from '../../components/HalfBgStyle'
import { ImUser } from 'react-icons/im'


const RegIndivHD = () => {
    const { currentUser } = useAuth()
    const history = useHistory()

    return (
        <>
            <MainWrapper>
                <HalfBg />
                <RightWrapper style={{alignItems: 'flex-start'}}>
                    <Formik
                        initialValues={{
                            question1a: "false",
                            question1b: "false",
                            question1c: "false",
                            question1d: "false",
                            question1e: "false",
                            question1f: "false",
                            question1g: "false",
                            question2: "false",
                            question3: "false",
                            question4: "false",
                            question5: "false",
                            question6: "false",
                            question7: "false",
                            acceptedTerms: false,
                        }}
                        validationSchema={
                            Yup.object().shape({
                                acceptedTerms: Yup.boolean()
                                .required('*Required')
                                .oneOf([true], '*You must accept the terms and conditions.'),
                            })
                        }
                          onSubmit={(values, { setSubmitting }) => {
                            
                            const healthDeclare = async(user) => {
                                const userRef = firestore
                                    .collection(`users`)
                                    .doc(user.uid)
                                const doc = await userRef.get()
                                if (!doc.exists) {
                                    console.log('No such document!');
                                } else {
                                    try{
                                        userRef.set({
                                            healthDeclaration: {
                                                question1a: values.question1a,
                                                question1b: values.question1b,
                                                question1c: values.question1c,
                                                question1d: values.question1d,
                                                question1e: values.question1e,
                                                question1f: values.question1f,
                                                question1g: values.question1g,
                                                question2: values.question2,
                                                question3: values.question3,
                                                question4: values.question4,
                                                question5: values.question5,
                                                question6: values.question6,
                                                question7: values.question7,
                                            }
                                        }, {merge: true})
                                    } catch(e) {
                                        console.log("Error on updating:", e)
                                    }
                                    
                                }
                            }

                            healthDeclare(currentUser)
                            setSubmitting(false)
                            alert("You're all set! You can now login 🚀")
                            history.push("/login")
                            
                          }}>
                        
                        
                            <StyledForm>
                                <Title>
                                    <h1><ImUser/> Register as individual</h1>
                                    <p>Step 3 of 3 - Health Declaration</p>
                                    <p>Please answer honestly the questions below.</p>
                                </Title>

                                <QuestionWrapper>
                                    <Question>1. Are you experiencing (Nakakaranas ka ba ng):</Question>
                                    <SubQuestion id="question1-a">
                                        <p>a. Sorethroat (Pananakit ng lalamunan)</p>
                                    </SubQuestion>
                                    <RadioWrapper 
                                        role="group" aria-labelledby="question1-a"
                                    >
                                        <RadioLabel >
                                        <Field type="radio" name="question1a" value="true" />
                                        <p>Yes</p>
                                        </RadioLabel>
                                        <RadioLabel>
                                        <Field type="radio" name="question1a" value="false"  />
                                        <p>No</p>
                                        </RadioLabel>
                                    </RadioWrapper>

                                    <SubQuestion id="question1-b">
                                        <p>b. Body Pain (Pananakit ng katawan)</p>
                                    </SubQuestion>
                                    <RadioWrapper 
                                        role="group" aria-labelledby="question1-b"
                                    >
                                        <RadioLabel >
                                        <Field type="radio" name="question1b" value="true" />
                                        <p>Yes</p>
                                        </RadioLabel>
                                        <RadioLabel>
                                        <Field type="radio" name="question1b" value="false"  />
                                        <p>No</p>
                                        </RadioLabel>
                                    </RadioWrapper>

                                    <SubQuestion id="question1-a">
                                        <p>c. Headache (Sakit sa ulo)</p>
                                    </SubQuestion>
                                    <RadioWrapper 
                                        role="group" aria-labelledby="question1-c"
                                    >
                                        <RadioLabel >
                                        <Field type="radio" name="question1c" value="true" />
                                        <p>Yes</p>
                                        </RadioLabel>
                                        <RadioLabel>
                                        <Field type="radio" name="question1c" value="false"  />
                                        <p>No</p>
                                        </RadioLabel>
                                    </RadioWrapper>

                                    <SubQuestion id="question1-d">
                                        <p>d. Fever the past few days (Lagnat sa nakalipas na araw)</p>
                                    </SubQuestion>
                                    <RadioWrapper 
                                        role="group" aria-labelledby="question1-d"
                                    >
                                        <RadioLabel >
                                        <Field type="radio" name="question1d" value="true" />
                                        <p>Yes</p>
                                        </RadioLabel>
                                        <RadioLabel>
                                        <Field type="radio" name="question1d" value="false"  />
                                        <p>No</p>
                                        </RadioLabel>
                                    </RadioWrapper>

                                    <SubQuestion id="question1-e">
                                        <p>e. Cough or Colds (Ubo o Sipon)</p>
                                    </SubQuestion>
                                    <RadioWrapper 
                                        role="group" aria-labelledby="question1-e"
                                    >
                                        <RadioLabel >
                                        <Field type="radio" name="question1e" value="true" />
                                        <p>Yes</p>
                                        </RadioLabel>
                                        <RadioLabel>
                                        <Field type="radio" name="question1e" value="false"  />
                                        <p>No</p>
                                        </RadioLabel>
                                    </RadioWrapper>

                                    <SubQuestion id="question1-f">
                                        <p>f. Shortness of breath (Hinahabol ang paghinga)</p>
                                    </SubQuestion>
                                    <RadioWrapper 
                                        role="group" aria-labelledby="question1-f"
                                    >
                                        <RadioLabel >
                                        <Field type="radio" name="question1f" value="true" />
                                        <p>Yes</p>
                                        </RadioLabel>
                                        <RadioLabel>
                                        <Field type="radio" name="question1f" value="false"  />
                                        <p>No</p>
                                        </RadioLabel>
                                    </RadioWrapper>

                                    <SubQuestion id="question1-g">
                                        <p>g. Diarrhea (Pagtatae)</p>
                                    </SubQuestion>
                                    <RadioWrapper 
                                        role="group" aria-labelledby="question1-g"
                                    >
                                        <RadioLabel >
                                        <Field type="radio" name="question1g" value="true" />
                                        <p>Yes</p>
                                        </RadioLabel>
                                        <RadioLabel>
                                        <Field type="radio" name="question1g" value="false"  />
                                        <p>No</p>
                                        </RadioLabel>
                                    </RadioWrapper>
                                </QuestionWrapper>
                                
                                <QuestionWrapper>
                                    <Question>
                                        2. Have you worked together or stayed together in the same closed environment of a confirmed Covid-19 case? (May nakasama ka ba o nakatrabahong tao na kumpirmadong may Covid-19 o corona virus?)
                                    </Question>
                                    <RadioWrapper 
                                        role="group" aria-labelledby="question2"
                                    >
                                        <RadioLabel >
                                        <Field type="radio" name="question2" value="true" />
                                        <p>Yes</p>
                                        </RadioLabel>
                                        <RadioLabel>
                                        <Field type="radio" name="question2" value="false"  />
                                        <p>No</p>
                                        </RadioLabel>
                                    </RadioWrapper>
                                </QuestionWrapper>
                                
                                <QuestionWrapper>
                                    <Question>
                                        3. Have you had any contact with anyone with fever, cough, colds, and sore throat the past 2 weeks? (Mayroon ka bang nakasama na may lagnat, ubo, sipon, o sakit ng lalamunan sa nakalipas na 2 linggo?
                                    </Question>
                                    <RadioWrapper 
                                        role="group" aria-labelledby="question3"
                                    >
                                        <RadioLabel >
                                        <Field type="radio" name="question3" value="true" />
                                        <p>Yes</p>
                                        </RadioLabel>
                                        <RadioLabel>
                                        <Field type="radio" name="question3" value="false"  />
                                        <p>No</p>
                                        </RadioLabel>
                                    </RadioWrapper>
                                </QuestionWrapper>

                                <QuestionWrapper>
                                    <Question>
                                        4. Have you travelled outside the Philippines in the last 14 days? (Ikaw ba ay nagbiyahe sa labas ng Pilipinas sa nakalipas na 14 na araw?)
                                    </Question>
                                    <RadioWrapper 
                                        role="group" aria-labelledby="question4"
                                    >
                                        <RadioLabel >
                                        <Field type="radio" name="question4" value="true" />
                                        <p>Yes</p>
                                        </RadioLabel>
                                        <RadioLabel>
                                        <Field type="radio" name="question4" value="false"  />
                                        <p>No</p>
                                        </RadioLabel>
                                    </RadioWrapper>
                                </QuestionWrapper>

                                <QuestionWrapper>
                                    <Question>
                                        5. Have you travelled to any areas in NCR from your home? (Ikaw ba ay nagpunta sa ibang parte ng NCR o Metro Manila bukod sa iyong bahay?) Specify where if your answer is Yes. (Sabihin kung saan kung ang iyong sagot ay oo.)
                                    </Question>
                                    <RadioWrapper 
                                        role="group" aria-labelledby="question5"
                                    >
                                        <RadioLabel >
                                        <Field type="radio" name="question5" value="true" />
                                        <p>Yes</p>
                                        </RadioLabel>
                                        <RadioLabel>
                                        <Field type="radio" name="question5" value="false"  />
                                        <p>No</p>
                                        </RadioLabel>
                                    </RadioWrapper>
                                </QuestionWrapper>
                                
                                <QuestionWrapper>
                                    <Question>
                                        6. I am person with Disability (PWD)
                                    </Question>
                                    <RadioWrapper 
                                        role="group" aria-labelledby="question6"
                                    >
                                        <RadioLabel >
                                        <Field type="radio" name="question6" value="true" />
                                        <p>Yes</p>
                                        </RadioLabel>
                                        <RadioLabel>
                                        <Field type="radio" name="question6" value="false"  />
                                        <p>No</p>
                                        </RadioLabel>
                                    </RadioWrapper>
                                </QuestionWrapper>

                                <QuestionWrapper>
                                    <Question>
                                        7. I am pregnant
                                    </Question>
                                    <RadioWrapper 
                                        role="group" aria-labelledby="question7"
                                    >
                                        <RadioLabel >
                                        <Field type="radio" name="question7" value="true" />
                                        <p>Yes</p>
                                        </RadioLabel>
                                        <RadioLabel>
                                        <Field type="radio" name="question7" value="false"  />
                                        <p>No</p>
                                        </RadioLabel>
                                    </RadioWrapper>
                                </QuestionWrapper>

                                <CheckboxLabel>
                                    <Field type="checkbox" name="acceptedTerms" />
                                    <p>I hereby authorize Tracerist to collect and process the data indicated in survey for the purpose of effecting control of the Covid-19 infection. I understand that my personal information is protected by RA 10173, Data Privacy Act of 2012, that I am required by RA 11469, Bayanihan to Heal As One Act, to provide truthful information and that this health declaration is in accordance with memoranda issued by various government institutions, including the Joint Memorandum Circular No. 20-04-A Series 2020 by the Department of Trade and Industry (DTI) and the Department of Labor and Employment (DOLE), Memorandum Circular No. 2020-004 by the Department of Tourism (DoT), and Memorandum Circular No. 2020-077 by the Department of Interior and Local Government (DILG).</p>
                                </CheckboxLabel>
                                <Error><ErrorMessage name="acceptedTerms"/></Error>
                                
                         
                                <BtnWrap>
                                    <Button primary type="submit">Submit</Button> 
                                </BtnWrap>
                            </StyledForm>
                        
                        
                    </Formik>    
                </RightWrapper>
            </MainWrapper> 
        </>
    )
}

export default RegIndivHD
