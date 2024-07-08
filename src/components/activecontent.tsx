import { ReactNode } from "react";
import Loader from "./loader";
import Alerts from "./alerts";

type Props = {
    children: ReactNode
}
export const ActiveContent = ({children}: Props) => {
    return ( 
        <main className="active-sub-content-meta">
            <Loader />
            <Alerts />
            <div className="active-sub-content">
                {children}
            </div>
        </main>
    );
}