import styled from 'styled-components';

const CommonButton = ({
  isActive,
  buttonText,
  onClickEvent,
  buttonStyles,
  iconSrc,
}: {
  isActive?: boolean;
  buttonText: string;
  onClickEvent: () => void ;
  buttonStyles?: { [key: string]: string | number };
  iconSrc?: string;
}) => {
  let icon = '';
  if (iconSrc) icon = iconSrc;
  else if (buttonText.includes('다음')) icon = '/src/assets/image/Navigate next.svg';
  else if (buttonText.includes('추가')) icon = '/src/assets/image/Add.svg';
  return (
    <BtWrap>
      <BtnWrapper isActive={isActive} onClick={onClickEvent} style={buttonStyles}>
        {buttonText}
        <Icon src={icon} />
      </BtnWrapper>
    </BtWrap>
  );
};
interface ButtonProps {
  isActive?: boolean;
}
const BtWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const BtnWrapper = styled.div`
  width: 91%;
  background-color: ${(props: ButtonProps) =>
    props.isActive ? '#E4571B' : '#e6e6e6'};
  color: ${(props: ButtonProps) => (props.isActive ? '#000' : '#808080')};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10.5px 0;
  cursor: pointer;
`;
const Icon = styled.img`
  margin-left: 8px;
`;
export default CommonButton;
