import React from "react";
import "./index.css";

function MR() {
  return (
    <>
      <h2 className="text-center bg-blue-200 p-3 font-bold">
        Market Research
      </h2>

      <div className="p-10">
        <ol className="items-center sm:flex">
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-black">
                External
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Stats recieved on researching about the product among the
                customers.
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-black">
                Internal
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Stats recieved on researching about the product among the
                employees of the company.
              </p>
            </div>
          </li>
        </ol>

        <h2 className="text-center bg-green-300">
          In External Research, We have{" "}
          <div className="group">
            <span class="bg-red-400 text-white">Business To Client</span>
            <span class="group-hover:opacity-100 transition-opacity bg-gray-300 px-1 text-sm text-gray-100 rounded-md absolute  opacity-0 m-4 mx-auto ">
              <div>
                <section class="bar-graph bar-graph-horizontal bar-graph-one">
                  <div class="xLabel">
                    <p>0</p>
                    <p>5000</p>
                    <p>10000</p>
                  </div>
                  <div class="bar-one">
                    <span class="year">Positive</span>
                    <div class="bar" endData="13541"></div>
                  </div>
                  <div class="bar-two">
                    <span class="year">Negative</span>
                    <div class="bar" endData="31389"></div>
                  </div>
                  <div class="bar-three">
                    <span class="year">Comments</span>
                    <div class="bar" endData="10463"></div>
                  </div>
                  <div>
                    <p>Total Reviews</p>
                    <p>Positive Reviews </p>
                    <p>Negative Reviews </p>
                    <p>Comments</p>
                  </div>
                </section>
              </div>
            </span>
          </div>
          research
        </h2>
        <div
          id="tooltip-default"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Tooltip content
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </>
  );
}

export default MR;
