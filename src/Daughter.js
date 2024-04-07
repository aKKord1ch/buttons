import Grandson from "./Grandson";
import { MyContext } from "./MyContext";
import { useContext } from "react";

function Daughter() {
   const age = useContext(MyContext);

   return <>
      <div>
         {age}
      </div>
      <Grandson/>
   </>
}

export default Daughter;