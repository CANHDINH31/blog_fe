import React from "react";
import { FaFacebookSquare, FaWhatsappSquare, FaYoutube } from "react-icons/fa";

const SocialShareButtons = ({ url, title }) => {
  return (
    <div className="flex w-full">
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://www.facebook.com/303KCT`}
      >
        <FaFacebookSquare className="h-auto w-12 text-[#3b5998]" />
      </a>
      <a target="_blank" rel="noreferrer" href={`https://zalo.me/03976775834`}>
        <FaWhatsappSquare className="h-auto w-12 text-[#25D366]" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://www.youtube.com/@hoconline758`}
      >
        <FaYoutube className="h-auto w-12 text-[#FF0000]" />
      </a>
    </div>
  );
};

export default SocialShareButtons;
