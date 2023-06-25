import { ChangeEvent, useRef, useState } from "react";
import styled from "styled-components"
const Upload = ({prevImages}:{prevImages:Array<string>}) => {
    const [files, setFiles] = useState<(File | null)[]>([null,null,null, null, null]);
    const [fileUrl, setFileUrl] = useState("");
    const onClickUpload = () => {fileRef.current?.click()};
    const onChangeFile = (event:ChangeEvent<HTMLInputElement>) => {
        const file:any = event.target.files?.[0]
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = (data) => {
            setFileUrl(data.target?.result as string)

        } 
    }
    const fileRef = useRef<HTMLInputElement>(null);
    return(
        <>
        <Wrapper>
            <ImageAdd onClick={onClickUpload}>
                <img src={'/src/assets/image/photo.svg'}/>
            </ImageAdd>
            <ImagesWrapper>
            {prevImages.map((el:string)=>(
                <Images imageURL={el}/>
            ))}
            </ImagesWrapper>
        </Wrapper>
            <input
                ref={fileRef}
                type="file"
                // onChange={onChangeFile}
                style={{ display: "none" }}
            />
        </>
    )
}
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0;
`
const ImageAdd = styled.div`
    width: 72px;
    height: 72px;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 8px;
    flex-grow: 0;
    flex-shrink: 0;
`
const ImagesWrapper = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: scroll;
`
const Images =styled.div`
    width: 72px;
    height: 72px;
    flex-grow: 0;
    flex-shrink: 0;
    background-image: ${(props:{imageURL:string})=>props.imageURL ? `url(${props.imageURL})`:'url()'};
    background-repeat:none;
    background-position:center;
    background-size:cover;
    margin-right:8px;
`
export default Upload