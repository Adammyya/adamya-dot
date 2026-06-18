import { useEffect, useState } from "react";

// Types out a list of { text } lines one at a time, terminal-style.
// Returns the lines rendered so far (with partial text on the active line)
// and whether the whole sequence has finished.
export function useBootSequence(lines, { charSpeed = 22, linePause = 260, startDelay = 300 } = {}) {
  const [renderedLines, setRenderedLines] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [activeText, setActiveText] = useState("");
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let timeouts = [];
    let cancelled = false;

    function typeLine(index, committed) {
      if (cancelled) return;
      if (index >= lines.length) {
        setFinished(true);
        return;
      }
      const full = lines[index].text;
      let charIndex = 0;
      setActiveIndex(index);

      function step() {
        if (cancelled) return;
        charIndex += 1;
        setActiveText(full.slice(0, charIndex));
        if (charIndex < full.length) {
          timeouts.push(setTimeout(step, charSpeed));
        } else {
          timeouts.push(
            setTimeout(() => {
              setRenderedLines([...committed, full]);
              setActiveText("");
              typeLine(index + 1, [...committed, full]);
            }, linePause)
          );
        }
      }
      step();
    }

    const kickoff = setTimeout(() => typeLine(0, []), startDelay);
    timeouts.push(kickoff);

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { renderedLines, activeIndex, activeText, finished };
}
