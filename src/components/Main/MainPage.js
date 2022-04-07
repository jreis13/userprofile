import "./style/Main.scss";
import Logo from "./Logo";
import MainNav from "./MainNav";
import UserInfo from "./UserInfo";

function MainPage() {
  return (
    <div>
      <div className="main-page-header">
        <div className="main-header-left">
          <Logo />
        </div>
        <div className="main-header-right">
          <MainNav />
        </div>
      </div>
      <div className="user-info">
        <UserInfo
          username={"@JReis13"}
          user_id={"0x88…87E005DAd5"}
          owned={"0"}
          staked={"0"}
          join={"Joined April, 2022"}
        />
      </div>
    </div>
  );
}

export default MainPage;
