import img4 from "/images/avatar-rizky-hasanuddin.webp";
import img5 from "/images/avatar-kimberly-smith.webp";
import img6 from "/images/image-chess.webp";
export default function Unmarked() {
  return (
    <section className="">
      <div className="gap-[10px]  flex justify-start items-center rounded-[8px] bg-white pt-[18px] pb-[17px] pl-[20px] pr-[32px]">
        <img src={img4} className="w-[45px] h-[45px]"></img>
        <span className="text-very-dark-grey-blue text-[15px] font-bold  custom-font-style">
          Rizky Hasanuddin
        </span>{" "}
        sent you a private message
        <span className="font-medium opacity-60	grey-blue"> 5 days ago </span>
      </div>
      <div className="ml-[5rem] font-medium  px-[20px] py-[20px] pt-[12px] text-[16px] w-[566px] h-[97px] border border-solid border-very-light-grey-blue bg-white rounded-[5px]">
        Hello, thanks for setting up the Chess Club. I’ve been a member for a
        few weeks now and I’m already having lots of fun and improving my game.
      </div>

      <div className="gap-[10px]  flex justify-start items-center rounded-[8px] bg-white pt-[18px] pb-[17px] pl-[20px] pr-[32px]">
        <img src={img5} className="w-[45px] h-[45px]"></img>
        <span className="text-very-dark-grey-blue text-[15px] font-bold  custom-font-style">
          Kimberly Smith
        </span>{" "}
        commented on your picture
        <img src={img6} className="w-[45px] h-[45px]"></img>
        <span className="font-medium opacity-60	grey-blue"> 1 week ago</span>
      </div>
    </section>
  );
}
