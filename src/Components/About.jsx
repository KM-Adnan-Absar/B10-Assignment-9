const About = () => {
    return (
      <div className="w-11/12 md:w-3/4 lg:w-1/2 mx-auto">
        <div>
          <h2 className="font-bold text-2xl text-center mb-3">Our Mission</h2>
          <p className="text-sm text-justify leading-normal">
            Our mission is to bring warmth and support to underprivileged communities during the harsh winter months. By organizing donation campaigns, we aim to collect and distribute essential items like winter clothing, blankets, and other necessities to those in need. We believe that no one should have to endure the cold without adequate protection, and we are committed to fostering a spirit of generosity and community support.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 items-start justify-center">
          <div>
            <h2 className="font-bold text-sm">Donate Items</h2>
            <p className="mt-3 text-sm text-justify leading-normal">
              You can contribute by donating gently used or new winter clothing, such as coats, scarves, gloves, and blankets. Check out our Donation Campaigns.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-sm">Volunteer</h2>
            <p className="mt-3 text-sm text-justify leading-normal">
              Join us as a volunteer to help organize, collect, and distribute donations in your local community. Visit our Volunteer Signup Page for more information.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-sm">Spread the Word</h2>
            <p className="mt-3 text-sm text-justify leading-normal">
              Share our mission with your friends, family, and social networks to increase awareness and inspire more people to join the cause.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-sm">Make a Financial Contribution</h2>
            <p className="mt-3 text-sm text-justify leading-normal">
              Support our efforts by making a secure online donation. Every contribution helps us reach more people in need. Visit the Donate Now page to contribute.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-sm">Start a Campaign Community</h2>
            <p className="mt-3 text-sm text-justify leading-normal">
              If you’d like to organize a clothing drive in your own community, we can help! Contact us to learn how you can start a local donation campaign under our guidance.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-sm">Host a Fundraising Event</h2>
            <p className="mt-3 text-sm text-justify leading-normal">
              Encourage users to host their own fundraising events, such as bake sales, charity runs, or winter fairs, to support the cause.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  