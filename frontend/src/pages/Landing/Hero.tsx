import LandingButton from "./LandingButton"

export default function Hero() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-8xl font-bold">
                약속시간
            </div>
            <LandingButton/>
        </div>
    )
}