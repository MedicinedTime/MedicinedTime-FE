import { Text5xl } from '@/components/Texts'
import Card from './Card'
import { RedirectButton, APIButton } from '@/components/Button'

type InfoPostProps = {
  editPath: string
  chatPath: string
  url: string
}

export default function InfoPost({ editPath, chatPath, url }: InfoPostProps) {
  const name = sessionStorage.getItem('name') || ''
  const age = sessionStorage.getItem('age') || ''
  const gender = sessionStorage.getItem('gender') || ''
  const medications = JSON.parse(sessionStorage.getItem('medications') || '[]')

  const userData = {
    name,
    age,
    gender,
    medications,
    total: medications.length.toString(),
  }

  return (
    <div className="container center flex-col gap-5">
      <Text5xl className="leading-[1.2]">
        입력한 정보를
        <br />
        최종 확인해 주세요.
      </Text5xl>
      <div className="center flex-col gap-10">
        <Card />
        <div className="center gap-3">
          <RedirectButton
            path={editPath}
            name="수정하기"
            className="w-2/3"
          />
          <APIButton
            url={url}
            path={chatPath}
            name="챗봇에게 질문하기"
            data={userData}
            method="POST"
            className="w-2/3"
          />
        </div>
      </div>
    </div>
  )
}
