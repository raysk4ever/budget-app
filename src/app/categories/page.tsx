"use client"

import Modal from "@/components/modal"
import { DEFAULT_CATEGORIES_ICONS } from "@/config/settings"
import { CategoryT, allCategoryAtom } from "@/state/atom"
import { useAtom } from "jotai"
import { ChangeEventHandler, useState } from "react"

export default function Categories() {
    const [categories, setCategories] = useAtom(allCategoryAtom)
    const [crrCategory, setCrrCategory] = useState<CategoryT>({
        name: '',
        pic: ''
    })
    const [open, setOpen] = useState(false)
    const [activeIcon, setActiveIcon] = useState('')

    const handleOnAddCategory = () => {
        setCrrCategory({
            name: '',
            pic: ''
        })
        setCategories(crr => ([...crr, { name: crrCategory.name, pic: activeIcon }]))
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
            {categories.length === 0 ? (<>
                <h3>No Category added yet</h3>
            </>) : (
                <section className="category-list-wrapper">
                    {categories.map((i, index) => (<div className="category-item card" key={index}>
                        <img alt='category-img' src={i.pic} width={100} />
                        <p>{i.name}</p>
                    </div>))}
                </section>
            )}
            <Modal open={open} title='Add new Category' onClose={() => setOpen(cr => !cr)}>
                <div className="form-item">
                    <p>Name</p>
                    <input value={crrCategory.name} name='name' placeholder="add new category here" onChange={onChange} />
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
                <div>
                    <button onClick={handleOnAddCategory}>Add Category</button>
                </div>
            </Modal>
        </>
    )
}
