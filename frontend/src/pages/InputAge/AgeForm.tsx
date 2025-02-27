import { Text5xl } from "@/components/ui/Texts";
import { APIButton } from "../../components/ui/Button";
import { useState } from "react";

export default function AgeForm() {
    const [value, setValue] = useState('')

    const onChange = (event:React.FormEvent<HTMLInputElement>) => {
        const {currentTarget : {value},} = event
        setValue(value)
    }
    const onSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }
    
    const isValueValid = value.trim().length > 0

    return (
        <div className="center flex-col gap-10">
            <Text5xl>나이를 입력해 주세요.</Text5xl>
            <form 
            onSubmit={onSubmit}
            className="flex flex-col w-80 gap-3">
                <input
                placeholder="50"
                className="text-center w-full h-12 bg-white border border-gray-300 focus:border-myLightGreen"
                type="number"
                min="1"
                max="150"
                step="1"
                value={value}
                onChange={onChange}
                required
                />
                <APIButton
                url={""}
                path="info/input/gender"
                name="다음"
                data={{age: value}}
                method='PATCH'
                disabled={!isValueValid}
               />
            </form>
        </div>
    )
}