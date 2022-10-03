import React, { FC, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import cn from 'classnames'

import st from './MakeOrder.module.scss'
import Modal from '../Modal/Modal'

interface MakeOrderProps {
   clearCart(): void
}

const MakeOrder: FC<MakeOrderProps> = React.memo(({ clearCart }) => {
   const [isModalActive, setIsModalActive] = useState(false)

   React.useEffect(() => {
      if (isModalActive) {
         const timer = setTimeout(() => {
            clearCart()
         }, 1500)
         return () => clearTimeout(timer)
      }
   }, [isModalActive, clearCart])

   const onOrderClick = () => {
      setIsModalActive(true)
   }
   const phoneRegExp = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/

   const formik = useFormik({
      initialValues: {
         name: '',
         phone: '',
         street: '',
      },
      validationSchema: Yup.object({
         name: Yup.string().required('Name is required'),
         phone: Yup.string()
            .matches(phoneRegExp, 'Phone number is not valid')
            .required('Phone is required'),
         street: Yup.string().required('Street is required'),
      }),
      onSubmit: (values) => {
         onOrderClick()
      },
   })

   const isInputUncorrect = (inputName: 'name' | 'phone' | 'street') => {
      return formik.touched[inputName] && formik.errors[inputName]
   }
   return (
      <>
         <h2 className={st.chapter}>Making an order</h2>
         <form onSubmit={formik.handleSubmit}>
            <div className={cn({ [st.error]: isInputUncorrect('name') })}>
               <input
                  id='name'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className={cn({ [st.error]: isInputUncorrect('name') })}
                  type='text'
                  placeholder='Name'
               />
               {isInputUncorrect('name') ? <p>{formik.errors.name}</p> : null}
            </div>
            <div className={cn({ [st.error]: isInputUncorrect('phone') })}>
               <input
                  id='phone'
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  type='tel'
                  placeholder='Phone'
               />
               {isInputUncorrect('phone') ? <p>{formik.errors.phone}</p> : null}
            </div>
            <div className={cn({ [st.error]: isInputUncorrect('street') })}>
               <input
                  id='street'
                  onBlur={formik.handleBlur}
                  value={formik.values.street}
                  onChange={formik.handleChange}
                  className={cn({ [st.error]: isInputUncorrect('street') })}
                  type='text'
                  placeholder='Street'
               />
               {isInputUncorrect('street') ? <p>{formik.errors.street}</p> : null}
            </div>
            <div
               className={cn(st.orderBtn, {
                  [st.isButtonDisabled]: !(formik.isValid && formik.dirty),
               })}
            >
               <button onSubmit={onOrderClick} disabled={!(formik.isValid && formik.dirty)}>
                  Order
               </button>
            </div>
         </form>

         <Modal isModalActive={isModalActive} setIsModalActive={setIsModalActive}>
            <div>Thanks for order !!!</div>
         </Modal>
      </>
   )
})

export default MakeOrder
