import { useContext } from "react"
import { ContextApp } from "./ContextApp"

export default function useSelector(selectorFn) {
    if (typeof selectorFn !== 'function') {
        throw new Error(`You must pass a selector to useSelector`)
    }

    const {state} = useContext(ContextApp);
    if (state.activeList) {
        const selectedState = selectorFn(state);
    
        return selectedState;
    }

    
}