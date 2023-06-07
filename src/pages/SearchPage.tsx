import { useState } from "react"
import FloatButton from "../components/commons/buttons/floatButton"
import HeadNav from "../components/commons/headNav/headNav"
import CommonInput from "../components/commons/inputs/commonInput"
import ListContents from "../components/commons/listContents/listContents"

const SearchPage = () => {
    const [selected,setSelected]=useState("")
    const onClickIcon = (id:string)=> ()=>{
        setSelected(id)
    }
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <HeadNav wrapperStyles={{borderBottom:"1px solid #000"}} component={<CommonInput wrapperStyles={{border:"none"}} rightIcon={<img
            src="/src/assets/image/delete.svg"
          />}/>}/>
        
      <ListContents title='adsqweqwejwidqwjqweqweqweqweqweqweeasd' location='qqweqwnmoid' date='2023/01/01' contents='qwqweqweasdasqweasdxzcdasdasdasdasdadsdddddd'/>
      <ListContents title='adsqweqwejwidqwjqweqweqweqweqweqweeasd' location='qqweqwnmoid'/>

      <ListContents title='adsqweqwejwidqwjqweqweqweqweqweqweeasd' location='qqweqwnmoid' date='2023/01/01' contents='qwqweqweasdasqweasdxzcdasdasdasdasdadsdddddd'/>
      <ListContents title='adsqweqwejwidqwjqweqweqweqweqweqweeasd' location='qqweqwnmoid'/>
      <FloatButton onClickEvent={onClickIcon} isSelected={selected}/>
        </div>
    )
}
export default SearchPage