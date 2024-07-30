import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const HeadlineSlider = () => {
    return (
        <div id="headline-slider" className="h-[75.43px] flex align-text-bottom gap-x-4 items-end justify-center text-[#828282]">
          <div className="flex items-center gap-x-4">
            <FontAwesomeIcon className="w-4 h-4" icon={faChevronLeft}></FontAwesomeIcon>
            <span className="text-sm">1</span>
            <span className="text-sm">dari</span>
            <span className="text-sm">5</span>
            <FontAwesomeIcon className="w-4 h-4" icon={faChevronRight}></FontAwesomeIcon>
          </div>
        </div>
    )
}

export default HeadlineSlider;