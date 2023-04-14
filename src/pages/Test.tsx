import LargeButton from '../components/commons/buttons/commonButton';
import HeadNav from '../components/commons/headNav/headNav';
import CommonInput from '../components/commons/inputs/commonInput';
import Tags from '../components/commons/tags/tags';

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
    <div style={{width:"400px"}}>
      <h1>공통 컴포넌트 테스트 페이지</h1>
      <div
        style={{ margin:"10px 0",backgroundColor: 'blue', width: '300px', height: '300px' }}
      ></div>
      <Tags array={['태그1','태그2','태그3','태그1','태그2','태그3','태그1','태그2','태그3']}></Tags>
      <HeadNav rightIcon='/src/assets/image/More vert.svg'  onClickEvent={()=>{console.log("a")}}/>
      <HeadNav title='내 맛집 보기'  onClickEvent={()=>{console.log("a")}}/>
      <CommonInput isSearch title={'맛집이름'} errorMessage={"error!"} />
      <LargeButton isActive buttonText='새 기록 추가' onClickEvent={()=>{}}/>
      <div style={{display:"flex",justifyContent:"space-between"}}>
      <LargeButton buttonText='기록 추가하기' onClickEvent={()=>{}} buttonStyles={btnstr} iconSrc={"vite.svg"}/>
      <LargeButton isActive buttonText='저장' onClickEvent={()=>{}} buttonStyles={btnstr2}/>
      </div>
    </div>
  );
};
export default TestPage;
