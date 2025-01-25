import Banner from "./Banner";
import About from "./About";
import Work from "./work";
import DonationCampaign from "./DonationCampaign";
import Login from "./Login";
import {Helmet} from "react-helmet";
const Home = () => {
    return (

<div>
<Helmet>
                <meta charSet="utf-8" />
                <title>Home | Winter</title>
               
            </Helmet>
<div className="mb-8" >
<Banner></Banner>

</div>
<div className="mb-8">
<About></About>
</div>

<div className="mb-8">
<Work></Work>
</div>
<div>
<DonationCampaign></DonationCampaign>
</div>



</div>


    );
};

export default Home;


