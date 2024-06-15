import { atom } from "jotai";
export type CategoryT = {
    name: string,
    pic: string
}
export const allCategoryAtom = atom<CategoryT[]>([])

export const allCategoryLoadingAtom = atom<boolean>(true)