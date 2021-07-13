import "./singlePost.css";

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    src="https://scontent-bom1-1.xx.fbcdn.net/v/t31.18172-8/23632093_937546619726027_5397948785834078276_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=19026a&_nc_ohc=oLpPz6mgTMoAX-m76Fy&_nc_ht=scontent-bom1-1.xx&oh=88a25f0644a5b4b4d3c3adec19806e6f&oe=60F47AB4" 
                    alt="" 
                    className="singlePostImg"
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor, sit amet
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Ayush</b></span>
                    <span className="singlePostDate"> 1 hour ago </span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quia nisi totam possimus nesciunt earum officiis atque quaerat itaque quisquam nam maiores eaque, cupiditate ea asperiores vero eum quae? Voluptatibus.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, perferendis. Similique soluta nostrum explicabo animi deleniti dicta odio debitis dolore doloremque ducimus, ipsam accusamus aperiam at nemo magnam ab impedit?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deserunt aspernatur ullam optio ipsa harum saepe consequatur natus corrupti eaque quisquam quod nam non at animi sed, necessitatibus earum nesciunt.
                </p>
            </div>
        </div>
    )
}
