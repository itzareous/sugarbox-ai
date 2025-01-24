import { HomeIcon } from "lucide-react";
import React from "react";
function Home() {
  return (
    <div className="w-screen h-screen">
      <div className="flex flex-row space-x-1 container h-full container max-w-[1000%]">
        <div className="bg-blue-100 w-1/5">
          01
          <div className="flex flex-col space-y-1 w-[285px] h-[965px] items-center justify-between">
            <div className="bg-[url('https://storage.googleapis.com/tempo-public-images/github%7C16537437-1737706096902-Frame_1618868744png')] h-[10] shrink-0 grow-0 h-10 w-[180] w-[50] w-[230px] w-[-225px-]"></div>
            <div className="grow w-[120] w-60">
              <div className="flex">
                <div className="h-32 bg-blue-200">02</div>
                <div className="text-lg font-semibold">Large</div>
                <HomeIcon />
              </div>
              <div className="h-32 bg-blue-200">02</div>
              <div className="h-32 bg-blue-200">02</div>
              <div className="h-32 bg-blue-200">02</div>
            </div>
            <div>
              <div className="h-32 bg-blue-200">02</div>

              <div className="h-32 bg-blue-200">02</div>
            </div>
          </div>
        </div>
        <div className="bg-blue-200 w-4/5">02</div>
      </div>
    </div>
  );
}

export default Home;
