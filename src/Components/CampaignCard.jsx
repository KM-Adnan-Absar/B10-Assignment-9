
import { NavLink } from "react-router-dom";



const CampaignCard= ({campaign}) => {
 

    return (

        <div className="border rounded-lg shadow-lg p-4">
        <img src={campaign.image} alt={campaign.title} className="w-full h-48 object-cover rounded" />
       <div className="space-y-2">
       <h2 className="text-lg font-bold mt-4">{campaign.title}</h2>
        <p className=" my-2">{campaign.description}</p>
        <p className="font-bold">Contact:{campaign.contactInfo}</p>
        <p className="text-sm mb-4 font-bold  ">Division: {campaign.division}</p>
       </div>
      <div className="mt-3">
      <NavLink to = '/details' className="bg-teal-500 text-white px-4 py-2 rounded  hover:bg-blue-600 ">
          Donate Now
        </NavLink>
      </div>
      </div>
    );
};

export default CampaignCard;