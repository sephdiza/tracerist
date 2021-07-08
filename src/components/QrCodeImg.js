import React from 'react'

import { QRCode } from 'react-qrcode-logo'
import traceristImg from '../assets/images/tracerist-logo.png'

function QrCode({ value }) {
    return (
        <>
            <QRCode
                    value={ value }
                    size={180}
                    bgColor={"#ffffff"}
                    fgColor={"#02353B"}
                    ecLevel={"L"}
                    logoImage={traceristImg}
                />
        </>
    )
}

export default QrCode
