import React, { FC } from 'react'
import cn from 'classnames'

import st from './PageContainer.module.scss'
interface PageContainerProps {
   title: string
   children: React.ReactNode
}

const PageContainer: FC<PageContainerProps> = ({ title, children }) => {
   return (
      <div className={st.pageContainer}>
         <div className={st.container}>
            <h1 className={st.title}>{title}</h1>
            <div className={cn(st.products, st.grid)}>{children}</div>
         </div>
      </div>
   )
}

export default PageContainer
