import { createContext, useState } from "react";

export const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState(false)
    return (
        <AlertContext.Provider value={{
            alert,
            setAlert
        }}>
            {alert && (
                <div className="bg-white fixed top-8 left-1/2 -translate-x-1/2 flex justify-center items-center gap-4 p-6 rounded-lg z-[9999999] shadow-md transition-all">
                    <img className="h-6 w-6" src="/assets/checkout/icon-order-confirmation.svg" alt="Success Added" />
                    <p className="text-xl font-medium">Successfully added</p>
                </div>
            )}
            {children}
        </AlertContext.Provider>
    )
}