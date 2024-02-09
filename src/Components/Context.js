import { createContext, useState } from "react";

const AuthContext = createContext()

export default AuthContext

export function WeatherProvider({ children }) {
    const [data, setData] = useState(null)
    const [state, setState] = useState(false)

    const addData = (details) => {
        setData(details)
    }

    return (
        <AuthContext.Provider value={{ data, addData, setState, state }}>
            {children}
        </AuthContext.Provider>
    )
}