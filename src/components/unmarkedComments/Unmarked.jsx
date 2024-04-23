import img4 from "/images/avatar-rizky-hasanuddin.webp";
import img5 from "/images/avatar-kimberly-smith.webp";
import img6 from "/images/image-chess.webp";
import img7 from "/images/avatar-nathan-peterson.webp";
import img8 from "/images/avatar-anna-kim.webp";
export default function Unmarked() {
  return (
    <section className="">
      <div className="md:pt-[5px] md:pb-[16px] md:pl-[16px] md:pr-[22px] md:gap-[3px] md:whitespace-nowrap gap-[7px] relative flex justify-start items-center rounded-[8px] bg-white pt-[18px] pb-[17px] pl-[20px] pr-[32px]">
        <img
          src={img4}
          className="md:mr-1 md:w-[39px] md:h-[39px]  mr-4  w-[45px] h-[45px]  "
        ></img>
        <span className="   md:text-[14px]  text-very-dark-grey-blue text-[15px] font-extrabold	 custom-font-style hover:text-blue-1 cursor-pointer">
          Rizky Hasanuddin
        </span>{" "}
        sent you a private{" "}
        <span className="md:top-[2rem] md:left-[4rem]  md:absolute">message</span>
        <span className=" md:left-[4rem]  absolute top-12 left-[13%] font-medium opacity-60	grey-blue">
          {" "}
          5 days ago{" "}
        </span>
      </div>
      <div className="md:mt-[12px]  md:ml-[4rem] md:p-[16px]  md:w-[263px] md:h-[auto]   md:text-[14px]  hover:bg-light-grey-blue cursor-pointer   ml-[5.5rem] mb-[15px] font-medium  pt-2 pb-2 pl-3 pr-3 text-[16px] w-[544px] h-[97px] border border-solid border-very-light-grey-blue bg-white rounded-[5px]">
        Hello, thanks for setting up the Chess Club. I’ve been a member for a
        few weeks now and I’m already having lots of fun and improving my game.
      </div>

      <div className="md:pt-[5px] md:pb-[16px] md:pl-[16px] md:pr-[22px]  md:whitespace-nowrap md:gap-[3px]   gap-[7px] mb-[26px] relative flex justify-start items-center rounded-[8px] bg-white pt-[18px] pb-[17px] pl-[20px] pr-[32px]">
        <img
          src={img5}
          className="md:mr-1  md:w-[39px] md:h-[39px]    mr-4 w-[45px] h-[45px]  "
        ></img>
        <span className=" md:text-[14px]   text-very-dark-grey-blue text-[15px] font-extrabold	 custom-font-style hover:text-blue-1 cursor-pointer">
          Kimberly Smith
        </span>{" "}
        commented{" "}
        <span className="md:absolute md:left-[4rem] md:top-[2rem]">
          on your picture
        </span>
        <img
          src={img6}
          className=" md:w-[39px] md:h-[39px]  md:ml-auto     ml-[10.2rem] w-[45px] h-[45px] cursor-pointer  "
        ></img>
        <span className=" md:top-[3rem] md:left-[4rem]  absolute top-12 left-[13%]  font-medium opacity-60	grey-blue">
          {" "}
          1 week ago
        </span>
      </div>

      <div className=" md:pt-[5px] md:pb-[16px] md:pl-[16px] md:pr-[22px]  md:whitespace-nowrap md:gap-[3px]     mb-[26px] gap-[7px] relative flex justify-start items-center rounded-[8px] bg-white pt-[18px] pb-[17px] pl-[20px] pr-[32px]">
        <img
          src={img7}
          className="md:mr-1  md:w-[39px] md:h-[39px]   mr-4 w-[45px] h-[45px]  "
        ></img>
        <span className="  md:text-[14px]   text-very-dark-grey-blue text-[15px] font-extrabold	 custom-font-style  hover:text-blue-1 cursor-pointer">
          Nathan Peterson
        </span>{" "}
        reacted to your recent post
        <span className="md:top-[2rem] md:left-[4rem]  md:absolute dark-grey-blue  font-extrabold	 custom-font-style  hover:text-blue-1 cursor-pointer">
          5 end-game strategies to{" "}
        </span>
        <div>
          <span className="md:left-[4rem] absolute top-12 left-[13%] dark-grey-blue  font-extrabold	 custom-font-style  hover:text-blue-1 cursor-pointer">
            increase your win rate
          </span>
          <span className="md:top-[4.2rem] md:left-[4rem]  absolute top-[4.5rem] left-[13%]  font-medium opacity-60	grey-blue">
            {" "}
            2 week ago
          </span>
        </div>
      </div>
      <div className=" md:gap-[3px]  gap-[7px] relative flex justify-start items-center rounded-[8px] bg-white pt-[18px] pb-[17px] pl-[20px] pr-[32px]">
        <img
          src={img8}
          className="md:mr-0 md:w-[39px] md:h-[39px]   mr-4 w-[45px] h-[45px]  "
        ></img>
        <span className=" md:text-[14px]   text-very-dark-grey-blue text-[15px] font-extrabold	 custom-font-style  hover:text-blue-1 cursor-pointer">
          Anna Kim{" "}
        </span>{" "}
        left the group
        <span className=" text-blue-1  dark-grey-blue  font-extrabold	 custom-font-style cursor-pointer">
          Chess Club
        </span>
        <div>
          <span className=" md:left-[4rem]   absolute top-[2.8rem] left-[13%]  font-medium opacity-60	grey-blue">
            {" "}
            2 week ago
          </span>
        </div>
      </div>
    </section>
  );
}
