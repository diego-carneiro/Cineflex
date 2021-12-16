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

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    box-sizing: border-box;
`;