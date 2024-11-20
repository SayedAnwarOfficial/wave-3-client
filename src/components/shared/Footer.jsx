const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white">
      <div className="p-20 flex flex-col justify-center items-center gap-2">
        {/* <img className="h-20" src={logo} alt="" /> */}
        <p className=" text-lg">
          Paradiso Restaurant & Fine dining, 71 Madison Ave
        </p>
        <p>
          <span className="hover:text-[#c9ab81] mr-4 cursor-pointer text-lg">
            10013 New York
          </span>
          <span className="hover:text-[#c9ab81] mr-4 cursor-pointer text-lg">
            +88016946484616
          </span>
          <span className="hover:text-[#c9ab81] mr-4 cursor-pointer text-lg">
            paradiso@gmail.com
          </span>
        </p>
        <p>Open: 09:00 am – 01:00 pm</p>
        <div className="flex gap-10 sm:gap-20 mt-10">
          <a className="hover:text-[#c9ab81] underlin-hover cursor-pointer text-lg">
            Facebook
          </a>
          <a className="hover:text-[#c9ab81] underlin-hover cursor-pointer text-lg">
            Instagram
          </a>
          <a className="hover:text-[#c9ab81] underlin-hover cursor-pointer text-lg">
            Trip Advisor
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center pb-6">
        <p>© Copyright 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
