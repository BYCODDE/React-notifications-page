function Header({allMarked}) {
  return (
    <section className="flex items-center justify-between">
      <div className="flex justify-center items-center gap-[11px] ">
        <h2 className=" md:text-[20px]    text-very-dark-grey-blue  font-extrabold text-3xl">
          Notifications
        </h2>
        <div className=" md:text-[16px]  md:w-[32px]  md:h-[25px]  text-white  font-bold text-base flex justify-center items-center w-[32px] h-[26px] rounded-[6px] bg-blue-1 ">
          3
        </div>
      </div>
      <h3  onClick={allMarked} className="   md:text-[14px]     text-dark-grey-blue text-right  font-medium text-base hover:text-blue-1 cursor-pointer	 ">
        Mark all as read
      </h3>
    </section>
  );
}

export default Header;
