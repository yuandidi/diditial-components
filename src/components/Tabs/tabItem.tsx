import { FC } from "react"

export interface TabItemProps {
  label: string | React.ReactElement
  disabled?: boolean
  children?: React.ReactNode
}

export const TabItem: FC<TabItemProps> = ({children}) => {
  return <div className="viking-tab-panel">
    {children}
  </div>
}