import { allCategoryAtom, allCategoryLoadingAtom } from "@/state/atom"
import { useAtom } from "jotai"
import { useCallback, useEffect, useState } from "react"

export default function useCategory() {
    const [categories, setCategories] = useAtom(allCategoryAtom)
    const [isLoading, setIsLoading] = useAtom(allCategoryLoadingAtom)

    const fetchCategory = useCallback(async () => {
        setIsLoading(true)
        const response = await (await fetch('/api/common?type=categories')).json()
        setCategories(() => [...response.data])
        setIsLoading(false)
    }, [setCategories, setIsLoading])

    useEffect(() => {
        if (!categories.length) {
            fetchCategory()
        }
    }, [fetchCategory, categories])
    
    

    const saveCategory = async (data: any) => {
        const response = await fetch('/api/common', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data,
                type: 'categories'
            })
        })
        const responseJson = await response.json()
        if (responseJson?.result?.insertedId) {
            setCategories((crr: any) => ([...crr, { name: data.name, pic: data.pic, _id: responseJson.result.insertedId }]))
        }
    }

    return {
        categories,
        setCategories,
        isLoading,
        saveCategory
    }
}