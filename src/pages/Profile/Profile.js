import React from 'react'

import { Link } from 'react-router-dom';

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
    return (    
        <>
            <h2>User's Profile</h2>
            { user && (
            <ProfileWrapper>
                <RightContainer>               
                    <ProfileMain>
                        <ProfilePicture>
                            <ProfileImgBorder>
                                <ImgUploader />
                            </ProfileImgBorder>
                            <h3>{user.username}</h3>
                        </ProfilePicture>
                        <ProfileMainDetails>
                            <p>{user.firstname} {user.lastname}</p>
                            {user.address.map(address => (
                                    <p key={user.id}>{address.housestreet}, {address.bgy}, {address.city}, {address.province}, {address.region}</p>
                                ))
                            }
                            <p>{user.contactno}</p>
                            <p>{user.email}</p>
                        </ProfileMainDetails>
                    </ProfileMain>              
                    <ProfileBtnGrp>
                            <Button primary>Health Declaration</Button>
                            <Link to="/profile/editdetails">
                                    <Button>Edit Details</Button>
                            </Link>   
                        </ProfileBtnGrp>
                    <ProfileTable>
                        <tbody>
                            <tr>
                                <th>Gender</th>
                                <td>{user.gender}</td>
                            </tr>
                            <tr>
                                <th>BirthDate</th>
                                <td>{user.bdate}</td>
                            </tr>
                            <tr>
                                <th>Place of Birth</th>
                                <td>{user.pobirth}</td>
                            </tr>
                            <tr>
                                <th>Nationality</th>
                                <td>{user.nationality}</td>
                            </tr>
                            <tr>
                                <th>Civil Status</th>
                                <td>{user.civilstatus}</td>
                            </tr>
                            <tr>
                                <th>Mother's maiden name</th>
                                <td>{user.mothermaiden}</td>
                            </tr>
                            <tr>
                                <th>Employment status</th>
                                <td>{user.empstatus}</td>
                            </tr>
                            <tr>
                                <th>Employer / Company</th>
                                <td>{user.employer}</td>
                            </tr>
                        </tbody>
                    </ProfileTable>
                </RightContainer>
                <LeftContainer>
                    <QrCodeImg value={JSON.stringify({
                            name: `${user.firstname} ${user.lastname}`,
                            email: user.email,
                            contact: user.contactno
                    })} download/>   
                </LeftContainer>
            </ProfileWrapper>
            )}
        </>
    );
    
}

export default Profile;
