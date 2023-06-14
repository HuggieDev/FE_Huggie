import styled, { keyframes } from 'styled-components';

const ProgressBar = ({ prevProgress,progress,wrapperStyles }: { prevProgress:number,progress: number,wrapperStyles?:{[key:string]:string|number} }) => {
  return (
    <Bar style={wrapperStyles}>
      <InnerBar prevProgress={prevProgress} progress={progress} />
    </Bar>
  );
};
const progressAnimation = (props: { prevProgress:number,progress: number }) => keyframes`
from {
  width: ${props.prevProgress ? `${props.prevProgress}%` : 0};
}
to {
  width: ${props.progress ? `${props.progress}%` : 0};
}
`;

const Bar = styled.div`
  width: 100%;
  height: 4px;
  background-color: #000;
  border-radius: 99px;
`;
const InnerBar = styled.div`
  width: ${(props: { prevProgress:number,progress: number }) =>
    props.progress ? `${props.progress}%` : props.prevProgress};
  animation: ${progressAnimation} 1s linear;
  height: 100%;
  background-color: #e4571b;
  border-radius: 99px;
`;
export default ProgressBar;
