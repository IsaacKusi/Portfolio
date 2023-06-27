
import { createContext } from "react";
import { useReducer, useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";

const NavFocusContext = createContext({})

export const NavfocusProvider = ({ children }) => {

    const initialStates = {
        homeActive: null,
        aboutActive: null,
        skillActive: null,
        projectActive: null,
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'homeActive': return { ...state, homeActive: action.payload }
            case 'aboutActive': return { ...state, aboutActive: action.payload }
            case 'skillActive': return { ...state, skillActive: action.payload }
            case 'projectActive': return { ...state, projectActive: action.payload }

            default: throw new Error()
        }
    }

    const [state, dispatch] = useReducer(reducer, initialStates)
    const [locPath, setLocPath] = useState('')
    const location = useLocation()

    useEffect(() => {
        setLocPath(location.pathname)
    }, [location.pathname])

    const homeFocusHandler = useCallback(() => {
        dispatch({ type: 'homeActive', payload: 'foc-home' })
        dispatch({ type: 'aboutActive', payload: null })
        dispatch({ type: 'skillActive', payload: null })
        dispatch({ type: 'projectActive', payload: null })
        localStorage.setItem('homeStore', JSON.stringify('foc-home'))
        localStorage.removeItem('aboutStore')
        localStorage.removeItem('skillStore')
        localStorage.removeItem('projectStore')

    }, [])

    const aboutFocusHandler = useCallback(() => {
        dispatch({ type: 'aboutActive', payload: 'foc-color' },)
        dispatch({ type: 'skillActive', payload: null })
        dispatch({ type: 'projectActive', payload: null })
        dispatch({ type: 'homeActive', payload: null })
        localStorage.setItem('aboutStore', JSON.stringify('foc-color'))
        localStorage.removeItem('homeStore')
        localStorage.removeItem('skillStore')
        localStorage.removeItem('projectStore')
    }, [])

    const skillFocusHandler = useCallback(() => {
        dispatch({ type: 'skillActive', payload: 'foc-color' })
        dispatch({ type: 'aboutActive', payload: null })
        dispatch({ type: 'projectActive', payload: null })
        dispatch({ type: 'homeActive', payload: null })
        localStorage.setItem('skillStore', JSON.stringify('foc-color'))
        localStorage.removeItem('aboutStore')
        localStorage.removeItem('homeStore')
        localStorage.removeItem('projectStore') 
    }, [])

    const projectFocusHandler = useCallback(() => {
        dispatch({ type: 'projectActive', payload: 'foc-color' })
        dispatch({ type: 'skillActive', payload: null })
        dispatch({ type: 'aboutActive', payload: null })
        dispatch({ type: 'homeActive', payload: null })
        localStorage.setItem('projectStore', JSON.stringify('foc-color'))
        localStorage.removeItem('aboutStore')
        localStorage.removeItem('skillStore')
        localStorage.removeItem('homeStore')

    }, [])

    useEffect(() => {
        if (locPath === '/') {
            homeFocusHandler()
        } else if (locPath === '/about') {
            aboutFocusHandler()
        } else if (locPath === '/skills') {
            skillFocusHandler()
        } else if (locPath === '/projects') {
            projectFocusHandler()
        }
    }, [locPath, aboutFocusHandler, skillFocusHandler, projectFocusHandler, homeFocusHandler])

    useEffect(() => {
        dispatch({ type: 'homeActive', payload: (JSON.parse(localStorage.getItem('homeStore'))) })
        dispatch({ type: 'aboutActive', payload: (JSON.parse(localStorage.getItem('aboutStore'))) })
        dispatch({ type: 'skillActive', payload: (JSON.parse(localStorage.getItem('skillStore'))) })
        dispatch({ type: 'projectActive', payload: (JSON.parse(localStorage.getItem('projectStore'))) })
    }, [])

    return <>
        <NavFocusContext.Provider value={{
            state, dispatch, aboutFocusHandler, skillFocusHandler, projectFocusHandler, homeFocusHandler
        }}>
            {children}
        </NavFocusContext.Provider>
    </>
}

export default NavFocusContext