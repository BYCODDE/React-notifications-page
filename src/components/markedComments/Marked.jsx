import img1 from "/images/avatar-mark-webber.webp";
import img2 from "/images/avatar-angela-gray.webp";
import img3 from "/images/avatar-jacob-thompson.webp";

export default function Marked() {
  return (
    <section className="mt-[31px]">
      <div className=" md:h-[89px] md:relative  md:whitespace-nowrap  md:pt-[5px] md:pb-[16px] md:pl-[16px] md:pr-[22px]  md:text-[14px]  text-[16px] gap-[7px] relative flex justify-start items-center rounded-[8px] bg-snow pt-[18px] pb-[17px] pl-[20px] pr-[32px]">
        <img
          src={img1}
          alt="first_img"
          className=" md:mr-1  md:w-[39px] md:h-[39px]   mr-4 w-[45px] h-[45px]"
        />
        <span className=" md:text-[14px]   text-very-dark-grey-blue  font-extrabold	  custom-font-style hover:text-blue-1 cursor-pointer">
          Mark Webber
        </span>{" "}
        reacted to your recent post{" "}
        <span className="md:absolute md:top-12 md:left-[19%]    dark-grey-blue  font-extrabold	  custom-font-style hover:text-blue-1 cursor-pointer">
          My first tournament today!
        </span>
        <div className=" md:absolute md:left-[73%] md:top-[3.5rem]  w-[8px] h-[8px] bg-red-2 rounded "></div>
        <span className=" md:top-[4rem] md:left-[19%] absolute top-[2rem] left-[13%] font-medium opacity-60 grey-blue">
          1m ago{" "}
        </span>
      </div>
      <div className=" md:gap-[3px] relative my-[8px] gap-[7px]  flex justify-start items-center rounded-[8px] bg-snow pt-[18px] pb-[17px] pl-[20px] pr-[32px]">
        <img
          src={img2}
          className="md:mr-1    md:w-[39px] md:h-[39px]   mr-4  w-[45px] h-[45px]"
        ></img>
        <span className=" md:text-[14px]  text-very-dark-grey-blue text-[15px] font-extrabold	  custom-font-style hover:text-blue-1 cursor-pointer">
          Angela Gray
        </span>{" "}
        followed you{" "}
        <div className="mg:ml-[5px] w-[8px] h-[8px] bg-red-2 rounded "></div>
        <span className=" md:top-[3rem] md:left-[20%]   absolute top-12 left-[13%]   font-medium opacity-60	grey-blue">
          5m ago{" "}
        </span>
      </div>
      <div className="md:pt-[5px] md:pb-[16px] md:pl-[16px] md:pr-[22px] md:gap-[3px] md:whitespace-nowrap md:h-[89px]    relative   gap-[7px]  flex justify-start items-center rounded-[8px] bg-snow pt-[18px] pb-[17px] pl-[20px] pr-[32px]">
        <img
          src={img3}
          className=" md:mr-[0.5rem]  md:w-[39px] md:h-[39px]  mr-4  w-[45px] h-[45px]"
        ></img>
        <span className=" md:text-[14px]  text-very-dark-grey-blue text-[15px] font-extrabold	  custom-font-style hover:text-blue-1 cursor-pointer">
          Jacob Thompson
        </span>{" "}
        has joined your group
        <span className="md:top-12 md:left-[18%]    md:absolute text-blue-1  font-extrabold	 cursor-pointer">
          Chess Club
        </span>
        <div className=" md:top-[3.5rem] md:left-[43%]   md:absolute  w-[8px] h-[8px] bg-red-2 rounded "></div>
        <span className=" md:left-[19%] md:top-[4rem]  absolute top-12 left-[13%]  font-medium opacity-60	grey-blue">
          {" "}
          1 day ago{" "}
        </span>
      </div>
    </section>
  );
}
