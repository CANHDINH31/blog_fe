import React from "react";

const Footer = () => {
  return (
    <section className="bg-dark-hard">
      <footer className="container mx-auto grid grid-cols-10 px-5 py-2 gap-y-10 gap-x-5  md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10">
        <div className="hidden md:flex flex-col items-center space-y-4 md:col-span-12 lg:col-span-10">
          <p className="font-bold italic text-dark-light">
            Copyright © 2024. Crafted with love.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
