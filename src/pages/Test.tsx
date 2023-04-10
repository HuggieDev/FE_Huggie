import CommonInput from '../components/commons/inputs/commonInput';

const TestPage = () => {
  return (
    <>
      <div
        style={{ backgroundColor: 'blue', width: '300px', height: '300px' }}
      ></div>
      <CommonInput isSearch title={'맛집이름'} errorMessage={"error!"} />
    </>
  );
};
export default TestPage;
