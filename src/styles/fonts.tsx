import { CSSProperties } from 'react'

export const base: CSSProperties = {
    color: "#ffffff",
    textAlign: "center"
  }
  
export const title: CSSProperties = {
    ...base,
    fontSize: 40
}
 
export const subtitle: CSSProperties = {
    ...base,
    fontSize: 20
}