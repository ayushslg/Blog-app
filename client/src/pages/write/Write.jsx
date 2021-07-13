import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img className="writeImg" src="https://scontent-bom1-1.xx.fbcdn.net/v/t31.18172-8/23632093_937546619726027_5397948785834078276_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=19026a&_nc_ohc=oLpPz6mgTMoAX-m76Fy&_nc_ht=scontent-bom1-1.xx&oh=88a25f0644a5b4b4d3c3adec19806e6f&oe=60F47AB4" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className ="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>

                </div>
                <div className="writeFormGroup">
                    <textarea
                        placeholder="Tell your story..."
                        type="text"
                        className="writeInput writeText"
                    ></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
