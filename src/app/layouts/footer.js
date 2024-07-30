import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
const Footer = () => {
    return (
        <footer className="sticky bottom-0 flex justify-between h-[449px] py-[64px] px-[72px] bg-[#2C3C4D]">
            <div className="w-[1296px] h-[321px] flex gap-x-[72px]">
                <div>
                    <Image src="/assets/footer-logo.png" className="w-[244.73px] h-[68.17px]" width={100} height={100} alt="Footer Logo"/>
                    <div className="h-[29px] w-[425px] font-normal text-lg text-[#F2F2F2] leading-[28.8px] mt-[22px]">© 2023 Berita Kini. All Rights Reserved.</div>
                    <div className="h-[97px] w-[425px] mt-11">
                        <div className="font-semibold text-[22px]">Ikuti Kami</div>
                        <div className="flex gap-x-6 mt-[22px]">
                            <div className="w-10 h-10 bg-[#F2F2F2] text-[#333333] rounded-xl flex items-center justify-center"><FontAwesomeIcon className="w-6" icon={faYoutube}/></div>
                            <div className="w-10 h-10 bg-[#F2F2F2] text-[#333333] rounded-xl flex items-center justify-center"><FontAwesomeIcon className="w-6" icon={faInstagram}/></div>
                            <div className="w-10 h-10 bg-[#F2F2F2] text-[#333333] rounded-xl flex items-center justify-center"><FontAwesomeIcon className="w-6" icon={faFacebook}/></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="h-[35px] w-[127px] font-semibold text-[22px]">Telusuri</div>
                    <div className="h-[264px] w-[127px] mt-[22px]">
                        <ul className="grid grid-rows-7 gap-y-4 text-[#F2F2F2]">
                            <li>Beranda</li>
                            <li>Kesehatan</li>
                            <li>Otomotif</li>
                            <li>Politik</li>
                            <li>Olahraga</li>
                            <li>Nasional</li>
                            <li>Internasional</li>
                        </ul>
                    </div>
                </div>
                <div>
                <div className="h-[35px] w-[189px] font-semibold text-[22px]">Bantuan</div>
                    <div className="h-[104px] w-[189px] mt-[22px]">
                        <ul className="grid grid-rows-3 gap-y-4 text-[#F2F2F2]">
                            <li>Kontak Kami</li>
                            <li>Laporan Pembajakan</li>
                            <li>Kebijakan</li>
                        </ul>
                    </div>
                </div>
                <div className="w-[339px] h-[121px]">
                    <div className="h-[35px] font-semibold text-[22px]">Berlangganan Berita Terbaru</div>
                    <div className="h-16 w-[339px] bg-[#E0E0E0] mt-[22px] rounded-lg flex items-center px-2 justify-between">
                        <input className="w-[256px] bg-[#E0E0E0] h-[26px] focus:outline-none text-[#BDBDBD] font-normal" placeholder="Masukkan email"/>
                        <div className="w-12 h-12 bg-[#0090FF] rounded-md flex items-center justify-center">
                            <FontAwesomeIcon className="h-6 w-6" icon={faPaperPlane}/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;