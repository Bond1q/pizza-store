import React, { FC } from 'react'
import cn from 'classnames'

import st from './Modal.module.scss'

interface Modal {
   children?: React.ReactNode
   isModalActive: boolean
   setIsModalActive(isActive: boolean): void
}

const Modal: FC<Modal> = ({ children, isModalActive, setIsModalActive }) => {
   return (
      <div className={cn(st.modal, { [st.modalActive]: isModalActive })}>
         <div className={cn(st.content, { [st.contentActive]: isModalActive })}>
            {children}
            <div onClick={() => setIsModalActive(false)} className={st.close}>
               &#10006;
            </div>
         </div>
      </div>
   )
}

export default Modal
