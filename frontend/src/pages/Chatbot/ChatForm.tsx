const chatInputLayout = "w-full h-32 p-5 rounded-t-xl resize-none"
const chatInputSytle = "bg-white border-2 border-b-0 focus:border-myLightGreen focus:outline-none"
const chatInputText = "text-2xl"
const chatClassName = `${chatInputLayout} ${chatInputSytle} ${chatInputText}`

const buttonLayout = "w-full h-12 rounded-b-xl"
const buttonStyle = "bg-myLightGreen hover:bg-myHoverLightGreen border border-t-0"
const buttonText = "text-2xl text-white font-medium"
const buttonClassName = `${buttonLayout} ${buttonStyle} ${buttonText}`

export default function ChatForm() {
  return (
    <div className="w-full flex flex-col">
      <textarea
      placeholder="무엇이 궁금하신가요?"
      className={chatClassName}
      />
      <button className={buttonClassName}>
        전송하기
      </button>
    </div>
  )
}