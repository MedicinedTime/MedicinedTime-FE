import { Text5xl } from '@/components/Texts'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormProps from '@/types/FormProps'

export default function GenderForm({ path }: FormProps) {
  const navigate = useNavigate()
  const [selectedGender, setSelectedGender] = useState<string | null>(null)
  const [hasPreviousSelection, setHasPreviousSelection] = useState(false)

  useEffect(() => {
    const storedGender = sessionStorage.getItem('gender')
    if (storedGender === 'm' || storedGender === 'f') {
      setSelectedGender(storedGender)
      setHasPreviousSelection(true)
    }
  }, [])

  const getFullPath = (p: string) => {
    return p.startsWith('/') ? p : `/${p}`
  }

  const handleSelectGender = (gender: 'm' | 'f') => {
    sessionStorage.setItem('gender', gender)
    setSelectedGender(gender)
    navigate(getFullPath(path))
  }

  const baseButtonStyle = 'btn text-white text-xl transition-colors duration-150'
  const selectedStyle = 'bg-myLightGreen hover:bg-myHoverLightGreen'
  const unselectedStyle = 'bg-gray-200 text-gray-500 hover:bg-gray-300'

  const getButtonClass = (gender: 'm' | 'f') => {
    if (!hasPreviousSelection || selectedGender === gender) {
      return `${baseButtonStyle} ${selectedStyle}`
    } else {
      return `${baseButtonStyle} ${unselectedStyle}`
    }
  }

  return (
    <div className="center flex-col gap-10">
      <Text5xl>성별을 선택해 주세요.</Text5xl>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex w-96 gap-5"
      >
        <div className="w-full">
          <button
            type="button"
            onClick={() => handleSelectGender('m')}
            className={`${getButtonClass('m')} w-full h-16`}
          >
            남자
          </button>
        </div>
        <div className="w-full">
          <button
            type="button"
            onClick={() => handleSelectGender('f')}
            className={`${getButtonClass('f')} w-full h-16`}
          >
            여자
          </button>
        </div>
      </form>
    </div>
  )
}
