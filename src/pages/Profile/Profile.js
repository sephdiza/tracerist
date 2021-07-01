import React from 'react'

import { useAuth } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom';

import Nav from '../../components/Nav'
import { Button } from '../../components/Button'
import ImgUploader from '../../components/ImgUploader';
import QrCodeImg from '../../components/QrCodeImg';
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

function Profile({ user, setUser }) {
    const { currentUser } = useAuth()

    return (    
        <>  
            <Nav />
            <h2 style={{marginLeft: '20vw'}}>User's Profile</h2>
             
            <ProfileWrapper>
                <RightContainer>               
                    <ProfileMain>
                        <ProfilePicture>
                            <ProfileImgBorder>
                                <ImgUploader />
                            </ProfileImgBorder>
                            <h3>{currentUser.email}</h3>
                        </ProfilePicture>
                        <ProfileMainDetails>
                            {/* <p>{user.firstname} {user.lastname}</p>
                            {user.address.map(address => (
                                    <p key={user.id}>{address.housestreet}, {address.bgy}, {address.city}, {address.province}, {address.region}</p>
                                ))
                            }
                            <p>{user.contactno}</p>
                            <p>{user.email}</p> */}
                        </ProfileMainDetails>
                    </ProfileMain>              
                    <ProfileBtnGrp>
                            <Button primary>Health Declaration</Button>
                            <Link to="/update-profile">
                                    <Button>Edit Details</Button>
                            </Link>   
                        </ProfileBtnGrp>
                    <ProfileTable>
                        <tbody>
                            <tr>
                                <th>Gender</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th>BirthDate</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th>Place of Birth</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th>Nationality</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th>Civil Status</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th>Mother's maiden name</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th>Employment status</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th>Employer / Company</th>
                                <td></td>
                            </tr>
                        </tbody>
                    </ProfileTable>
                </RightContainer>
                <LeftContainer>
                    {/* <QrCodeImg value={JSON.stringify({
                            name: `${user.firstname} ${user.lastname}`,
                            email: user.email,
                            contact: user.contactno
                    })} download/>    */}
                </LeftContainer>
            </ProfileWrapper>
            
        </>
    );
    
}

export default Profile;
