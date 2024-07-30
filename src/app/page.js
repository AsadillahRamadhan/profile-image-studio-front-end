import Headline from "./landing-page/headline";
import HeadlineSlider from "./landing-page/headline-slider";
import Popular from "./landing-page/popular";
import Recomendation from "./landing-page/recomendation";
import Banner from "./landing-page/banner";

export default function Home() {
  return (
    <main className="bg-white text-slate-800 p-[72px]">
        <Headline/>
        <HeadlineSlider/>
        <Popular/>
        <Recomendation/>
        <Banner/>
    </main>
  );
}
