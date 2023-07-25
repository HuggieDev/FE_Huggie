import CommonInput from "../../commons/inputs/commonInput";
import styled from "styled-components";

export default function SearchBar({
    containerStyles,
    wrapperStyles,
    placeHolder
}:{
    containerStyles?:{[key:string]:string|number}
    wrapperStyles?:{[key:string]:string|number}
    placeHolder?:string
}){
    return(
        <div style={{display:'flex',width:'100%',alignItems:'flex-end'}}>
            <Container style={containerStyles}>
                <InputDiv>
                <CommonInput wrapperStyles={{borderBottom:"1px solid #000",...wrapperStyles}} isSearch placeHolder={placeHolder}/>
                </InputDiv>
            </Container>
            <Img src='/src/assets/image/landingBt.svg'/>
        </div>
    )
}
const Container = styled.div`
    padding: 48px 0 0 20px;
    display: flex;
    width: 100%;
`
const InputDiv = styled.div`
    /* padding-top: 7px; */
    width: 100%;
`
const Img = styled.img`
    align-items: end;
    width:64px;
    height: 56px;
    border-bottom: 1px solid #000;
    /* padding-left: 12px; */
`