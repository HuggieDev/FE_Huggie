import { useRef } from "react";
import styled from "styled-components"
import { v4 as uuidv4 } from 'uuid';

const Tags = ({
    array
}:{
    array:Array<string>
}) => {
    const menuRef = useRef(null)
    const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
        const menu = menuRef.current as unknown as HTMLElement;
        menu.scrollBy(e.deltaY, e.deltaX);
      };
    return (
        <Wrapper onWheel={handleScroll} ref={menuRef}>
            {array.map((el:string)=>(
                <TagBox key={uuidv4()}>{el}</TagBox>
            ))}
        </Wrapper>
    )
}
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 8px 20px;
    overflow-x: auto;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    ::-webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;
    -ms-overflow-style: none;
`
const TagBox = styled.div`
    min-width: fit-content;
    font-size: 12px;
    font-weight: 400;
    color: #E4671B;
    border: 1px solid #E6E6E6;
    padding: 4px 12px;
    margin-right: 8px;
    border-radius: 100px;
`
export default Tags