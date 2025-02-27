import { Text5xl } from "@/components/ui/Texts";
import { APIButton, RedirectButton } from "../../components/ui/Button";
import { useState } from "react";

export default function GenderForm() {
    const [name, setName] = useState('')

    const onChange = (event:React.FormEvent<HTMLInputElement>) => {
        const {currentTarget : {value},} = event
        setName(value)
    }
    const onSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <div className="flex flex-col justify-center items-center gap-10">
            <Text5xl>성별을 선택해 주세요.</Text5xl>
            <form 
            onSubmit={onSubmit}
            className="flex w-80 gap-5">
                <div className="flex justify-center w-full">
                    <APIButton
                    url={"api/gender"}
                    path="info/check"
                    name="남자"
                    className="w-full"
                    data={{gender: "m"}}
                    method={"PATCH"}
                    />
                </div>
                <div className="flex justify-center w-full">
                    <APIButton
                    url={"api/gender"}
                    path="info/check"
                    name="여자"
                    className="w-full"
                    data={{gender: "f"}}
                    method={"PATCH"}
                    />
                </div>
            </form>
        </div>
    )
}