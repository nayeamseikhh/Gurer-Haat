import { Phone, MapPin } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section>
        <footer className="bg-[#1d3022] text-[#f7ead4]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr] lg:px-10">
            <div>
              <a href="#" className="inline-flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e4b86b] text-2xl">
                  🌴
                </div>
                <div>
                  <h2 className="font-bengali text-2xl font-extrabold">
                    গুড়ের হাট
                  </h2>
                  <p className="mt-1 text-[9px] tracking-[0.2em] text-[#d4b782]">
                    GURER HAAT
                  </p>
                </div>
              </a>
              <p className="mt-5 max-w-sm font-bengali text-sm leading-7 text-white/65">
                খাঁটি স্বাদের দেশি ঠিকানা। বাংলার ঐতিহ্যকে ভালোবেসে, আপনার
                পরিবারের জন্য শীতের মিষ্টি স্বাদের আয়োজন।
              </p>
              <p className="mt-4 text-xs text-[#e4b86b]">
                Founded by Nayeam Sheikh
              </p>
            </div>

            <div>
              <h3 className="font-bengali text-base font-bold">দ্রুত লিংক</h3>
              <div className="mt-5 flex flex-col gap-3 text-sm text-white/65">
                <a className="hover:text-white" href="#">
                  হোম
                </a>
                <a className="hover:text-white" href="#categories">
                  ক্যাটাগরি
                </a>
                <a className="hover:text-white" href="#products">
                  আমাদের পণ্য
                </a>
                <a className="hover:text-white" href="#story">
                  আমাদের গল্প
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bengali text-base font-bold">আমাদের পণ্য</h3>
              <div className="mt-5 flex flex-col gap-3 text-sm text-white/65">
                <a className="hover:text-white" href="#products">
                  ঝোলা খেজুরের গুড়
                </a>
                <a className="hover:text-white" href="#products">
                  পাটালি গুড়
                </a>
                <a className="hover:text-white" href="#products">
                  দানাদার গুড়
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bengali text-base font-bold">যোগাযোগ</h3>
              <div className="mt-5 space-y-4 text-sm text-white/65">
                <p className="flex items-start gap-3">
                  <MapPin size={18} className="shrink-0 text-[#e4b86b]" />
                  বাংলাদেশ
                </p>
                <p className="flex items-center gap-3">
                  <Phone size={18} className="shrink-0 text-[#e4b86b]" />
                  তোমার ফোন নম্বর যোগ করো
                </p>
                <div className="flex gap-3 pt-2">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="rounded-full border border-white/20 p-3 transition hover:bg-white/10"
                  >
                    <FaFacebook size={17} />
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="rounded-full border border-white/20 p-3 transition hover:bg-white/10"
                  >
                    <FaInstagram size={17} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/50">
            © {new Date().getFullYear()} Gurer Haat. All rights reserved.
            <span className="mx-2 text-[#e4b86b]">|</span>
            Made with love in Bangladesh 🇧🇩
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
