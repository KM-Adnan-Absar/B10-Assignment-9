
import { useLoaderData } from "react-router-dom";
import CampaignCard from "./CampaignCard";

const DonationCampaign = () => {

    const campaigns =  useLoaderData()
    return (
    <div>
        <div>
<h2 className="font-bold text-lg text-teal-500 text-center">Donation Campaigns</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mt-4">
        
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </div>
    </div>
       
    );
};

export default DonationCampaign;


