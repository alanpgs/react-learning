import Button from "../button/button"; 
import bannerImage from "../../../assets/images/banner_image_3.jpg";
import "./banner.scss";

function Banner() {

    const img = bannerImage;

    return (
        <section className="banner_section">
            <div className="container">
                <div className="banner_wrapper">

                    <div className="content_">
                        <label>UrbanVyali Presents</label>
                        <h1>Discover the <strong>Rare Collection</strong> of <strong><span>Anjenaya NFT's</span></strong> and <strong>Others</strong></h1>
                        <p>The temper-prove and decentralized nature of blockchain technology ensures impossible security.</p>
                        <div className="btn_group">
                            <Button title="Explore"/>
                            <Button title="Join" style="secondary"/>
                        </div>
                    </div>

                    <div className="image_">
                        <img src={img} alt="Banner Image"/>
                        <div className="nft_info">
                            <h4>Anjenaya Collection 2022</h4>
                            <label>@urbanvyali</label>
                            <ul className="list_">
                                <li>Nos: <span>44</span></li>
                                <li>From: <span>2200 URV</span></li>
                                <li>Likes: <span>22K</span></li>
                            </ul>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
    )

};

export default Banner;