import { useNavigate } from "react-router-dom"

export default function HomePage(){
  const navigate = useNavigate()
  return(
    <>
    <h1>haloooo home</h1>
 <button onClick={()=> {
  navigate("/register")
 }}>
click me(register)
 </button>
    </>
  )
}