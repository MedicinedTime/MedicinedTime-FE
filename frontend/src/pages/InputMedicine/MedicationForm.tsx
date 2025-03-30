import { RedirectButton } from '@/components/Button'
import { Text5xl } from '@/components/Texts'
import { useEffect, useState } from 'react'
import MedicationCard from './MedicationCard'
import { Medication } from './MedicationType'
import FormProps from '@/types/FormProps'

const LOCAL_STORAGE_KEY = 'medications'

export default function MedicationForm({ path }: FormProps) {
  const [currentMedication, setCurrentMedication] = useState<Medication>({ type: '', day: '', frequency: '' })
  const [savedMedications, setSavedMedications] = useState<Medication[]>([])
  const [medicationTags, setMedicationTags] = useState<string[]>([])

  useEffect(() => {
    try {
      const storedData = sessionStorage.getItem(LOCAL_STORAGE_KEY)
      if (storedData) {
        const parsed = JSON.parse(storedData) as Medication[]
        setSavedMedications(parsed)
        const tags = parsed.map((med) => med.type)
        setMedicationTags(tags)
      }
    } catch (error) {
      console.error('로컬 스토리지 데이터 불러오기 실패:', error)
    }
  }, [])

  const handleMedicationChange = (updatedMedication: Medication) => {
    setCurrentMedication(updatedMedication)
  }

  const handleAddMedicationTag = () => {
    if (
      currentMedication.type.trim() !== '' &&
      currentMedication.day.trim() !== '' &&
      currentMedication.frequency.trim() !== '' &&
      !medicationTags.includes(currentMedication.type)
    ) {
      const updatedMedications = [...savedMedications, { ...currentMedication }]
      const updatedTags = [...medicationTags, currentMedication.type]

      setSavedMedications(updatedMedications)
      setMedicationTags(updatedTags)
      setCurrentMedication({ type: '', day: '', frequency: '' })
      sessionStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedMedications))
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    const updatedMedications = savedMedications.filter((med) => med.type !== tagToRemove)
    const updatedTags = medicationTags.filter((tag) => tag !== tagToRemove)

    setSavedMedications(updatedMedications)
    setMedicationTags(updatedTags)
    sessionStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedMedications))
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const isValid = savedMedications.length > 0

  return (
    <div className="container center flex-col gap-10">
      <Text5xl className="leading-[1.2]">
        복용하고 있는 약들을
        <br />
        추가해 주세요.
      </Text5xl>
      <form
        onSubmit={onSubmit}
        className="center flex-col w-96 gap-3"
      >
        <MedicationCard
          medication={currentMedication}
          onChange={handleMedicationChange}
          onAdd={handleAddMedicationTag}
        />

        {medicationTags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2">
            {medicationTags.map((tag, index) => (
              <div
                key={index}
                className="bg-myLightGreen text-white px-3 py-1 rounded-full text-sm flex items-center"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  className="ml-2 text-white hover:text-red-200"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        <RedirectButton
          path={path}
          name="다음 단계로 이동"
          className="w-full"
          disabled={!isValid}
        />
      </form>
    </div>
  )
}
