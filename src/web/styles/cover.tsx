import { CSSProperties } from 'react'

const coverOpacity = 0.5

export const container = {
    display: "flex",
    width: "100%",
    minHeight: "400px",
    backgroundImage: `url("assets/cover.r.png")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    flexDirection: "column",
    overflow: "auto",  
    padding: 0,
    margin: 0
} as CSSProperties

export const content = {
    display: "flex",
    alignItems: "center",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: `rgba(0,0,0, ${coverOpacity})`,
    color: "#ffffff",
    textShadow: "0px 1px 3px #000000",
    padding: 0,
    margin: 0
} as CSSProperties

export const title = {
    color: "#ffffff",
    fontSize: "40px"
} as CSSProperties
 
export const subtitle = {
    color: "#ffffff",
    fontSize: "30px"
} as CSSProperties