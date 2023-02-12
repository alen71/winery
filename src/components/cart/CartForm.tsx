import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import Link from 'next/link'

import Input from 'src/components/shared/input/Input'
import useSendOrder from 'src/hooks/useSendOrder'
import useCartItems from 'src/store/useCartItems'

type Props = {}

function CartForm({}: Props) {
  const { isLoading, isSuccess, send } = useSendOrder()
  const { resetCart } = useCartItems()

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: '',
      city: '',
      postCode: '',
      conditionOfUse: false
    },

    validateOnBlur: false,
    validateOnChange: false,

    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Mora biti 15 karaktera ili manje')
        .min(2, 'Mora biti 2 karaktera ili više')
        .required('Neophodno'),
      lastName: Yup.string()
        .max(20, 'Mora biti 20 karaktera ili manje')
        .min(2, 'Mora biti 2 karaktera ili više')
        .required('Neophodno'),
      email: Yup.string()
        .email('email adresa nije validna')
        .required('Neophodno'),
      phoneNumber: Yup.number().min(10, 'Broj nije validan'),
      address: Yup.string().required('Obavezno unesite adresu'),
      city: Yup.string().required('Obavezno unesite ime grada'),
      postCode: Yup.string().required('Obavezno unesite poštanski broj'),
      conditionOfUse: Yup.boolean().oneOf([true], 'error')
    }),

    onSubmit: async values => {
      await send(values)
      formik.resetForm()
    }
  })

  useEffect(() => {
    if (!isSuccess) return

    resetCart()
  }, [isSuccess, resetCart])

  return (
    <div className="flex-1 w-full md:max-w-[726px] text-gray-primary p-5 sm:p-10 lg:p-20 pb-52 md:pb-0 md:overflow-y-scroll">
      <p className="text-primary font-semibold text-3xl">Kupovina</p>

      <p className="text-sm sm:text-base my-4">
        Unesite Vašu e-mail adresu. Preko ove e-mail adrese ćemo vršiti
        komunikaciju sa Vama.
      </p>

      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-5 w-full"
      >
        <Input
          type="email"
          name="email"
          placeholder="Vaša e-mail adresa*"
          border="primary"
          required
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
        />

        <p className="text-sm sm:text-base">
          Unesite Vaše podatke kako bi željene proizvode poslali na Vašu adresu.
          Kupovina važi isključivo za državljane Srbije.
        </p>

        <div className="grid grid-cols-2 gap-9">
          <Input
            type="text"
            name="firstName"
            label="Vaše ime*"
            placeholder="Unesite Vaše ime"
            required
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.errors.firstName}
          />

          <Input
            type="text"
            name="lastName"
            label="Vaše prezime*"
            placeholder="Unesite Vaše prezine"
            required
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.errors.lastName}
          />
        </div>

        <Input
          type="tel"
          name="phoneNumber"
          label="Broj telefona"
          placeholder="Unesite Vaš broj telefona"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          error={formik.errors.phoneNumber}
        />

        <Input
          type="tel"
          name="address"
          label="Adresa stanovanja*"
          placeholder="Unesite Vašu adresu stanovanja"
          value={formik.values.address}
          onChange={formik.handleChange}
          error={formik.errors.address}
        />

        <div className="grid sm:grid-cols-2 gap-y-5 gap-x-9">
          <Input
            type="tel"
            name="city"
            label="Grad*"
            placeholder="Unesite ime grada"
            value={formik.values.city}
            onChange={formik.handleChange}
            error={formik.errors.city}
          />

          <div className="flex flex-col gap-2 text-primary ">
            <span className="font-semibold">Država</span>
            <p className="text-base px-6 py-[7px] border-1 border-primary rounded-lg hover:bg-primary hover:text-white duration-200">
              Srbija
            </p>
          </div>

          <Input
            type="text"
            name="postCode"
            label="Poštanski broj*"
            placeholder="Unesite poštanski broj"
            value={formik.values.postCode}
            onChange={formik.handleChange}
            error={formik.errors.postCode}
          />

          <button
            type="submit"
            className={clsx(
              'uppercase bg-primary hover:bg-darker-primary text-white w-full h-fit mt-auto rounded-lg py-[7px] text-base font-black duration-200',
              { 'pointer-events-none': isLoading }
            )}
          >
            {!isLoading && 'Potvrdite kupovinu'}
            {isLoading && (
              <div className="w-6 h-6 border-2 border-white/20 border-t-white border-t-2 animate-spin rounded-full mx-auto" />
            )}
          </button>
        </div>

        <div className="flex gap-3 items-center relative">
          <div
            className={clsx(
              'rounded-full border-1 border-primary w-6 h-6 flex items-center justify-center relative',
              { 'border-red-700': formik.errors.conditionOfUse }
            )}
          >
            <input
              type="checkbox"
              name="conditionOfUse"
              onChange={formik.handleChange}
              className="absolute z-[2] opacity-0 w-full h-full cursor-pointer"
            />
            <div
              className={clsx(
                'absolute z-[1] w-4 h-4 bg-primary rounded-full duration-200',
                {
                  'opacity-100': formik.values.conditionOfUse === true,
                  'opacity-0': formik.values.conditionOfUse === false
                }
              )}
            />
          </div>

          <div>
            <span
              className={clsx('', {
                'text-red-700': formik.errors.conditionOfUse
              })}
            >
              Slažem se sa:
            </span>{' '}
            <Link
              href="#"
              className={clsx('font-bold text-primary hover:underline', {
                'text-red-700': formik.errors.conditionOfUse
              })}
            >
              Uslovima korišćenja
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CartForm
