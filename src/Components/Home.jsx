import Banner from "./Banner";
import About from "./About";
import Work from "./work";
import DonationCampaign from "./DonationCampaign";
import Login from "./Login";

const Home = () => {
    return (

<div>
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


