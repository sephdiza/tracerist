import React, { useState, useEffect, useRef } from 'react'
import { useAuth } from '../../contexts/AuthContext'

import { Formik, Field } from 'formik';
import { useHistory } from 'react-router-dom'

import { Title, BtnWrap } from '../RegIndividual/RegIndividualStyle';
import { StyledForm, RadioLabel, RadioWrapper, QuestionWrapper, Question, SubQuestion } from './RegIndivHDStyles'
import { Button } from '../../components/Button'
import HalfBg from '../../components/HalfBg'
import { MainWrapper, RightWrapper } from '../../components/HalfBgStyle'
import { ImUser } from 'react-icons/im'


const RegIndivHD = () => {

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
                        }}
                          onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                              alert(JSON.stringify(values, null, 2));
                              setSubmitting(false);
                            }, 400);
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
