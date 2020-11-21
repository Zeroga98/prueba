import React from "react"
import { Button } from "antd"


const ButtonComplement = ({ text,fontSize,width,...props }) => {
    const styles= {
        backgroundColor:'#FF5C64',
        borderRadius:'25px',
        color:'white',
        fontFamily:'Roboto',
        border:'0px',
        fontSize:fontSize,
        fontWeight:'bold',
        height:'5.5vh',
        width:width,
        alignItems:'center',
        justifyContent:'center',
        display:'flex'
    }
    return(
        <>
        <Button {...props} style={styles}>{text}</Button>
    </>
    )
} 



export default ButtonComplement
