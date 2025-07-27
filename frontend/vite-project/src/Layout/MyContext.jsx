import { useContext } from "react";
import { createContext } from "vm";


const MyContext = createContext();


export const useMyContext = () => useContext(MyContext);

const MyContextProvider = ({ children }) => {
    const name = "Adit";
    const age = 21;
    const email = "Hello Bro"

    return (
        <MyContext.Provider value={{ name, age, email }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyContextProvider