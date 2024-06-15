import { atom, useAtom } from "jotai";

const test = atom('')
export default function useAlert() {
    const [show, setShow] = useAtom(test)
    return {
        show,
        setShow
    }
}