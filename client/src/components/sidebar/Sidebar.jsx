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
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cum soluta ea est excepturi doloremque earum. Odit quis soluta molestias eos quod nobis, voluptatem minus molestiae iste eius exercitationem tenetur.</p>
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
