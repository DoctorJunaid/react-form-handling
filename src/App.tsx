
import Form from './Components/Form'
import {useState} from "react";
import Output from "./Components/Output.tsx";
import Loader from "./Components/Loader.tsx";

interface FormData {
    FirstName?: string;
    LastName?: string;
    age?: string;
    gender?: string;
    Email?: string;
    Password?: string;
    ConfirmPassword?: string;
    checkbox?: boolean;
}

const App = () => {
    const [formObj, setFormObj] = useState<FormData>({})
    const [handlerStart, setHandlerStart] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = () => {
        setIsLoading(true)
        setTimeout(()=>{
            setIsLoading(false)
            setHandlerStart(true)
        },2000)
    }


    return (
      <>
          {
              isLoading ? <Loader /> : handlerStart ? <Output formObj={formObj} /> : <Form setFormObj={setFormObj} onSubmit={handleSubmit}/>
          }
      </>
  )
}

export default App
