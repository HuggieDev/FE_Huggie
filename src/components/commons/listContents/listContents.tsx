import styled from 'styled-components';

const ListContents = ({
  title,
  location,
  date,
  contents,
}: {
  title: string;
  location: string;
  date?: string;
  contents?: string;
}) => {
  return (
    <Wrapper>
      <Contents>
        <Title>{title}</Title>
        <SubText>{location}</SubText>
      </Contents>
      {contents && date && (
        <Contents style={{ paddingTop: '12px' }}>
          <MainText>{contents}</MainText>
          <SubText>{date}</SubText>
        </Contents>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px 0;
  border-bottom: 1px solid #000;
  cursor: pointer;
  :hover{
    background-color: #e6e6e6;
  }
`;
const Contents = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h2`
  max-width: 40%;
  font-size: 18px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const SubText = styled.h3`
  font-size: 12px;
  font-weight: 400;
  color: #595959;
`;
const MainText = styled.h3`
  max-width: 70%;
  font-size: 12px;
  font-weight: 400;
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export default ListContents;
