import { CSSProperties } from 'react'

export const base: CSSProperties = {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    flex: 1,
    padding: 0,
    margin: 0
}

export const fullscreen: CSSProperties = {
    ...base,
    minHeight: "100vh",
}

export const cover: CSSProperties = {
    backgroundImage: `url("assets/cover.r.png")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
}

export const overlay: CSSProperties = {
    ...base,
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "#ffffff",
    textAlign: "center",
    textShadow: "0px 1px 3px #333333",
}

export const content: CSSProperties = {
    ...base,
    minHeight: 400,
    padding: 0
}

export const footer = {
    textAlign: 'center', 
    width: "100%"
} as CSSProperties


