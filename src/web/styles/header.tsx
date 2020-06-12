import { CSSProperties } from 'react'

const coverOpacity = 0.5

export const logo = {
    height: "64px",
    width: "auto",
    margin: "5px"
} as CSSProperties

export const menu = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    margin: "5px",
    flex: 1
} as CSSProperties
      
export const header = {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    backgroundColor: `rgba(0,0,0, ${coverOpacity})`,
    border: 'none',
    margin: 0,
    padding: 0
} as CSSProperties

export const headerInverted = {
    backgroundColor: "#ffffff",
    boxShadow: "0px 2px 5px #CFD8DC"
} as CSSProperties

export const menuItemCurrent = {
    color: "#ffffff",
    margin: "10px",
    borderBottom: "2px solid #ffffff",
    textShadow: "0px 1px 1px #546E7A",
    fontWeight: 700,
    padding: "10px",
    fontSize: "14px"
} as CSSProperties

export const menuItemCurrentInverted = {
    color: "#37474F",
    borderBottom: "2px solid #37474F",
    textShadow: "0px 1px 1px #FAFAFA"
} as CSSProperties

export const menuItem = {
    color: "#FAFAFA",
    padding: "5px",
    fontWeight: 300,
    margin: "10px 10px 18px 10px",
    fontSize: "14px"
} as CSSProperties

export const menuItemInverted = {
    color: "#607D8B"
} as CSSProperties