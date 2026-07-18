import {
  Slide,
  SlideKicker,
  SlideMain,
  SlideSubtitle,
  SlideTitle,
} from "@/presentation/slide"

const points = [
  "Learn Cursor in a room with other builders",
  "Go deeper on AI in general, not only one product",
  "Leave with habits you can use on Monday morning",
]

export function CommunityNetworkSlide() {
  return (
    <Slide variant="content">
      <div className="deck-split relative z-10 h-full items-stretch">
        <div className="flex flex-col justify-between py-[1cqh]">
          <div className="space-y-[1.6cqh]">
            <SlideKicker>What the program is for</SlideKicker>
            <SlideTitle>Meetups, workshops, and shared practice</SlideTitle>
          </div>
          <SlideSubtitle>
            Each country builds its own rhythm — hackathons, workshops, casual
            meetups — whatever helps people level up together.
          </SlideSubtitle>
        </div>

        <SlideMain className="deck-rail flex flex-col justify-center">
          {points.map((point, index) => (
            <div key={point} className="deck-rail-item">
              <span className="deck-rail-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="deck-rail-text">{point}</p>
            </div>
          ))}
        </SlideMain>
      </div>
    </Slide>
  )
}
