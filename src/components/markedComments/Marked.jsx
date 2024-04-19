import img1 from "/images/avatar-mark-webber.webp";
import img2 from "/images/avatar-angela-gray.webp";
import img3 from "/images/avatar-jacob-thompson.webp";

export default function Marked() {
  return (
    <section className="mt-[31px]">
      <div className=" text-[16px] gap-[7px] relative flex justify-start items-center rounded-[8px] bg-snow pt-[18px] pb-[17px] pl-[20px] pr-[32px]">
        <img src={img1} alt="first_img" className="mr-4 w-[45px] h-[45px]" />
        <span className="max-w-screen-md  text-[14px]    text-very-dark-grey-blue  font-extrabold	  custom-font-style hover:text-blue-1 cursor-pointer">
          Mark Webber
        </span>{" "}
        reacted to your recent post{" "}
        <span className=" max-w-screen-md  text-[14px]    dark-grey-blue  font-extrabold	  custom-font-style hover:text-blue-1 cursor-pointer">
          My first tournament today!
        </span>
        <div className="w-[8px] h-[8px] bg-red-2 rounded "></div>
        <span className="absolute top-12 left-[13%] font-medium opacity-60 grey-blue">
          1m ago{" "}
        </span>
      </div>
      <div className=" relative my-[8px] gap-[7px]  flex justify-start items-center rounded-[8px] bg-snow pt-[18px] pb-[17px] pl-[20px] pr-[32px]">
        <img src={img2} className="mr-4  w-[45px] h-[45px]"></img>
        <span className="{max-w-screen-md  text-[14px] }   text-very-dark-grey-blue text-[15px] font-extrabold	  custom-font-style hover:text-blue-1 cursor-pointer">
          Angela Gray
        </span>{" "}
        followed you <div className="w-[8px] h-[8px] bg-red-2 rounded "></div>
        <span className=" absolute top-12 left-[13%]   font-medium opacity-60	grey-blue">
          5m ago{" "}
        </span>
      </div>
      <div className="relative   gap-[7px]  flex justify-start items-center rounded-[8px] bg-snow pt-[18px] pb-[17px] pl-[20px] pr-[32px]">
        <img src={img3} className="mr-4  w-[45px] h-[45px]"></img>
        <span className="{max-w-screen-md  text-[14px] }   text-very-dark-grey-blue text-[15px] font-extrabold	  custom-font-style hover:text-blue-1 cursor-pointer">
          Jacob Thompson
        </span>{" "}
        has joined your group
        <span className=" text-blue-1  font-extrabold	 cursor-pointer">
          Chess Club
        </span>
        <div className="w-[8px] h-[8px] bg-red-2 rounded "></div>
        <span className=" absolute top-12 left-[13%]  font-medium opacity-60	grey-blue">
          {" "}
          1 day ago{" "}
        </span>
      </div>
    </section>
  );
}
