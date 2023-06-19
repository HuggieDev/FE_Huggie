import { useRef, useState } from "react";
import styled from "styled-components"
const Upload = () => {
    const [files, setFiles] = useState<(File | null)[]>([null,null,null, null, null]);
    const [fileUrl, setFileUrl] = useState("");
    const onChangeFiles = (file: File, index: number) => {
        // const newFiles = [...files];
        // newFiles[index] = file;
        // setFiles(newFiles);
        
      };
    // const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    //     console.log(event.target.id);

    // const file: any = event.target.files?.[0];
    // // @ts-ignore
    // props.setPrevImages((prev) => {
    //   if(!prev) return
    //   const temp = [...prev];
    //   temp[props.index] = null;
    //   return [...temp];
    // });

    // const fileReader = new FileReader();
    // fileReader.readAsDataURL(file);
    // fileReader.onload = (data) => {
    //   setFileUrl(data.target?.result as string);
    //   props.onChangeFiles(file, props.index);
    // };
    // }
    const onClickUpload = () => {fileRef.current?.click()};
    const fileRef = useRef<HTMLInputElement>(null);
    return(
        <>
            <Wrapper onClick={onClickUpload}>
                <img src={'/src/assets/image/photo.svg'}/>
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
    margin-top: 32px;
    width: 72px;
    height: 72px;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
export default Upload