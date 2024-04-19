import img4 from "/images/avatar-rizky-hasanuddin.webp";

export default function Unmarked() {
  return (
    <section className="">
      <div className="gap-[10px]  flex justify-start items-center rounded-[8px] bg-white pt-[18px] pb-[17px] pl-[20px] pr-[32px]">
        <img src={img4} className="w-[45px] h-[45px]"></img>
        <span className="text-very-dark-grey-blue text-[15px] font-bold  custom-font-style">
          Rizky Hasanuddin
        </span>{" "}
        sent you a private message
        <div className="w-[8px] h-[8px] bg-red-2 rounded "></div>
        <span className="font-medium opacity-60	grey-blue"> 5 days ago </span>
      </div>
      <div className="ml-[5rem] font-medium  px-[20px] py-[20px] pt-[12px] text-[16px] w-[566px] h-[97px] border border-solid border-very-light-grey-blue bg-white rounded-[5px]">
        Hello, thanks for setting up the Chess Club. I’ve been a member for a
        few weeks now and I’m already having lots of fun and improving my game.
      </div>
    </section>
  );
}
