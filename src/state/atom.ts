import { atom } from "jotai";
export type CategoryT = {
    name: string,
    pic: string
}

export type UserBudgetT = {
    income: number,
    saving: number,
    budget: number,
    investment: number
}

export const allCategoryAtom = atom<CategoryT[]>([])

export const allCategoryLoadingAtom = atom<boolean>(true)

export const userBudgetAtom = atom<UserBudgetT>({
    income: 0,
    saving: 0,
    budget: 0,
    investment: 0,
})
export const userBudgetLoadingAtom = atom<boolean>(true)

export const loaderAtom = atom<boolean>(false)