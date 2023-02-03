

import styled from "styled-components"



export const Input =({children, value, onChange})=>{
 return(
  <>
   <StyledInput value={value} onChange={onChange}>{children}</StyledInput> 
  </>
 )
}

const StyledInput=styled.input`
 

`   