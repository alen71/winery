import React, { useState } from 'react'
import { ICartWine } from 'src/store/useCartItems'

export type FormDataType = {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  address: string
  city: string
  postCode: string
  conditionOfUse: boolean
  wines: ICartWine[]
}

const useSendOrder = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setSuccess] = useState(false)
  const [error, setError] = useState<{ message: string; status: number }>()

  const send = async (data: FormDataType) => {
    try {
      setError(undefined)
      setSuccess(false)
      setIsLoading(true)

      const response = await fetch('/api/order', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })

      if (!response.ok) {
        setError({
          message: response.statusText,
          status: response.status
        })

        return false
      }

      const jsonData = await response.json()

      if (response.status >= 200 && response.status < 300) {
        setSuccess(true)

        return true
      } else {
        setError({
          message: jsonData.message,
          status: response.status
        })
        return false
      }
    } catch (err: any) {
      setError({
        message: err.message,
        status: 500
      })
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, isSuccess, error, send }
}

export default useSendOrder
