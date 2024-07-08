"use client"
import useLoader from "@/hooks/use-loader"

function Loader() {
    const {show} = useLoader()
    if (!show) {
        return null
    }
    return (
        <section className="loader">
            <span>Loading...</span>
        </section>
    )
}
export default Loader