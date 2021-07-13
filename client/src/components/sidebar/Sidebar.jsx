import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://userpic.codeforces.org/1371261/title/7f980a4161fd5043.jpg" alt=""/>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cum soluta ea est excepturi doloremque earum. Odit quis soluta molestias eos quod nobis, voluptatem minus molestiae iste eius exercitationem tenetur.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Cinema</li>
                    <li className="sidebarListItem">Tech</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>

    )
}
