import { Text5xl } from '@/components/Texts'
import { RedirectButton } from '../../components/Button'
import { useEffect, useState } from 'react'
import FormProps from '@/types/FormProps'

export default function NameForm({ path }: FormProps) {
  const [value, setValue] = useState('')

  useEffect(() => {
    const storedName = sessionStorage.getItem('name')
    if (storedName) {
      setValue(storedName)
    }
  }, [])

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event
    setValue(value)
    sessionStorage.setItem('name', value)
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div className="container center flex-col gap-10">
      <Text5xl>이름을 입력해 주세요.</Text5xl>
      <form
        onSubmit={onSubmit}
        className="flex flex-col w-96 gap-3"
      >
        <input
          placeholder="홍길동"
          className="text-2xl text-center w-full h-16 bg-white border-2 focus:border-myLightGreen focus:outline-none"
          type="text"
          value={value}
          onChange={onChange}
          required
        />
        <RedirectButton
          name="다음"
          path={path}
          className="w-full"
          disabled={!value.trim()}
        />
      </form>
    </div>
  )
}
