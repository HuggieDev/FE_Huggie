import CommonButton from '../../commons/buttons/commonButton'
import * as S from './login.styled'
export default function Login(){
    return(
        <S.Container>
            <S.Image src='/src/assets/image/Login.png'/>
            < CommonButton buttonText="카카오톡으로 로그인하기" iconSrc={'/src/assets/image/KaKao.svg'} buttonStyles={{ position:'absolute',bottom:'120px',backgroundColor:'#000', color:'#fff',padding:'15px 0'} }onClickEvent={()=>1} />
        </S.Container>
    )
}
