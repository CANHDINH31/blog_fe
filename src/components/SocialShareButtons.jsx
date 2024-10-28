import React from "react";
import { FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa";

const SocialShareButtons = ({ url, title }) => {
  return (
    <div className="flex w-full">
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://www.facebook.com/qdat.0410`}
      >
        <FaFacebookSquare className="h-auto w-12 text-[#3b5998]" />
      </a>
      <a target="_blank" rel="noreferrer" href={`https://zalo.me/0832834994`}>
        <FaWhatsappSquare className="h-auto w-12 text-[#25D366]" />
      </a>
    </div>
  );
};

export default SocialShareButtons;
