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
    <Slide variant="content" className="justify-between gap-0">
      <div className="relative z-10 max-w-[34ch]">
        <SlideKicker>What the program is for</SlideKicker>
        <SlideTitle className="mt-[1.4cqh]">
          Meetups, workshops, and shared practice
        </SlideTitle>
        <SlideSubtitle className="mt-[2cqh] max-w-[30ch]">
          Each country builds its own rhythm — hackathons, workshops, casual
          meetups — whatever helps people level up together.
        </SlideSubtitle>
      </div>

      <SlideMain className="deck-rail relative z-10 mt-[4cqh] max-w-[48ch]">
        {points.map((point, index) => (
          <div key={point} className="deck-rail-item">
            <span className="deck-rail-index">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="deck-rail-text">{point}</p>
          </div>
        ))}
      </SlideMain>
    </Slide>
  )
}
