import { useCallback, useEffect, useRef, useState } from "react";
import { IGenre } from "../../../genres/entities";
import { Pill } from ".";

interface GenresProps {
  genres: IGenre[];
}

const SCROLL_ANIMATION_SPEED = 0.5;
enum SCROLL_DIRECTION {
  FORWARD = "forward",
  BACKWARD = "backward",
}

export const Genres = ({ genres }: GenresProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);
  const animationFrameId = useRef<number>(0);
  const [scrollSpeed, setScrollSpeed] = useState(SCROLL_ANIMATION_SPEED);
  const scrollDirection = useRef<SCROLL_DIRECTION>(SCROLL_DIRECTION.FORWARD);

  const handleAutoScroll = useCallback(() => {
    if (!scrollContainerRef.current) return;

    // Update scroll position based on direction
    scrollPosition.current += scrollDirection.current === SCROLL_DIRECTION.FORWARD ? scrollSpeed : -scrollSpeed;

    const { scrollWidth, clientWidth } = scrollContainerRef.current;
    const maxScroll = scrollWidth - clientWidth;

    // Handle direction change at boundaries
    if (scrollPosition.current >= maxScroll) {
      scrollDirection.current = SCROLL_DIRECTION.BACKWARD;
      scrollPosition.current = maxScroll;
    } else if (scrollPosition.current <= 0) {
      scrollDirection.current = SCROLL_DIRECTION.FORWARD;
      scrollPosition.current = 0;
    }

    scrollContainerRef.current.scrollTo({
      left: scrollPosition.current,
      behavior: "auto",
    });

    animationFrameId.current = requestAnimationFrame(handleAutoScroll);
  }, [scrollSpeed]);

  useEffect(() => {
    handleAutoScroll();

    return () => {
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [scrollSpeed, handleAutoScroll]);

  const pauseScroll = () => setScrollSpeed(0);
  const resumeScroll = () => setScrollSpeed(SCROLL_ANIMATION_SPEED);

  return (
    <div ref={scrollContainerRef} className="wrapper-genres flex gap-2 px-1 overflow-auto" onMouseEnter={pauseScroll} onMouseLeave={resumeScroll}>
      {genres.map((genre) => (
        <Pill key={genre.id} text={genre.name} />
      ))}
    </div>
  );
};
