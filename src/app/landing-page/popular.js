const Popular = () => {
    return (
        <div id="berita-terpopuler" className="h-[250px] mt-[128px] pt-3">
            <div className="flex items-center mb-11">
              <div className="w-1 h-[34px] bg-[#0090FF] mr-4"></div>
              <h6 className="font-bold text-2xl">Berita Terpopuler</h6>
            </div>
            <div className="grid grid-cols-3 gap-x-12">
              <div className="h-40 w-[400px] p-4 flex justify-between relative">
                <div className="w-[35px] h-[37px] bg-[#1F2B39] rounded-[200px] px-3 py-[6px] text-white absolute top-1 left-2 font-semibold flex items-center justify-center">1</div>
                <div className="bg-slate-200 h-32 w-[147px] rounded-xl"></div>
                <div className="w-[205px] h-[115px]">
                  <div className=" h-[75px] mb-4">
                    <h6 className="leading-[22.4px] font-bold text-base text-[#333333]">Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4 Sandera Hamas?</h6>
                  </div>
                  <div className="flex items-center h-6 gap-x-3">
                      <span className="text-sm text-[#0090FF] font-semibold">Politik</span>
                      <div className="h-[4.76px] w-[4.76px] rounded-full bg-[#D9D9D9]"></div>
                      <span className="text-sm text-[#526071]">22 Jan 2024</span>
                  </div>
                </div>
              </div>
              <div className="h-40 w-[400px] p-4 flex justify-between relative">
                <div className="w-[35px] h-[37px] bg-[#1F2B39] rounded-[200px] px-3 py-[6px] text-white absolute top-1 left-2 font-semibold flex items-center justify-center">2</div>
                <div className="bg-slate-200 h-32 w-[147px] rounded-xl"></div>
                <div className="w-[205px] h-[115px]">
                  <div className=" h-[75px] mb-4">
                    <h6 className="leading-[22.4px] font-bold text-base text-[#333333]">Daftar 6 Lahan Tambang Jatah Ormas Agama, NU Dapat Bekas Grup Bakrie</h6>
                  </div>
                  <div className="flex items-center h-6 gap-x-3">
                      <span className="text-sm text-[#0090FF] font-semibold">Nasional</span>
                      <div className="h-[4.76px] w-[4.76px] rounded-full bg-[#D9D9D9]"></div>
                      <span className="text-sm text-[#526071]">22 Jan 2024</span>
                  </div>
                </div>
              </div>
              <div className="h-40 w-[400px] p-4 flex justify-between relative">
                <div className="w-[35px] h-[37px] bg-[#1F2B39] rounded-[200px] px-3 py-[6px] text-white absolute top-1 left-2 font-semibold flex items-center justify-center">3</div>
                <div className="bg-slate-200 h-32 w-[147px] rounded-xl"></div>
                <div className="w-[205px] h-[115px]">
                  <div className=" h-[75px] mb-4">
                    <h6 className="leading-[22.4px] font-bold text-base text-[#333333]">Kementerian BUMN Mulai Uji Coba Pegawai Kerja 4 Hari Sepekan</h6>
                  </div>
                  <div className="flex items-center h-6 gap-x-3">
                      <span className="text-sm text-[#0090FF] font-semibold">Nasional</span>
                      <div className="h-[4.76px] w-[4.76px] rounded-full bg-[#D9D9D9]"></div>
                      <span className="text-sm text-[#526071]">22 Jan 2024</span>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
}

export default Popular;