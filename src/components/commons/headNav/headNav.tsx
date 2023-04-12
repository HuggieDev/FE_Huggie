import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HeadNav = ({
  title,
  icon,
  onClickEvent,
}: {
  title?: string;
  icon?: string;
  onClickEvent?: () => void;
}) => {
  const navigate = useNavigate();
  const moveBack = () => {
    navigate(-1);
  };
  return (
    <Wrapper>
      <Icon
        src={icon || '/src/assets/image/arrow_back.svg'}
        onClick={onClickEvent || moveBack}
      />
      {title && <Title>{title}</Title>}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Icon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
`;
export default HeadNav;
