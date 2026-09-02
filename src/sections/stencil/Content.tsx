import React, { Suspense } from "react";

/** Generated from the Framer section "Content".
 *  Renders to the same DOM as the original — the Suspense boundaries here are
 *  Framer's hydration markers, so removing them would break its runtime.
 *  Everything else is ordinary JSX: edit it like any other component. */
export default function Content() {
  return (
    <div className="framer-b8v7ea" data-framer-name="Content">
      <div className="framer-j0sbpo" data-framer-name="Impact">
        <div className="framer-belrrb" data-framer-name="Details">
          <div className="framer-1oyk828" data-framer-name="The Flight 401 Crisis" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
            <p dir="auto" style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-size": "24px", "--framer-font-weight": "700", "--framer-letter-spacing": "-0.6px", "--framer-line-height": "32px", "--framer-text-color": "rgb(51, 51, 51)" }} className="framer-text">
              {"The Problem"}
            </p>
          </div>
          <div className="framer-1crfwf0" data-framer-name="In December 1972, Eastern Air Lines Flight 401 was descending into Miami when a minor instrument light bulb failed to illuminate. The cockpit crew, entirely consumed by figuring out why the landing gear indicator wouldn't turn on, accidentally nudged the flight controls, turning off the autopilot." data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
            <p dir="auto" style={{ "--framer-letter-spacing": "-0.01em", "--framer-line-height": "24px", "--framer-text-color": "rgb(102, 102, 102)" }} className="framer-text">
              {"Found an inspirational UI card, a neat pricing chart, or a dashboard layout online? Dragging it into your design workspace historically meant screenshots, painstaking measurement, color-picking, and rebuilding layer-by-layer. This represents minutes of tedious setup work before you can begin actual layout exploration. "}
            </p>
          </div>
        </div>
        <div className="framer-x4azz5-container">
          <Suspense fallback={null}>
            <div className="cmp-container" style={{ width: "100%", height: "auto" }}>
              <style dangerouslySetInnerHTML={{ __html: "\n    .cmp-container {\n        font-family: 'Inter', system-ui, -apple-system, sans-serif;\n        box-sizing: border-box;\n        width: 100%;\n    }\n    .cmp-grid {\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        gap: 16px;\n        width: 100%;\n        box-sizing: border-box;\n    }\n    .cmp-card {\n        border: 1px solid #e5e5e5;\n        background-color: #ffffff;\n        border-radius: 12px;\n        padding: 20px;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        height: 220px;\n        position: relative;\n        overflow: hidden;\n        box-sizing: border-box;\n        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n        text-align: left;\n    }\n    .cmp-header {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        border-bottom: 1px solid #e5e5e580;\n        padding-bottom: 8px;\n        margin-bottom: 8px;\n        flex-shrink: 0;\n    }\n    .cmp-tag {\n        font-family: Geist, 'Roboto Mono', monospace;\n        font-size: 8px;\n        font-weight: bold;\n        letter-spacing: 0.05em;\n        text-transform: uppercase;\n        color: #666;\n    }\n    .cmp-status {\n        font-size: 8px;\n        font-family: Geist, 'Roboto Mono', monospace;\n        font-weight: bold;\n        display: flex;\n        align-items: center;\n        gap: 4px;\n    }\n    .cmp-viewport {\n        flex-grow: 1;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        position: relative;\n        overflow: hidden;\n    }\n    .cmp-desc {\n        font-size: 10px;\n        color: #666;\n        text-align: center;\n        margin-top: 8px;\n        line-height: 1.35;\n        flex-shrink: 0;\n    }\n    \n    /* Before Drawing Card Elements */\n    .cmp-ruler-x {\n        position: absolute;\n        left: 0;\n        right: 0;\n        border-top: 1px dashed #ef444460;\n        pointer-events: none;\n    }\n    .cmp-ruler-y {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        border-left: 1px dashed #ef444460;\n        pointer-events: none;\n    }\n    \n    /* Responsive stacking for Mobile screens */\n    @media (max-width: 640px) {\n        .cmp-grid {\n            grid-template-columns: 1fr !important;\n            gap: 12px !important;\n        }\n        .cmp-card {\n            height: 200px !important;\n            padding: 16px !important;\n        }\n        .cmp-desc {\n            font-size: 9px !important;\n            margin-top: 4px !important;\n        }\n    }\n" }} />
              <div className="cmp-grid">
                <div className="cmp-card" style={{ backgroundColor: "rgb(255, 255, 255)", borderColor: "rgb(229, 229, 229)" }}>
                  <div className="cmp-header">
                    <span className="cmp-tag">
                      {"1. Before — Manual Redraw"}
                    </span>
                    <span className="cmp-status" style={{ color: "rgb(239, 68, 68)" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "rgb(239, 68, 68)", display: "inline-block" }} className="cmp-blink" />
                      {"Redrawing Layer"}
                    </span>
                  </div>
                  <div className="cmp-viewport">
                    <div style={{ width: "140px", height: "72px", border: "1.5px dashed #b3b3b3", backgroundColor: "transparent", borderRadius: "8px", padding: "10px", position: "relative", transition: "all 0.3s ease", boxSizing: "border-box" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", opacity: "0.4", transition: "opacity 0.3s ease" }}>
                        <div style={{ width: "22px", height: "22px", borderRadius: "5px", backgroundColor: "#e0e0e0", display: "flex", alignItems: "center", justifyCenter: "center" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
                            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                            <path d="M9 18h6" />
                            <path d="M10 22h4" />
                          </svg>
                        </div>
                        <div style={{ height: "6px", width: "64px", backgroundColor: "#e0e0e0", borderRadius: "3px" }} />
                      </div>
                      <div style={{ height: "4px", width: "96px", backgroundColor: "#e0e0e0", borderRadius: "2px", marginTop: "10px", opacity: "0.4" }} />
                    </div>
                  </div>
                  <div className="cmp-desc">
                    {"Inspect code values, recreate containers, and layout metrics manually."}
                  </div>
                </div>
                <div className="cmp-card" style={{ backgroundColor: "rgb(255, 255, 255)", borderColor: "rgb(229, 229, 229)", boxShadow: "0 8px 28px rgba(0,0,0,0.04)" }}>
                  <div className="cmp-header">
                    <span className="cmp-tag">
                      {"2. After — Stencil Paste"}
                    </span>
                    <span className="cmp-status" style={{ color: "rgb(162, 89, 255)" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "rgb(162, 89, 255)", display: "inline-block" }} className="cmp-pulse-green" />
                      {"Instant Sync"}
                    </span>
                  </div>
                  <div className="cmp-viewport">
                    <div style={{ width: "140px", height: "72px", border: "1.5px solid rgb(162, 89, 255)", backgroundColor: "#ffffff", borderRadius: "8px", padding: "10px", position: "relative", boxSizing: "border-box", boxShadow: "none", transition: "all 0.3s ease" }}>
                      <div style={{ position: "absolute", top: "-14px", left: "6px", backgroundColor: "rgb(162, 89, 255)", color: "#ffffff", fontSize: "7px", fontWeight: "bold", fontFamily: "Geist, 'Roboto Mono', monospace", padding: "1px 5px", borderRadius: "3px", whiteSpace: "nowrap" }}>
                        {"Auto-Layout"}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <div style={{ width: "22px", height: "22px", borderRadius: "5px", background: "linear-gradient(135deg, rgb(162, 89, 255), #ff5252)", display: "flex", alignItems: "center", justifyCenter: "center" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
                            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                            <path d="M9 18h6" />
                            <path d="M10 22h4" />
                          </svg>
                        </div>
                        <div style={{ height: "6px", width: "64px", backgroundColor: "rgb(26, 26, 26)", borderRadius: "3px" }} />
                      </div>
                      <div style={{ height: "4px", width: "96px", backgroundColor: "#888888", borderRadius: "2px", marginTop: "10px" }} />
                    </div>
                  </div>
                  <div className="cmp-desc">
                    {"One-click copy directly parses code styles and drops editable vector structures."}
                  </div>
                </div>
              </div>
            </div>
          </Suspense>
        </div>
      </div>
      <div className="framer-ekoxv1" data-framer-name="Impact">
        <div className="framer-9oq8mm" data-framer-name="Details">
          <div className="framer-1gn73oe" data-framer-name="The Psychology of Attention" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
            <p dir="auto" style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-size": "24px", "--framer-font-weight": "700", "--framer-letter-spacing": "-0.6px", "--framer-line-height": "32px", "--framer-text-color": "rgb(51, 51, 51)" }} className="framer-text">
              {"Two Steps. That's It."}
            </p>
          </div>
          <div className="framer-h9tibx" data-framer-name="Our visual attention is biological, not intellectual. When a user experiences sudden stress (like an anomaly warning), their cognitive bandwidth shrinks. The brain enters a defensive state, narrowing focus to what it perceives as the primary threat." data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
            <p dir="auto" style={{ "--framer-letter-spacing": "-0.01em", "--framer-line-height": "24px", "--framer-text-color": "rgb(102, 102, 102)" }} className="framer-text">
              <br className="framer-text trailing-break" />
            </p>
            <p dir="auto" style={{ "--framer-letter-spacing": "-0.01em", "--framer-line-height": "24px", "--framer-text-color": "rgb(102, 102, 102)" }} className="framer-text">
              {"Stencil bridges the gap between active code and design layers. Simply capture the element in Chrome and paste it directly on your Figma canvas. The layout arrives clean, responsive, and completely structured. "}
            </p>
          </div>
        </div>
        <div className="framer-1jh4vut-container">
          <Suspense fallback={null}>
            <div className="showcase-container" style={{ width: "100%", height: "auto" }}>
              <style dangerouslySetInnerHTML={{ __html: "\n    .showcase-container {\n        font-family: 'Inter', system-ui, -apple-system, sans-serif;\n        box-sizing: border-box;\n        width: 100%;\n        text-align: left;\n    }\n    .showcase-grid-top {\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        gap: 16px;\n        margin-bottom: 16px;\n        box-sizing: border-box;\n        width: 100%;\n    }\n    .showcase-grid-bottom {\n        width: 100%;\n        box-sizing: border-box;\n    }\n    .showcase-card {\n        border: 1px solid #e5e5e5;\n        background-color: #ffffff;\n        border-radius: 14px;\n        box-shadow: 0 8px 28px rgba(0,0,0,0.03);\n        overflow: hidden;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        box-sizing: border-box;\n        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n        position: relative;\n    }\n    .showcase-card.small {\n        height: 220px;\n    }\n    .showcase-card.wide {\n        height: 260px;\n    }\n    .showcase-header {\n        background: #fafafa;\n        border-bottom: 1px solid #e5e5e5;\n        padding: 10px 16px;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        flex-shrink: 0;\n    }\n    .showcase-dot-group {\n        display: flex;\n        gap: 5px;\n    }\n    .showcase-dot {\n        width: 7px;\n        height: 7px;\n        border-radius: 50%;\n        background: #e0e0e0;\n    }\n    .showcase-content {\n        flex: 1;\n        padding: 20px;\n        display: flex;\n        flex-direction: column;\n        position: relative;\n        overflow: hidden;\n        box-sizing: border-box;\n        justify-content: space-between;\n    }\n    .showcase-tag {\n        font-family: Geist, 'Roboto Mono', monospace;\n        font-size: 8px;\n        font-weight: bold;\n        letter-spacing: 0.05em;\n        text-transform: uppercase;\n        color: #888;\n        display: block;\n        margin-bottom: 4px;\n    }\n    \n    /* Responsive breakpoints for Mobile screens */\n    @media (max-width: 768px) {\n        .showcase-grid-top {\n            grid-template-columns: 1fr !important;\n            gap: 12px !important;\n            margin-bottom: 12px !important;\n        }\n        .showcase-card.small {\n            height: 200px !important;\n        }\n        .showcase-card.wide {\n            height: 240px !important;\n            margin-top: 12px !important;\n        }\n        .showcase-content {\n            padding: 16px !important;\n        }\n    }\n" }} />
              <div className="showcase-grid-top">
                <div className="showcase-card small" style={{ backgroundColor: "rgb(255, 255, 255)", borderColor: "rgb(229, 229, 229)" }}>
                  <div className="showcase-header">
                    <span className="showcase-tag" style={{ margin: "0" }}>
                      {"Step 1 — Chrome"}
                    </span>
                    <div className="showcase-dot-group">
                      <span className="showcase-dot" style={{ backgroundColor: "#ff5f56" }} />
                      <span className="showcase-dot" style={{ backgroundColor: "#ffbd2e" }} />
                      <span className="showcase-dot" style={{ backgroundColor: "#27c93f" }} />
                    </div>
                  </div>
                  <div className="showcase-content">
                    <div style={{ flexGrow: "1", display: "flex", alignItems: "center", justifyCenter: "center" }}>
                      <div style={{ width: "100%", maxWidth: "260px", backgroundColor: "#ffffff", border: "1.5px solid #e5e5e5", borderRadius: "8px", padding: "10px", boxShadow: "none", transition: "all 0.3s ease" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #e5e5e580", paddingBottom: "6px", marginBottom: "8px" }}>
                          <span style={{ fontSize: "9px", fontWeight: "bold", color: "rgb(24, 160, 251)" }}>
                            {"Stencil Inspector"}
                          </span>
                          <span style={{ fontSize: "7px", color: "#999", fontFamily: "Geist, monospace" }}>
                            {"v1.2"}
                          </span>
                        </div>
                        <div style={{ border: "1.5px solid #e5e5e5", borderRadius: "6px", padding: "8px", backgroundColor: "transparent", position: "relative", transition: "all 0.3s ease", textAlign: "left" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <div style={{ fontSize: "12px" }}>
                              {"📊"}
                            </div>
                            <div style={{ height: "6px", width: "72px", backgroundColor: "#e0e0e0", borderRadius: "3px" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{ fontSize: "10px", color: "#666", textAlign: "center", marginTop: "8px" }}>
                      {"Hover and click any component on the page. Stencil highlights structural nodes."}
                    </div>
                  </div>
                </div>
                <div className="showcase-card small" style={{ backgroundColor: "rgb(255, 255, 255)", borderColor: "rgb(229, 229, 229)" }}>
                  <div className="showcase-header">
                    <span className="showcase-tag" style={{ margin: "0", color: "rgb(162, 89, 255)" }}>
                      {"Step 2 — Plugin"}
                    </span>
                    <div className="showcase-dot-group">
                      <span className="showcase-dot" />
                      <span className="showcase-dot" />
                      <span className="showcase-dot" />
                    </div>
                  </div>
                  <div className="showcase-content">
                    <div style={{ flexGrow: "1", display: "flex", alignItems: "center", justifyCenter: "center" }}>
                      <div style={{ width: "100%", maxWidth: "260px", backgroundColor: "#ffffff", border: "1.5px solid #e5e5e5", borderRadius: "8px", padding: "10px", boxShadow: "none", transition: "all 0.3s ease" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #e5e5e580", paddingBottom: "6px", marginBottom: "8px" }}>
                          <span style={{ fontSize: "9px", fontWeight: "bold", color: "rgb(162, 89, 255)" }}>
                            {"Stencil Queue"}
                          </span>
                          <span style={{ fontSize: "7px", color: "rgb(10, 207, 131)", fontWeight: "bold" }}>
                            {"Online"}
                          </span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", border: "1px solid #e5e5e5", borderRadius: "6px", padding: "8px", backgroundColor: "#fafafa", transition: "background-color 0.3s ease" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <div style={{ fontSize: "12px" }}>
                              {"📊"}
                            </div>
                            <span style={{ fontSize: "8px", fontWeight: "600", color: "#1a1a1a" }}>
                              {"Daily Operations"}
                            </span>
                          </div>
                          <span style={{ fontSize: "7px", color: "#888" }}>
                            {"192x128px"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div style={{ fontSize: "10px", color: "#666", textAlign: "center", marginTop: "8px" }}>
                      {"Captured structures populate your sync queue list in the Figma side panel."}
                    </div>
                  </div>
                </div>
              </div>
              <div className="showcase-grid-bottom">
                <div className="showcase-card wide" style={{ backgroundColor: "rgb(255, 255, 255)", borderColor: "rgb(229, 229, 229)", boxShadow: "0 8px 28px rgba(0,0,0,0.03)" }}>
                  <div className="showcase-header">
                    <span className="showcase-tag" style={{ margin: "0", color: "rgb(10, 207, 131)" }}>
                      {"Result — Figma Canvas"}
                    </span>
                    <span style={{ fontSize: "9px", fontWeight: "bold", opacity: "0.35", fontFamily: "Geist, monospace" }}>
                      {"figma.com/workspace"}
                    </span>
                  </div>
                  <div className="showcase-content" style={{ padding: "0", display: "flex", flexDirection: "row", justifyContent: "stretch", height: "100%" }}>
                    <div style={{ width: "76px", borderRight: "1px solid #333", backgroundColor: "#1c1c1c", padding: "12px", textAlign: "left", flexShrink: "0", boxSizing: "border-box" }}>
                      <span style={{ fontSize: "7px", fontWeight: "bold", color: "#555", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>
                        {"Layers"}
                      </span>
                      <div style={{ display: "flex", alignItems: "center", gap: "3px", fontSize: "7px", color: "rgb(162, 89, 255)", fontWeight: "bold", padding: "2px 4px", backgroundColor: "rgb(162, 89, 255)15", borderRadius: "3px", opacity: "0.6", transition: "opacity 0.3s ease" }}>
                        <span>
                          {"[||]"}
                        </span>
                        {" "}
                        <span style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", maxWidth: "46px" }}>
                          {"Daily Operations"}
                        </span>
                      </div>
                    </div>
                    <div style={{ flexGrow: "1", backgroundColor: "#1e1e1e", display: "flex", alignItems: "center", justifyCenter: "center", position: "relative", padding: "12px", overflow: "hidden" }}>
                      <div style={{ position: "absolute", inset: "0", backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "12px 12px", pointerEvents: "none" }} />
                      <div style={{ border: "1.5px solid rgb(162, 89, 255)", backgroundColor: "#2c2c2c", borderRadius: "10px", padding: "12px", width: "100%", maxWidth: "160px", position: "relative", textAlign: "left", margin: "0 auto", zIndex: "10", boxShadow: "0 10px 25px rgba(0,0,0,0.35)", transform: "none", transition: "all 0.3s ease" }}>
                        <span style={{ position: "absolute", top: "-8px", left: "8px", backgroundColor: "rgb(162, 89, 255)", color: "#ffffff", fontSize: "5px", padding: "1.5px 5px", borderRadius: "2px", fontWeight: "bold", textTransform: "uppercase" }}>
                          {"Auto-Layout"}
                        </span>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <div style={{ width: "18px", height: "18px", borderRadius: "5px", border: "1px solid #444", display: "flex", alignItems: "center", justifyCenter: "center", fontSize: "10px" }}>
                            {"📊"}
                          </div>
                          <div style={{ height: "4px", width: "52px", backgroundColor: "#ffffff", borderRadius: "2px" }} />
                        </div>
                        <div style={{ height: "3px", width: "84px", backgroundColor: "#666666", borderRadius: "1.5px", marginTop: "8px" }} />
                      </div>
                    </div>
                    <div style={{ width: "76px", borderLeft: "1px solid #333", backgroundColor: "#1c1c1c", padding: "12px", textAlign: "left", flexShrink: "0", boxSizing: "border-box" }}>
                      <span style={{ fontSize: "6px", fontWeight: "bold", color: "#555", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>
                        {"Auto Layout"}
                      </span>
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px", opacity: "0.6", transition: "opacity 0.3s ease" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "6px", color: "#aaa" }}>
                          <span>
                            {"Horizontal"}
                          </span>
                          {" "}
                          <span>
                            {"8px"}
                          </span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "6px", color: "#aaa" }}>
                          <span>
                            {"Padding"}
                          </span>
                          {" "}
                          <span>
                            {"12px"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ borderTop: "1px solid #e5e5e580", padding: "10px 20px", fontSize: "10px", color: "#666", textAlign: "center" }}>
                    {"Layers land directly on the Figma canvas as fully editable Auto-Layout vectors."}
                  </div>
                </div>
              </div>
            </div>
          </Suspense>
        </div>
      </div>
      <div className="framer-1hqq3hn" data-framer-name="Frame 1739329296">
        <div className="framer-3r9asf" data-framer-name="Details">
          <div className="framer-l2rhxq" data-framer-name="Interactive Lab: Breaking the Tunnel" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
            <p dir="auto" style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-size": "24px", "--framer-font-weight": "700", "--framer-letter-spacing": "-0.6px", "--framer-line-height": "32px", "--framer-text-color": "rgb(51, 51, 51)" }} className="framer-text">
              {"When Things Don't Translate Perfectly"}
            </p>
          </div>
          <div className="framer-1n82jv2" data-framer-name="Click through the modes below to experience the visual noise levels first-hand and see how design mitigates attention blindness." data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
            <p dir="auto" style={{ "--framer-letter-spacing": "-0.01em", "--framer-line-height": "24px", "--framer-text-color": "rgb(102, 102, 102)" }} className="framer-text">
              {"The web and Figma speak fundamentally different layout languages. Stencil is designed with graceful fallbacks — it handles complex code configurations without crashing or breaking your canvas structure. "}
            </p>
          </div>
        </div>
        <div className="framer-1t0229j" data-framer-name="Frame 1739329361">
          <div className="framer-v4qx93" data-border="true" data-framer-name="Container">
            <div className="framer-1qar1jv" data-border="true" data-framer-name="Container">
              <div className="framer-ejr4gn" data-framer-name="Aa" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--framer-font-size": "14px", "--framer-line-height": "20px" }} className="framer-text">
                  <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--framer-font-size": "14px", "--framer-font-weight": "700", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(51, 51, 51, 1)" }} className="framer-text">
                    {"Aa"}
                  </span>
                </p>
              </div>
            </div>
            <div className="framer-4kmq50" data-framer-name="Heading 3">
              <div className="framer-1462oh7" data-framer-name="Font Not Installed?" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--framer-font-size": "14px", "--framer-line-height": "20px" }} className="framer-text">
                  <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--framer-font-size": "14px", "--framer-font-weight": "700", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(51, 51, 51, 1)" }} className="framer-text">
                    {"Font Not Installed?"}
                  </span>
                </p>
              </div>
            </div>
            <div className="framer-14gox9x" data-framer-name="Paragraph">
              <div className="framer-19bet8t" data-framer-name="Falls back directly to standard system fonts (like" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--framer-font-size": "12px", "--framer-line-height": "18px" }} className="framer-text">
                  <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "\"Inter\"", "--framer-font-size": "12px", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(102, 102, 102, 1)" }} className="framer-text">
                    {"Falls back directly to standard system fonts (like Inter) so text layers land editable — rather than rendering as broken placeholder boxes. "}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="framer-7m0lp8" data-border="true" data-framer-name="Container">
            <div className="framer-i18t0j" data-border="true" data-framer-name="Container">
              <div className="framer-yi4ubh" data-framer-name="🖼" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--framer-font-size": "14px", "--framer-line-height": "20px" }} className="framer-text">
                  <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "\"Inter\"", "--framer-font-size": "14px", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(51, 51, 51, 1)" }} className="framer-text">
                    {"🖼"}
                  </span>
                </p>
              </div>
            </div>
            <div className="framer-1diovuk" data-framer-name="Heading 3">
              <div className="framer-1qg03qu" data-framer-name="Image Fails to Load?" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--framer-font-size": "14px", "--framer-line-height": "20px" }} className="framer-text">
                  <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--framer-font-size": "14px", "--framer-font-weight": "700", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(51, 51, 51, 1)" }} className="framer-text">
                    {"Image Fails to Load?"}
                  </span>
                </p>
              </div>
            </div>
            <div className="framer-1lxm1no" data-framer-name="Paragraph">
              <div className="framer-1rqy15i" data-framer-name="Blocked, missing, or cross-origin restricted image" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--framer-font-size": "12px", "--framer-line-height": "18px" }} className="framer-text">
                  <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "\"Inter\"", "--framer-font-size": "12px", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(102, 102, 102, 1)" }} className="framer-text">
                    {"Blocked, missing, or cross-origin restricted images automatically resolve to a neutral placeholder frame, keeping design structure clean. "}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="framer-1bv208e" data-border="true" data-framer-name="Container">
            <div className="framer-4xtp79" data-border="true" data-framer-name="Container">
              <div className="framer-1qaddt7" data-framer-name="◇" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--framer-font-size": "14px", "--framer-line-height": "20px" }} className="framer-text">
                  <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "\"Inter\"", "--framer-font-size": "14px", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(51, 51, 51, 1)" }} className="framer-text">
                    {"◇"}
                  </span>
                </p>
              </div>
            </div>
            <div className="framer-1wo4sxf" data-framer-name="Heading 3">
              <div className="framer-1dejvvi" data-framer-name="Icon Won't Convert?" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--framer-font-size": "14px", "--framer-line-height": "20px" }} className="framer-text">
                  <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--framer-font-size": "14px", "--framer-font-weight": "700", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(51, 51, 51, 1)" }} className="framer-text">
                    {"Icon Won't Convert?"}
                  </span>
                </p>
              </div>
            </div>
            <div className="framer-dfa5gy" data-framer-name="Paragraph">
              <div className="framer-cda83j" data-framer-name="Extremely complex inline SVG vector paths that fai" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--framer-font-size": "12px", "--framer-line-height": "18px" }} className="framer-text">
                  <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "\"Inter\"", "--framer-font-size": "12px", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(102, 102, 102, 1)" }} className="framer-text">
                    {"Extremely complex inline SVG vector paths that fail parse sequences get represented as clean vector placeholder boxes rather than breaking compilation. "}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="framer-1klhvc3" data-border="true" data-framer-name="Container">
            <div className="framer-ic8qcm" data-border="true" data-framer-name="Container">
              <div className="framer-17swl6x" data-framer-name="⚡" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--framer-font-size": "14px", "--framer-line-height": "20px" }} className="framer-text">
                  <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "\"Inter\"", "--framer-font-size": "14px", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(51, 51, 51, 1)" }} className="framer-text">
                    {"⚡"}
                  </span>
                </p>
              </div>
            </div>
            <div className="framer-1fst7i1" data-framer-name="Heading 3">
              <div className="framer-1ym81b9" data-framer-name="Layout Too Complex?" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--framer-font-size": "14px", "--framer-line-height": "20px" }} className="framer-text">
                  <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--framer-font-size": "14px", "--framer-font-weight": "700", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(51, 51, 51, 1)" }} className="framer-text">
                    {"Layout Too Complex?"}
                  </span>
                </p>
              </div>
            </div>
            <div className="framer-1nqnk6j" data-framer-name="Paragraph">
              <div className="framer-1ddqxl0" data-framer-name="Web-only animations, transitions, hovers, and scri" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--framer-font-size": "12px", "--framer-line-height": "18px" }} className="framer-text">
                  <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "\"Inter\"", "--framer-font-size": "12px", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(102, 102, 102, 1)" }} className="framer-text">
                    {"Web-only animations, transitions, hovers, and script elements are ignored. Stencil extracts the clean static starting point of the layout. "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="framer-1g9ki2n" data-border="true" data-framer-name="Section">
        <div className="framer-1vbiuag" data-framer-name="Container">
          <div className="framer-1eyzhcx" data-framer-name="Try It Yourself" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
            <p style={{ "--framer-font-size": "24px", "--framer-line-height": "32px" }} className="framer-text">
              <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--framer-font-size": "24px", "--framer-font-weight": "700", "--framer-letter-spacing": "-0.6px", "--framer-text-color": "rgba(51, 51, 51, 1)" }} className="framer-text">
                {"Try It Yourself"}
              </span>
            </p>
          </div>
          <div className="framer-87z7bl" data-framer-name="Stencil is completely free to download. Get both p" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
            <p style={{ "--framer-font-size": "16px", "--framer-line-height": "24px" }} className="framer-text">
              <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "\"Inter\"", "--framer-font-size": "16px", "--framer-letter-spacing": "-0.01em", "--framer-text-color": "rgba(102, 102, 102, 1)" }} className="framer-text">
                {"Stencil is completely free to download. Get both parts — the Chrome extension files and the Figma manifest package. Extract, load, and begin syncing. "}
              </span>
            </p>
          </div>
        </div>
        <div className="framer-yflvym" data-framer-name="Container">
          <div className="framer-2y3pqy" data-border="true" data-framer-name="Container">
            <div className="framer-1iwgvak" data-framer-name="Container">
              <div className="framer-i5rgpp" data-framer-name="Text">
                <div className="framer-m339h6" data-framer-name="Part 1 — Chrome Extension" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p style={{ "--framer-font-size": "12px" }} className="framer-text">
                    <span style={{ "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNzAw", "--framer-font-family": "\"Roboto Mono\"", "--framer-font-size": "12px", "--framer-font-weight": "700", "--framer-letter-spacing": "0.45px", "--framer-text-color": "rgba(162, 89, 255, 1)", "--framer-text-transform": "uppercase" }} className="framer-text">
                      {"Part 1 — Chrome Extension"}
                    </span>
                  </p>
                </div>
              </div>
              <div className="framer-186g5f6" data-framer-name="Heading 3">
                <div className="framer-93oj9v" data-framer-name="Capture Layouts" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p style={{ "--framer-font-size": "16px" }} className="framer-text">
                    <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--framer-font-size": "16px", "--framer-font-weight": "700", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(51, 51, 51, 1)" }} className="framer-text">
                      {"Capture Layouts"}
                    </span>
                  </p>
                </div>
              </div>
              <div className="framer-3lrpv2" data-framer-name="Paragraph">
                <div className="framer-1idmazi" data-framer-name="Hover and select any DOM node elements. Select com" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p style={{ "--framer-font-size": "14px", "--framer-line-height": "18px" }} className="framer-text">
                    <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "\"Inter\"", "--framer-font-size": "14px", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(102, 102, 102, 1)" }} className="framer-text">
                      {"Hover and select any DOM node elements. Select components, analyze sizes, and sync them directly to your paste queue. "}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="framer-1ft82ir" data-border="true" data-framer-name="Container">
              <div className="framer-197fzes" data-framer-name="Text">
                <div className="framer-1utknfj" data-framer-name="v1.2 · Unpacked" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p style={{ "--framer-font-size": "12px" }} className="framer-text">
                    <span style={{ "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==", "--framer-font-family": "\"Roboto Mono\"", "--framer-font-size": "12px", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(102, 102, 102, 1)" }} className="framer-text">
                      {"v1.2 · Unpacked"}
                    </span>
                  </p>
                </div>
              </div>
              <div className="framer-1uyo5qs" data-framer-name="Link">
                <div className="framer-1xezdit" data-framer-name="Get Chrome Extension " data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p style={{ "--framer-font-size": "12px", "--framer-line-height": "16.25px" }} className="framer-text">
                    <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--framer-font-size": "12px", "--framer-font-weight": "700", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(255, 255, 255, 1)" }} className="framer-text">
                      {"Get Chrome Extension "}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-zx2dpl" data-border="true" data-framer-name="Container">
            <div className="framer-1uts1zg" data-framer-name="Container">
              <div className="framer-1hzlw31" data-framer-name="Text">
                <div className="framer-1hletcz" data-framer-name="Part 2 — Figma Plugin" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p style={{ "--framer-font-size": "12px" }} className="framer-text">
                    <span style={{ "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNzAw", "--framer-font-family": "\"Roboto Mono\"", "--framer-font-size": "12px", "--framer-font-weight": "700", "--framer-letter-spacing": "0.45px", "--framer-text-color": "rgba(162, 89, 255, 1)", "--framer-text-transform": "uppercase" }} className="framer-text">
                      {"Part 2 — Figma Plugin"}
                    </span>
                  </p>
                </div>
              </div>
              <div className="framer-f6k2lj" data-framer-name="Heading 3">
                <div className="framer-q46rgi" data-framer-name="Render Editable Frames" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p style={{ "--framer-font-size": "16px" }} className="framer-text">
                    <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--framer-font-size": "16px", "--framer-font-weight": "700", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(51, 51, 51, 1)" }} className="framer-text">
                      {"Render Editable Frames"}
                    </span>
                  </p>
                </div>
              </div>
              <div className="framer-1vqy1gu" data-framer-name="Paragraph">
                <div className="framer-1kgunx4" data-framer-name="Access your sync queue from Figma. Paste captures " data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p style={{ "--framer-font-size": "14px", "--framer-line-height": "18px" }} className="framer-text">
                    <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "\"Inter\"", "--framer-font-size": "14px", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(102, 102, 102, 1)" }} className="framer-text">
                      {"Access your sync queue from Figma. Paste captures instantly as editable frames with preserved properties. "}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="framer-kam77e" data-border="true" data-framer-name="Container">
              <div className="framer-1w8qlb7" data-framer-name="Text">
                <div className="framer-155fvt3" data-framer-name="v1.2 · Developer Plugin" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p style={{ "--framer-font-size": "12px" }} className="framer-text">
                    <span style={{ "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==", "--framer-font-family": "\"Roboto Mono\"", "--framer-font-size": "12px", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(102, 102, 102, 1)" }} className="framer-text">
                      {"v1.2 · Developer Plugin"}
                    </span>
                  </p>
                </div>
              </div>
              <div className="framer-1d21yb4" data-framer-name="Link">
                <div className="framer-1k198hv" data-framer-name="Get Figma Plugin " data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p style={{ "--framer-font-size": "12px", "--framer-line-height": "16.25px" }} className="framer-text">
                    <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--framer-font-size": "12px", "--framer-font-weight": "700", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(255, 255, 255, 1)" }} className="framer-text">
                      {"Get Figma Plugin "}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="framer-8cm1nn" data-border="true" data-framer-name="Container">
          <div className="framer-9bp1ng" data-framer-name="Heading 4">
            <div className="framer-15tjfzw" data-framer-name="Quick Install Guide" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
              <p style={{ "--framer-font-size": "14px", "--framer-line-height": "20px" }} className="framer-text">
                <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--framer-font-size": "14px", "--framer-font-weight": "700", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(51, 51, 51, 1)", "--framer-text-transform": "uppercase" }} className="framer-text">
                  {"Quick Install Guide"}
                </span>
              </p>
            </div>
          </div>
          <div className="framer-logujj" data-framer-name="Container">
            <div className="framer-q8mql" data-framer-name="Container">
              <div className="framer-1ehac0q" data-framer-name="Text">
                <div className="framer-m7ouo5" data-framer-name="Chrome Browser" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p style={{ "--framer-font-size": "12px" }} className="framer-text">
                    <span style={{ "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNzAw", "--framer-font-family": "\"Roboto Mono\"", "--framer-font-size": "12px", "--framer-font-weight": "700", "--framer-letter-spacing": "0.25px", "--framer-text-color": "rgba(102, 102, 102, 1)", "--framer-text-transform": "uppercase" }} className="framer-text">
                      {"Chrome Browser"}
                    </span>
                  </p>
                </div>
              </div>
              <div className="framer-rogw4s" data-framer-name="Numbered List">
                <div className="framer-i7atct" data-framer-name="List Item">
                  <div className="framer-178qxw8" data-framer-name="Unzip the archive to get the extension directory." data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                    <p style={{ "--framer-font-size": "12px", "--framer-line-height": "16px" }} className="framer-text">
                      <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "\"Inter\"", "--framer-font-size": "12px", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(102, 102, 102, 1)" }} className="framer-text">
                        {"Unzip the archive to get the "}
                      </span>
                      <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--framer-font-size": "12px", "--framer-font-weight": "700", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(51, 51, 51, 1)" }} className="framer-text">
                        {"extension"}
                      </span>
                      <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "\"Inter\"", "--framer-font-size": "12px", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(102, 102, 102, 1)" }} className="framer-text">
                        {" directory."}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="framer-1qvixy6" data-framer-name="List Item">
                  <div className="framer-p02l8k" data-framer-name="Open chrome://extensions and toggle Developer Mode" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                    <p style={{ "--framer-font-size": "12px", "--framer-line-height": "16px" }} className="framer-text">
                      <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "\"Inter\"", "--framer-font-size": "12px", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(102, 102, 102, 1)" }} className="framer-text">
                        {"Open "}
                      </span>
                      <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--framer-font-size": "12px", "--framer-font-weight": "700", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(51, 51, 51, 1)" }} className="framer-text">
                        {"chrome://extensions"}
                      </span>
                      <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "\"Inter\"", "--framer-font-size": "12px", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(102, 102, 102, 1)" }} className="framer-text">
                        {" and toggle Developer Mode."}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="framer-1y62gtg" data-framer-name="List Item">
                  <div className="framer-1xijoko" data-framer-name="Click Load Unpacked and select the directory." data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                    <p style={{ "--framer-font-size": "12px", "--framer-line-height": "16px" }} className="framer-text">
                      <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "\"Inter\"", "--framer-font-size": "12px", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(102, 102, 102, 1)" }} className="framer-text">
                        {"Click "}
                      </span>
                      <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--framer-font-size": "12px", "--framer-font-weight": "700", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(51, 51, 51, 1)" }} className="framer-text">
                        {"Load Unpacked"}
                      </span>
                      <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "\"Inter\"", "--framer-font-size": "12px", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(102, 102, 102, 1)" }} className="framer-text">
                        {" and select the directory."}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="framer-7267ld" data-framer-name="Container">
              <div className="framer-j2pkaq" data-framer-name="Text">
                <div className="framer-1bcimcr" data-framer-name="Figma Application" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p style={{ "--framer-font-size": "12px" }} className="framer-text">
                    <span style={{ "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNzAw", "--framer-font-family": "\"Roboto Mono\"", "--framer-font-size": "12px", "--framer-font-weight": "700", "--framer-letter-spacing": "0.25px", "--framer-text-color": "rgba(102, 102, 102, 1)", "--framer-text-transform": "uppercase" }} className="framer-text">
                      {"Figma Application"}
                    </span>
                  </p>
                </div>
              </div>
              <div className="framer-1i0da2a" data-framer-name="Numbered List">
                <div className="framer-1k6te8s" data-framer-name="List Item">
                  <div className="framer-1xlauha" data-framer-name="Unzip the archive to get the figma-plugin director" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                    <p style={{ "--framer-font-size": "12px", "--framer-line-height": "16px" }} className="framer-text">
                      <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "\"Inter\"", "--framer-font-size": "12px", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(102, 102, 102, 1)" }} className="framer-text">
                        {"Unzip the archive to get the "}
                      </span>
                      <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--framer-font-size": "12px", "--framer-font-weight": "700", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(51, 51, 51, 1)" }} className="framer-text">
                        {"figma-plugin"}
                      </span>
                      <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "\"Inter\"", "--framer-font-size": "12px", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(102, 102, 102, 1)" }} className="framer-text">
                        {" directory."}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="framer-19jkpzz" data-framer-name="List Item">
                  <div className="framer-1u5fjpx" data-framer-name="Navigate to Plugins → Development → Import plugin." data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                    <p style={{ "--framer-font-size": "12px", "--framer-line-height": "16px" }} className="framer-text">
                      <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "\"Inter\"", "--framer-font-size": "12px", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(102, 102, 102, 1)" }} className="framer-text">
                        {"Navigate to Plugins → Development → Import plugin."}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="framer-13jwy90" data-framer-name="List Item">
                  <div className="framer-aa2sea" data-framer-name="Select the manifest.json inside the directory." data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                    <p style={{ "--framer-font-size": "12px", "--framer-line-height": "16px" }} className="framer-text">
                      <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "\"Inter\"", "--framer-font-size": "12px", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(102, 102, 102, 1)" }} className="framer-text">
                        {"Select the "}
                      </span>
                      <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--framer-font-size": "12px", "--framer-font-weight": "700", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(51, 51, 51, 1)" }} className="framer-text">
                        {"manifest.json"}
                      </span>
                      <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "\"Inter\"", "--framer-font-size": "12px", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(102, 102, 102, 1)" }} className="framer-text">
                        {" inside the directory."}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="framer-y224ae" data-framer-name="Section">
        <div className="framer-1uus6d7" data-framer-name="Heading 3">
          <div className="framer-byo5jt" data-framer-name="Project Outcomes" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
            <p style={{ "--framer-font-size": "20px", "--framer-line-height": "28px" }} className="framer-text">
              <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--framer-font-size": "20px", "--framer-font-weight": "700", "--framer-letter-spacing": "-0.5px", "--framer-text-color": "rgba(255, 255, 255, 1)" }} className="framer-text">
                {"Project Outcomes"}
              </span>
            </p>
          </div>
        </div>
        <div className="framer-1ap8h5k" data-framer-name="Container">
          <div className="framer-1odthmg" data-framer-name="Container">
            <div className="framer-11qxi1" data-framer-name="Container">
              <div className="framer-af0sqw" data-framer-name="Text">
                <div className="framer-1ghjz5c" data-framer-name="schedule" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p style={{ "--framer-font-size": "12px" }} className="framer-text">
                    <span style={{ "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==", "--framer-font-family": "\"Roboto Mono\"", "--framer-font-size": "12px", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(249, 249, 249, 1)" }} className="framer-text">
                      {"schedule"}
                    </span>
                  </p>
                </div>
              </div>
              <div className="framer-8p2ln5" data-framer-name="Heading 4">
                <div className="framer-vzcm22" data-framer-name="Time Optimization" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p style={{ "--framer-font-size": "16px", "--framer-line-height": "20px" }} className="framer-text">
                    <span style={{ "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--framer-font-size": "16px", "--framer-font-weight": "500", "--framer-letter-spacing": "0.55px", "--framer-text-color": "rgba(255, 255, 255, 1)" }} className="framer-text">
                      {"Time Optimization"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="framer-gbn5fb" data-framer-name="Paragraph">
              <div className="framer-15c60d" data-framer-name="Average setup time per component dropped from 2 mi" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--framer-font-size": "14px", "--framer-line-height": "18px" }} className="framer-text">
                  <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "\"Inter\"", "--framer-font-size": "14px", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(165, 165, 165, 1)" }} className="framer-text">
                    {"Average setup time per component dropped from 2 minutes to under 2 seconds. Designers skip pixel measurements completely. "}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="framer-f2b56t" data-framer-name="Container">
            <div className="framer-8l5kfh" data-framer-name="Container">
              <div className="framer-1yz12v5" data-framer-name="Text">
                <div className="framer-x8fy6l" data-framer-name="layers" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p style={{ "--framer-font-size": "12px" }} className="framer-text">
                    <span style={{ "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==", "--framer-font-family": "\"Roboto Mono\"", "--framer-font-size": "12px", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(249, 249, 249, 1)" }} className="framer-text">
                      {"layers"}
                    </span>
                  </p>
                </div>
              </div>
              <div className="framer-17tmtph" data-framer-name="Heading 4">
                <div className="framer-7zxoo3" data-framer-name="Precision Fidelity" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p style={{ "--framer-font-size": "16px", "--framer-line-height": "20px" }} className="framer-text">
                    <span style={{ "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--framer-font-size": "16px", "--framer-font-weight": "500", "--framer-letter-spacing": "0.55px", "--framer-text-color": "rgba(255, 255, 255, 1)" }} className="framer-text">
                      {"Precision Fidelity"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="framer-shnhpj" data-framer-name="Paragraph">
              <div className="framer-4x2zcj" data-framer-name="All text elements, margins, paddings, backgrounds," data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--framer-font-size": "14px", "--framer-line-height": "18px" }} className="framer-text">
                  <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "\"Inter\"", "--framer-font-size": "14px", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(165, 165, 165, 1)" }} className="framer-text">
                    {"All text elements, margins, paddings, backgrounds, and auto-layouts carry over to Figma with 100% vector accuracy. "}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="framer-93223s" data-framer-name="Container">
            <div className="framer-nnaihi" data-framer-name="Container">
              <div className="framer-1f6s7hn" data-framer-name="Text">
                <div className="framer-urt6h2" data-framer-name="sync_alt" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p style={{ "--framer-font-size": "12px" }} className="framer-text">
                    <span style={{ "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==", "--framer-font-family": "\"Roboto Mono\"", "--framer-font-size": "12px", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(249, 249, 249, 1)" }} className="framer-text">
                      {"sync_alt"}
                    </span>
                  </p>
                </div>
              </div>
              <div className="framer-1gshsy9" data-framer-name="Heading 4">
                <div className="framer-15uhncq" data-framer-name="Seamless Flow" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p style={{ "--framer-font-size": "16px", "--framer-line-height": "20px" }} className="framer-text">
                    <span style={{ "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--framer-font-size": "16px", "--framer-font-weight": "500", "--framer-letter-spacing": "0.55px", "--framer-text-color": "rgba(255, 255, 255, 1)" }} className="framer-text">
                      {"Seamless Flow"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="framer-16h1aw7" data-framer-name="Paragraph">
              <div className="framer-14r5p76" data-framer-name="Drastically reduced switching overhead. Capture in" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--framer-font-size": "14px", "--framer-line-height": "18px" }} className="framer-text">
                  <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "\"Inter\"", "--framer-font-size": "14px", "--framer-letter-spacing": "0px", "--framer-text-color": "rgba(165, 165, 165, 1)" }} className="framer-text">
                    {"Drastically reduced switching overhead. Capture inspiration directly in the browser and drop it onto the canvas instantly. "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
