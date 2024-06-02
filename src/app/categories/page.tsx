"use client"

import Modal from "@/components/modal"
import { DEFAULT_CATEGORIES_ICONS } from "@/config/settings"
import useCategory from "@/hooks/use-category"
import { CategoryT, allCategoryAtom } from "@/state/atom"
import { useAtom } from "jotai"
import { ChangeEventHandler, useState } from "react"
import { BiRupee } from "react-icons/bi"
import Skeleton from "react-loading-skeleton"

export default function Categories() {
    // const [categories, setCategories] = useAtom(allCategoryAtom)
    const [crrCategory, setCrrCategory] = useState<CategoryT>({
        name: '',
        pic: ''
    })
    const [open, setOpen] = useState(false)
    const [activeIcon, setActiveIcon] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const {categories, setCategories, isLoading} = useCategory()

    const saveCategory = async () => {
        await fetch('/api/common', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: {
                    ...crrCategory,
                    pic: activeIcon
                },
                type: 'categories'
            })
        })
    }
    const handleOnAddCategory = () => {
        if (!crrCategory.name) {
            setErrorMessage(() => 'Please enter a valid Category name!')
            return
        }
        if (!activeIcon) {
            setErrorMessage(() => 'Please select Category picture!')
            return
        }
        const isAlreadyPresent = categories.find((c: any) => c.name === crrCategory.name)
        if (isAlreadyPresent) {
            setErrorMessage(() => 'Category name already present!')
            return 
        }
        if (errorMessage) {
            setErrorMessage('')
        }
        saveCategory()
        setCrrCategory({
            name: '',
            pic: ''
        })
        setCategories((crr: any) => ([...crr, { name: crrCategory.name, pic: activeIcon }]))
        setOpen(crr => !crr)
    }

    const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const { name, value } = event.target
        setCrrCategory(crr => ({
            ...crr,
            [name]: value
        }))
    }
    
    return (
        <>
            <h1>Categories</h1>
            <button onClick={() => setOpen(cr => !cr)}>Add new Category</button>
            {isLoading && (
                <CategoryLoadingList />
            )}
            {!isLoading && categories.length === 0 ? (<>
                <h3>No Category added yet</h3>
            </>) : (
                <section className="category-list-wrapper">
                    {categories.map((i: any, index: any) => (<div className="card category-item " key={index}>
                        <img alt='category-img' src={i.pic ?? '/learn.png'} width={100} />
                        <p>{i.name ?? 'No Name'}</p>
                        <span className="">Rs. 1000</span>
                    </div>))}
                </section>
            )}
            <Modal open={open} title='Add new Category' onClose={() => setOpen(cr => !cr)}>
                <div className="form-item">
                    <p>Name</p>
                    <input autoFocus className="ablue" value={crrCategory.name} name='name' placeholder="eg. Travel" onChange={onChange} />
                </div>
                <div className="category-type-wrapper">
                    <p>Select Picture</p>
                    <div className="category-picture-wrapper">
                        {DEFAULT_CATEGORIES_ICONS.ALL.map((i: any) => (
                            <div
                                onClick={() => setActiveIcon(i)}
                                className={`category-picture-item ${i === activeIcon ? 'active' : ''} `}
                                key={i}
                            >
                                <img src={i} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="add-category-footer">
                    <button onClick={handleOnAddCategory}>Add Category</button>
                    <p className="error">{errorMessage}</p>
                </div>
            </Modal>
        </>
    )
}

const CategoryLoadingList = () => {
    return (
        <div className="skeleton-category">
            <Skeleton borderRadius={20} width={170} height={170} count={5}></Skeleton>
        </div>
    )
}