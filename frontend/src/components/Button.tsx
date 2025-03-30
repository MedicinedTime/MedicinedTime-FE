import { usePostStore } from '@/stores/postStore';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { useNavigate } from 'react-router-dom';

type ReactButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const buttonLayout = 'btn bg-myLightGreen hover:bg-myHoverLightGreen'
const buttonText = 'text-white text-xl'
const disabledStyle = 'bg-gray-300 text-gray-500 hover:bg-gray-300 cursor-not-allowed'

type RedirectButtonProps = ReactButtonProps & {
  path: string
  name: string
  disabled?: boolean
}

export const RedirectButton = ({
  path,
  name,
  className: _className,
  disabled = false,
  ...props
}: RedirectButtonProps) => {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    if (disabled) return
    navigate(`/${path}`)
  }

  const className = [
    _className,
    buttonLayout,
    buttonText,
    disabled ? disabledStyle : ''
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      className={className}
      onClick={handleButtonClick}
      disabled={disabled}
      {...props}
    >
      {name}
    </button>
  )
}

type HttpMethod = 'POST' | 'PATCH' | 'PUT' | 'DELETE'
type APIData = Record<string, any>

type APIButtonProps = ReactButtonProps & {
  url: string
  path: string
  name: string
  data: APIData
  method: HttpMethod
  disabled?: boolean
}

export const APIButton = ({ 
  className: _className,
  url,
  path, 
  name,
  data,
  method = 'PATCH',
  disabled = false
}: APIButtonProps) => {
  const { isLoading, postData, patchData } = usePostStore()
  const navigate = useNavigate()

  const handleButtonClick = async () => {
    switch (method) {
      case 'POST':
        await postData(`${url}`, data)
        break
      case 'PATCH':
        await patchData(`${url}`, data)
        break
    }
    navigate(`/${path}`)
  }

  const className = [
    _className,
    buttonLayout,
    buttonText,
    disabled || isLoading ? 'opacity-100 cursur-not-allowed' : ''
  ]
  .filter(Boolean)
  .join(' ')

  return (
    <button
      className={className}
      onClick={handleButtonClick}
      disabled={disabled}
    >
      {name}
    </button>
  )
}
