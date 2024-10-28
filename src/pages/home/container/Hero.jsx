import React from "react";

import { images } from "../../../constants";
import Search from "../../../components/Search";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col px-5 py-5 lg:flex-row">
      <div className="mt-10 lg:w-1/2">
        <h1 className="text-center font-roboto text-3xl font-bold text-dark-soft md:text-5xl lg:max-w-[540px] lg:text-left lg:text-4xl xl:text-5xl">
          Chào mừng bạn đến với chúng tôi
        </h1>
        <p className="mt-4 text-center text-dark-light md:text-xl lg:text-left lg:text-base xl:text-xl">
          Chúng tôi rất vui được giới thiệu những sản phẩm công nghệ tiên tiến
          nhất, giúp bạn nâng cao trải nghiệm sống và làm việc. Tại đây, bạn sẽ
          tìm thấy thông tin chi tiết, đánh giá và những trải nghiệm tuyệt vời
          từ các sản phẩm hàng đầu. Hãy cùng khám phá và tìm hiểu những công
          nghệ đột phá mà chúng tôi mang đến !
        </p>
      </div>
      <div className="lg:1/2 hidden lg:block">
        <img
          className="w-full"
          src={images.HeroImage}
          alt="users are reading articles"
        />
      </div>
    </section>
  );
};

export default Hero;
