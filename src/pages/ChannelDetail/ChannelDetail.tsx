import Card from "components/atoms/Card/Card";
import classes from "./ChannelDetail.module.css";

import { testState } from "store/atoms";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import Button from "components/atoms/Button/Button";
import { useNavigate } from "react-router-dom";

export const ChannelDetail = () => {
    const navigate = useNavigate();
  
    const [testText, setTestText] = useRecoilState(testState);
    const resetCount = useResetRecoilState(testState);
    
    const increaseHandler = () => {
      setTestText(prev => prev+1)
    }
    const decreaseHandler = () => {
      setTestText(prev => prev-1)
    }

    const resetHandler = () => {
      resetCount();
    }

    const goToVideo = () => {
      navigate('/videos')
    }

    return <Card className={classes.wrapper}>
        채널 세부 페이지 입니다. - {testText} -

        <Button onClick={increaseHandler}>+</Button>
        <Button onClick={decreaseHandler}>-</Button>
        <Button onClick={resetHandler}>Reset</Button>
        <Button onClick={goToVideo}>페이지 이동</Button>
        
    </Card>
}