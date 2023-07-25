import styled from 'styled-components';

const CommonInput = ({
  title,
  titleStyles,
  errorMessage,
  isSearch,
  leftIcon,
  rightIcon,
  wrapperStyles,
  placeHolder,
  isTextArea
}: {
  title?: string | number;
  titleStyles?: { [key: string]: string | number };
  errorMessage?: string;
  isSearch?: boolean;
  leftIcon?:JSX.Element
  rightIcon?:JSX.Element
  wrapperStyles?: {[key:string]:string|number}
  placeHolder?:string
  isTextArea?:boolean
}) => {
  return (
    <>
      {title && <Title style={titleStyles}>{title}</Title>}
      <InputWrapper errorMessage={errorMessage} isSearch={isSearch} style={wrapperStyles}>
        {leftIcon&&leftIcon}
        {isSearch && (
          <img
            src="/src/assets/image/Search.svg"
          />
        )}
        {isTextArea ? 
        <UnderLineTextArea placeholder={placeHolder} errorMessage={errorMessage}/>
      :
      <UnderLineInput placeholder={placeHolder}/>
      }
      {rightIcon && rightIcon}
      </InputWrapper>
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </>
  );
};
interface StyleProps {
  errorMessage?: string;
  isSearch?: boolean;
}
const Title = styled.h3`
  padding: 8px 0;
  font-size: 14px;
  font-weight: 400;
`;
const InputWrapper = styled.div`
width: 100%;
  display: flex;
  border-bottom: ${(props: StyleProps) =>
    props.errorMessage ? '1px solid #DE350B' : '1px solid #000'};
  padding-left: ${(props: StyleProps) => (props.isSearch ? '0' : '8px')};
`;
const UnderLineInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 12px 8px;
`;
const UnderLineTextArea = styled.textarea`
  width: 100%;
  height: 312px;
  background-color: #F2F2F2;
  border: ${(props: StyleProps) =>
    props.errorMessage ? '1px solid #DE350B' : '1px solid #000'};
  outline: none;
  padding: 12px 8px;
  resize: none;
`
const ErrorText = styled.span`
  font-size: 12px;
  color: #de350b;
`;
export default CommonInput;
