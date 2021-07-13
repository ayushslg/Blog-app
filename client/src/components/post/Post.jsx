import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://scontent-bom1-2.xx.fbcdn.net/v/t1.6435-9/42387486_1148233371990683_3110094370037039104_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=730e14&_nc_ohc=yhp8PeUOghUAX_7O-y0&_nc_ht=scontent-bom1-2.xx&oh=a59d22437da00a287a654ed511cbf3f4&oe=60D67114" alt="" 
             />
            <div className="postInfo">
                <div className="posCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet</span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div> 
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi dolor dolores, accusantium itaque sapiente, voluptatum blanditiis eveniet ab et deleniti. Soluta ducimus quibusdam vel accusamus corporis dolorum non ut!
            </p>
        </div>
    )
}
