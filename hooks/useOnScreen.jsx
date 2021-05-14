import { useEffect, useState } from "react";
import useIsMounted from "react-is-mounted-hook";

 const useOnScreen =(options) => {
    const [ref,setRef] = useState(null);
    const [visible, setVisible] = useState(false);
    const isMount = useIsMounted()

    useEffect(() => {
        if(isMount){
            const observer = new IntersectionObserver(([entry])=> {
                setVisible(entry.isIntersecting);
            },options);
    
            if(ref)
            observer.observe(ref)
            return () => {
                if(ref){
                    observer.unobserve(ref);
                }
            }
        }
    }, [ref,options,isMount])
    return [setRef,visible]
}

export default useOnScreen;