

const Work = () => {
    return (
        <div >
            <div>
                <h2 className = 'font-bold mt-4  text-teal-500 text-center text-xl'>How it works</h2>
            </div>
           
           <div className="mt-4 ml-8">
           <div>
                <h2 className="font-bold text-sm">instructions for donation</h2>
                <p className="text-sm leading-normal mt-3">
                    Step 1: Select your donation type <br />
                    Step 2:Fill out the donation form <br />
                    Step 3: Submit and track your donation <br />
                </p> 
           </div>
<div className="mt-4">
    <h2 className="font-bold text-sm">2.Collection points</h2>
    <p className="text-sm leading-normal mt-3">
    <li>
    123 Main Street, City Center(Mon-Fri, 9 AM - 5 PM)
      </li>
    <li>
    456 Mall Rd,Shopping District(Mon-Sat, 10 AM - 7 )
      </li>
    <li>
    789 Civic Plaza,City Hall(Mon-Fri, 8 AM - 6 PM)
      </li>
    </p>
</div>
           
<div  className="mt-4">
<h2 className="font-bold text-sm">3.Supported Division</h2>
<p className="text-sm leading-normal mt-3">

          <li>Dhaka</li>
          <li>Chattogram</li>
          <li>Sylhet</li>
          <li>Khulna</li>
</p>
</div>
           </div>
{/* Volunteer Section  */}
<div>
<div>
          <h2 className="text-xl font-bold text-center text-teal-500 mb-6 mt-5">Join Us as a Volunteer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-4">
            {/* Left: Image */}
           
              <div>
              <img
                src="/public/Volunteer-people-donation-2.jpeg"
                alt="Volunteers Working"
                className="rounded-lg shadow-lg w-full h-auto object-cover ml-8"
              />
            </div>
            {/* Right: Text and Roles */}
            <div>
              <p className=" text-lg mb-4 font-bold">
                Want to contribute beyond donations? Join our team of passionate volunteers and help make a difference in your community!
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-sm">
                  <span className="w-6 h-6 bg-teal-500 text-white flex items-center justify-center rounded-full mr-4 text-sm font-bold p-3 text-center">1</span>
                  Sorting and organizing donated items.
                </li>
                <li className="flex items-center  text-sm">
                  <span className="w-6 h-6 bg-teal-500 text-white flex items-center justify-center rounded-full mr-4 text-sm font-bold p-3 text-center">2</span>
                  Assisting with distribution to families in need.
                </li>
                <li className="flex items-center  text-sm">
                  <span className="w-6 h-6 bg-teal-500 text-white flex items-center justify-center rounded-full mr-4 text-sm font-bold p-3 text-center">3</span>
                  Helping with marketing and outreach efforts.
                </li>
              </ul>
              <button className="mt-6 px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-blue-700 transition font-bold">
                Sign Up to Volunteer
              </button>
            </div>
            </div>
          </div>
        </div>
         {/* FAQ section  */}
          <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl font-bold text-center text-teal-500 mb-8 mt-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {/* Question 1 */}
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold text-gray-800 cursor-pointer">What types of clothes are accepted?</h3>
            <p className=" mt-2">
              We accept clean, gently used or new winter clothing such as jackets, sweaters, gloves, and scarves.
            </p>
          </div>
          {/* Question 2 */}
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold text-gray-800 cursor-pointer">Where are donations distributed?</h3>
            <p className=" mt-2">
              Donations are distributed to underprivileged families in various divisions, such as Chattogram, Dhaka, and Sylhet.
            </p>
          </div>
          {/* Question 3 */}
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold text-gray-800 cursor-pointer">How can I track my donation’s impact?</h3>
            <p className=" mt-2">
              We provide regular updates via email and on our website, showcasing stories and stats from our drives.
            </p>
          </div>
          {/* Question 4 */}
          <div className="border-b pb-4">
            <h3 className="text-lg font-bold cursor-pointer">Are monetary donations accepted?</h3>
            <p className="mt-2">
              Yes, monetary donations can be made securely through our online platform.
            </p>
          </div>
        </div>
        
      </div>
      </div>



        
    );
};

export default Work;