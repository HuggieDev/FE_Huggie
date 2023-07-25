import CommonButton from '../../commons/buttons/commonButton'
import * as S from './login.styled'

declare const window: typeof globalThis & {
    Kakao: any;
  };


export default function Login(){
    const REST_API_KEY = '9ee8226f1f09f2240727176af251aac0';
    const REDIRECT_URI = 'http://localhost:3001/social'
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const loginHandler = () => {
        window.location.href = link;
    };
  
    return(
        <S.Container>
            <S.Image src='/src/assets/image/Login.png'/>
            < CommonButton buttonText="카카오톡으로 로그인하기" iconSrc={'/src/assets/image/KaKao.svg'} buttonStyles={{ position:'absolute',bottom:'120px',backgroundColor:'#000', color:'#fff',padding:'15px 0'} } onClickEvent={loginHandler} />
        </S.Container>
    )
}
