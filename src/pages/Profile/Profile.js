import React from 'react'

import { useAuth } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom';
import QrCodeImg from "../../components/QrCodeImg"
import Nav from '../../components/Nav'
import { Button } from '../../components/Button'
import { ProfileWrapper,
        RightContainer,
        LeftContainer,
        ProfileMain,
        ProfilePicture,
        ProfileMainDetails,
        ProfileImgBorder,
        ProfileTable,
        ProfileBtnGrp
    } from './ProfileStyle'
import avatar from "../../assets/images/profile-pic.png"

function Profile() {
    const { currentUser, fetchUser, userData } = useAuth()
    

    return (    
        <>  
            <Nav />
            <h2 style={{marginLeft: '20vw'}}>User's Profile</h2>
            {!userData ? <h3>Loading ...</h3> : (
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
                           contact: userData.contactno
                   })}/>   
               </LeftContainer>
           </ProfileWrapper>                  
            )}
                                
        </>
    );
    
}

export default Profile;
