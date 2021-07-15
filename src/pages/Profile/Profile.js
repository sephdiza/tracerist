import React, {useState, useEffect} from 'react'

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
        EstabBtnGrp,
        AddInfo
    } from './ProfileStyle'
import avatar from "../../assets/images/profile-pic.png"
import { ReactComponent as EstabImg } from '../../assets/images/building.svg'
import { Loading } from '../Visited/VisitedStyles'
import AdminDB from '../Admin/AdminDB/AdminDB';

function Profile() {
    const { userData } = useAuth()
    const [healthStatus, setHealthStatus] = useState()

    useEffect(() => {
        if(userData && userData.type === "Individual") {
            const filtered = Object.entries(userData.healthDeclaration).filter(([key, value]) => (value === "true"))
           
            if(filtered.length===0) {
                setHealthStatus("GOOD CONDITION")
            } else if (filtered.length === 1) {
                setHealthStatus("MILD CONDITION")
            } else {
                setHealthStatus("SEVERE CONDITION")
            }
        }
    }, [userData])
    
    return (    
        <>  
            <Nav />
            {!userData ? <Loading>fetching your data<span>⏳</span></Loading> :
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
                                    {
                                        healthStatus === "GOOD CONDITION" ? 
                                        <span style={{backgroundColor:"green"}}>{healthStatus}</span> :
                                        healthStatus === "MILD CONDITION" ? <span style={{backgroundColor:"orange"}}>{healthStatus}</span> :
                                        <span style={{backgroundColor:"red"}}>{healthStatus}</span>
                                    }
                                    
                            </ProfilePicture>
                            <ProfileMainDetails>
                                <p style={{fontWeight:"500"}}>{userData.firstName} {userData.middleName} {userData.lastName}</p>            
                                <p>{userData.housestreet}, {userData.bgy}, {userData.city}, {userData.province}, {userData.region}</p>
                                <p>{userData.contactno}</p>
                                <p>{userData.email}</p>
                            </ProfileMainDetails>
                        </ProfileMain>              
                        <ProfileBtnGrp>
                                <Link to="/update-health"
                                >
                                    <Button primary>Health Declaration</Button>
                                </Link>
                                <Link to="/update-profile"
                                >
                                        <Button>Edit Details</Button>
                                </Link>
                                <AddInfo>Add additional information on Edit Details <span>(Optional)</span></AddInfo>   
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
                                uid: userData.uid,
                                email: userData.email,
                                contact: userData.contactno,
                                healthStatus: healthStatus
                        })}/>   
                    </LeftContainer>
                </ProfileWrapper>
            </> 
            : userData.type === "Establishment" ? (
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
            ) : <AdminDB />
            }                       
        </>
    );
    
}

export default Profile;
