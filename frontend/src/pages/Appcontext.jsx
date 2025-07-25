import { createContext } from "react";
import { doctors } from "../assets/assets";
 export const AppContext=createContext();  //sabse pehle createContext  karenge 

const AppcontextProvider=({children})=>{

const currencySymbol = "$"; // Define the currency symbol
const value={
doctors,
currencySymbol, // Provide the currency symbol in the context
}


return (
    <AppContext.Provider value={value}>
        {children}
        </AppContext.Provider>
)

}
export default AppcontextProvider;
