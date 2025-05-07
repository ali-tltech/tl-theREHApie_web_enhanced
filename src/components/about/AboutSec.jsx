const AboutSection = () => {
    return (
      <section className="   container " style={{paddingTop:"30px"}} > 
        {/* Heading */}
        <div className="text-center mt-12">
         
        </div>
  
        {/* Content Wrapper */}
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Our Story */}
          <div className="g rounded-lg p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-gray-800  td-section-title">Our Story</h3>
            <p className="text-gray-700 leading-relaxed" style={{lineHeight:"1.8",fontSize:"18px"}}>
              Founded by <strong> <a href="https://www.linkedin.com/in/abdul-rahiman-beyaram-kunhali-698a971b6/" target="_blank">Abdul Rahiman B K</a></strong>, an industry expert with over{" "}
              <strong>15 years of experience</strong> in the healthcare and rehabilitation
              sector, theREHApie Consultants was born out of a passion for enhancing
              patient recovery and mobility. With a deep understanding of market challenges,
              regulatory landscapes, and distribution strategies, our mission is to ensure
              rehabilitation technology reaches those who need it most—efficiently,
              affordably, and with maximum impact.
            </p>
          </div>
  
          {/* Why We Exist */}
          <div className=" rounded-lg ">
            <h3 className="text-2xl font-semibold text-gray-800 td-section-title ">Why We Exist</h3>
            <p className="text-gray-700  leading-relaxed" style={{lineHeight:"1.8",fontSize:"18px"}}>
              The rehabilitation industry is evolving, but access to the right solutions
              remains a challenge. Manufacturers struggle with market entry, compliance,
              and finding reliable distributors. Distributors face hurdles in sourcing
              high-quality products and building a strong portfolio. Healthcare providers
              need cost-effective, efficient rehab solutions that enhance patient outcomes.
            </p>
            <p className="text-gray-700  leading-relaxed" style={{lineHeight:"1.8",fontSize:"18px"}}>
            Cost manufacturers have to spend to have a full time employee to manage the business here also, different time zones, weekends, festival holidays etc delays the sales cycle eventually losses a sales, someone who has local presence gets an edge with quick presence.

            </p>
            <p className="text-gray-700 leading-relaxed mt-4" style={{lineHeight:"1.8",fontSize:"18px"}}>
              That’s where we step in. We simplify the process, connect the right players,
              and ensure innovative rehabilitation solutions reach the{" "}
              <strong>Middle East market seamlessly</strong>.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;
  