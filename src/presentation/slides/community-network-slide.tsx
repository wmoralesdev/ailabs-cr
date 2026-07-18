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
    <Slide variant="content" className="justify-center gap-0">
      <div className="deck-split relative z-10 content-center">
        <div className="flex h-full flex-col justify-center gap-[1.8cqh]">
          <SlideKicker>What the program is for</SlideKicker>
          <SlideTitle>Meetups, workshops, and shared practice</SlideTitle>
          <SlideSubtitle className="mt-[0.6cqh]">
            Each country builds its own rhythm — hackathons, workshops, casual
            meetups — whatever helps people level up together.
          </SlideSubtitle>
        </div>

        <SlideMain className="deck-rail flex h-full flex-col justify-center">
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
