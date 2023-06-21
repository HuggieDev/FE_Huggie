import { Rate } from 'antd';
import styled from "styled-components"
const RateComponent = ({
    value,
    onChangeEvent,
    isError
}:{
    value:number,
    onChangeEvent:(value:number)=>void
    isError?:boolean
}) => {
    return(
        <Wrapper>
            <Star value={value} onChange={onChangeEvent}/>
            <Message isError={isError}>{value!==0 ? `${value} 점` : '별점을 선택해주세요'}</Message>
        </Wrapper>
    )
}
interface StyleProps{
    isError?:boolean
}
const Wrapper = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
`
const Star = styled(Rate)`
    color:#E4571B;
    font-size:40px;
    display: flex;
    justify-content: space-evenly;
`
const Message = styled.div`
    width: 100%;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    margin-top: 8px;
    color:${(props:StyleProps)=>props.isError ? '#DE350B':'#000'};
`
export default RateComponent