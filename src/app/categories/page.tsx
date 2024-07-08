"use client"

import Modal from "@/components/modal"
import { DEFAULT_CATEGORIES_ICONS } from "@/config/settings"
import useCategory from "@/hooks/use-category"
import { CategoryT } from "@/state/atom"
import { ChangeEventHandler, MouseEventHandler, useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"

const DEFAULT_CRR_CATEGORY = {
    name: '',
    pic: ''
}

export default function Categories() {
    const [crrCategory, setCrrCategory] = useState<CategoryT>({...DEFAULT_CRR_CATEGORY})
    const [open, setOpen] = useState(false)
    const [editOpen, setEditOpen] = useState(false)
    const [activeIcon, setActiveIcon] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const {categories, setCategories, isLoading, saveCategory} = useCategory()

    const validateCategory = () => {
        if (!crrCategory.name) {
            setErrorMessage(() => 'Please enter a valid Category name!')
            return false
        }
        if (!activeIcon) {
            setErrorMessage(() => 'Please select Category picture!')
            return false
        }
        const isAlreadyPresent = categories.find((c: any) => c.name === crrCategory.name)
        if (isAlreadyPresent) {
            setErrorMessage(() => 'Category name already present!')
            return false
        }
        if (errorMessage) {
            setErrorMessage('')
        }
        return true
    }
    const handleOnAddCategory = () => {
        const isValid = validateCategory()
        if (!isValid) return
        saveCategory({ ...crrCategory, pic: activeIcon })
        setCrrCategory({
            name: '',
            pic: ''
        })
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
                    {categories.map((i: any, index: any) => (<CategoryItem
                        key={index}
                        setCrrCategory={setCrrCategory}
                        setEditOpen={setEditOpen}
                        item={i}
                        setActiveIcon={setActiveIcon}
                    />))}
                </section>
            )}
            <AddNewCategoryModal
                setActiveIcon={setActiveIcon}
                setOpen={setOpen}
                crrCategory={crrCategory}
                activeIcon={activeIcon}
                handleOnAddCategory={handleOnAddCategory}
                errorMessage={errorMessage}
                onChange={onChange}
                open={open}
                setCrrCategory={setCrrCategory}
            />
            <EditCategoryModal
                setActiveIcon={setActiveIcon}
                setOpen={setEditOpen}
                crrCategory={crrCategory}
                activeIcon={activeIcon}
                handleOnAddCategory={handleOnAddCategory}
                errorMessage={errorMessage}
                onChange={onChange}
                open={editOpen}
                setCrrCategory={setCrrCategory}
                validateCategory={validateCategory}
                setCategories={setCategories}
                setErrorMessage={setErrorMessage}
            />
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

const CategoryItem = ({item, setEditOpen, setCrrCategory, setActiveIcon}: any) => {
    return (
        <div className="card category-item " onClick={() => {
            setActiveIcon(() => item.pic)
            setCrrCategory(() => ({...item}))
            setEditOpen((crr: any) => !crr)
        }}>
            {/* <div className="action-items">
                <BiEdit color="green" size={20} />
                <MdDelete color="red" size={20} />
            </div> */}
            <img alt='category-img' src={item.pic ?? '/learn.png'} width={100} />
            <p>{item.name ?? 'No Name'}</p>
            <span className="">Rs. 1000</span>
        </div>
    )
}

const AddNewCategoryModal = ({ open, setOpen, crrCategory, setActiveIcon, activeIcon, handleOnAddCategory, errorMessage, onChange, setCrrCategory }: any) => {
    return (
        <Modal open={open} title='Add new Category' onClose={() => {
            setOpen((cr: any) => !cr)
            setCrrCategory(() => ({...DEFAULT_CRR_CATEGORY}))
        }}
        >
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
    )
}

const EditCategoryModal = ({ open, setOpen, crrCategory, setActiveIcon, activeIcon, errorMessage, onChange, setCrrCategory, validateCategory, setCategories, setErrorMessage }: any) => {
    
    useEffect(() => {
        setErrorMessage('')
    }, [setErrorMessage])

    const handleOnUpdateCategory: MouseEventHandler<HTMLButtonElement> = (e) => {
        console.log('handleOnUpdateCategory')
        e.preventDefault()
        const isValid = validateCategory()
        console.log('isValid', isValid)
        if (!isValid) return
        updateCategory()
    }
    const updateCategory = async () => {
        await fetch('/api/common', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: crrCategory._id,
                data: {
                    name: crrCategory.name,
                    pic: activeIcon
                },
                type: 'categories'
            })
        })
        setOpen((crr: any) => !crr)
        setCategories((crr:any) => {
            const v = crr.find((c: any) => c._id === crrCategory._id)
            v.name = crrCategory.name
            v.pic = crrCategory.pic
            return [...crr]
        })
    }
    const handleOnDelete = async () => {
        console.log('inside handleOnDelete crrCategory', crrCategory)
        await fetch('/api/common', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: crrCategory._id,
                type: 'categories'
            })
        })
        setOpen((crr: any) => !crr)
        setCategories((crr: any) => {
            const index = crr.findIndex((c: any) => c._id === crrCategory._id)
            console.log('index', index)
            if (index > -1) {
                crr.splice(index, 1)
            }
            return [...crr]
        })
    }
    return (
        <Modal open={open} title='Edit Category' onClose={() => {
            setOpen((cr: any) => !cr)
            setCrrCategory(() => ({...DEFAULT_CRR_CATEGORY}))
        }}>
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
                <button onClick={handleOnUpdateCategory}>Update</button>
                <button className="danger" onClick={handleOnDelete}>Delete</button>
                <p className="error">{errorMessage}</p>
            </div>
        </Modal>
    )
}
