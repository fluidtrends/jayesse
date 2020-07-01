import React, { useState, CSSProperties } from 'react'
import { Button, Affix } from 'antd'
import { Fade } from 'react-awesome-reveal'

import { GuideProps } from '../types'

const text = {

}

const assets = {
    headerImage: `assets/logo.gif`,
    footerImage: `assets/logo.gif`
}
   
const styles = {
    main: {
        display: "flex",
        alignItems: "top",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#ECEFF1",
        overflow: "auto",  
        padding: 0,
        margin: 0
    } as CSSProperties,
    header: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'center'
    } as CSSProperties,
    action: {
        margin: "5px"
    } as CSSProperties,
    message: {
        boxShadow: "0px 1px 3px #90A4AE",
        borderRadius: "5px",
        backgroundColor: "#FAFAFA",
        padding: "8px",
        margin: "5px",
        color: "#37474F"
    } as CSSProperties,
    toggler: {
        margin: "10px"
    } as CSSProperties,
    app: {
        display: "flex",
        backgroundColor: "#ECEFF1",
        padding: 0,
        margin: 0,
        flex: 1
    } as CSSProperties,
    headerImage: {
        height: "48px",
        width: "48px"
    } as CSSProperties
}

export const Guide: React.FC<GuideProps> = (props) => {
    const [stepId, setStepId] = useState(0)
    const [shown, setShown] = useState(true)

    const step = () => props.steps[stepId]
    const next = () => setStepId(step().onAction)

    const hide = () => (
        <div style={styles.main}>
            <div style={styles.header}>
                <img src={assets.headerImage} style={styles.headerImage}/>
                <Button type="link" style={styles.toggler} onClick={() => setShown(!shown)}>
                    show guide
                </Button> 
            </div>
            <div style={styles.app}>
                { props.children }
            </div>
        </div>
    )

    const show = () => (
        <div style={styles.main}>
            <div style={styles.header}>
                <img src={assets.headerImage} style={styles.headerImage}/>
                <Fade>
                    <p style={styles.message}> 
                        { step().message } 
                    </p> 
                </Fade>
                <Button type="primary" style={styles.action} onClick={() => next()}>
                    { step().action }
                </Button>
                <Button type="link" style={styles.toggler} onClick={() => setShown(!shown)}>
                    hide guide
                </Button> 
            </div>
            <div style={styles.app}>
                { props.children }
            </div>
        </div>
    )

    return (
        <div style={styles.app}>
            { props.children }
        </div>
)}

// return (
//     <Affix offsetTop={0}>
//       { shown ? show() : hide() }
//     </Affix>