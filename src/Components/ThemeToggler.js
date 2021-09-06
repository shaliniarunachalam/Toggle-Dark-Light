import React,{useContext} from "react";

import ThemeContext from "../Context/ThemeContext";

const ThemeToggler =()=>
{
const[themeMode,setthemeMode] = useContext(ThemeContext)
return(
<div>

<button 
        style={{
            backgroundColor:"green",
            padding:"10px 150px",
            fontSize:"20px",
            color:"#fff",
           
        }}
        onClick={()=>{
            setthemeMode(themeMode==="light"?"dark":"light");
        }}
        
        >Click Me</button>



    <span>
        {themeMode==="light"?"Turn Off":"Lights On"}
    </span> 
</div>
)

}
export default ThemeToggler;