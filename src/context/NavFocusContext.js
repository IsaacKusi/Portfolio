
import { createContext } from "react";
import { useReducer, useEffect } from "react";
import { useRef} from 'react';
import { useInView, useAnimation } from "framer-motion"
//import { useLocation } from "react-router-dom";

const NavFocusContext = createContext({})

export const NavfocusProvider = ({ children }) => {

    const initialStates = {
        homeActive:null,
        aboutActive: null,
        skillActive: null,
        projectActive: null,
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'homeActive' : return {...state, homeActive: action.payload}
            case 'aboutActive': return { ...state, aboutActive: action.payload }
            case 'skillActive': return { ...state, skillActive: action.payload }
            case 'projectActive': return { ...state, projectActive: action.payload }

            default: throw new Error()
        }
    }

    const [state, dispatch] = useReducer(reducer, initialStates)
    //const location = useLocation()

    // const path = location.pathname
    // console.log(path)

    const homeFocusHandler = ()=>{
        dispatch({type:'homeActive', payload:'foc-home'})
        dispatch({ type: 'aboutActive', payload: null})
        dispatch({ type: 'skillActive', payload:null})
        dispatch({ type: 'projectActive', payload:null})
        localStorage.setItem('homeStore', JSON.stringify('foc-home'))
        localStorage.removeItem('aboutStore')
        localStorage.removeItem('skillStore')
        localStorage.removeItem('projectStore') 
    }

    const aboutFocusHandler = () => {
        dispatch({ type: 'aboutActive', payload:'foc-color'}, )
        dispatch({ type: 'skillActive', payload:null})
        dispatch({ type: 'projectActive', payload:null})
        dispatch({type:'homeActive', payload:null})
        localStorage.setItem('aboutStore', JSON.stringify('foc-color'))
        localStorage.removeItem('homeStore')
        localStorage.removeItem('skillStore')
        localStorage.removeItem('projectStore')
        
    }

    const skillFocusHandler = () => {
        dispatch({ type: 'skillActive', payload:'foc-color'})
        dispatch({ type: 'aboutActive', payload:null})
        dispatch({ type: 'projectActive', payload:null})
        dispatch({type:'homeActive', payload:null})
        localStorage.setItem('skillStore', JSON.stringify('foc-color'))
        localStorage.removeItem('aboutStore')
        localStorage.removeItem('homeStore')
        localStorage.removeItem('projectStore')
    }

    const projectFocusHandler = () => {
        dispatch({ type: 'projectActive', payload:'foc-color'})
        dispatch({ type: 'skillActive', payload:null})
        dispatch({ type: 'aboutActive', payload:null})
        dispatch({type:'homeActive', payload:null})
        localStorage.setItem('projectStore', JSON.stringify('foc-color'))
        localStorage.removeItem('aboutStore')
        localStorage.removeItem('skillStore')
        localStorage.removeItem('homeStore')
        
    }

    useEffect(()=>{
      dispatch({type:'homeActive', payload:(JSON.parse(localStorage.getItem('homeStore')))})
      dispatch({type:'aboutActive', payload:(JSON.parse(localStorage.getItem('aboutStore')))})
      dispatch({type:'skillActive', payload:(JSON.parse(localStorage.getItem('skillStore')))})
      dispatch({type:'projectActive', payload:(JSON.parse(localStorage.getItem('projectStore')))})
    }, [])

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
        }
    }, [isInView, mainControls])

    return <>
        <NavFocusContext.Provider value={{
            state, dispatch, aboutFocusHandler, skillFocusHandler, projectFocusHandler, homeFocusHandler,
            ref, mainControls
        }}>
            {children}
        </NavFocusContext.Provider>
    </>
}

export default NavFocusContext