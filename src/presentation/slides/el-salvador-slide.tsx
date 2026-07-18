import {
  Slide,
  SlideBody,
  SlideKicker,
  SlideMain,
  SlideSubtitle,
  SlideTitle,
} from "@/presentation/slide"

export function ElSalvadorSlide() {
  return (
    <Slide variant="content">
      <SlideKicker>El Salvador</SlideKicker>
      <SlideTitle>Where the local story begins</SlideTitle>
      <SlideSubtitle className="mt-[2cqh]">
        Cursor Community in the region did not start as a corporate tour. It
        started with people in El Salvador gathering builders in a room.
      </SlideSubtitle>
      <SlideMain className="mt-[4cqh]">
        <SlideBody>
          <ul>
            <li>First meetups focused on real workflows, not demos for show</li>
            <li>Ambassadors and organizers making space for beginners and pros</li>
            <li>A proof point: the community can grow from here</li>
          </ul>
        </SlideBody>
      </SlideMain>
    </Slide>
  )
}
