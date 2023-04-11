import CommonInput from "../../commons/inputs/commonInput";
import styled from "styled-components";

export default function SearchBar(){
    return(
        <Container>
            <InputDiv>
            <CommonInput isSearch/>
            </InputDiv>
            <Img src='/src/assets/image/landingBt.svg'/>
        </Container>
    )
}
const Container = styled.div`
    padding: 48px 20px 16px 20px;
    display: flex;
    width: 100%;
`
const InputDiv = styled.div`
    width: 100%;
`
const Img = styled.img`
    padding-left: 12px;
`