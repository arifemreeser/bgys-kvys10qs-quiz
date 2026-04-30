function AnimatedBackground({ screen }) {
  const isMobile = window.innerWidth <= 768;

  const activeScreen =
    screen === "quiz" || screen === "result" ? "quiz" : screen;

  const positions = isMobile
    ? {
        start: {
          blue: { width: "420px", height: "420px", left: "-210px", top: "52%" },
          red: { width: "420px", height: "420px", right: "-210px", top: "10%" },
        },
        info: {
          blue: { width: "420px", height: "420px", left: "-220px", top: "8%" },
          red: { width: "420px", height: "420px", right: "-220px", top: "58%" },
        },
        quiz: {
          blue: { width: "380px", height: "380px", left: "-130px", top: "-130px" },
          red: { width: "420px", height: "420px", right: "-220px", bottom: "-160px" },
        },
      }
    : {
        start: {
          blue: { width: "32vmax", height: "32vmax", left: "-20vmax", top: "35%" },
          red: { width: "32vmax", height: "32vmax", right: "-18vmax", top: "5%" },
        },
        info: {
          blue: { width: "32vmax", height: "32vmax", left: "-18vmax", top: "10%" },
          red: { width: "32vmax", height: "32vmax", right: "-18vmax", top: "35%" },
        },
        quiz: {
          blue: { width: "38vmax", height: "38vmax", left: "-14vmax", top: "-18vmax" },
          red: { width: "38vmax", height: "38vmax", right: "-14vmax", bottom: "-18vmax" },
        },
      };

  const current = positions[activeScreen];

  const baseCircle = {
    position: "absolute",
    borderRadius: "50%",
    pointerEvents: "none",
    transition: "all 0.9s ease-in-out",
  };

  return (
    <>
      <div
        style={{
          ...baseCircle,
          ...current.blue,
          background: "#1502C1",
          boxShadow: `
            0px 4px 4px rgba(0,0,0,0.25),
            inset 6px 6px 16px rgba(255,255,255,0.08),
            0px 0px 40px rgba(21,2,193,0.45),
            0px 0px 85px rgba(21,2,193,0.45)
          `,
        }}
      />

      <div
        style={{
          ...baseCircle,
          ...current.red,
          background: "#A80202",
          boxShadow: `
            0px 4px 4px rgba(0,0,0,0.25),
            inset 6px 6px 16px rgba(255,255,255,0.08),
            0px 0px 40px rgba(168,2,2,0.42),
            0px 0px 85px rgba(168,2,2,0.42)
          `,
        }}
      />
    </>
  );
}

export default AnimatedBackground;