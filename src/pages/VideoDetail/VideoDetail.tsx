import Icon from "components/atoms/Icon/Icon";
import Button from "components/atoms/Button/Button";
import IconButton from "components/molecules/IconButton/IconButton";
import Avatar from "components/atoms/Avatar/Avatar";

import { testState } from "store/atoms";
import { useRecoilValue } from "recoil";

const VideoDetail = () => {
  const test = useRecoilValue(testState);
  const submitHandler = () => {
    console.log("form");
  };
  return (
    <div>
      <h1>영상 세부 정보입니다. {test}</h1>
      <div className="header-wrapper">
        <div className="start">
          <IconButton icon="menu" width="20px" onClick={submitHandler} />
          <div>JTUBE</div>
        </div>
        <div className="center">
          <form onSubmit={submitHandler}>
            <input type="text" />
            <Button>
              <Icon>search</Icon>
            </Button>
          </form>
        </div>
        <div className="end">
          <Icon>notifications</Icon>
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
