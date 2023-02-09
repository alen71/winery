import clsx from 'clsx'
import React, { HTMLInputTypeAttribute, InputHTMLAttributes, FC } from 'react'

type inputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  border?: 'primary' | 'gray-primary'
  error?: string | undefined
}

const CustomInput: FC<inputProps> = ({
  label,
  border = 'gray-primary',
  error,
  ...inputProps
}) => {
  return (
    <div className="flex flex-col gap-2 relative">
      {label && (
        <label
          className={clsx('text-primary font-semibold', {
            'text-red-700': error
          })}
        >
          {label}
        </label>
      )}
      <input
        {...inputProps}
        className={clsx(
          `w-full border-1 border-${border} rounded-lg px-6 py-1 placeholder:text-gray-light placeholder:text-base placeholder:font-sans placeholder:font-normal`,
          { 'border-red-700': error }
        )}
      />

      {error && (
        <p className="absolute -bottom-5 left-6 text-red-700 text-sm font-bold">
          {error}
        </p>
      )}
    </div>
  )
}

export default CustomInput
