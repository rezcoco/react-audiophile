import { createContext, useState } from "react";

export const ToggleContext = createContext()

export const ToggleProvider = ({ children }) => {
    const [toggle, setToggle] = useState(false)
    return (
        <ToggleContext.Provider value={{
            toggle,
            setToggle
        }}>
            {children}
            {toggle && (<div onClick={() => setToggle(!toggle)} className="fixed bg-black bg-opacity-40 inset-0 h-screen"></div>)}
        </ToggleContext.Provider>
    )
}