import LargeButton from '../components/commons/buttons/commonButton';
import CommonInput from '../components/commons/inputs/commonInput';

const TestPage = () => {
  const btnstr={
    width:"48%",
    backgroundColor:"#000",
    color:"#fff"
  }
  const btnstr2={
    width:"48%",
    backgroundColor:"#fff",
    color:"#000",
    border:"1px solid #000"
  }
  return (
    <>
      <div
        style={{ backgroundColor: 'blue', width: '300px', height: '300px' }}
      ></div>
      <CommonInput isSearch title={'맛집이름'} errorMessage={"error!"} />
      <LargeButton isActive buttonText='새 기록 추가' onClickEvent={()=>{}}/>
      <div style={{display:"flex",justifyContent:"space-between"}}>
      <LargeButton buttonText='기록 추가하기' onClickEvent={()=>{}} buttonStyles={btnstr} iconSrc={"vite.svg"}/>
      <LargeButton isActive buttonText='저장' onClickEvent={()=>{}} buttonStyles={btnstr2}/>
      </div>
    </>
  );
};
export default TestPage;
