import InfoPost from './InfoPost'

export default function CheckInfoPage() {
  return (
    <section className="wrap">
      <InfoPost
        editPath="info/input/name"
        chatPath="chatbot"
        url="/api/submit"
      />
    </section>
  )
}
