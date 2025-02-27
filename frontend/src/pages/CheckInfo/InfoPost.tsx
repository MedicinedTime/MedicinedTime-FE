import { Text5xl } from "@/components/ui/Texts";
import { Card } from "./Card";

export default function InfoPost() {
    return (
        <div className="container center flex-col gap-10">
            <Text5xl>입력한 정보를<br/>최종 확인해 주세요.</Text5xl>
            <Card/>
        </div>
    )
}