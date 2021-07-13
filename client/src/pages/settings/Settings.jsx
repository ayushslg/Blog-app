import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle"> Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://scontent-bom1-2.xx.fbcdn.net/v/t31.18172-8/22051197_915596245254398_2707073830777419245_o.jpg?_nc_cat=110&ccb=1-3&_nc_sid=19026a&_nc_ohc=xraswKbbE40AX_cl1Hj&_nc_ht=scontent-bom1-2.xx&oh=8ab822f7c7941068ab7918f04ffa3dd9&oe=60D913EB" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Ayush"/>
                    <label>Email</label>
                    <input type="email" placeholder="xyz1@gmail.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>

                </form>
            </div>
                <Sidebar/>
            
            
        </div>
    )
}
