import React from "react";
import { FaChevronDown, FaCss3, FaHtml5, FaJs } from "react-icons/fa6";
import { FcSettings } from "react-icons/fc";
import SplitPane from "react-split-pane";

const NewProject = () => {
  return (
    <>
      <div className="w-screen h-screen flex flex-col items-start justify-start overflow-hidden">
        {/* alert section */}

        {/* header section */}

        {/* coding section */}
        <div>
          <SplitPane
            split="horizontal"
            minSize={100}
            maxSize={-100}
            defaultSize={"50%"}
          >
            {/* top coding sevtion */}
            <SplitPane split="vertical" minSize={500}>
              {/* html code here */}
              <div className="w-full h-full flex flex-col items-start justify-start">
                <div className="w-full flex items-center justify-between">
                  <div className="bg-secondary px-4 py-2 border-t-4 flex items-center justify-center gap-3 border-t-gray-500">
                    <FaHtml5 className="text-xl text-red-500 " />
                    <p className="text-primaryText font-semibold"> HTML</p>
                  </div>

                  {/* icons sections */}
                  <div className="cursor-pointer flex items-center justify-center gap-5 px-4">
                    <FcSettings className="text-xl" />
                    <FaChevronDown className="text-xl text-primaryText" />
                  </div>
                </div>
                <div> Coder Mirror</div>
              </div>

              <SplitPane split="vertical" minSize={500}>
                {/* css code here */}

                <div className="w-full h-full flex flex-col items-start justify-start">
                  <div className="w-full flex items-center justify-between">
                    <div className="bg-secondary px-4 py-2 border-t-4 flex items-center justify-center gap-3 border-t-gray-500">
                      <FaCss3 className="text-xl text-sky-500 " />
                      <p className="text-primaryText font-semibold">CSS</p>
                    </div>

                    {/* icons sections */}
                    <div className="cursor-pointer flex items-center justify-center gap-5 px-4">
                      <FcSettings className="text-xl" />
                      <FaChevronDown className="text-xl text-primaryText" />
                    </div>
                  </div>
                  <div> Coder Mirror</div>
                </div>

                {/* java script code here */}

                <div className="w-full h-full flex flex-col items-start justify-start">
                  <div className="w-full flex items-center justify-between">
                    <div className="bg-secondary px-4 py-2 border-t-4 flex items-center justify-center gap-3 border-t-gray-500">
                      <FaJs className="text-xl text-yellow-500 " />
                      <p className="text-primaryText font-semibold"> JS</p>
                    </div>

                    {/* icons sections */}
                    <div className="cursor-pointer flex items-center justify-center gap-5 px-4">
                      <FcSettings className="text-xl" />
                      <FaChevronDown className="text-xl text-primaryText" />
                    </div>
                  </div>
                  <div> Coder Mirror</div>
                </div>
              </SplitPane>
            </SplitPane>

            {/* bottom result section */}
            <div></div>
          </SplitPane>
        </div>
      </div>
    </>
  );
};

export default NewProject;
