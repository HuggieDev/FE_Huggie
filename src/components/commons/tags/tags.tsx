import { useRef } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const Tags = ({
  array,
  wrapperStyles,
  tagStyles,
}: {
  array: Array<string>;
  wrapperStyles?: { [key: string]: string | number };
  tagStyles?: { [key: string]: string | number };
}) => {
  const menuRef = useRef(null);
  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    const menu = menuRef.current as unknown as HTMLElement;
    menu.scrollBy(e.deltaY, e.deltaX);
  };
  return (
    <Wrapper style={wrapperStyles} onWheel={handleScroll} ref={menuRef}>
      {array.map((el: string) => (
        <TagBox style={tagStyles} key={uuidv4()}>
          {el}
        </TagBox>
      ))}
    </Wrapper>
  );
};
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
`;
const TagBox = styled.div`
  min-width: fit-content;
  font-size: 12px;
  font-weight: 400;
  color: #e4671b;
  border: 1px solid #e6e6e6;
  padding: 4px 12px;
  margin-right: 8px;
  border-radius: 100px;
`;
export default Tags;
