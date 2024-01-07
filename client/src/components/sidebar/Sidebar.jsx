import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import "./sidebar.css"

export default function Sidebar() {
    const [cats,setCats] = useState([]);

    useEffect(()=>{
        const getCats = async ()=>{
            const res = await axios.get("/categories");
            setCats(res.data);
        }
        getCats();
    },[]);
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://userpic.codeforces.org/1371261/title/7f980a4161fd5043.jpg" alt=""/>
                <p> I'm a dedicated full-stack developer, currently crafting software solutions at Microsoft. With a strong penchant for sitcoms and an insatiable appetite for good reads, I find solace in the world of TV series and books when I'm not coding. <br>
                </br><br></br>I've delved deep into competitive coding, earning my stripes by qualifying for three ICPC regionals along the way. My academic journey led me through the corridors of NIT Durgapur, where I honed my skills and passion for technology. <br>
                </br><br></br>When it comes to personality, I pride myself on being a fun-loving individual and quite possibly the most humorous person you'll ever have the pleasure of meeting!</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c)=>(
                        <Link to ={`/?cat=${c.name}`} className="link">
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                        
                    ))}
                    
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <a href="https://www.facebook.com/chris323dude1/" target="_blank" rel="noopener noreferrer">
                        <i className="sidebarIcon fab fa-facebook-square"></i>
                    </a>
                    <a href="https://www.twitter.com/yourtwitterprofile" target="_blank" rel="noopener noreferrer">
                        <i className="sidebarIcon fab fa-twitter-square"></i>
                    </a>
                    <a href="https://github.com/ayushslg" target="_blank" rel="noopener noreferrer">
                        <i className="sidebarIcon fab fa-github-square"></i>
                    </a>
                    <a href="https://www.instagram.com/chris323dude/" target="_blank" rel="noopener noreferrer">
                        <i className="sidebarIcon fab fa-instagram-square"></i>
                    </a>
                </div>
            </div>
        </div>

    )
}
