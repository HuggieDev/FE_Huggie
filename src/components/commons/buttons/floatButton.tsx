import styled from "styled-components"

const FloatButton = ({onClickEvent,isSelected}:{
    onClickEvent:(id:string)=>()=>void
    isSelected:string
}) => {
    return (
        <BtnWrapper>
            <BtnText  onClick={onClickEvent('address')} selected={isSelected==='address'}>주소</BtnText>
            <BtnText  onClick={onClickEvent('location')} selected={isSelected==='location'}>장소</BtnText>
        </BtnWrapper>
    )
}
const BtnWrapper = styled.div`
    position: absolute;
    bottom:6rem;
    display: flex;
    width: fit-content;
    padding: 0 24px;
    border-radius: 99px;
    background-color: #000;
`
const BtnText = styled.div`
    padding: 14px 16px;
    color:#fff;
    color:${(props:{selected:boolean})=>props.selected ? '#E4571B':'#fff'};
    font-weight: 700;
    font-size: 18px;
    cursor: pointer;
`
export default FloatButton