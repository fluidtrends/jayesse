import { CSSProperties } from 'react'

export const top = {
    width: "100%"
} as CSSProperties

export const logo = {
    height: 48,
    width: "auto",
    margin: 5
} as CSSProperties

export const logoLarge = {
    height: 80
} as CSSProperties

export const menu = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    margin: 0,
    flex: 1
} as CSSProperties

export const header = {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    position: "absolute",
    top: 0,
    backgroundColor: `rgba(0,0,0,0)`,
    border: 'none',
    height: 64,
    margin: 0,
    padding: 5
} as CSSProperties

export const headerLarge = {
    height: 120
}

export const headerInverted = {
    backgroundColor: "#ffffff",
} as CSSProperties

export const headerDepth = {
    boxShadow: "0px 2px 5px #CFD8DC",
} as CSSProperties

export const menuItemIcon = {
    display: 'flex',
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "flex-start",
    height: "100%",
    color: "#ffffff",
} as CSSProperties

export const menuRight = {
    justifyContent: "flex-end",
} as CSSProperties

export const menuLeft = {
    justifyContent: "flex-start",
} as CSSProperties

export const menuItemCurrent = {
    color: "#ffffff",
    borderBottom: "2px solid #ffffff",
    textShadow: "0px 1px 1px #546E7A",
    fontWeight: 700,
    padding: 5,
    margin: 5,
    fontSize: 12
} as CSSProperties

export const menuItemCurrentInverted = {
    color: "#37474F",
    borderBottom: "2px solid #37474F",
    textShadow: "0px 1px 1px #FAFAFA"
} as CSSProperties

export const drawer = {
    margin: 10
} as CSSProperties

export const menuDrawerItem = {
    color: "#37474F",
    padding: 5,
    margin: 5,
    fontSize: 12
} as CSSProperties

export const menuDrawerItemCurrent = {
    color: "#37474F",
    fontWeight: 700,
    borderBottom: "2px solid #37474F",
} as CSSProperties

export const menuItem = {
    color: "#FAFAFA",
    fontWeight: 300,
    padding: 5,
    margin: 5,
    border: "none",
    backgroundColor: "transparent",
    marginBottom: 10,
    fontSize: 12
} as CSSProperties

export const menuItemInverted = {
    color: "#607D8B"
} as CSSProperties