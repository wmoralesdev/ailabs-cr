import {
  Slide,
  SlideBody,
  SlideKicker,
  SlideMain,
  SlideSubtitle,
  SlideTitle,
} from "@/presentation/slide"

export function CommunitySparkSlide() {
  return (
    <Slide variant="content">
      <SlideKicker>A couple of years ago</SlideKicker>
      <SlideTitle>It started as a bet on people</SlideTitle>
      <SlideSubtitle className="mt-[2cqh]">
        Cursor launched the Ambassadors program so builders in different
        countries could own the community in their own cities — not wait for a
        tour from HQ.
      </SlideSubtitle>
      <SlideMain className="mt-[4cqh]">
        <SlideBody>
          <p>
            Country by country, people joined. The idea was simple: if you care
            about how folks learn to build with AI, you should be able to gather
            them where you live.
          </p>
        </SlideBody>
      </SlideMain>
    </Slide>
  )
}
