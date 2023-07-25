import HeadNav from "../components/commons/headNav/headNav"
import RateComponent from "../components/commons/rate/rate"

const RestaurantDetailPage = () => {
    return(
        <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
             <HeadNav wrapperStyles={{ padding:'20px'}} component={<div style={{fontSize:'18px',fontWeight:'700'}}>내 맛집 보기</div>}/>
             {/* <div style={{width:'100%',height:'360px',marginBottom:'25px'}}>사진</div> */}
             <div style={{width:'100%',padding:'0 20px'}}>
                <div style={{fontSize:"24px",fontWeight:'700'}}>{'식당이름'}</div>
                
                <RateComponent wrapperStyles={{width:'166px',height:'30px',margin:'12px 0'}} isRow starStyle={{fontSize:'20px'}} value={0} onChangeEvent={()=>{}}/> 
                <div style={{display:'flex',alignItems:"center"}}>
                    <img src="/src/assets/image/Location.svg"/>
                    서울시 구로구 구로동 13 길
                </div>
                <div style={{display:'flex',alignItems:"center",marginTop:'12px'}}>
                    <img src="/src/assets/image/restaurant.svg"/>
                    양식
                </div>

             </div>
        </div>
    )
}
export default RestaurantDetailPage