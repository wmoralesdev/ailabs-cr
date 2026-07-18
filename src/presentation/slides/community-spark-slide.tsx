import {
  Slide,
  SlideKicker,
  SlideMain,
  SlideTitle,
} from "@/presentation/slide"

export function CommunitySparkSlide() {
  return (
    <Slide variant="content" className="justify-center gap-0">
      <div className="deck-split relative z-10 content-center">
        <div className="flex h-full flex-col justify-center gap-[2cqh]">
          <SlideKicker>A couple of years ago</SlideKicker>
          <SlideTitle className="max-w-[12ch]">
            It started as a bet on people
          </SlideTitle>
        </div>
        <SlideMain className="flex h-full flex-col justify-center gap-[2.4cqh]">
          <p className="deck-lead text-foreground">
            Cursor launched Ambassadors so builders could own the community in
            their own cities — not wait for a tour from HQ.
          </p>
          <p className="deck-aside max-w-[30ch]">
            Country by country, people joined. If you care about how folks learn
            to build with AI, you should be able to gather them where you live.
          </p>
        </SlideMain>
      </div>
    </Slide>
  )
}
