import CommonInput from "../../commons/inputs/commonInput";
import styled from "styled-components";

export default function SearchBar({
    containerStyles,
    placeHolder
}:{
    containerStyles?:{[key:string]:string|number}
    placeHolder?:string
}){
    return(
        <Container style={containerStyles}>
            <InputDiv>
            <CommonInput wrapperStyles={{borderBottom:"1px solid #000"}} isSearch placeHolder={placeHolder}/>
            </InputDiv>
            <Img src='/src/assets/image/landingBt.svg'/>
        </Container>
    )
}
const Container = styled.div`
    padding: 48px 0 0 20px;
    display: flex;
    width: 100%;
`
const InputDiv = styled.div`
    padding-top: 7px;
    width: 100%;
`
const Img = styled.img`
    padding-left: 12px;
`