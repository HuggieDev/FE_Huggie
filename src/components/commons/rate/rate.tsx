import { Rate } from 'antd';
import styled from "styled-components"
const RateComponent = ({
    value,
    wrapperStyles,
    starStyle,
    onChangeEvent,
    isError,
    isDisabled,
    isRow
}:{
    value:number,
    wrapperStyles?:{[key:string]:string|number},
    starStyle?:{[key:string]:string|number},
    onChangeEvent:(value:number)=>void
    isDisabled?:boolean
    isError?:boolean
    isRow?:boolean
}) => {
    return(
        <Wrapper style={wrapperStyles} isRow={isRow}>
            <Star disabled={isDisabled} style={starStyle} value={value} onChange={onChangeEvent}/>
            {!isRow ? 
                <Message isError={isError}>{value!==0 ? `${value} 점` : '별점을 선택해주세요'}</Message>
            :
            <Point>{value}점</Point>
            }
        </Wrapper>
    )
}
interface StyleProps{
    isError?:boolean
    isRow?:boolean
}
const Wrapper = styled.div`
    width:100%;
    display: flex;
    flex-direction: ${(props:StyleProps)=>props.isRow ? 'row':'column'};
    align-items: center;
    justify-content: center;
`
const Star = styled(Rate)`
    color:#E4571B;
    font-size:40px;
    display: flex;
    justify-content: space-evenly;
`
const Point = styled.div`
    font-size: 16px;
    font-weight: 400;
    margin-left: 8px;
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