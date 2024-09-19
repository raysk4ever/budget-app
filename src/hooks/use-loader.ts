import { loaderAtom } from "@/state/atom"
import { useAtom } from "jotai"

export default function useLoader() {
    const [show, setShow] = useAtom(loaderAtom)

    return {
        show,
        setShow
    }
    
}