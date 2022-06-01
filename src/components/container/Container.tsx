import { ReactNode } from "react"
import "../container/Container.css"


type Children = {
    children : ReactNode;
    className:string
}

export default function Container (props:Children){
    return <div className={props.className}>{props.children}</div>;
}