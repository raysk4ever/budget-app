import { fetchCommon, saveCommon } from "@/services/budget"
import { userBudgetAtom, userBudgetLoadingAtom } from "@/state/atom"
import { useAtom } from "jotai"
import { useCallback, useEffect, useState } from "react"

export default function useBudget() {
    const [budget, setBudget] = useAtom(userBudgetAtom)
    const [isLoading, setLoading] = useAtom(userBudgetLoadingAtom)

    const fetchUserBudget = useCallback(async () =>  {
        setLoading(true)
        const response = await fetchCommon({ type: 'budget' })
        if (response.data[0]) {
            setBudget(() => response.data[0])
        }
        setLoading(false)
    }, [setBudget, setLoading])

    useEffect(() => {
        fetchUserBudget()
    }, [fetchUserBudget])

    const saveBudget = useCallback(async (data = { budget: 1000, income: 3000 }) => {
        await saveCommon({ data, type: 'budget' })
    }, [])


    return {
        budget,
        isLoading,
        setBudget,
        saveBudget
    }
}