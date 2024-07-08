import { MouseEventHandler } from "react";
import { CgClose } from "react-icons/cg";

export default function Modal({ open, title, onClose, children }: any) {
    if (!open) {
        return null
    }
    const handleOnBgClick: MouseEventHandler<HTMLDivElement> = (e: any) => {
        e.stopPropagation()
        e.preventDefault()
        console.log('inside handleONBG', e) 
        if (e.target.className !== 'modal-bg') return
        onClose()
    }
    return (
        <div className="modal-bg" onClick={handleOnBgClick}>
            <article className="modal">
                <section className="modal-header">
                    <h1>{title}</h1>
                    <CgClose onClick={onClose} size={25} className="action-button primary" />
                </section>
                <section className="modal-body">
                    {children}
                </section>
                <section className="modal-footer">
                </section>
            </article>
        </div>
    )
}