import styled from "styled-components";
export default function Loading (){

    return(

        <LoadingBox>    
                <img src="/assets/gif/loading-buffering.gif"/>
        </LoadingBox>
    );

}
/*::::: STYLES :::::*/
const LoadingBox = styled.div`
    width: 100vw;
    margin-top: 150px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
`;