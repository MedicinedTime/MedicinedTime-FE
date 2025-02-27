import { Text5xl } from "@/components/ui/Texts";
import Answer from "./Answer";
import Question from "./Question";
import ChatForm from "./ChatForm";

export default function Chat() {
  return(
    <div className="container center flex-col gap-3">
      <Text5xl className="mb-3">마음껏 질문하세요!</Text5xl>
      <div className="flex flex-col w-full h-[600px] p-10 rounded-lg bg-black gap-5 overflow-y-auto">
        <div className="flex flex-col w-full gap-5">
          <div className="flex justify-start">
            <div className="w-2/3">
              <Answer
                data="안녕하세요! 저는 챗봇 AI 약속이예요. 무엇이 궁금하신가요?"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <div className="w-2/3">
              <Question data={"저는 질문 영역이에요 저는 대체 뭐가 궁금한 걸까요? 잘 모르겠네요 일단 길게 써보는 중이에요 lorem도 있긴 하지만 한글이랑 특성이 좀 달라서요 뭘 더 써야할까요? 난 구제불능이야 아냐 니가 바보야 응 니만 바보야"}/>
            </div>
          </div>
        </div>
      </div>
      <ChatForm/>
    </div>
  )
}