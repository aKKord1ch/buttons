import { useContext } from "react";
import { MyContext } from "./MyContext";

function Grandson() {
   const age = useContext(MyContext);

   return <div>
      {age/2}
   </div>
   
}

export default Grandson;