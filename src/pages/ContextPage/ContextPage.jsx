import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"

export default function ContextPage(){
    // PASO 3 - CONTEXT - RECOGES MEDIANTE USECONTEXT EL VALOR DEL CONTEXTO QUE HAYAS ESPECIFICADO
    const {darkMode, setDarkMode} = useContext(ThemeContext);
    return <div>
        {darkMode ? "soy dark" :"soy light"}

        <button onClick={()=> setDarkMode(!darkMode)}>Change theme</button>
    </div>
}