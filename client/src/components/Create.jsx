import Form from './Forms/Form';
import Navbar from "./Nav/Navbar";

export default function Create() {

  return (
    <div>
      <Navbar name={"Cancel"} className={"text-darkPurple hover:text-tasqHoverPurple text-sm"}/>
      <div className="w-375 mx-auto"> 
        <Form />
      </div>
    </div>
  )
}
