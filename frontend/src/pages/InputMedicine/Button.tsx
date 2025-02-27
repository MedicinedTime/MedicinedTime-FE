import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from "react"

type ReactButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

type AddButtonProps = ReactButtonProps & {
  name: string
}

const buttonLayout = 'btn bg-white border-myLightGreen :bg-myHoverWhite w-24 h-16'
const buttonText = 'text-myLightGreen text-xl'

export const AddButton = ({
  name, className: _className
}: AddButtonProps ) => {
  const [value, setValue] = useState('')

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: {value}
    } = event
    setValue(value)
  }

  const className = [
    _className,
    buttonLayout,
    buttonText
  ]
  .filter(Boolean)
  .join(' ')

  return (
    <button 
      className={className}
    >
      {name}
    </button>
  )
}