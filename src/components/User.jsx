import React, { useState } from 'react'

const User = () => {

    const [userName, setUserName] = useState(false)
    console.log(userName);
    
    
    const kairatHandler = () => {
        setUserName(!userName)
    }


    return (
        <center>
            <h1>Adilet</h1>
            <h1>Azizbek</h1>
            <h1>{userName ? "Kairat" : "Baitur"}</h1>
            <button onClick={kairatHandler}>Change UserName</button>
        </center>
    )
}

export default User