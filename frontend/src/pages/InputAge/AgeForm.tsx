import { Text5xl } from '@/components/Texts'
import { RedirectButton } from '@/components/Button'
import { useEffect, useState } from 'react'
import FormProps from '@/types/FormProps'

const InputLayout = 'text-2xl text-center w-full h-16 bg-white border-2 focus:border-myLightGreen focus:outline-none'
const InputExcept =
  '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
const InputClassName = `${InputLayout} ${InputExcept}`

export default function AgeForm({ path }: FormProps) {
  const [value, setValue] = useState('')

  useEffect(() => {
    const storedAge = sessionStorage.getItem('age')
    if (storedAge) {
      setValue(storedAge)
    }
  }, [])

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event

    setValue(value)

    if (value.trim() === '') {
      sessionStorage.removeItem('age')
      return
    }

    const num = Number(value)
    if (!isNaN(num)) {
      sessionStorage.setItem('age', value)
    }
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const isValueValid = () => {
    const num = Number(value)
    return value.trim() !== '' && !isNaN(num) && num >= 1 && num <= 100
  }

  return (
    <div className="center flex-col gap-10">
      <Text5xl>나이를 입력해 주세요.</Text5xl>
      <form
        onSubmit={onSubmit}
        className="flex flex-col w-96 gap-3"
      >
        <input
          placeholder="숫자만 입력해 주세요."
          className={InputClassName}
          type="number"
          min="1"
          max="100"
          step="1"
          value={value}
          onChange={onChange}
          required
        />
        <RedirectButton
          path={path}
          name="다음"
          className="w-full"
          disabled={!isValueValid()}
        />
      </form>
    </div>
  )
}
