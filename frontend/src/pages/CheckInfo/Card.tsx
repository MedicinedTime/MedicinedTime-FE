import { useState, useEffect } from 'react'

const CardLayout = 'w-full center flex-col px-10 py-12'
const CardStyle = 'rounded-tl-3xl rounded-r-3xl bg-white drop-shadow-lg'
const CardText = 'text-left'
const CardClassName = `${CardLayout} ${CardStyle} ${CardText}`

const thStyle = 'px-5 py-3 text-2xl/8 align-top bg-myBaseBrown'
const tdStyle = 'px-5 py-3 text-2xl/8'

interface LocalUserData {
  name: string
  age: string
  gender: string
  medications: Array<{
    type: string
    day: string
    frequency: string
  }>
}

export default function Card() {
  const [data, setData] = useState<LocalUserData | null>(null)

  useEffect(() => {
    try {
      const name = sessionStorage.getItem('name') || ''
      const age = sessionStorage.getItem('age') || ''
      const gender = sessionStorage.getItem('gender') || ''
      const meds = JSON.parse(sessionStorage.getItem('medications') || '[]')

      const userData: LocalUserData = {
        name,
        age,
        gender,
        medications: meds,
      }

      setData(userData)
    } catch (error) {
      console.error('로컬 스토리지에서 데이터 불러오기 실패:', error)
    }
  }, [])

  const getGender = (gender: string) => {
    if (gender === 'm') return '남'
    if (gender === 'f') return '여'
    return '-'
  }

  return (
    <div className={CardClassName}>
      <table>
        <tbody>
          <tr id="name">
            <th
              scope="row"
              className={thStyle}
            >
              이름
            </th>
            <td
              colSpan={2}
              className={tdStyle}
            >
              {data?.name || '-'}
            </td>
          </tr>
          <tr id="age">
            <th
              scope="row"
              className={thStyle}
            >
              나이
            </th>
            <td
              colSpan={2}
              className={tdStyle}
            >
              {data?.age || '-'}
            </td>
          </tr>
          <tr id="gender">
            <th
              scope="row"
              className={thStyle}
            >
              성별
            </th>
            <td
              colSpan={2}
              className={tdStyle}
            >
              {data ? getGender(data.gender) : '-'}
            </td>
          </tr>
          {data?.medications && data.medications.length > 0 ? (
            <>
              <tr>
                <th
                  scope="row"
                  rowSpan={data.medications.length}
                  className={thStyle}
                >
                  복용 중인 <br />
                  약의 종류
                </th>
                <td className={tdStyle}>{data.medications[0].type}</td>
                <td className={tdStyle}>
                  {data.medications[0].day}일에 {data.medications[0].frequency}번
                </td>
              </tr>
              {data.medications.slice(1).map((med, index) => (
                <tr key={index}>
                  <td className={tdStyle}>{med.type}</td>
                  <td className={tdStyle}>
                    {med.day}일에 {med.frequency}번
                  </td>
                </tr>
              ))}
            </>
          ) : (
            <tr>
              <th
                scope="row"
                className={thStyle}
              >
                복용 중인 <br />
                약의 종류
              </th>
              <td
                colSpan={2}
                className={tdStyle}
              >
                -
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
