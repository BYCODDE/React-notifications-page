function Header() {
  return (
    <section className="flex items-center justify-between">
      <div className="flex justify-center items-center ">
        <h2 className="text-[24px]">Notifications</h2>
        <div className=" text-white flex justify-center items-center w-[32px] h-[25px] rounded-[6px] bg-blue-1 ">
          3
        </div>
      </div>
      <h3 className="text-blue-1 ">Mark all as read</h3>
    </section>
  );
}

export default Header;
