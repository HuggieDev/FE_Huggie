import { useState } from "react"
import CommonButton from "../components/commons/buttons/commonButton"
import HeadNav from "../components/commons/headNav/headNav"
import CommonInput from "../components/commons/inputs/commonInput"
import ProgressBar from "../components/commons/progressBar/progressBar"

const WritePage = () => {
    const [phase,setPhase] = useState(1)
    const onClickNextPhase = (phase:number) => {
        setPhase(phase)
    }
    return (
        phase===1 ?
        <div style={{height:'100%',position:'relative'}}>
        <HeadNav title="내 맛집 기록하기"/>
        <ProgressBar prevProgress={0} progress={35} wrapperStyles={{marginTop:'36px',marginBottom:'32px'}}/>
        <CommonInput title={'맛집 이름'} placeHolder="맛집 이름 검색" errorMessage="맛집 이름을 입력해주세요."/>
        <CommonInput isSearch title={'맛집 주소'} placeHolder="주소 검색" titleStyles={{marginTop:'40px'}}/>
        <CommonInput placeHolder="상세주소 입력" wrapperStyles={{marginTop:'16px'}} errorMessage="상세 주소를 입력해주세요."/>
        <CommonInput title={'맛집 분류'} placeHolder="분류 입력" titleStyles={{marginTop:'40px'}} errorMessage="맛집 음식 분류를 입력해주세요."/>
        <CommonButton buttonText="다음" onClickEvent={()=>onClickNextPhase(2)} buttonStyles={{ position:'absolute',bottom:'50px',backgroundColor:'#E4571B', color:'#000'}}/>
        </div>
        : phase === 2 ?
        <div style={{height:'100%',position:'relative'}}>
        <HeadNav title="내 맛집 기록하기" onClickEvent={()=>onClickNextPhase(1)}/>
        <ProgressBar prevProgress={35} progress={75} wrapperStyles={{marginTop:'36px',marginBottom:'32px'}}/>
        <CommonInput title={'등록일'} titleStyles={{marginTop:'32px'}}/>
        <CommonInput title={'주문 메뉴'} titleStyles={{marginTop:'32px'}} placeHolder="#해시태그로 #입력해주세요" errorMessage="해시태그를 알맞은 형태로 입력해주세요."/>
        <CommonButton buttonText="다음" onClickEvent={()=>onClickNextPhase(3)} buttonStyles={{ position:'absolute',bottom:'50px',backgroundColor:'#E4571B', color:'#000'}}/>
        </div>
        : 
        <div style={{height:'100%',position:'relative'}}>
            <HeadNav title="내 맛집 기록하기" onClickEvent={()=>onClickNextPhase(2)}/>
            <ProgressBar prevProgress={75} progress={100} wrapperStyles={{marginTop:'36px',marginBottom:'32px'}}/>
            <CommonInput isTextArea title={'맛집 이름'} placeHolder="맛집 이름 검색" errorMessage="맛집 이름을 입력해주세요." titleStyles={{marginTom:'32px'}}/>
        </div>
    )
}
export default WritePage