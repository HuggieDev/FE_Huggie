import { useEffect, useState } from 'react';
import * as S from '../login/login.styled'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
declare const window: typeof globalThis & {
    Kakao: any;
  };

export default function LoginRedirectPage(){
    const code = useLocation()  
    const token = code?.search.toString().split('=')?.[1]
    const [user,setUser] = useState({
        'nickName':'',
        'email':''
    })
    useEffect(()=>{
        if(token){
            const data:any = {
                grant_type: 'authorization_code',
                client_id: '9ee8226f1f09f2240727176af251aac0',
                redirect_uri: 'http://localhost:3001/social',
                code: token,
                client_secret : 'Wso38f8hcnV8BlPZPB5pHupxvQU4hcbi'         
            }
            const queryStringBody = Object.keys(data)
                .map(item=> encodeURIComponent(item)+"="+encodeURI(data[item]))
                .join("&")
            axios.post(
                `https://kauth.kakao.com/oauth/token?${queryStringBody}`,
                {
                   headers: { 'Content-type': 'application/x-www-form-urlencoded;charset=utf-8' }
                }
           )
           .then(async(res)=>{ 
                console.log('s',res)
                const token = res.data.access_token

                const kakaoUser = await axios.get(
                    `https://kapi.kakao.com/v2/user/me`, 
                    {
                        headers: { Authorization: `Bearer ${token}` }
                    }
                    )
                    setUser({'nickName':kakaoUser.data.kakao_account.email,'email':kakaoUser.data.kakao_account.profile.nickname})
            })
        }   
    },[token])
    console.log(user)

    return(
        <S.Container>
            <S.Image src='/src/assets/image/Login.png'/>
        </S.Container>
    )
}