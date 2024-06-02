import { useEffect, useState } from "react"

export default function useCategory() {
    const [categories, setCategories] = useState<any>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchCategory()
    }, [])
    
    const fetchCategory = async () => {
        setIsLoading(true)
        const response = await (await fetch('/api/common?type=categories')).json()
        console.log('response', response)
        setCategories(() => [...response.data])
        setIsLoading(false)
    }

    return {
        categories,
        setCategories,
        isLoading
    }
}