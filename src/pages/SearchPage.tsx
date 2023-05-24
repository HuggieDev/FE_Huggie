import HeadNav from "../components/commons/headNav/headNav"
import CommonInput from "../components/commons/inputs/commonInput"
import ListContents from "../components/commons/listContents/listContents"

const SearchPage = () => {
    return (
        <>
        <HeadNav wrapperStyles={{borderBottom:"1px solid #000"}} component={<CommonInput wrapperStyles={{border:"none"}} rightIcon={<img
            src="/src/assets/image/delete.svg"
          />}/>}/>
        
      <ListContents title='adsqweqwejwidqwjqweqweqweqweqweqweeasd' location='qqweqwnmoid' date='2023/01/01' contents='qwqweqweasdasqweasdxzcdasdasdasdasdadsdddddd'/>
      <ListContents title='adsqweqwejwidqwjqweqweqweqweqweqweeasd' location='qqweqwnmoid'/>

      <ListContents title='adsqweqwejwidqwjqweqweqweqweqweqweeasd' location='qqweqwnmoid' date='2023/01/01' contents='qwqweqweasdasqweasdxzcdasdasdasdasdadsdddddd'/>
      <ListContents title='adsqweqwejwidqwjqweqweqweqweqweqweeasd' location='qqweqwnmoid'/>
        </>
    )
}
export default SearchPage