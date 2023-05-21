import { useEffect } from "react"

const useTittle=tittle=>{
    useEffect(()=>{
        document.title=tittle;
    },[tittle])
}
export default useTittle;