import { ReactNode } from "react"
export interface HardButtonProps
{
  className?: string,
  top?: string,
  left?: string,
  right?: string,
  children: ReactNode,
  title: string,
  onClick?: () => void
}
