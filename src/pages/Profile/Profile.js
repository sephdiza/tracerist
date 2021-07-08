import React from 'react'

import { useAuth } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom';
import QrCodeImg from "../../components/QrCodeImg"
import Nav from '../../components/Nav'
import { Button } from '../../components/Button'
import { Title,
        ProfileWrapper,
        RightContainer,
        LeftContainer,
        ProfileMain,
        ProfilePicture,
        ProfileMainDetails,
        ProfileImgBorder,
        ProfileTable,
        ProfileBtnGrp,
        EstabWrapper,
        EstabDetails,
        EstabBtnGrp
    } from './ProfileStyle'
import avatar from "../../assets/images/profile-pic.png"
import { ReactComponent as EstabImg } from '../../assets/images/building.svg'

function Profile() {
    const { userData } = useAuth()
    if(!userData) {

    } else {
        document.title = `Tracerist | ${userData.type}`
    }
    

    return (    
        <>  
            <Nav />
            {!userData ? <Title>Loading...</Title> :
            userData.type === "Individual" ?
            <>
                <Title>User's Profile</Title>
                <ProfileWrapper>
                    <RightContainer>               
                        <ProfileMain>
                            <ProfilePicture>
                                <ProfileImgBorder>
                                    <img src={avatar} alt="Avatar"/>
                                </ProfileImgBorder>
                            </ProfilePicture>
                            <ProfileMainDetails>
                                <p>{userData.firstName} {userData.lastName}</p>            
                                <p>{userData.housestreet}, {userData.bgy}, {userData.city}, {userData.province}, {userData.region}</p>
                                <p>{userData.contactno}</p>
                                <p>{userData.email}</p>
                            </ProfileMainDetails>
                        </ProfileMain>              
                        <ProfileBtnGrp>
                                <Link to="/update-health">
                                    <Button primary>Health Declaration</Button>
                                </Link>
                                <Link to="/update-profile">
                                        <Button>Edit Details</Button>
                                </Link>   
                        </ProfileBtnGrp>
                        <ProfileTable>
                            <tbody>
                                <tr>
                                    <th>Gender</th>
                                    <td>{userData.gender}</td>
                                </tr>
                                <tr>
                                    <th>BirthDate</th>
                                    <td>{userData.bdate}</td>
                                </tr>
                                <tr>
                                    <th>Place of Birth</th>
                                    <td>{userData.pobirth}</td>
                                </tr>
                                <tr>
                                    <th>Nationality</th>
                                    <td>{userData.nationality}</td>
                                </tr>
                                <tr>
                                    <th>Civil Status</th>
                                    <td>{userData.civilstatus}</td>
                                </tr>
                                <tr>
                                    <th>Mother's maiden name</th>
                                    <td>{userData.mothermaiden}</td>
                                </tr>
                                <tr>
                                    <th>Employment status</th>
                                    <td>{userData.empstatus}</td>
                                </tr>
                                <tr>
                                    <th>Employer / Company</th>
                                    <td>{userData.employer}</td>
                                </tr>
                            </tbody>
                        </ProfileTable>
                    </RightContainer>
                    <LeftContainer>
                        <QrCodeImg value={JSON.stringify({
                                name: `${userData.firstName} ${userData.lastName}`,
                                email: userData.email,
                                contact: userData.contactno,
                                healthDeclaration:  {   
                                    q1a: userData.healthDeclaration.question1a,
                                    q1b: userData.healthDeclaration.question1b,
                                    q1c: userData.healthDeclaration.question1c,
                                    q1d: userData.healthDeclaration.question1d,
                                    q1e: userData.healthDeclaration.question1e,
                                    q1f: userData.healthDeclaration.question1f,
                                    q1g: userData.healthDeclaration.question1g,
                                    q2: userData.healthDeclaration.question2,
                                    q3: userData.healthDeclaration.question3,
                                    q4: userData.healthDeclaration.question4,
                                    q5: userData.healthDeclaration.question5,
                                    q6: userData.healthDeclaration.question6,
                                    q7: userData.healthDeclaration.question7,
                                }
                        })}/>   
                    </LeftContainer>
                </ProfileWrapper>
            </> 
            : (
                <>
                    <Title>Establishment's Profile</Title>
                    <EstabWrapper>
                        
                        <EstabImg />
                        <EstabDetails>
                            <p style={{fontWeight:"600"}}>{userData.estabName}</p>
                            <p>{userData.description}</p>
                            <p>{userData.housestreet}, {userData.bgy}, {userData.city}, {userData.province}, {userData.region}</p>
                            <p>{userData.contactno}</p>
                            <p>{userData.email}</p>
                        </EstabDetails>
                        <EstabBtnGrp>
                            <Link to="update-establishment">
                                <Button primary>Update Details</Button>
                            </Link>
                            <Link to="scan-qr">
                                <Button>Scan QR</Button>
                            </Link>
                        </EstabBtnGrp>  
                       
                         
                    </EstabWrapper>
                </>
            )}
                                
        </>
    );
    
}

export default Profile;
