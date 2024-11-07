import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineSelector } from "react-icons/hi";
import { getAllCategories } from "../services/index/postCategories";

const Search = ({ className, onSearchKeyword }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchKeyword({ searchKeyword, category });
  };

  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Chọn danh mục");

  const handleSelect = (option) => {
    setSelectedOption(option?.title);
    setCategory(option?._id);
    setIsOpen(false);
  };

  useEffect(() => {
    const fetchAllCategories = async () => {
      const res = await getAllCategories("", "", 1000);
      setOptions(res.data);
    };
    fetchAllCategories();
  }, []);

  return (
    <div
      className={`flex flex-col gap-y-2.5  md:flex-row md:items-center md:gap-x-2.5 ${className}`}
    >
      <div className="relative w-full flex-1 md:min-w-full">
        <FiSearch className="absolute left-3 top-1/2 h-6 w-6 -translate-y-1/2 text-[#959EAD]" />
        <input
          className="w-full rounded-lg py-3 pl-12 pr-3 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] focus:outline-none md:py-4"
          type="text"
          placeholder="Nhập tên sản phẩm"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </div>
      <div className="relative w-full flex-1 md:min-w-full">
        <HiOutlineSelector className="absolute left-3 top-1/2 h-6 w-6 -translate-y-1/2 text-[#959EAD]" />
        <div
          className="custom-select w-full rounded-lg py-3 pl-12 pr-3 font-semibold text-dark-soft shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] focus:outline-none md:py-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption}
        </div>
        {isOpen && (
          <ul className="custom-options absolute z-10 mt-1 w-full rounded-lg bg-white shadow-lg">
            {options.map((option, index) => (
              <li
                key={index}
                className="option-item cursor-pointer py-2 px-4 hover:bg-blue-100"
                onClick={() => handleSelect(option)}
              >
                {option?.title}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="relative w-full flex-1 md:min-w-full">
        <button
          className="w-full rounded-lg bg-primary px-5 py-3 font-semibold text-white md:w-max"
          onClick={handleSubmit}
        >
          Tìm kiếm
        </button>
      </div>
    </div>
  );
};

export default Search;
