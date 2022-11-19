import React, { FC, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import cn from 'classnames'

import st from './MakeOrder.module.scss'
import Modal from '../Modal/Modal'
import { useUserLocation } from './hooks/useUserLocation'

interface MakeOrderProps {
   clearCart(): void
}

const MakeOrder: FC<MakeOrderProps> = React.memo(({ clearCart }) => {
   const [isModalActive, setIsModalActive] = useState(false)
   const {
      location: { city, countryName },
      getLocation,
   } = useUserLocation()

   React.useEffect(() => {
      if (isModalActive) {
         const timer = setTimeout(() => {
            clearCart()
         }, 1500)
         return () => clearTimeout(timer)
      }
   }, [isModalActive, clearCart])

   React.useEffect(() => {
      if (city && countryName) {
         const text = city + ', ' + countryName
         formik.setFieldValue('location', text)
      }
   }, [city, countryName])

   const onOrderClick = () => {
      setIsModalActive(true)
   }
   const formik = useFormik({
      initialValues: {
         name: '',
         phone: '',
         location: '',
      },
      validationSchema: Yup.object({
         name: Yup.string().required('Name is required'),
         phone: Yup.string()
            .matches(
               /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
               'Phone number is not valid',
            )
            .required('Phone is required'),
         location: Yup.string().required('location is required'),
      }),
      onSubmit: (values) => {
         console.log(values)
         onOrderClick()
      },
   })
   const isInputUncorrect = (inputName: 'name' | 'phone' | 'location') => {
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

            <div onClick={getLocation} className={cn({ [st.error]: isInputUncorrect('location') })}>
               <input
                  id='location'
                  onBlur={formik.handleBlur}
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  className={cn({ [st.error]: isInputUncorrect('location') })}
                  type='text'
                  placeholder='Location'
               />
               {isInputUncorrect('location') ? <p>{formik.errors.location}</p> : null}
            </div>
            <div
               className={cn(st.orderBtn, {
                  [st.isButtonDisabled]: !(formik.isValid && formik.dirty),
               })}
            >
               <button type='submit' disabled={!(formik.isValid && formik.dirty)}>
                  Order
               </button>
            </div>
         </form>

         <Modal isModalActive={isModalActive} setIsModalActive={setIsModalActive}>
            <div className={st.modalText}>Thanks for order !!!</div>
         </Modal>
      </>
   )
})

export default MakeOrder
