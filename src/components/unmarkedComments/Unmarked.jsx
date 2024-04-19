import img4 from "/images/avatar-rizky-hasanuddin.webp";
import img5 from "/images/avatar-kimberly-smith.webp";
import img6 from "/images/image-chess.webp";
import img7 from "/images/avatar-nathan-peterson.webp";
import img8 from "/images/avatar-anna-kim.webp";
export default function Unmarked() {
  return (
    <section className="">
      <div className="gap-[7px] relative flex justify-start items-center rounded-[8px] bg-white pt-[18px] pb-[17px] pl-[20px] pr-[32px]">
        <img src={img4} className="mr-4  w-[45px] h-[45px]"></img>
        <span className="text-very-dark-grey-blue text-[15px] font-bold  custom-font-style">
          Rizky Hasanuddin
        </span>{" "}
        sent you a private message
        <span className=" absolute top-12 left-[13%] font-medium opacity-60	grey-blue">
          {" "}
          5 days ago{" "}
        </span>
      </div>
      <div className="ml-[5.5rem] mb-[15px] font-medium  pt-2 pb-2 pl-3 pr-3 text-[16px] w-[544px] h-[97px] border border-solid border-very-light-grey-blue bg-white rounded-[5px]">
        Hello, thanks for setting up the Chess Club. I’ve been a member for a
        few weeks now and I’m already having lots of fun and improving my game.
      </div>

      <div className="gap-[7px] mb-[26px] relative flex justify-start items-center rounded-[8px] bg-white pt-[18px] pb-[17px] pl-[20px] pr-[32px]">
        <img src={img5} className="mr-4 w-[45px] h-[45px]"></img>
        <span className="text-very-dark-grey-blue text-[15px] font-bold  custom-font-style">
          Kimberly Smith
        </span>{" "}
        commented on your picture
        <img src={img6} className=" ml-[10.2rem] w-[45px] h-[45px]"></img>
        <span className=" absolute top-12 left-[13%]  font-medium opacity-60	grey-blue">
          {" "}
          1 week ago
        </span>
      </div>

      <div className=" mb-[26px] gap-[7px] relative flex justify-start items-center rounded-[8px] bg-white pt-[18px] pb-[17px] pl-[20px] pr-[32px]">
        <img src={img7} className="mr-4 w-[45px] h-[45px]"></img>
        <span className="text-very-dark-grey-blue text-[15px] font-bold  custom-font-style">
          Nathan Peterson
        </span>{" "}
        reacted to your recent post
        <span className="dark-grey-blue  font-bold  custom-font-style">
          5 end-game strategies to{" "}
        </span>
        <div>
          <span className="absolute top-12 left-[13%] dark-grey-blue  font-bold  custom-font-style">
            increase your win rate
          </span>
          <span className=" absolute top-[4.5rem] left-[13%]  font-medium opacity-60	grey-blue">
            {" "}
            2 week ago
          </span>
        </div>
      </div>
      <div className="gap-[7px] relative flex justify-start items-center rounded-[8px] bg-white pt-[18px] pb-[17px] pl-[20px] pr-[32px]">
        <img src={img8} className="mr-4 w-[45px] h-[45px]"></img>
        <span className="text-very-dark-grey-blue text-[15px] font-bold  custom-font-style">
          Anna Kim{" "}
        </span>{" "}
        left the group
        <span className=" text-blue-1  dark-grey-blue  font-bold  custom-font-style">
          Chess Club
        </span>
        <div>
          <span className=" absolute top-[3rem] left-[13%]  font-medium opacity-60	grey-blue">
            {" "}
            2 week ago
          </span>
        </div>
      </div>
    </section>
  );
}
