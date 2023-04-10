import styled from 'styled-components';

const CommonInput = ({
  title,
  titleStyles,
  errorMessage,
  isSearch,
}: {
  title?: string | number;
  titleStyles?: { [key: string]: string | number };
  errorMessage?: string;
  isSearch?: boolean;
}) => {
  return (
    <>
      {title && <Title style={titleStyles}>{title}</Title>}
      <InputWrapper errorMessage={errorMessage} isSearch={isSearch}>
        {isSearch && (
          <img
            src="vite.svg"
            style={{ width: '24px', height: '24px', padding: '12px' }}
          />
        )}
        <UnderLineInput />
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
const ErrorText = styled.span`
  font-size: 12px;
  color: #de350b;
`;
export default CommonInput;