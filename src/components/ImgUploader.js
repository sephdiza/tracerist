import React, { useState } from 'react'

import { InputImg, Label, InputImgWrapper, ProfileImg } from './ImgUploadStyles'

function ImgUploader() {
    const [src, setSrc] = useState('');
    const [show, setShow] = useState(false)

    const handleChange = e => {
        setShow(true)
        setSrc(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <InputImgWrapper>
            <Label htmlFor="uploadImg">Choose Image</Label>
            <InputImg type="file" onChange={handleChange} id="uploadImg"/>
            <ProfileImg src={src} show={show}/>
        </InputImgWrapper>
        
    )
}

export default ImgUploader
