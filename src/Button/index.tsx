import React from "react"

export interface ButtonProps {
  children?: React.ReactNode

  onClick: () => void
  /**Esto es para probar `true`
   * @default true
   *
   */

  titulito: string
}

export const Button = ({ children, onClick, titulito }: ButtonProps) => {
  return (
    <button className="bg-blue-400" onClick={onClick}>
      {children}
    </button>
  )
}
