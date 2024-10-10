import { RedirectType } from "next/navigation";
import SwiperSelection from "./ui/SwiperSelection";

export default function TagArea() {
    return (
        <div className="mt-5">
            <SwiperSelection />
        </div>
    )
}

function AllNotesSection() {
    return (
        <div className="mt-5 flex flex-wrap gap-4">
            <SingleNote />
            <SingleNote />
            <SingleNote />
            <SingleNote />
            <SingleNote />
        </div>
    )
}

function SingleNote () {
    return (
        <div></div>
    )
}