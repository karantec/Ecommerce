import React from 'react';
import { FaServer, FaLaptop, FaUsers } from 'react-icons/fa';
import { BiSupport } from "react-icons/bi";
import { LiaCreativeCommonsShare } from "react-icons/lia";
import { MdOutlineLocalShipping } from "react-icons/md";

const TeamSection = () => {
  const teamMembers = [
    { name: "Support Team", role: "UI Designer", desc: "Our skilled support team is dedicated to guiding you through every stage of your jewelry adventure. From design selection to post-purchase service, we ensure a seamless and enjoyable customer experience." },
    { name: "Creative Products", role: "CTO", desc: "Explore a collection that combines modern styles with classic artistry. Our imaginative jewelry items are carefully crafted to enhance every event and celebrate your uniqueness." },
    { name: "Easy Shipment", role: "Founder", desc: "Our simple shipment process ensures dependable and quick delivery. We guarantee safe and secure packaging to ensure your treasured jewelry arrives in pristine condition." },
    { name: "Quality Assurance", role: "DevOps", desc: "Every piece of jewelry undergoes stringent quality checks to ensure it meets the highest standards of craftsmanship and durability, giving you unmatched perfection." },
    { name: "Premium Material", role: "Software Engineer", desc: "Crafted with the finest materials, including certified gold, diamonds, and gemstones, our jewelry reflects luxury, elegance, and long-lasting value." },
    { name: "Client Management", role: "UX Researcher", desc: "Our top goal is to establish enduring partnerships. Our individualized client management guarantees that we comprehend and accommodate your choices, providing a remarkable and customized encounter." },
  ];

  const roleToIcon = {
    "UI Designer": <BiSupport size={30} color="orange" />, 
    "CTO": <LiaCreativeCommonsShare size={30} color="orange" />, 
    "Founder": <MdOutlineLocalShipping size={30} color="orange" />, 
    "DevOps": <FaServer size={30} color="orange" />, 
    "Software Engineer": <FaLaptop size={30} color="orange" />, 
    "UX Researcher": <FaUsers size={30} color="orange" />, 
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-15 mx-auto">
        <div className="flex flex-wrap -m-2">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-start p-4 rounded-lg">
                <div className="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full mr-4 flex justify-center items-center">
                  {roleToIcon[member.role]} 
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 font-medium title-font">{member.name}</h2>
                  <p className="text-gray-500">{member.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;