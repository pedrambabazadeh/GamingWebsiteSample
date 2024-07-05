import React, { Children, ReactNode } from 'react'
import './user-info-button.css'

interface  UserInfoProps
{
    children: ReactNode,
    text: string
}

export default function UserInfoButton(props: UserInfoProps) {
  return (
    <div data-padding-x='sm'
    data-view="inline-flex relative vcenter hcenter"
      data-padding-x_until-lg='xs'>

        <span data-padding-x='xs' data-view_until-lg="none">
            {props.text}
        </span>
        {props.children}

    </div>
  )
}
