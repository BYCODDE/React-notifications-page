import img1 from "/images/avatar-mark-webber.webp";
export default function Marked() {
  return (
    <section className="">
      <div className="rounded-[8px] bg-snow pt-[18px] pb-[17px] pl-[20px] pr-[32px]">
        <span className="text-very-dark-grey-blue text-lg font-bold custom-line-height custom-font-style">
          Mark Webber
        </span>{" "}
        reacted to your recent post{" "}
        <span className="dark-grey-blue text-lg font-bold custom-line-height custom-font-style">
          My first tournament today!
        </span>
        <div className="w-[8px] h-[8px] bg-red-2 rounded "></div> 1m ago
        <img src={img1} alt="first_img" className="w-[45px] h-[45px]" />
      </div>
      <div className=""></div>
      <div className=""></div>
    </section>
  );
}
