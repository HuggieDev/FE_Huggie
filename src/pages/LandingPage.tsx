import Map from '../components/unit/map/map'
import SearchBar from '../components/unit/landingSearchBar/landingSearchBar'
import useInitLocation from '../components/unit/map/mapFn/useInitLocation'
import { onClickGetMyLocation } from '../components/unit/map/mapFn/onClickGetMyLocation'
import styled from 'styled-components'
import { useState } from 'react'
import CommonButton from '../components/commons/buttons/commonButton'
export default function LandingPage(){
    const coords = useInitLocation()
    const [isSelected,setIsSelected] = useState(true)
    return(
        // props로 넘겨주는 것 들은 나중에 데이터로 넘겨줄 예정
        <Wrapper>
            <SearchBar containerStyles={{padding:'48px 20px 16px 20px'}} placeHolder='지역, 식당 이름을 입력해보세요'/>
            <MyLocationBt src="/src/assets/image/myLocationBt.svg" onClick={onClickGetMyLocation}/>
            <Map restaurantName={'은희네 해장국이었음 좋겠다'}
                lat={coords.lat}
                lon={coords.lon}
            />
            {isSelected&&
                <Detail>
                    <ContentsWrapper>
                        <DetailTitle>{"식당이름"}</DetailTitle>
                        <DetailText style={{color:'#595959'}}>{"서울시 구로구"}</DetailText>
                    </ContentsWrapper>
                    <ContentsWrapper>
                        <DetailText>
                        기존 기록 내용 제공. 작성한 내용 중 첫 줄만 보여...기존 기록 내용 제공. 작성한 내용 중 첫 줄만 보여...
                        </DetailText>
                        <DetailText style={{color:'#595959'}}>
                            2023.07.11
                        </DetailText>
                    </ContentsWrapper>
                    <ContentsWrapper>
                    <CommonButton buttonText='내 기록 0건 보기' onClickEvent={()=>{}} buttonStyles={{width:'170px',height:'48px',backgroundColor:'#fff',border:'1px solid #000', color:'#000'}}/>
                    <CommonButton buttonText='기록 추가하기' onClickEvent={()=>{}} buttonStyles={{width:'170px',height:'48px',backgroundColor:'#000',color:'#fff'}} />
                    </ContentsWrapper>
                </Detail>
            }
        </Wrapper>
    )
}
const Wrapper = styled.div`
    position: relative;
    height: 100vh;
    overflow: hidden;
`
const MyLocationBt = styled.img`
    position: absolute;
    left: 20px;
    bottom: 13rem;
    z-index: 1000;
`
const Detail = styled.div`
    width: 100%;
    height: 185px;
    padding: 24px 20px 33px;
    background-color: #fff;
    position: fixed;
    bottom:0;
    z-index: 3;
`
const ContentsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
`
const DetailTitle = styled.div`
    font-size: 18px;
    font-weight: 700;
`
const DetailText = styled.div`
    max-width: 250px;
    height: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
    font-weight: 400;
`
