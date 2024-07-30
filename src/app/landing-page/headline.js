import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default () => {
    return (
        <div id="headline" className="flex justify-between">
          <div className="w-[505px] h-[402.36px] ">
            <h6 className="font-semibold text-base mb-4 text-[#526071]">Headline</h6>
            <h1 className="font-bold text-4xl leading-[46.8px] text-[#333333] mb-4">Respons PSSI Soal Opsi Pindah dari GBK jika Lolos Babak 3 Kualifikasi</h1>
            <h6 className="font-normal text-base mb-4">
            Ketua Badan Tim Nasional (BTN) PSSI Sumardji merespons peluang Timnas Indonesia pindah dari Stadion Utama Gelora Bung Karno (GBK) apabila lolos ke putaran ketiga Kualifikasi Piala Dunia 2026.
            </h6>
            <h6 className="flex mb-7 items-center">
              <FontAwesomeIcon className="w-[14px] h-[14px] mr-2" icon={faCalendar}></FontAwesomeIcon><span className="text-sm text-[#526071]">22 Januari 2024</span>
            </h6>
            <h6 className="flex items-center">
              <span className="text-[#0090FF] mr-2">Baca Selengkapnya</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3 text-[#0090FF]"></FontAwesomeIcon>
            </h6>
          </div>
          <div>
            <div className="h-[417px] w-[637px] bg-gray-200 rounded-[20px]">
            </div>
          </div>
        </div>
    );
}