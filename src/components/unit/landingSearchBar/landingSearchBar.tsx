import CommonInput from "../../commons/inputs/commonInput";
import styled from "styled-components";

export default function SearchBar(){
    return(
        <Container>
            <InputDiv>
            <CommonInput wrapperStyles={{border:"none"}} isSearch/>
            </InputDiv>
            <Img src='/src/assets/image/landingBt.svg'/>
        </Container>
    )
}
const Container = styled.div`
    padding: 48px 0 0 20px;
    display: flex;
    width: 100%;
    border-bottom: 1px solid #000;
`
const InputDiv = styled.div`
    padding-top: 7px;
    width: 100%;
`
const Img = styled.img`
    padding-left: 12px;
`