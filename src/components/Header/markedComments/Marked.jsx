import img1 from "/images/avatar-mark-webber.webp";
import img2 from "/images/avatar-angela-gray.webp";
export default function Marked() {
  return (
    <section className="mt-[31px]">
      <div className=" flex justify-between items-center rounded-[8px] bg-snow pt-[18px] pb-[17px] pl-[20px] pr-[32px]">
        <img src={img1} alt="first_img" className="w-[45px] h-[45px]" />
        <span className="text-very-dark-grey-blue text-[14px] font-bold  custom-font-style">
          Mark Webber
        </span>{" "}
        reacted to your recent post{" "}
        <span className="dark-grey-blue text-[14px] font-bold  custom-font-style">
          My first tournament today!
        </span>
        <div className="w-[8px] h-[8px] bg-red-2 rounded "></div>
        1m ago
      </div>
      <div className="my-[8px] gap-[5px]  flex justify-start items-center rounded-[8px] bg-snow pt-[18px] pb-[17px] pl-[20px] pr-[32px]">
        <img src={img2} className="w-[45px] h-[45px]"></img>
        <span className="text-very-dark-grey-blue text-[14px] font-bold  custom-font-style">
          Angela Gray
        </span>{" "}
        followed you <div className="w-[8px] h-[8px] bg-red-2 rounded "></div>
        5m ago
      </div>
      <div className=""></div>
    </section>
  );
}
