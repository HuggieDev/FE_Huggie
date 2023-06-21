import CommonButton from '../../commons/buttons/commonButton'
import * as S from './login.styled'
export default function Login(){
    const REST_API_KEY = '0b48ff6f628ca5627579726e9e4906dc';
    const REDIRECT_URI = 'http://localhost:3000/social';
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const loginHandler = () => {
        const code = new URL(window.location.href).searchParams.get("code");
    };
  
    return(
        <S.Container>
            <S.Image src='/src/assets/image/Login.png'/>
            < CommonButton buttonText="카카오톡으로 로그인하기" iconSrc={'/src/assets/image/KaKao.svg'} buttonStyles={{ position:'absolute',bottom:'120px',backgroundColor:'#000', color:'#fff',padding:'15px 0'} }onClickEvent={()=>1} />
        </S.Container>
    )
}
