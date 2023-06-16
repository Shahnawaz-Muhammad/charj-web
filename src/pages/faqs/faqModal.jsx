import React from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const FaqModal = ({
  listItem,
  index,
  expandedFAQIndex,
  setExpandedFAQIndex,
}) => {
  return (
    <>
      <div
        id="accordion-collapse"
        data-accordion="collapse"
        className="w-[100%] shadow-sm shadow-gray-400"
        key={index}
      >
        <h2
          className={`min-h-[4rem] hover:bg-gray-200  ${
            expandedFAQIndex == index && "focus-within:bg-gray-300"
          }`}
        >
          <button
            type="button"
            className={`flex items-center w-full justify-between md:text-lg py-2 md:p-5 font-normal text-left text-gray-800 `}
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
            onClick={() =>
              setExpandedFAQIndex(expandedFAQIndex === index ? null : index)
            }
          >
            <span className="font-semibold px-2">{listItem.title}</span>
            <div className="px-4">
              {expandedFAQIndex === index ? (
                <MdKeyboardArrowUp className="w-10 text-gray-700 " />
              ) : (
                <MdKeyboardArrowDown className="w-10 text-gray-700  " />
              )}
            </div>
          </button>
        </h2>
        {expandedFAQIndex === index && (
          <div className="" aria-labelledby="accordion-collapse-heading-1">
            <div className="py-4 px-2 md:px-6 font-normal border-b-1 ">
              <p className="mb-2 md:text-lg text-gray-700">{listItem.description}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FaqModal;
