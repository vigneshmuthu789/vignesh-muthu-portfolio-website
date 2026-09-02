import React, { Suspense } from "react";


/** The "/404" page, composed from its vignesh sections.
 *
 *  Rendered to static HTML by scripts/prerender.mts at build time — never
 *  shipped as a page.tsx, which would duplicate every byte of this markup into
 *  the RSC flight payload on top of the HTML itself. */
export default function Section404Page() {
  return (
    <body>
      {"\n\t\n\t"}
      <span data-fnj-slot={"0"} />
      {"\n    \n    "}
      <span data-fnj-slot={"1"} />
      {"\n\t\n\t"}
      <div id="main" data-vignesh-hydrate-v2={"{\"routeId\":\"FVuLWMDBd\",\"localeId\":\"default\",\"breakpoints\":[{\"hash\":\"k5uwb6\",\"mediaQuery\":\"(min-width: 1200px)\"},{\"hash\":\"tkd17c\",\"mediaQuery\":\"(max-width: 1199.98px)\"}]}"} data-vignesh-ssr-released-at="2026-07-06T15:12:41.348Z" data-vignesh-page-optimized-at="2026-07-06T20:11:31.361Z" data-vignesh-generated-page="">
        <Suspense fallback={null}>
          <style data-vignesh-html-style="" dangerouslySetInnerHTML={{ __html: "html body { background: rgb(255, 255, 255); }" }} />
          <div data-vignesh-root="" className="vignesh-t7eg7 vignesh-k5uwb6" style={{ minHeight: "100vh", width: "auto" }}>
            <div className="vignesh-jejrq7-container">
              <Suspense fallback={null}>
                <div className="err-container" style={{ width: "100%", height: "auto" }}>
                  <style dangerouslySetInnerHTML={{ __html: "\n    .err-container {\n        font-family: 'Inter', sans-serif;\n        box-sizing: border-box;\n        width: 100%;\n        min-height: 100vh;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        background-color: #08080c;\n        color: #ffffff;\n        position: relative;\n        overflow: hidden;\n        padding: 40px 24px;\n    }\n    \n    /* Starry background twinkle styles */\n    .space-stars {\n        position: absolute;\n        inset: 0;\n        z-index: 0;\n        pointer-events: none;\n    }\n    .space-star {\n        position: absolute;\n        background-color: #ffffff;\n        border-radius: 50%;\n        animation: star-twinkle 3s infinite ease-in-out;\n    }\n    @keyframes star-twinkle {\n        0%, 100% { opacity: 0.1; }\n        50% { opacity: 0.8; }\n    }\n\n    /* Centered Row containing 4 [Circle] 4 */\n    .retro-404-row {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: clamp(16px, 4vw, 40px);\n        width: 100%;\n        max-width: 720px;\n        position: relative;\n        z-index: 10;\n        box-sizing: border-box;\n    }\n    .retro-number {\n        font-family: 'Outfit', sans-serif;\n        font-size: min(170px, 22vw);\n        font-weight: 800;\n        line-height: 1;\n        color: transparent;\n        -webkit-text-stroke: 2px #ffffff;\n        letter-spacing: -0.05em;\n        user-select: none;\n    }\n    .game-circle-container {\n        width: min(320px, 45vw);\n        height: min(320px, 45vw);\n        border-radius: 50%;\n        border: 2px solid rgba(255, 255, 255, 0.12);\n        background-color: #0d0d12;\n        box-shadow: 0 10px 40px rgba(0,0,0,0.5), inset 0 0 24px rgba(0,0,0,0.9);\n        overflow: hidden;\n        position: relative;\n        box-sizing: border-box;\n        touch-action: none;\n    }\n    .game-canvas {\n        width: 100%;\n        height: 100%;\n        display: block;\n    }\n    \n    /* Game menu overlays inside circle */\n    .game-circle-overlay {\n        position: absolute;\n        inset: 0;\n        background-color: rgba(13, 13, 18, 0.85);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        z-index: 20;\n    }\n    .game-play-btn {\n        width: 0;\n        height: 0;\n        border-top: 14px solid transparent;\n        border-bottom: 14px solid transparent;\n        border-left: 22px solid rgba(255, 255, 255, 0.4);\n        margin-left: 6px;\n        transition: border-left-color 0.2s ease;\n    }\n    .game-circle-overlay:hover .game-play-btn {\n        border-left-color: rgba(255, 255, 255, 0.8);\n    }\n    \n    /* Spaced text elements below the row */\n    .retro-footer {\n        margin-top: 36px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 16px;\n        z-index: 10;\n        box-sizing: border-box;\n        width: 100%;\n        max-width: 480px;\n    }\n    \n    /* Spaced header with border lines */\n    .retro-divider-wrap {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 100%;\n        gap: 16px;\n    }\n    .retro-divider-line {\n        height: 1px;\n        background-color: rgba(255, 255, 255, 0.15);\n        flex-grow: 1;\n    }\n    .retro-divider-text {\n        font-family: 'Inter', sans-serif;\n        font-size: 11px;\n        font-weight: 700;\n        letter-spacing: 0.35em;\n        text-transform: uppercase;\n        color: #ffffff;\n        white-space: nowrap;\n        padding-left: 0.35em;\n    }\n    \n    .retro-subtext {\n        font-family: 'Inter', sans-serif;\n        font-size: 10px;\n        font-weight: 600;\n        letter-spacing: 0.12em;\n        color: #666;\n        text-transform: uppercase;\n        text-align: center;\n    }\n    .retro-score-tag {\n        font-family: 'Inter', sans-serif;\n        font-size: 11px;\n        font-weight: 700;\n        letter-spacing: 0.12em;\n        color: #00ff66;\n        text-transform: uppercase;\n        text-shadow: 0 0 6px rgba(0,255,102,0.3);\n    }\n    \n    .sim-blink {\n        animation: sim-blink-anim 1s infinite alternate;\n    }\n    @keyframes sim-blink-anim {\n        0% { opacity: 0.3; }\n        100% { opacity: 1; }\n    }\n" }} />
                  <div className="space-stars" />
                  <div className="retro-404-row">
                    <span className="retro-number">
                      {"4"}
                    </span>
                    <div className="game-circle-container">
                      <canvas width="300" height="300" className="game-canvas" />
                      <div className="game-circle-overlay">
                        <div className="game-play-btn" />
                      </div>
                    </div>
                    <span className="retro-number">
                      {"4"}
                    </span>
                  </div>
                  <div className="retro-footer">
                    <div className="retro-divider-wrap">
                      <div className="retro-divider-line" />
                      <span className="retro-divider-text">
                        {"Signal Lost"}
                      </span>
                      <div className="retro-divider-line" />
                    </div>
                    <div>
                      <span className="retro-subtext">
                        {"◆ USE ARROW KEYS OR SWIPE TO PLAY ◆"}
                      </span>
                    </div>
                  </div>
                </div>
              </Suspense>
            </div>
          </div>
          <div id="overlay" />
        </Suspense>
      </div>
      <span data-fnj-slot={"2"} />
      <span data-fnj-slot={"3"} />
      {"\n\t"}
      <span data-fnj-slot={"4"} />
      {"\n\t\n\t\n\t"}
      <span data-fnj-slot={"5"} />
      {"\n\t"}
      <span data-fnj-slot={"6"} />
      {"\n\t"}
      <span data-fnj-slot={"7"} />
      <span data-fnj-slot={"8"} />
      <span data-fnj-slot={"9"} />
      <span data-fnj-slot={"10"} />
      <span data-fnj-slot={"11"} />
      <span data-fnj-slot={"12"} />
      <span data-fnj-slot={"13"} />
      <div id="svg-templates" style={{ position: "absolute", overflow: "hidden", bottom: "0", left: "0", width: "0", height: "0", zIndex: "0", contain: "strict" }} aria-hidden="true">
        {"\n"}
      </div>
      {"\n\t"}
      <span data-fnj-slot={"14"} />
      {"\n    \n    "}
      <span data-fnj-slot={"15"} />
      {"\n\n\n"}
    </body>
  );
}
