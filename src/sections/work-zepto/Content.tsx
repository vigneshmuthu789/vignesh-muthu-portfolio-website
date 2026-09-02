"use client";

import React, { Suspense, useState, useEffect } from "react";

/** Generated from the vignesh section "Content".
 *  Renders to the same DOM as the original — the Suspense boundaries here are
 *  vignesh's hydration markers, so removing them would break its runtime.
 *  Everything else is ordinary JSX: edit it like any other component. */
export default function Content() {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const ids = ["content 1", "content 2", "content 3", "content 4", "content 5", "content 6"];
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepNum = parseInt(entry.target.id.replace("content ", ""), 10);
            if (!isNaN(stepNum)) {
              setActiveStep(stepNum);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-30% 0px -30% 0px",
        threshold: 0.2,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <div className="vignesh-18oknc3" data-vignesh-name="Content">
      <div className="vignesh-1unbyey" data-vignesh-name="Intro" id="intro">
        <div className="vignesh-1m6k5b7" data-vignesh-name="Zepto Sous-Chef: Designing a Context-Aware Cooking Companion" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
          <p dir="auto" style={{ "--font-selector": "SW50ZXItQm9sZA==", "--vignesh-font-size": "56px", "--vignesh-font-weight": "700", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgb(51, 51, 51)" }} className="vignesh-text">
            {"Zepto Sous-Chef:"}
            <span style={{ "--vignesh-text-color": "rgb(0, 121, 231)" }} className="vignesh-text">
              {" "}
            </span>
          </p>
          <p dir="auto" style={{ "--vignesh-font-size": "56px", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgb(102, 102, 102)" }} className="vignesh-text">
            {"Designing a Context-Aware Cooking Companion"}
          </p>
        </div>
        <div className="vignesh-13vsq0r" data-vignesh-name="Redesigning Zepto's evening flow to eliminate late-night decision fatigue, bridging the gap between peak dinner inspiration and open-fridge reality." data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
          <p style={{ "--vignesh-font-size": "20px", "--vignesh-line-height": "26px" }} className="vignesh-text">
            <span style={{ "--font-selector": "SW50ZXI=", "--vignesh-font-family": "\"Inter\"", "--vignesh-font-size": "20px", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(102, 102, 102, 1)" }} className="vignesh-text">
              {"Redesigning Zepto's evening flow to eliminate late-night decision fatigue, bridging the gap between peak dinner inspiration and open-fridge reality."}
            </span>
          </p>
        </div>
        <div className="vignesh-147692" data-vignesh-name="Frame 1739329468">
          <div className="vignesh-1agy9u" data-border="true" data-vignesh-name="Frame 103">
            <div className="vignesh-fu5yik" data-vignesh-name="AI User Experience" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
              <p style={{ "--vignesh-font-size": "13px" }} className="vignesh-text">
                <span style={{ "--font-selector": "R0Y7U0YgUHJvLXJlZ3VsYXI=", "--vignesh-font-family": "\"SF Pro\"", "--vignesh-font-size": "13px", "--vignesh-text-color": "rgba(51, 51, 51, 1)" }} className="vignesh-text">
                  {"AI User Experience"}
                </span>
              </p>
            </div>
          </div>
          <div className="vignesh-qxptlz" data-border="true" data-vignesh-name="Frame 104">
            <div className="vignesh-10t61qz" data-vignesh-name="Interaction Design" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
              <p style={{ "--vignesh-font-size": "13px" }} className="vignesh-text">
                <span style={{ "--font-selector": "R0Y7U0YgUHJvLXJlZ3VsYXI=", "--vignesh-font-family": "\"SF Pro\"", "--vignesh-font-size": "13px", "--vignesh-text-color": "rgba(51, 51, 51, 1)" }} className="vignesh-text">
                  {"Interaction Design"}
                </span>
              </p>
            </div>
          </div>
          <div className="vignesh-1u0zuj4" data-border="true" data-vignesh-name="Frame 105">
            <div className="vignesh-1nq80oa" data-vignesh-name="Product Strategy" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
              <p style={{ "--vignesh-font-size": "13px" }} className="vignesh-text">
                <span style={{ "--font-selector": "R0Y7U0YgUHJvLXJlZ3VsYXI=", "--vignesh-font-family": "\"SF Pro\"", "--vignesh-font-size": "13px", "--vignesh-text-color": "rgba(51, 51, 51, 1)" }} className="vignesh-text">
                  {"Product Strategy"}
                </span>
              </p>
            </div>
          </div>
          <div className="vignesh-b2848h" data-border="true" data-vignesh-name="Frame 106">
            <div className="vignesh-3mufh6" data-vignesh-name="Google PAIR Framework" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
              <p style={{ "--vignesh-font-size": "13px" }} className="vignesh-text">
                <span style={{ "--font-selector": "R0Y7U0YgUHJvLXJlZ3VsYXI=", "--vignesh-font-family": "\"SF Pro\"", "--vignesh-font-size": "13px", "--vignesh-text-color": "rgba(51, 51, 51, 1)" }} className="vignesh-text">
                  {"Google PAIR Framework"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="vignesh-v7h5y9" data-vignesh-name="Overview" id="overview">
        <div className="vignesh-1ko9ahi" data-vignesh-name="Details">
          <div className="vignesh-5mlrtt" data-vignesh-name="Frame 1739329469">
            <div className="vignesh-qibtl3" data-vignesh-name="Overview" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
              <p style={{ "--vignesh-font-size": "16px" }} className="vignesh-text">
                <span style={{ "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNTAw", "--vignesh-font-family": "\"Roboto Mono\"", "--vignesh-font-size": "16px", "--vignesh-font-weight": "500", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(102, 102, 102, 1)" }} className="vignesh-text">
                  {"Overview"}
                </span>
              </p>
            </div>
            <div className="vignesh-cm5rmv" data-vignesh-name="The Evening Rush" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
              <p style={{ "--vignesh-font-size": "24px" }} className="vignesh-text">
                <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--vignesh-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--vignesh-font-size": "24px", "--vignesh-font-weight": "700", "--vignesh-text-color": "rgba(51, 51, 51, 1)" }} className="vignesh-text">
                  {"The Evening Rush"}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="vignesh-1m75i1" data-border="true" data-vignesh-name="Metricx">
          <div className="vignesh-eg4x5c" data-vignesh-name="01">
            <div className="vignesh-1dw61pb" data-vignesh-name="77%" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
              <p style={{ "--vignesh-font-size": "28px", "--vignesh-line-height": "58px", "--vignesh-text-alignment": "center" }} className="vignesh-text">
                <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--vignesh-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--vignesh-font-size": "28px", "--vignesh-font-weight": "700", "--vignesh-text-color": "rgba(51, 51, 51, 1)" }} className="vignesh-text">
                  {"77%"}
                </span>
              </p>
            </div>
            <div className="vignesh-121el19" data-vignesh-name="Frame 1739329471">
              <div className="vignesh-8e6fr9" data-vignesh-name="The 8 PM Fridge Stare" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--vignesh-font-size": "16px", "--vignesh-line-height": "24px", "--vignesh-text-alignment": "center" }} className="vignesh-text">
                  <span style={{ "--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--vignesh-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--vignesh-font-size": "16px", "--vignesh-font-weight": "600", "--vignesh-text-color": "rgba(107, 38, 191, 1)", "--vignesh-text-transform": "uppercase" }} className="vignesh-text">
                    {"The 8 PM Fridge Stare"}
                  </span>
                </p>
              </div>
              <div className="vignesh-1lueal0" data-vignesh-name="77% of working adults experience decision fatigue at night. Tired from commutes, they stare at empty shelves and drop off to Zomato/Swiggy food delivery apps." data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--vignesh-font-size": "16px", "--vignesh-line-height": "24px", "--vignesh-text-alignment": "center" }} className="vignesh-text">
                  <span style={{ "--font-selector": "SW50ZXI=", "--vignesh-font-family": "\"Inter\"", "--vignesh-font-size": "16px", "--vignesh-text-color": "rgba(102, 102, 102, 1)" }} className="vignesh-text">
                    {"77% of working adults experience decision fatigue at night. Tired from commutes, they stare at empty shelves and drop off to Zomato/Swiggy food delivery apps."}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="ssr-variant hidden-1g4wfox">
            <div data-vignesh-component-type="SVG" data-vignesh-name="Line 1" parentsize="0" _constraints="[object Object]" rotation="0" shadows="" className="vignesh-ezw5f3" aria-hidden="true" style={{ imageRendering: "pixelated", flexShrink: "0", fill: "rgba(0,0,0,1)", color: "rgba(0,0,0,1)" }}>
              <div className="svgContainer" style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 3 308">
                  <use href="#svg1698910003_283" />
                </svg>
              </div>
            </div>
          </div>
          <div className="ssr-variant hidden-1uxv7jj">
            <div data-vignesh-component-type="SVG" data-vignesh-name="Line 1" parentsize="0" _constraints="[object Object]" rotation="0" shadows="" className="vignesh-ezw5f3" aria-hidden="true" style={{ imageRendering: "pixelated", flexShrink: "0", fill: "rgba(0,0,0,1)", color: "rgba(0,0,0,1)", transform: "rotate(-180deg)" }}>
              <div className="svgContainer" style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 3 308">
                  <use href="#svg1698910003_283" />
                </svg>
              </div>
            </div>
          </div>
          <div className="vignesh-sdubj5" data-vignesh-name="02">
            <div className="vignesh-1ymxp2n" data-vignesh-name="2 Taps" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
              <p style={{ "--vignesh-font-size": "28px", "--vignesh-line-height": "58px", "--vignesh-text-alignment": "center" }} className="vignesh-text">
                <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--vignesh-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--vignesh-font-size": "28px", "--vignesh-font-weight": "700", "--vignesh-text-color": "rgba(51, 51, 51, 1)" }} className="vignesh-text">
                  {"2 Taps"}
                </span>
              </p>
            </div>
            <div className="vignesh-o44ovk" data-vignesh-name="Frame 1739329472">
              <div className="vignesh-1tndu04" data-vignesh-name="Ingestion to Match" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--vignesh-font-size": "16px", "--vignesh-line-height": "24px", "--vignesh-text-alignment": "center" }} className="vignesh-text">
                  <span style={{ "--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--vignesh-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--vignesh-font-size": "16px", "--vignesh-font-weight": "600", "--vignesh-text-color": "rgba(107, 38, 191, 1)", "--vignesh-text-transform": "uppercase" }} className="vignesh-text">
                    {"Ingestion to Match"}
                  </span>
                </p>
              </div>
              <div className="vignesh-qlk251" data-vignesh-name="Users capture shelves with a camera scan or paste a recipe link. The AI matches ingredients against nearby dark store inventory to create a Have/Missing checklist." data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--vignesh-font-size": "16px", "--vignesh-line-height": "24px", "--vignesh-text-alignment": "center" }} className="vignesh-text">
                  <span style={{ "--font-selector": "SW50ZXI=", "--vignesh-font-family": "\"Inter\"", "--vignesh-font-size": "16px", "--vignesh-text-color": "rgba(102, 102, 102, 1)" }} className="vignesh-text">
                    {"Users capture shelves with a camera scan or paste a recipe link. The AI matches ingredients against nearby dark store inventory to create a Have/Missing checklist."}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="ssr-variant hidden-1g4wfox">
            <div data-vignesh-component-type="SVG" data-vignesh-name="Line 2" parentsize="0" _constraints="[object Object]" rotation="0" shadows="" className="vignesh-1nn9hzv" aria-hidden="true" style={{ imageRendering: "pixelated", flexShrink: "0", fill: "rgba(0,0,0,1)", color: "rgba(0,0,0,1)" }}>
              <div className="svgContainer" style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 3 308">
                  <use href="#svg1698910003_283" />
                </svg>
              </div>
            </div>
          </div>
          <div className="ssr-variant hidden-1uxv7jj">
            <div data-vignesh-component-type="SVG" data-vignesh-name="Line 2" parentsize="0" _constraints="[object Object]" rotation="0" shadows="" className="vignesh-1nn9hzv" aria-hidden="true" style={{ imageRendering: "pixelated", flexShrink: "0", fill: "rgba(0,0,0,1)", color: "rgba(0,0,0,1)", transform: "rotate(-360deg)" }}>
              <div className="svgContainer" style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 3 308">
                  <use href="#svg1698910003_283" />
                </svg>
              </div>
            </div>
          </div>
          <div className="vignesh-5tp3v1" data-vignesh-name="03">
            <div className="vignesh-513v52" data-vignesh-name="₹350+" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
              <p style={{ "--vignesh-font-size": "32px", "--vignesh-line-height": "58px", "--vignesh-text-alignment": "center" }} className="vignesh-text">
                <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--vignesh-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--vignesh-font-size": "28px", "--vignesh-font-weight": "700", "--vignesh-text-color": "rgba(51, 51, 51, 1)" }} className="vignesh-text">
                  {"₹350"}
                </span>
                <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--vignesh-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--vignesh-font-size": "32px", "--vignesh-font-weight": "700", "--vignesh-text-color": "rgba(51, 51, 51, 1)" }} className="vignesh-text">
                  {"+"}
                </span>
              </p>
            </div>
            <div className="vignesh-142mad4" data-vignesh-name="Frame 1739329473">
              <div className="vignesh-1rw5fhl" data-vignesh-name="From Loss to Profit" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--vignesh-font-size": "16px", "--vignesh-line-height": "24px", "--vignesh-text-alignment": "center" }} className="vignesh-text">
                  <span style={{ "--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--vignesh-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--vignesh-font-size": "16px", "--vignesh-font-weight": "600", "--vignesh-text-color": "rgba(107, 38, 191, 1)", "--vignesh-text-transform": "uppercase" }} className="vignesh-text">
                    {"From Loss to Profit"}
                  </span>
                </p>
              </div>
              <div className="vignesh-hw3usj" data-vignesh-name="Converts unprofitable single-item emergency orders (e.g. ₹34 onions costing ₹49 net loss) into positive-margin baskets by bundling missing recipe items." data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--vignesh-font-size": "16px", "--vignesh-line-height": "24px", "--vignesh-text-alignment": "center" }} className="vignesh-text">
                  <span style={{ "--font-selector": "SW50ZXI=", "--vignesh-font-family": "\"Inter\"", "--vignesh-font-size": "16px", "--vignesh-text-color": "rgba(102, 102, 102, 1)" }} className="vignesh-text">
                    {"Converts unprofitable single-item emergency orders (e.g. ₹34 onions costing ₹49 net loss) into positive-margin baskets by bundling missing recipe items."}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vignesh-p5mlvc" data-vignesh-name="Overview" id="kitchen-chaos">
        <div className="vignesh-ijl81r" data-vignesh-name="Details">
          <div className="vignesh-164y90" data-vignesh-name="Frame 1739329469">
            <div className="vignesh-8i1igy" data-vignesh-name="Kitchen Chaos" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
              <p style={{ "--vignesh-font-size": "16px" }} className="vignesh-text">
                <span style={{ "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNTAw", "--vignesh-font-family": "\"Roboto Mono\"", "--vignesh-font-size": "16px", "--vignesh-font-weight": "500", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(102, 102, 102, 1)" }} className="vignesh-text">
                  {"Kitchen Chaos"}
                </span>
              </p>
            </div>
            <div className="vignesh-1qbtfnz" data-vignesh-name="Frame 1739329470">
              <div className="vignesh-1239yt7" data-vignesh-name="Friction Points in the Evening Kitchen" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--vignesh-font-size": "24px" }} className="vignesh-text">
                  <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--vignesh-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--vignesh-font-size": "24px", "--vignesh-font-weight": "700", "--vignesh-text-color": "rgba(51, 51, 51, 1)" }} className="vignesh-text">
                    {"Friction Points in"}
                  </span>
                </p>
                <p style={{ "--vignesh-font-size": "24px" }} className="vignesh-text">
                  <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--vignesh-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--vignesh-font-size": "24px", "--vignesh-font-weight": "700", "--vignesh-text-color": "rgba(51, 51, 51, 1)" }} className="vignesh-text">
                    {"the Evening Kitchen"}
                  </span>
                </p>
              </div>
              <div className="vignesh-1yo16dc" data-vignesh-name="Quick-commerce apps assume buying ingredients is transactional. Kitchen interviews with 24 users uncovered three systemic breakdowns." data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--vignesh-font-size": "16px", "--vignesh-line-height": "24px" }} className="vignesh-text">
                  <span style={{ "--font-selector": "SW50ZXItTGlnaHQ=", "--vignesh-font-family": "\"Inter-Light\", \"Inter\", sans-serif", "--vignesh-font-size": "16px", "--vignesh-font-weight": "300", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(51, 51, 51, 1)" }} className="vignesh-text">
                    {"Quick-commerce apps assume buying ingredients is transactional. Kitchen interviews with 24 users uncovered three systemic breakdowns."}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="vignesh-174bnhf" data-vignesh-name="Frame 1739329479">
          <div className="vignesh-rbmodc" data-border="true" data-vignesh-name="Frame 1739329101">
            <div className="vignesh-s8ko7n" data-vignesh-name="Frame 1739329475">
              <div className="vignesh-16wk6z3" data-vignesh-name="Ellipse 775" />
              <div data-vignesh-component-type="SVG" data-vignesh-name="ArrowsSplit" parentsize="0" _constraints="[object Object]" rotation="0" shadows="" className="vignesh-uxnxja" aria-hidden="true" style={{ imageRendering: "pixelated", flexShrink: "0", fill: "rgba(0,0,0,1)", color: "rgba(0,0,0,1)" }}>
                <div className="svgContainer" style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                  <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 32 32">
                    <use href="#svg1613602475_982" />
                  </svg>
                </div>
              </div>
              <div className="vignesh-bn1zra" data-vignesh-name="Frame 1739329474">
                <div className="vignesh-jz6bkq" data-vignesh-name="Fragmented Funnels" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p style={{ "--vignesh-font-size": "20px", "--vignesh-line-height": "26px" }} className="vignesh-text">
                    <span style={{ "--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--vignesh-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--vignesh-font-size": "20px", "--vignesh-font-weight": "600", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(102, 102, 102, 1)" }} className="vignesh-text">
                      {"Fragmented Funnels"}
                    </span>
                  </p>
                </div>
                <div className="vignesh-452ube" data-vignesh-name="Users juggle multiple sources just to figure out dinner, creating disjointed sessions." data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p style={{ "--vignesh-font-size": "14px", "--vignesh-line-height": "20px" }} className="vignesh-text">
                    <span style={{ "--font-selector": "SW50ZXI=", "--vignesh-font-family": "\"Inter\"", "--vignesh-font-size": "14px", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(51, 51, 51, 1)" }} className="vignesh-text">
                      {"Users juggle multiple sources just to figure out dinner, creating disjointed sessions."}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="vignesh-n8c0ig" data-border="true" data-vignesh-name="Frame 1739329476">
              <div className="vignesh-1p486jp" data-vignesh-name="Frame 1739329474">
                <div data-vignesh-component-type="SVG" data-vignesh-name="InstagramLogo" parentsize="0" _constraints="[object Object]" rotation="0" shadows="" className="vignesh-s4ovxk" aria-hidden="true" style={{ imageRendering: "pixelated", flexShrink: "0", fill: "rgba(0,0,0,1)", color: "rgba(0,0,0,1)" }}>
                  <div className="svgContainer" style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                    <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 16 16">
                      <use href="#svg-575168103_1082" />
                    </svg>
                  </div>
                </div>
                <div className="vignesh-izmmny" data-vignesh-name="Insta Reel" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p style={{ "--vignesh-font-size": "12px", "--vignesh-line-height": "16px" }} className="vignesh-text">
                    <span style={{ "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNTAw", "--vignesh-font-family": "\"Roboto Mono\"", "--vignesh-font-size": "12px", "--vignesh-font-weight": "500", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(92, 92, 88, 1)" }} className="vignesh-text">
                      {"Insta Reel"}
                    </span>
                  </p>
                </div>
              </div>
              <div className="ssr-variant hidden-1g4wfox">
                <div data-vignesh-component-type="SVG" data-vignesh-name="ArrowDown" parentsize="0" _constraints="[object Object]" rotation="0" shadows="" className="vignesh-1jpx1tv" aria-hidden="true" style={{ imageRendering: "pixelated", flexShrink: "0", fill: "rgba(0,0,0,1)", color: "rgba(0,0,0,1)" }}>
                  <div className="svgContainer" style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                    <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 25 24">
                      <use href="#svg1266743845_695" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="ssr-variant hidden-1uxv7jj">
                <div data-vignesh-component-type="SVG" data-vignesh-name="ArrowDown" parentsize="0" _constraints="[object Object]" rotation="0" shadows="" className="vignesh-1jpx1tv" aria-hidden="true" style={{ imageRendering: "pixelated", flexShrink: "0", fill: "rgba(0,0,0,1)", color: "rgba(0,0,0,1)", transform: "rotate(90deg)" }}>
                  <div className="svgContainer" style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                    <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 25 24">
                      <use href="#svg1266743845_695" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="vignesh-1s8571o" data-vignesh-name="Frame 1739329475">
                <div data-vignesh-component-type="SVG" data-vignesh-name="Notepad" parentsize="0" _constraints="[object Object]" rotation="0" shadows="" className="vignesh-1hir8xo" aria-hidden="true" style={{ imageRendering: "pixelated", flexShrink: "0", fill: "rgba(0,0,0,1)", color: "rgba(0,0,0,1)" }}>
                  <div className="svgContainer" style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                    <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 16 16">
                      <use href="#svg-1856367717_1480" />
                    </svg>
                  </div>
                </div>
                <div className="vignesh-7vb37a" data-vignesh-name="Notepad Sync" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p style={{ "--vignesh-font-size": "12px", "--vignesh-line-height": "16px" }} className="vignesh-text">
                    <span style={{ "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNTAw", "--vignesh-font-family": "\"Roboto Mono\"", "--vignesh-font-size": "12px", "--vignesh-font-weight": "500", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(92, 92, 88, 1)" }} className="vignesh-text">
                      {"Notepad Sync"}
                    </span>
                  </p>
                </div>
              </div>
              <div className="ssr-variant hidden-1g4wfox">
                <div data-vignesh-component-type="SVG" data-vignesh-name="ArrowDown" parentsize="0" _constraints="[object Object]" rotation="0" shadows="" className="vignesh-1bcygaj" aria-hidden="true" style={{ imageRendering: "pixelated", flexShrink: "0", fill: "rgba(0,0,0,1)", color: "rgba(0,0,0,1)" }}>
                  <div className="svgContainer" style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                    <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 25 24">
                      <use href="#svg1707494249_695" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="ssr-variant hidden-1uxv7jj">
                <div data-vignesh-component-type="SVG" data-vignesh-name="ArrowDown" parentsize="0" _constraints="[object Object]" rotation="0" shadows="" className="vignesh-1bcygaj" aria-hidden="true" style={{ imageRendering: "pixelated", flexShrink: "0", fill: "rgba(0,0,0,1)", color: "rgba(0,0,0,1)", transform: "rotate(90deg)" }}>
                  <div className="svgContainer" style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                    <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 25 24">
                      <use href="#svg1707494249_695" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="vignesh-5cciww" data-vignesh-name="Frame 1739329476">
                <div data-vignesh-component-type="SVG" data-vignesh-name="FileMagnifyingGlass" parentsize="0" _constraints="[object Object]" rotation="0" shadows="" className="vignesh-1faosgv" aria-hidden="true" style={{ imageRendering: "pixelated", flexShrink: "0", fill: "rgba(0,0,0,1)", color: "rgba(0,0,0,1)" }}>
                  <div className="svgContainer" style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                    <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 16 16">
                      <use href="#svg-1632734606_1364" />
                    </svg>
                  </div>
                </div>
                <div className="vignesh-c11598" data-vignesh-name="SKU Search" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p style={{ "--vignesh-font-size": "12px", "--vignesh-line-height": "16px" }} className="vignesh-text">
                    <span style={{ "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNTAw", "--vignesh-font-family": "\"Roboto Mono\"", "--vignesh-font-size": "12px", "--vignesh-font-weight": "500", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(92, 92, 88, 1)" }} className="vignesh-text">
                      {"SKU Search"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="vignesh-zxr18q" data-vignesh-name={"\"I look inside my fridge, look at recipes online, and then manually search on Zepto — nothing feels connected.\""} data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
              <p style={{ "--vignesh-font-size": "12px", "--vignesh-line-height": "20px", "--vignesh-text-alignment": "center" }} className="vignesh-text">
                <span style={{ "--font-selector": "SW50ZXItSXRhbGlj", "--vignesh-font-family": "\"Inter-Italic\", \"Inter\", sans-serif", "--vignesh-font-size": "12px", "--vignesh-font-style": "italic", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(51, 51, 51, 1)" }} className="vignesh-text">
                  {"\"I look inside my fridge, look at recipes online, and then manually search on Zepto — nothing feels connected.\""}
                </span>
              </p>
            </div>
          </div>
          <div className="vignesh-t8af3f" data-vignesh-name="Frame 1739329478">
            <div className="vignesh-1ypj08y" data-border="true" data-vignesh-name="Frame 1739329102">
              <div className="vignesh-m1bf4" data-vignesh-name="Ellipse 775" />
              <div className="vignesh-q7ivhe" data-vignesh-name="Frame 1739329475">
                <div data-vignesh-component-type="SVG" data-vignesh-name="Scales" parentsize="0" _constraints="[object Object]" rotation="0" shadows="" className="vignesh-1mch88o" aria-hidden="true" style={{ imageRendering: "pixelated", flexShrink: "0", fill: "rgba(0,0,0,1)", color: "rgba(0,0,0,1)" }}>
                  <div className="svgContainer" style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                    <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 32 32">
                      <use href="#svg810088039_1280" />
                    </svg>
                  </div>
                </div>
                <div className="vignesh-t5zux" data-vignesh-name="Frame 1739329474">
                  <div className="vignesh-nikstr" data-vignesh-name="Ingredient Quantity Guesswork" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                    <p style={{ "--vignesh-font-size": "20px", "--vignesh-line-height": "26px" }} className="vignesh-text">
                      <span style={{ "--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--vignesh-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--vignesh-font-size": "20px", "--vignesh-font-weight": "600", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(102, 102, 102, 1)" }} className="vignesh-text">
                        {"Ingredient Quantity Guesswork"}
                      </span>
                    </p>
                  </div>
                  <div className="vignesh-xun0if" data-vignesh-name="Manual shelf checking lacks precise volume validation, causing excessive food waste or ingredient stockouts" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                    <p style={{ "--vignesh-font-size": "14px", "--vignesh-line-height": "20px" }} className="vignesh-text">
                      <span style={{ "--font-selector": "SW50ZXI=", "--vignesh-font-family": "\"Inter\"", "--vignesh-font-size": "14px", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(51, 51, 51, 1)" }} className="vignesh-text">
                        {"Manual shelf checking lacks precise volume validation, causing excessive food waste or ingredient stockouts"}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="vignesh-hd6c7w" data-border="true" data-vignesh-name="Frame 1739329476">
                <div className="vignesh-jafae3" data-vignesh-name="Frame 1739329474">
                  <div className="vignesh-1r9sgmn" data-vignesh-name="Curd Stock" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                    <p style={{ "--vignesh-font-size": "12px" }} className="vignesh-text">
                      <span style={{ "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNTAw", "--vignesh-font-family": "\"Roboto Mono\"", "--vignesh-font-size": "12px", "--vignesh-font-weight": "500", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(92, 92, 88, 1)" }} className="vignesh-text">
                        {"Curd Stock"}
                      </span>
                    </p>
                  </div>
                  <div className="vignesh-pwq90q" data-vignesh-name="40% (80g / 200g needed)" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                    <p style={{ "--vignesh-font-size": "12px" }} className="vignesh-text">
                      <span style={{ "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==", "--vignesh-font-family": "\"Roboto Mono\"", "--vignesh-font-size": "12px", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(92, 92, 88, 1)" }} className="vignesh-text">
                        {"40% (80g / 200g needed)"}
                      </span>
                    </p>
                  </div>
                </div>
                <div data-vignesh-component-type="SVG" data-vignesh-name="Frame 1739329477" parentsize="0" _constraints="[object Object]" rotation="0" shadows="" className="vignesh-1kd2o6k" aria-hidden="true" style={{ imageRendering: "pixelated", flexShrink: "0", fill: "rgba(0,0,0,1)", color: "rgba(0,0,0,1)" }}>
                  <div className="svgContainer" style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                    <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 275 5">
                      <use href="#svg-653370433_483" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="vignesh-9e8zq1" data-vignesh-name={"\"I don't know if the pack of curd I have is enough, so I guess and end up wasting food.\""} data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--vignesh-font-size": "12px", "--vignesh-line-height": "20px", "--vignesh-text-alignment": "center" }} className="vignesh-text">
                  <span style={{ "--font-selector": "SW50ZXItSXRhbGlj", "--vignesh-font-family": "\"Inter-Italic\", \"Inter\", sans-serif", "--vignesh-font-size": "12px", "--vignesh-font-style": "italic", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(51, 51, 51, 1)" }} className="vignesh-text">
                    {"\"I don't know if the pack of curd I have is enough, so I guess and end up wasting food.\""}
                  </span>
                </p>
              </div>
            </div>
            <div className="vignesh-86meo4" data-border="true" data-vignesh-name="Frame 1739329103">
              <div className="vignesh-9k78zh" data-vignesh-name="Ellipse 775" />
              <div className="vignesh-fasef3" data-vignesh-name="Frame 1739329475">
                <div data-vignesh-component-type="SVG" data-vignesh-name="EyeSlash" parentsize="0" _constraints="[object Object]" rotation="0" shadows="" className="vignesh-1i9ic6o" aria-hidden="true" style={{ imageRendering: "pixelated", flexShrink: "0", fill: "rgba(0,0,0,1)", color: "rgba(0,0,0,1)" }}>
                  <div className="svgContainer" style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                    <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 32 32">
                      <use href="#svg1964146950_1867" />
                    </svg>
                  </div>
                </div>
                <div className="vignesh-11mfbo3" data-vignesh-name="Frame 1739329474">
                  <div className="vignesh-minv2r" data-vignesh-name="Black-Box Skepticism" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                    <p style={{ "--vignesh-font-size": "20px", "--vignesh-line-height": "26px" }} className="vignesh-text">
                      <span style={{ "--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--vignesh-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--vignesh-font-size": "20px", "--vignesh-font-weight": "600", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(102, 102, 102, 1)" }} className="vignesh-text">
                        {"Black-Box Skepticism"}
                      </span>
                    </p>
                  </div>
                  <div className="vignesh-sawwht" data-vignesh-name="Users resist automated baskets that lack transparency. Auto-adding items to checkout creates friction and breaks system trust." data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                    <p style={{ "--vignesh-font-size": "14px", "--vignesh-line-height": "20px" }} className="vignesh-text">
                      <span style={{ "--font-selector": "SW50ZXI=", "--vignesh-font-family": "\"Inter\"", "--vignesh-font-size": "14px", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(51, 51, 51, 1)" }} className="vignesh-text">
                        {"Users resist automated baskets that lack transparency. Auto-adding items to checkout creates friction and breaks system trust."}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="vignesh-iz7ys0" data-border="true" data-vignesh-name="Frame 1739329476">
                <div className="vignesh-17h22hj" data-vignesh-name="Frame 1739329474">
                  <div data-vignesh-component-type="SVG" data-vignesh-name="WarningOctagon" parentsize="0" _constraints="[object Object]" rotation="0" shadows="" className="vignesh-r27ilu" aria-hidden="true" style={{ imageRendering: "pixelated", flexShrink: "0", fill: "rgba(0,0,0,1)", color: "rgba(0,0,0,1)" }}>
                    <div className="svgContainer" style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                      <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 16 16">
                        <use href="#svg-371899041_1686" />
                      </svg>
                    </div>
                  </div>
                  <div className="vignesh-1u4s575" data-vignesh-name="Auto-adding 4 suspected items to checkout basket." data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                    <p style={{ "--vignesh-font-size": "12px", "--vignesh-line-height": "18px" }} className="vignesh-text">
                      <span style={{ "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==", "--vignesh-font-family": "\"Roboto Mono\"", "--vignesh-font-size": "12px", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(138, 138, 133, 1)" }} className="vignesh-text">
                        {"Auto-adding 4 suspected items to checkout basket."}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="vignesh-17klkna" data-vignesh-name={"\"I don't trust apps that auto-add things to my cart.\""} data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--vignesh-font-size": "12px", "--vignesh-line-height": "20px", "--vignesh-text-alignment": "center" }} className="vignesh-text">
                  <span style={{ "--font-selector": "SW50ZXItSXRhbGlj", "--vignesh-font-family": "\"Inter-Italic\", \"Inter\", sans-serif", "--vignesh-font-size": "12px", "--vignesh-font-style": "italic", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(51, 51, 51, 1)" }} className="vignesh-text">
                    {"\"I don't trust apps that auto-add things to my cart.\""}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vignesh-1p9ge2h" data-vignesh-name="Overview" id="the-path-of-dinner">
        <div className="vignesh-1tmra1w" data-vignesh-name="Details">
          <div className="vignesh-162oxxs" data-vignesh-name="Frame 1739329469">
            <div className="vignesh-bwydq0" data-vignesh-name="The Path to Dinner" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
              <p dir="auto" style={{ "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNTAw", "--vignesh-font-family": "\"Roboto Mono\", monospace", "--vignesh-font-weight": "500", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgb(102, 102, 102)" }} className="vignesh-text">
                {"The Path to Dinner"}
              </p>
            </div>
            <div className="vignesh-d0v9bg" data-vignesh-name="Frame 1739329470">
              <div className="vignesh-ux5boh" data-vignesh-name="The Core Ingestion Journey" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--vignesh-font-size": "24px" }} className="vignesh-text">
                  <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--vignesh-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--vignesh-font-size": "24px", "--vignesh-font-weight": "700", "--vignesh-text-color": "rgba(51, 51, 51, 1)" }} className="vignesh-text">
                    {"The Core Ingestion Journey"}
                  </span>
                </p>
              </div>
              <div className="vignesh-w4syiq" data-vignesh-name="Four screens. Scan, verify, cook, or eat. Every step reduces friction." data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--vignesh-font-size": "16px", "--vignesh-line-height": "24px" }} className="vignesh-text">
                  <span style={{ "--font-selector": "SW50ZXItTGlnaHQ=", "--vignesh-font-family": "\"Inter-Light\", \"Inter\", sans-serif", "--vignesh-font-size": "16px", "--vignesh-font-weight": "300", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(51, 51, 51, 1)" }} className="vignesh-text">
                    {"Four screens. Scan, verify, cook, or eat. Every step reduces friction."}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="vignesh-pg63fe" data-vignesh-name="Sticky">
          <div className="vignesh-1f2ys1e">
            <div className="ssr-variant">
              <div className="vignesh-5okiih-container" id="content 1" onClick={() => setActiveStep(1)} style={{ cursor: "pointer" }}>
                <div className="vignesh-3E92k vignesh-1yvv383 vignesh-v-1jto3wc" data-border="true" data-vignesh-name="Variant 2" style={{ "--border-bottom-width": "1px", "--border-color": activeStep === 1 ? "rgba(0, 121, 231, 0.8)" : "rgba(230, 230, 230, 0.4)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", width: "100%", opacity: activeStep === 1 ? 1 : 0.35, transition: "opacity 0.3s ease, border-color 0.3s ease, transform 0.3s ease", transform: activeStep === 1 ? "translateX(4px)" : "none" }}>
                  <div className="vignesh-1lwbao" data-vignesh-name="01 / Inbound Capture" data-vignesh-component-type="RichTextContainer" style={{ "--extracted-1w3ko1f": activeStep === 1 ? "rgba(0, 121, 231, 1)" : "rgba(102, 102, 102, 1)", "--vignesh-paragraph-spacing": "12px", transform: "none" }}>
                    <p className="vignesh-text" style={{ "--vignesh-font-size": "16px" }}>
                      <span className="vignesh-text" style={{ "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNTAw", "--vignesh-font-family": "\"Roboto Mono\"", "--vignesh-font-size": "16px", "--vignesh-font-weight": "500", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": activeStep === 1 ? "rgba(0, 121, 231, 1)" : "var(--extracted-1w3ko1f, rgba(102, 102, 102, 1))" }}>
                        {"01 / Inbound Capture"}
                      </span>
                    </p>
                  </div>
                  <div className="vignesh-1wb3ph7" data-vignesh-name="Frame 1739329516">
                    <div className="vignesh-vsm01c" data-vignesh-name="Fridge Ingestion & Sync" data-vignesh-component-type="RichTextContainer" style={{ "--extracted-1w3ko1f": "rgba(51, 51, 51, 1)", "--vignesh-paragraph-spacing": "12px", transform: "none" }}>
                      <p className="vignesh-text" style={{ "--vignesh-font-size": "24px" }}>
                        <span className="vignesh-text" style={{ "--font-selector": "SW50ZXItQm9sZA==", "--vignesh-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--vignesh-font-size": "24px", "--vignesh-font-weight": "700", "--vignesh-text-color": "var(--extracted-1w3ko1f, rgba(51, 51, 51, 1))" }}>
                          {"Fridge Ingestion & Sync"}
                        </span>
                      </p>
                    </div>
                    <div className="vignesh-wc6kw3" data-vignesh-name="An evening home screen card prompts entry. Users scan fridge shelves, paste YouTube links, or import Instagram recipes. Assumed basics toggles skip bulk suggestions." data-vignesh-component-type="RichTextContainer" style={{ "--extracted-1w3ko1f": "rgba(51, 51, 51, 1)", "--vignesh-paragraph-spacing": "12px", transform: "none" }}>
                      <p className="vignesh-text" style={{ "--vignesh-font-size": "16px", "--vignesh-line-height": "24px" }}>
                        <span className="vignesh-text" style={{ "--font-selector": "SW50ZXItTGlnaHQ=", "--vignesh-font-family": "\"Inter-Light\", \"Inter\", sans-serif", "--vignesh-font-size": "16px", "--vignesh-font-weight": "300", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "var(--extracted-1w3ko1f, rgba(51, 51, 51, 1))" }}>
                          {"An evening home screen card prompts entry. Users scan fridge shelves, paste YouTube links, or import Instagram recipes. Assumed basics toggles skip bulk suggestions."}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ssr-variant">
              <div className="vignesh-1mp6xxw-container" id="content 2" onClick={() => setActiveStep(2)} style={{ cursor: "pointer" }}>
                <div className="vignesh-3E92k vignesh-1yvv383 vignesh-v-1jto3wc" data-border="true" data-vignesh-name="Variant 2" style={{ "--border-bottom-width": "1px", "--border-color": activeStep === 2 ? "rgba(0, 121, 231, 0.8)" : "rgba(230, 230, 230, 0.4)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", width: "100%", opacity: activeStep === 2 ? 1 : 0.35, transition: "opacity 0.3s ease, border-color 0.3s ease, transform 0.3s ease", transform: activeStep === 2 ? "translateX(4px)" : "none" }}>
                  <div className="vignesh-1lwbao" data-vignesh-name="01 / Inbound Capture" data-vignesh-component-type="RichTextContainer" style={{ "--extracted-1w3ko1f": activeStep === 2 ? "rgba(0, 121, 231, 1)" : "rgba(102, 102, 102, 1)", "--vignesh-paragraph-spacing": "12px", transform: "none" }}>
                    <p className="vignesh-text" style={{ "--vignesh-font-size": "16px" }}>
                      <span className="vignesh-text" style={{ "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNTAw", "--vignesh-font-family": "\"Roboto Mono\"", "--vignesh-font-size": "16px", "--vignesh-font-weight": "500", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": activeStep === 2 ? "rgba(0, 121, 231, 1)" : "var(--extracted-1w3ko1f, rgba(102, 102, 102, 1))" }}>
                        {"02 / Calibrated Verification"}
                      </span>
                    </p>
                  </div>
                  <div className="vignesh-1wb3ph7" data-vignesh-name="Frame 1739329516">
                    <div className="vignesh-vsm01c" data-vignesh-name="Fridge Ingestion & Sync" data-vignesh-component-type="RichTextContainer" style={{ "--extracted-1w3ko1f": "rgba(51, 51, 51, 1)", "--vignesh-paragraph-spacing": "12px", transform: "none" }}>
                      <p className="vignesh-text" style={{ "--vignesh-font-size": "24px" }}>
                        <span className="vignesh-text" style={{ "--font-selector": "SW50ZXItQm9sZA==", "--vignesh-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--vignesh-font-size": "24px", "--vignesh-font-weight": "700", "--vignesh-text-color": "var(--extracted-1w3ko1f, rgba(51, 51, 51, 1))" }}>
                          {"Interactive Confidence Grid"}
                        </span>
                      </p>
                    </div>
                    <div className="vignesh-wc6kw3" data-vignesh-name="An evening home screen card prompts entry. Users scan fridge shelves, paste YouTube links, or import Instagram recipes. Assumed basics toggles skip bulk suggestions." data-vignesh-component-type="RichTextContainer" style={{ "--extracted-1w3ko1f": "rgba(51, 51, 51, 1)", "--vignesh-paragraph-spacing": "12px", transform: "none" }}>
                      <p className="vignesh-text" style={{ "--vignesh-font-size": "16px", "--vignesh-line-height": "24px" }}>
                        <span className="vignesh-text" style={{ "--font-selector": "SW50ZXItTGlnaHQ=", "--vignesh-font-family": "\"Inter-Light\", \"Inter\", sans-serif", "--vignesh-font-size": "16px", "--vignesh-font-weight": "300", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "var(--extracted-1w3ko1f, rgba(51, 51, 51, 1))" }}>
                          {"OCR-detected ingredients render as editable chips. >85% confidence = green Have. 60–85% = amber Need Tapping. Below 60% = flagged for manual review. No black-box decisions."}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ssr-variant">
              <div className="vignesh-1n012gm-container" id="content 3" onClick={() => setActiveStep(3)} style={{ cursor: "pointer" }}>
                <div className="vignesh-3E92k vignesh-1yvv383 vignesh-v-1jto3wc" data-border="true" data-vignesh-name="Variant 2" style={{ "--border-bottom-width": "1px", "--border-color": activeStep === 3 ? "rgba(0, 121, 231, 0.8)" : "rgba(230, 230, 230, 0.4)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", width: "100%", opacity: activeStep === 3 ? 1 : 0.35, transition: "opacity 0.3s ease, border-color 0.3s ease, transform 0.3s ease", transform: activeStep === 3 ? "translateX(4px)" : "none" }}>
                  <div className="vignesh-1lwbao" data-vignesh-name="01 / Inbound Capture" data-vignesh-component-type="RichTextContainer" style={{ "--extracted-1w3ko1f": activeStep === 3 ? "rgba(0, 121, 231, 1)" : "rgba(102, 102, 102, 1)", "--vignesh-paragraph-spacing": "12px", transform: "none" }}>
                    <p className="vignesh-text" style={{ "--vignesh-font-size": "16px" }}>
                      <span className="vignesh-text" style={{ "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNTAw", "--vignesh-font-family": "\"Roboto Mono\"", "--vignesh-font-size": "16px", "--vignesh-font-weight": "500", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": activeStep === 3 ? "rgba(0, 121, 231, 1)" : "var(--extracted-1w3ko1f, rgba(102, 102, 102, 1))" }}>
                        {"03 / Inventory Ingestion"}
                      </span>
                    </p>
                  </div>
                  <div className="vignesh-1wb3ph7" data-vignesh-name="Frame 1739329516">
                    <div className="vignesh-vsm01c" data-vignesh-name="Fridge Ingestion & Sync" data-vignesh-component-type="RichTextContainer" style={{ "--extracted-1w3ko1f": "rgba(51, 51, 51, 1)", "--vignesh-paragraph-spacing": "12px", transform: "none" }}>
                      <p className="vignesh-text" style={{ "--vignesh-font-size": "24px" }}>
                        <span className="vignesh-text" style={{ "--font-selector": "SW50ZXItQm9sZA==", "--vignesh-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--vignesh-font-size": "24px", "--vignesh-font-weight": "700", "--vignesh-text-color": "var(--extracted-1w3ko1f, rgba(51, 51, 51, 1))" }}>
                          {"Delta Shopping Cart"}
                        </span>
                      </p>
                    </div>
                    <div className="vignesh-wc6kw3" data-vignesh-name="An evening home screen card prompts entry. Users scan fridge shelves, paste YouTube links, or import Instagram recipes. Assumed basics toggles skip bulk suggestions." data-vignesh-component-type="RichTextContainer" style={{ "--extracted-1w3ko1f": "rgba(51, 51, 51, 1)", "--vignesh-paragraph-spacing": "12px", transform: "none" }}>
                      <p className="vignesh-text" style={{ "--vignesh-font-size": "16px", "--vignesh-line-height": "24px" }}>
                        <span className="vignesh-text" style={{ "--font-selector": "SW50ZXItTGlnaHQ=", "--vignesh-font-family": "\"Inter-Light\", \"Inter\", sans-serif", "--vignesh-font-size": "16px", "--vignesh-font-weight": "300", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "var(--extracted-1w3ko1f, rgba(51, 51, 51, 1))" }}>
                          {"The app calculates the exact ingredients delta. Spices and pantry basics are auto-filtered. The user only purchases the missing units, hitting the order threshold organically."}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ssr-variant">
              <div className="vignesh-oves9b-container" id="content 4" onClick={() => setActiveStep(4)} style={{ cursor: "pointer" }}>
                <div className="vignesh-3E92k vignesh-1yvv383 vignesh-v-1jto3wc" data-border="true" data-vignesh-name="Variant 2" style={{ "--border-bottom-width": "1px", "--border-color": activeStep === 4 ? "rgba(0, 121, 231, 0.8)" : "rgba(230, 230, 230, 0.4)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", width: "100%", opacity: activeStep === 4 ? 1 : 0.35, transition: "opacity 0.3s ease, border-color 0.3s ease, transform 0.3s ease", transform: activeStep === 4 ? "translateX(4px)" : "none" }}>
                  <div className="vignesh-1lwbao" data-vignesh-name="01 / Inbound Capture" data-vignesh-component-type="RichTextContainer" style={{ "--extracted-1w3ko1f": activeStep === 4 ? "rgba(0, 121, 231, 1)" : "rgba(102, 102, 102, 1)", "--vignesh-paragraph-spacing": "12px", transform: "none" }}>
                    <p className="vignesh-text" style={{ "--vignesh-font-size": "16px" }}>
                      <span className="vignesh-text" style={{ "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNTAw", "--vignesh-font-family": "\"Roboto Mono\"", "--vignesh-font-size": "16px", "--vignesh-font-weight": "500", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": activeStep === 4 ? "rgba(0, 121, 231, 1)" : "var(--extracted-1w3ko1f, rgba(102, 102, 102, 1))" }}>
                        {"04 / Recipe Selection"}
                      </span>
                    </p>
                  </div>
                  <div className="vignesh-1wb3ph7" data-vignesh-name="Frame 1739329516">
                    <div className="vignesh-vsm01c" data-vignesh-name="Fridge Ingestion & Sync" data-vignesh-component-type="RichTextContainer" style={{ "--extracted-1w3ko1f": "rgba(51, 51, 51, 1)", "--vignesh-paragraph-spacing": "12px", transform: "none" }}>
                      <p className="vignesh-text" style={{ "--vignesh-font-size": "24px" }}>
                        <span className="vignesh-text" style={{ "--font-selector": "SW50ZXItQm9sZA==", "--vignesh-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--vignesh-font-size": "24px", "--vignesh-font-weight": "700", "--vignesh-text-color": "var(--extracted-1w3ko1f, rgba(51, 51, 51, 1))" }}>
                          {"Ingredient-First Recipe"}
                        </span>
                      </p>
                    </div>
                    <div className="vignesh-wc6kw3" data-vignesh-name="An evening home screen card prompts entry. Users scan fridge shelves, paste YouTube links, or import Instagram recipes. Assumed basics toggles skip bulk suggestions." data-vignesh-component-type="RichTextContainer" style={{ "--extracted-1w3ko1f": "rgba(51, 51, 51, 1)", "--vignesh-paragraph-spacing": "12px", transform: "none" }}>
                      <p className="vignesh-text" style={{ "--vignesh-font-size": "16px", "--vignesh-line-height": "24px" }}>
                        <span className="vignesh-text" style={{ "--font-selector": "SW50ZXItTGlnaHQ=", "--vignesh-font-family": "\"Inter-Light\", \"Inter\", sans-serif", "--vignesh-font-size": "16px", "--vignesh-font-weight": "300", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "var(--extracted-1w3ko1f, rgba(51, 51, 51, 1))" }}>
                          {"Renders visual recipe cards tailored to what you have. Displays the missing ingredients delta at the bottom with 1-tap checkout, keeping actions clear."}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ssr-variant">
              <div className="vignesh-hsji8j-container" id="content 5" onClick={() => setActiveStep(5)} style={{ cursor: "pointer" }}>
                <div className="vignesh-3E92k vignesh-1yvv383 vignesh-v-1jto3wc" data-border="true" data-vignesh-name="Variant 2" style={{ "--border-bottom-width": "1px", "--border-color": activeStep === 5 ? "rgba(0, 121, 231, 0.8)" : "rgba(230, 230, 230, 0.4)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", width: "100%", opacity: activeStep === 5 ? 1 : 0.35, transition: "opacity 0.3s ease, border-color 0.3s ease, transform 0.3s ease", transform: activeStep === 5 ? "translateX(4px)" : "none" }}>
                  <div className="vignesh-1lwbao" data-vignesh-name="01 / Inbound Capture" data-vignesh-component-type="RichTextContainer" style={{ "--extracted-1w3ko1f": activeStep === 5 ? "rgba(0, 121, 231, 1)" : "rgba(102, 102, 102, 1)", "--vignesh-paragraph-spacing": "12px", transform: "none" }}>
                    <p className="vignesh-text" style={{ "--vignesh-font-size": "16px" }}>
                      <span className="vignesh-text" style={{ "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNTAw", "--vignesh-font-family": "\"Roboto Mono\"", "--vignesh-font-size": "16px", "--vignesh-font-weight": "500", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": activeStep === 5 ? "rgba(0, 121, 231, 1)" : "var(--extracted-1w3ko1f, rgba(102, 102, 102, 1))" }}>
                        {"05 / Co-Active Instruction"}
                      </span>
                    </p>
                  </div>
                  <div className="vignesh-1wb3ph7" data-vignesh-name="Frame 1739329516">
                    <div className="vignesh-vsm01c" data-vignesh-name="Fridge Ingestion & Sync" data-vignesh-component-type="RichTextContainer" style={{ "--extracted-1w3ko1f": "rgba(51, 51, 51, 1)", "--vignesh-paragraph-spacing": "12px", transform: "none" }}>
                      <p className="vignesh-text" style={{ "--vignesh-font-size": "24px" }}>
                        <span className="vignesh-text" style={{ "--font-selector": "SW50ZXItQm9sZA==", "--vignesh-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--vignesh-font-size": "24px", "--vignesh-font-weight": "700", "--vignesh-text-color": "var(--extracted-1w3ko1f, rgba(51, 51, 51, 1))" }}>
                          {"Interactive Instructions"}
                        </span>
                      </p>
                    </div>
                    <div className="vignesh-wc6kw3" data-vignesh-name="An evening home screen card prompts entry. Users scan fridge shelves, paste YouTube links, or import Instagram recipes. Assumed basics toggles skip bulk suggestions." data-vignesh-component-type="RichTextContainer" style={{ "--extracted-1w3ko1f": "rgba(51, 51, 51, 1)", "--vignesh-paragraph-spacing": "12px", transform: "none" }}>
                      <p className="vignesh-text" style={{ "--vignesh-font-size": "16px", "--vignesh-line-height": "24px" }}>
                        <span className="vignesh-text" style={{ "--font-selector": "SW50ZXItTGlnaHQ=", "--vignesh-font-family": "\"Inter-Light\", \"Inter\", sans-serif", "--vignesh-font-size": "16px", "--vignesh-font-weight": "300", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "var(--extracted-1w3ko1f, rgba(51, 51, 51, 1))" }}>
                          {"Triggers a voice-navigated step-by-step cooking companion. Hands-free controls let users progress through instructions without touching their screens with messy hands."}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ssr-variant">
              <div className="vignesh-1klf2pa-container" id="content 6" onClick={() => setActiveStep(6)} style={{ cursor: "pointer" }}>
                <div className="vignesh-3E92k vignesh-1yvv383 vignesh-v-1jto3wc" data-border="true" data-vignesh-name="Variant 2" style={{ "--border-bottom-width": "1px", "--border-color": activeStep === 6 ? "rgba(0, 121, 231, 0.8)" : "rgba(230, 230, 230, 0.4)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", width: "100%", opacity: activeStep === 6 ? 1 : 0.35, transition: "opacity 0.3s ease, border-color 0.3s ease, transform 0.3s ease", transform: activeStep === 6 ? "translateX(4px)" : "none" }}>
                  <div className="vignesh-1lwbao" data-vignesh-name="01 / Inbound Capture" data-vignesh-component-type="RichTextContainer" style={{ "--extracted-1w3ko1f": activeStep === 6 ? "rgba(0, 121, 231, 1)" : "rgba(102, 102, 102, 1)", "--vignesh-paragraph-spacing": "12px", transform: "none" }}>
                    <p className="vignesh-text" style={{ "--vignesh-font-size": "16px" }}>
                      <span className="vignesh-text" style={{ "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNTAw", "--vignesh-font-family": "\"Roboto Mono\"", "--vignesh-font-size": "16px", "--vignesh-font-weight": "500", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": activeStep === 6 ? "rgba(0, 121, 231, 1)" : "var(--extracted-1w3ko1f, rgba(102, 102, 102, 1))" }}>
                        {"06 / Failsafe Ready-to-Eat"}
                      </span>
                    </p>
                  </div>
                  <div className="vignesh-1wb3ph7" data-vignesh-name="Frame 1739329516">
                    <div className="vignesh-vsm01c" data-vignesh-name="Fridge Ingestion & Sync" data-vignesh-component-type="RichTextContainer" style={{ "--extracted-1w3ko1f": "rgba(51, 51, 51, 1)", "--vignesh-paragraph-spacing": "12px", transform: "none" }}>
                      <p className="vignesh-text" style={{ "--vignesh-font-size": "24px" }}>
                        <span className="vignesh-text" style={{ "--font-selector": "SW50ZXItQm9sZA==", "--vignesh-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--vignesh-font-size": "24px", "--vignesh-font-weight": "700", "--vignesh-text-color": "var(--extracted-1w3ko1f, rgba(51, 51, 51, 1))" }}>
                          {"Failsafe RTE Mode"}
                        </span>
                      </p>
                    </div>
                    <div className="vignesh-wc6kw3" data-vignesh-name="An evening home screen card prompts entry. Users scan fridge shelves, paste YouTube links, or import Instagram recipes. Assumed basics toggles skip bulk suggestions." data-vignesh-component-type="RichTextContainer" style={{ "--extracted-1w3ko1f": "rgba(51, 51, 51, 1)", "--vignesh-paragraph-spacing": "12px", transform: "none" }}>
                      <p className="vignesh-text" style={{ "--vignesh-font-size": "16px", "--vignesh-line-height": "24px" }}>
                        <span className="vignesh-text" style={{ "--font-selector": "SW50ZXItTGlnaHQ=", "--vignesh-font-family": "\"Inter-Light\", \"Inter\", sans-serif", "--vignesh-font-size": "16px", "--vignesh-font-weight": "300", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "var(--extracted-1w3ko1f, rgba(51, 51, 51, 1))" }}>
                          {"When energy hits zero mid-flow, a segmented mode switcher swaps to premium dark store meals, converting a zero-motivation session into a positive-margin order."}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="vignesh-10ewc2d" data-vignesh-name="Mockup">
            <div className="vignesh-9eugst" data-vignesh-name="Warper">
              <div className="ssr-variant hidden-1g4wfox">
                <div className="vignesh-dw1g21-container">
                  <div className="vignesh-C6Owd vignesh-rzbsme vignesh-v-rzbsme" data-vignesh-name={`${activeStep}`} style={{ height: "100%" }}>
                    <div className="vignesh-1o8r35" data-vignesh-name="Phone Mockup">
                      <div className="vignesh-1al0i9y" data-vignesh-name="01 Home">
                        <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-vignesh-background-image-wrapper="true">
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <img
                              key={num}
                              width="8192"
                              height="5696"
                              sizes="(min-width: 1200px) calc(100vw + 264px), (max-width: 1199.98px) 100vw"
                              src={`/assets/img/zepto-mockup-${num}.webp`}
                              alt={`Zepto Mockup Step ${num}`}
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                opacity: activeStep === num ? 1 : 0,
                                transition: "opacity 0.4s ease-in-out",
                                pointerEvents: "none"
                              }}
                              loading="eager"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant hidden-1uxv7jj">
                <div className="vignesh-dw1g21-container">
                  <div className="vignesh-C6Owd vignesh-rzbsme vignesh-v-1bnyxmp" data-vignesh-name={`S${activeStep}`} style={{ height: "100%" }}>
                    <div className="vignesh-1o8r35" data-vignesh-name="Phone Mockup">
                      <div className="vignesh-1al0i9y" data-vignesh-name="01 Home">
                        <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-vignesh-background-image-wrapper="true">
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <img
                              key={num}
                              width="8192"
                              height="5696"
                              sizes="(min-width: 1200px) calc(100vw + 264px), (max-width: 1199.98px) 100vw"
                              src={`/assets/img/zepto-mockup-${num}.webp`}
                              alt={`Zepto Mockup Step ${num}`}
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                opacity: activeStep === num ? 1 : 0,
                                transition: "opacity 0.4s ease-in-out",
                                pointerEvents: "none"
                              }}
                              loading="eager"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vignesh-1oufrrp" data-vignesh-name="Overview" id="insights">
        <div className="vignesh-1nwl5tw" data-vignesh-name="Details">
          <div className="vignesh-bk8dvo" data-vignesh-name="Frame 1739329469">
            <div className="vignesh-4e12wy" data-vignesh-name="Insights" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
              <p dir="auto" style={{ "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNTAw", "--vignesh-font-family": "\"Roboto Mono\", monospace", "--vignesh-font-weight": "500", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgb(102, 102, 102)" }} className="vignesh-text">
                {"Insights"}
              </p>
            </div>
            <div className="vignesh-1bfrzh9" data-vignesh-name="Frame 1739329470">
              <div className="vignesh-axqw27" data-vignesh-name="Decoding the Indian Cook" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--vignesh-font-size": "24px" }} className="vignesh-text">
                  <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--vignesh-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--vignesh-font-size": "24px", "--vignesh-font-weight": "700", "--vignesh-text-color": "rgba(51, 51, 51, 1)" }} className="vignesh-text">
                    {"Decoding the Indian Cook"}
                  </span>
                </p>
              </div>
              <div className="vignesh-15n5ac3" data-vignesh-name="Decoded urban Indian cooking behavior, peak fatigue windows, and AI interaction policies using the Google PAIR framework." data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--vignesh-font-size": "16px", "--vignesh-line-height": "24px" }} className="vignesh-text">
                  <span style={{ "--font-selector": "SW50ZXItTGlnaHQ=", "--vignesh-font-family": "\"Inter-Light\", \"Inter\", sans-serif", "--vignesh-font-size": "16px", "--vignesh-font-weight": "300", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(51, 51, 51, 1)" }} className="vignesh-text">
                    {"Decoded urban Indian cooking behavior, peak fatigue windows, and AI interaction policies using the Google PAIR framework."}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="vignesh-v6kegq" data-vignesh-name="Frame 1739329504">
          <div className="vignesh-13r9sfp" data-vignesh-name="Frame 1739329489">
            <div className="ssr-variant">
              <div className="vignesh-1xj2fd1" data-vignesh-name="Frame 1739329481" style={{ height: "auto", aspectRatio: "0.7592997811816192" }}>
                <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-vignesh-background-image-wrapper="true">
                  <img width="1041" height="1371" sizes="(min-width: 1200px) 347px, (max-width: 1199.98px) max((100vw - 64px) / 2, 1px)" srcSet="/assets/img/56c7f2773e562441.webp 777w, /assets/img/0d12ec9f56f5445a.webp 1041w" src="/assets/img/0d12ec9f56f5445a.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} loading="eager" />
                </div>
              </div>
            </div>
            <div className="ssr-variant">
              <div className="vignesh-i76z8t" data-vignesh-name="Frame 1739329480" style={{ height: "auto", aspectRatio: "0.7592997811816192" }}>
                <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-vignesh-background-image-wrapper="true">
                  <img decoding="async" width="1041" height="1371" sizes="(min-width: 1200px) 347px, (max-width: 1199.98px) max((100vw - 64px) / 2, 1px)" srcSet="/assets/img/ea6fa1758e448614.webp 777w, /assets/img/ae01808a0c38e01c.webp 1041w" src="/assets/img/ae01808a0c38e01c.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} loading="lazy" />
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant">
            <div className="vignesh-15t8jf0" data-vignesh-name="Frame 1739329482" style={{ height: "auto", aspectRatio: "2.13855421686747" }}>
              <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-vignesh-background-image-wrapper="true">
                <img decoding="async" width="2130" height="996" sizes="(min-width: 1200px) 710px, (max-width: 1199.98px) calc(100vw - 48px)" srcSet="/assets/img/390089e520d5cb79.webp 512w, /assets/img/079671a7e49d8894.webp 1024w, /assets/img/6d9e5a7262f0983e.webp 2048w, /assets/img/516f7b8a0edc5e55.webp 2130w" src="/assets/img/516f7b8a0edc5e55.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} loading="lazy" />
              </div>
            </div>
          </div>
          <div className="vignesh-hn4brr" data-vignesh-name="Frame 1739329492">
            <div className="ssr-variant">
              <div className="vignesh-1u6uq5x" data-vignesh-name="Frame 1739329490" style={{ height: "auto", aspectRatio: "0.7057627118644068" }}>
                <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-vignesh-background-image-wrapper="true">
                  <img decoding="async" width="1041" height="1475" sizes="(min-width: 1200px) 347px, (max-width: 1199.98px) max((100vw - 64px) / 2, 1px)" srcSet="/assets/img/2e02d52dbdc6fcc7.webp 722w, /assets/img/f965f91d71149ab1.webp 1041w" src="/assets/img/f965f91d71149ab1.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "fill" }} loading="lazy" />
                </div>
              </div>
            </div>
            <div className="ssr-variant">
              <div className="vignesh-ngp29a" data-vignesh-name="Frame 1739329491" style={{ height: "auto", aspectRatio: "0.7052845528455285" }}>
                <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-vignesh-background-image-wrapper="true">
                  <img decoding="async" width="1041" height="1476" sizes="(min-width: 1200px) 347px, (max-width: 1199.98px) max((100vw - 64px) / 2, 1px)" srcSet="/assets/img/4de65298f122826a.webp 722w, /assets/img/ae1e30ef40f54580.webp 1041w" src="/assets/img/ae1e30ef40f54580.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} loading="lazy" />
                </div>
              </div>
            </div>
          </div>
          <div className="vignesh-14ifi02" data-vignesh-name="Frame 1739329503">
            <div className="ssr-variant">
              <div className="vignesh-21xe5b" data-border="true" data-vignesh-name="Frame 1739329497" style={{ height: "auto", aspectRatio: "1.2625698324022345" }}>
                <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-vignesh-background-image-wrapper="true">
                  <img decoding="async" width="678" height="537" sizes="(min-width: 1200px) 226px, (max-width: 1199.98px) max((100vw - 80px) / 3, 1px)" srcSet="/assets/img/e30d40ac6acbe479.webp 512w, /assets/img/d5de5537189325b0.webp 678w" src="/assets/img/d5de5537189325b0.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} loading="lazy" />
                </div>
              </div>
            </div>
            <div className="ssr-variant">
              <div className="vignesh-10b9r14" data-border="true" data-vignesh-name="Frame 1739329498" style={{ height: "auto", aspectRatio: "1.2625698324022345" }}>
                <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-vignesh-background-image-wrapper="true">
                  <img decoding="async" width="678" height="537" sizes="(min-width: 1200px) 226px, (max-width: 1199.98px) max((100vw - 80px) / 3, 1px)" srcSet="/assets/img/819afd45c5baf6ea.webp 512w, /assets/img/21d603614ecd1812.webp 678w" src="/assets/img/21d603614ecd1812.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} loading="lazy" />
                </div>
              </div>
            </div>
            <div className="ssr-variant">
              <div className="vignesh-15f7386" data-border="true" data-vignesh-name="Frame 1739329499" style={{ height: "auto", aspectRatio: "1.2625698324022345" }}>
                <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-vignesh-background-image-wrapper="true">
                  <img decoding="async" width="678" height="537" sizes="(min-width: 1200px) 226px, (max-width: 1199.98px) max((100vw - 80px) / 3, 1px)" srcSet="/assets/img/982339c591c602b0.webp 512w, /assets/img/ef89335c95ad756d.webp 678w" src="/assets/img/ef89335c95ad756d.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vignesh-195j0fi" data-vignesh-name="Overview" id="when-ai-fails">
        <div className="vignesh-rkbo51" data-vignesh-name="Details">
          <div className="vignesh-dpu2yi" data-vignesh-name="Frame 1739329469">
            <div className="vignesh-118yj4t" data-vignesh-name="When the AI Fails" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
              <p dir="auto" style={{ "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNTAw", "--vignesh-font-family": "\"Roboto Mono\", monospace", "--vignesh-font-weight": "500", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgb(102, 102, 102)" }} className="vignesh-text">
                {"When the AI Fails"}
              </p>
            </div>
            <div className="vignesh-r2p5pr" data-vignesh-name="Frame 1739329470">
              <div className="vignesh-2hx7zn" data-vignesh-name="Designing for Failure" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--vignesh-font-size": "24px" }} className="vignesh-text">
                  <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--vignesh-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--vignesh-font-size": "24px", "--vignesh-font-weight": "700", "--vignesh-text-color": "rgba(51, 51, 51, 1)" }} className="vignesh-text">
                    {"Designing for Failure"}
                  </span>
                </p>
              </div>
              <div className="vignesh-1hr96h3" data-vignesh-name="AI-assisted scanning is inherently probabilistic. We engineered recovery states for every failure mode before dev handoff." data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--vignesh-font-size": "16px", "--vignesh-line-height": "24px" }} className="vignesh-text">
                  <span style={{ "--font-selector": "SW50ZXItTGlnaHQ=", "--vignesh-font-family": "\"Inter-Light\", \"Inter\", sans-serif", "--vignesh-font-size": "16px", "--vignesh-font-weight": "300", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(51, 51, 51, 1)" }} className="vignesh-text">
                    {"AI-assisted scanning is inherently probabilistic. We engineered recovery states for every failure mode before dev handoff."}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="vignesh-135lqra" data-vignesh-name="Frame 1739329504">
          <div className="vignesh-1rzy5f4" data-vignesh-name="Frame 1739329505">
            <div className="vignesh-s7h4d1" data-border="true" data-vignesh-name="Frame 1739329508">
              <div className="vignesh-ko88yr" data-vignesh-name="Frame 1739329392">
                <div className="vignesh-18fgqu0" data-vignesh-name="Skeleton Loading States" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p style={{ "--vignesh-font-size": "24px" }} className="vignesh-text">
                    <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--vignesh-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--vignesh-font-size": "24px", "--vignesh-font-weight": "700", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(102, 102, 102, 1)" }} className="vignesh-text">
                      {"Skeleton Loading States"}
                    </span>
                  </p>
                </div>
                <div className="vignesh-ee9v0t" data-vignesh-name={"LLM parsing takes 0.8–1.2s. Skeleton screens maintain system visibility during this window — preventing the \"nothing is happening\" abandonment that kills conversion during scans."} data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p style={{ "--vignesh-font-size": "16px" }} className="vignesh-text">
                    <span style={{ "--font-selector": "R0Y7TGF0by1yZWd1bGFy", "--vignesh-font-family": "\"Lato\"", "--vignesh-font-size": "16px", "--vignesh-text-color": "rgba(24, 26, 34, 0.6000000238418579)" }} className="vignesh-text">
                      {"LLM parsing takes 0.8–1.2s. Skeleton screens maintain system visibility during this window — preventing the \"nothing is happening\" abandonment that kills conversion during scans."}
                    </span>
                  </p>
                </div>
              </div>
              <div className="ssr-variant">
                <div className="vignesh-tyx80s" data-vignesh-name="Frame 1739329506" style={{ height: "auto", aspectRatio: "0.8989637305699482" }}>
                  <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-vignesh-background-image-wrapper="true">
                    <img decoding="async" width="1041" height="1158" sizes="(min-width: 1200px) 347px, (max-width: 1199.98px) 347px" srcSet="/assets/img/5a44c0245dfacb15.webp 920w, /assets/img/5b6f10f41e7f5b95.webp 1041w" src="/assets/img/5b6f10f41e7f5b95.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
            <div className="vignesh-2j6q93" data-border="true" data-vignesh-name="Frame 1739329509">
              <div className="ssr-variant">
                <div className="vignesh-1rahcki" data-vignesh-name="Frame 1739329507">
                  <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-vignesh-background-image-wrapper="true">
                    <img decoding="async" width="1041" height="1176" sizes="(min-width: 1200px) 347px, (max-width: 1199.98px) 347px" srcSet="/assets/img/30238fafdbb63e86.webp 906w, /assets/img/155e6eef2aa5af56.webp 1041w" src="/assets/img/155e6eef2aa5af56.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="vignesh-1mpyne0" data-vignesh-name="Frame 1739329392">
                <div className="vignesh-jja3nz" data-vignesh-name="The Zero-Match State" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p style={{ "--vignesh-font-size": "24px" }} className="vignesh-text">
                    <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--vignesh-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--vignesh-font-size": "24px", "--vignesh-font-weight": "700", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(102, 102, 102, 1)" }} className="vignesh-text">
                      {"The Zero-Match State"}
                    </span>
                  </p>
                </div>
                <div className="vignesh-1hwnpfs" data-vignesh-name="When the fridge scan finds no recipe matches, a Sous-Chef assistant appears offering direct text input, manual item search, or recipe link paste as recovery paths. No dead end." data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p style={{ "--vignesh-font-size": "16px" }} className="vignesh-text">
                    <span style={{ "--font-selector": "R0Y7TGF0by1yZWd1bGFy", "--vignesh-font-family": "\"Lato\"", "--vignesh-font-size": "16px", "--vignesh-text-color": "rgba(24, 26, 34, 0.6000000238418579)" }} className="vignesh-text">
                      {"When the fridge scan finds no recipe matches, a Sous-Chef assistant appears offering direct text input, manual item search, or recipe link paste as recovery paths. No dead end."}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="vignesh-ybbs7w" data-vignesh-name="Frame 1739329507">
            <div className="vignesh-1vsio81" data-border="true" data-vignesh-name="Frame 1739329508">
              <div className="vignesh-1lt971s" data-vignesh-name="Frame 1739329392">
                <div className="vignesh-1t0vsrz" data-vignesh-name="Post-Cook Rating Loop" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p style={{ "--vignesh-font-size": "24px" }} className="vignesh-text">
                    <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--vignesh-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--vignesh-font-size": "24px", "--vignesh-font-weight": "700", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(102, 102, 102, 1)" }} className="vignesh-text">
                      {"Post-Cook Rating Loop"}
                    </span>
                  </p>
                </div>
                <div className="vignesh-1wzmioc" data-vignesh-name="A minimal 3-question post-cook review (ingredient quality, taste, missing items) feeds back into the confidence model, personalizing detection thresholds for the next session." data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p style={{ "--vignesh-font-size": "16px" }} className="vignesh-text">
                    <span style={{ "--font-selector": "R0Y7TGF0by1yZWd1bGFy", "--vignesh-font-family": "\"Lato\"", "--vignesh-font-size": "16px", "--vignesh-text-color": "rgba(24, 26, 34, 0.6000000238418579)" }} className="vignesh-text">
                      {"A minimal 3-question post-cook review (ingredient quality, taste, missing items) feeds back into the confidence model, personalizing detection thresholds for the next session."}
                    </span>
                  </p>
                </div>
              </div>
              <div className="ssr-variant">
                <div className="vignesh-15f7wwe" data-vignesh-name="Frame 1739329506" style={{ height: "auto", aspectRatio: "0.8807106598984772" }}>
                  <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-vignesh-background-image-wrapper="true">
                    <img decoding="async" width="1041" height="1182" sizes="(min-width: 1200px) 347px, (max-width: 1199.98px) 347px" srcSet="/assets/img/e1685dba9e89a685.webp 901w, /assets/img/4c066d660d23abee.webp 1041w" src="/assets/img/4c066d660d23abee.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
            <div className="vignesh-1vobb4n" data-border="true" data-vignesh-name="Frame 1739329509">
              <div className="ssr-variant">
                <div className="vignesh-10jlsuc" data-vignesh-name="Frame 1739329507" style={{ height: "auto", aspectRatio: "0.7757078986587184" }}>
                  <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-vignesh-background-image-wrapper="true">
                    <img decoding="async" width="1041" height="1342" sizes="(min-width: 1200px) 347px, (max-width: 1199.98px) 347px" srcSet="/assets/img/4af6a79d36866b57.webp 794w, /assets/img/10d10e38a0ec1c33.webp 1041w" src="/assets/img/10d10e38a0ec1c33.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="vignesh-40mhgf" data-vignesh-name="Frame 1739329392">
                <div className="vignesh-4sv2h3" data-vignesh-name="Offline State" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p style={{ "--vignesh-font-size": "24px" }} className="vignesh-text">
                    <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--vignesh-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--vignesh-font-size": "24px", "--vignesh-font-weight": "700", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(102, 102, 102, 1)" }} className="vignesh-text">
                      {"Offline State"}
                    </span>
                  </p>
                </div>
                <div className="vignesh-lil6q5" data-vignesh-name="Instead of blocking with connection errors in signal-dead zones, the app caches scanned items locally. Users can edit lists offline, auto-syncing recipes the instant they're back online." data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p style={{ "--vignesh-font-size": "16px" }} className="vignesh-text">
                    <span style={{ "--font-selector": "R0Y7TGF0by1yZWd1bGFy", "--vignesh-font-family": "\"Lato\"", "--vignesh-font-size": "16px", "--vignesh-text-color": "rgba(24, 26, 34, 0.6000000238418579)" }} className="vignesh-text">
                      {"Instead of blocking with connection errors in signal-dead zones, the app caches scanned items locally. Users can edit lists offline, auto-syncing recipes the instant they're back online."}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vignesh-175m1rt" data-vignesh-name="Overview" id="proving-the-prototype">
        <div className="vignesh-9illau" data-vignesh-name="Details">
          <div className="vignesh-1mrxsop" data-vignesh-name="Frame 1739329469">
            <div className="vignesh-pgw5ms" data-vignesh-name="Proving the Prototype" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
              <p dir="auto" style={{ "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNTAw", "--vignesh-font-family": "\"Roboto Mono\", monospace", "--vignesh-font-weight": "500", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgb(138, 138, 133)" }} className="vignesh-text">
                {"Proving the Prototype"}
              </p>
            </div>
            <div className="vignesh-txlp93" data-vignesh-name="Frame 1739329470">
              <div className="vignesh-yhunqh" data-vignesh-name="AI-Assisted Usability Testing" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--vignesh-font-size": "24px" }} className="vignesh-text">
                  <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--vignesh-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--vignesh-font-size": "24px", "--vignesh-font-weight": "700", "--vignesh-text-color": "rgba(51, 51, 51, 1)" }} className="vignesh-text">
                    {"AI-Assisted Usability Testing"}
                  </span>
                </p>
              </div>
              <div className="vignesh-19j8run" data-vignesh-name="We executed an unmoderated, AI-assisted usability evaluation on 14 Figma screens. By feeding screens to Gemini to simulate Ananya (low attention, single-handed) and Vikram (waste-averse, budget-deliberate), we audited heuristics prior to engineering handoff." data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--vignesh-font-size": "16px", "--vignesh-line-height": "24px" }} className="vignesh-text">
                  <span style={{ "--font-selector": "SW50ZXItTGlnaHQ=", "--vignesh-font-family": "\"Inter-Light\", \"Inter\", sans-serif", "--vignesh-font-size": "16px", "--vignesh-font-weight": "300", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(51, 51, 51, 1)" }} className="vignesh-text">
                    {"We executed an unmoderated, AI-assisted usability evaluation on 14 Figma screens. By feeding screens to Gemini to simulate Ananya (low attention, single-handed) and Vikram (waste-averse, budget-deliberate), we audited heuristics prior to engineering handoff."}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="vignesh-y70wkj" data-vignesh-name="Frame 1739329504">
          <div className="vignesh-9d0yze" data-vignesh-name="Frame 1739329511">
            <div className="vignesh-1alc0dt" data-border="true" data-vignesh-name="Frame 1739329482">
              <div className="vignesh-1kji9fd" data-vignesh-name="Frame 1739329392">
                <div className="vignesh-xw8mmx" data-vignesh-name="Frame 1739329510">
                  <div className="vignesh-9hc58q" data-vignesh-name="82%" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                    <p style={{ "--vignesh-font-size": "32px" }} className="vignesh-text">
                      <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--vignesh-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--vignesh-font-size": "32px", "--vignesh-font-weight": "700", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(40, 117, 45, 1)" }} className="vignesh-text">
                        {"82"}
                      </span>
                      <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--vignesh-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--vignesh-font-size": "24px", "--vignesh-font-weight": "700", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(40, 117, 45, 1)" }} className="vignesh-text">
                        {"%"}
                      </span>
                    </p>
                  </div>
                  <div className="vignesh-1cqwdh6" data-vignesh-name="Usability Score" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                    <p style={{ "--vignesh-font-size": "16px" }} className="vignesh-text">
                      <span style={{ "--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--vignesh-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--vignesh-font-size": "16px", "--vignesh-font-weight": "600", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(102, 102, 102, 1)" }} className="vignesh-text">
                        {"Usability Score"}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="vignesh-1j8yk6g" data-vignesh-name="77% Evening Cognitive Drop Choice, causing abandoned grocery sessions and delivery app fallbacks." data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p style={{ "--vignesh-font-size": "16px", "--vignesh-line-height": "24px" }} className="vignesh-text">
                    <span style={{ "--font-selector": "SW50ZXItTGlnaHQ=", "--vignesh-font-family": "\"Inter-Light\", \"Inter\", sans-serif", "--vignesh-font-size": "16px", "--vignesh-font-weight": "300", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(51, 51, 51, 1)" }} className="vignesh-text">
                      {"77% Evening Cognitive Drop Choice, causing abandoned grocery sessions and delivery app fallbacks."}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="vignesh-5o6y9q" data-border="true" data-vignesh-name="Frame 1739329508">
              <div className="vignesh-1u4dd23" data-vignesh-name="Frame 1739329392">
                <div className="vignesh-1y405o6" data-vignesh-name="Frame 1739329510">
                  <div className="vignesh-1poboy2" data-vignesh-name="Gemini" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                    <p style={{ "--vignesh-font-size": "32px" }} className="vignesh-text">
                      <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--vignesh-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--vignesh-font-size": "32px", "--vignesh-font-weight": "700", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(116, 31, 198, 1)" }} className="vignesh-text">
                        {"Gemini"}
                      </span>
                    </p>
                  </div>
                  <div className="vignesh-jlqvin" data-vignesh-name="Unmoderated Testing Methodology" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                    <p style={{ "--vignesh-font-size": "16px" }} className="vignesh-text">
                      <span style={{ "--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--vignesh-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--vignesh-font-size": "16px", "--vignesh-font-weight": "600", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(102, 102, 102, 1)" }} className="vignesh-text">
                        {"Unmoderated Testing Methodology"}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="vignesh-cag21k" data-vignesh-name="77% Evening Cognitive Drop Choice, causing abandoned grocery sessions and delivery app fallbacks." data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p style={{ "--vignesh-font-size": "16px", "--vignesh-line-height": "24px" }} className="vignesh-text">
                    <span style={{ "--font-selector": "SW50ZXItTGlnaHQ=", "--vignesh-font-family": "\"Inter-Light\", \"Inter\", sans-serif", "--vignesh-font-size": "16px", "--vignesh-font-weight": "300", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(51, 51, 51, 1)" }} className="vignesh-text">
                      {"77% Evening Cognitive Drop Choice, causing abandoned grocery sessions and delivery app fallbacks."}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant hidden-1g4wfox">
            <div className="vignesh-2mmv5l" data-vignesh-name="image 204">
              <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-vignesh-background-image-wrapper="true">
                <img decoding="async" width="1420" height="1490" sizes="(min-width: 1200px) 710px, (max-width: 1199.98px) calc(100vw - 48px)" srcSet="/assets/img/32f45a03ba0a0b47.webp 975w, /assets/img/ba074c1682b46481.webp 1420w" src="/assets/img/ba074c1682b46481.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} loading="lazy" />
              </div>
            </div>
          </div>
          <div className="ssr-variant hidden-1uxv7jj">
            <div className="vignesh-2mmv5l" data-vignesh-name="image 204" style={{ height: "auto", aspectRatio: "0.9530201342281879" }}>
              <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-vignesh-background-image-wrapper="true">
                <img decoding="async" width="1420" height="1490" sizes="(min-width: 1200px) 710px, (max-width: 1199.98px) calc(100vw - 48px)" srcSet="/assets/img/32f45a03ba0a0b47.webp 975w, /assets/img/ba074c1682b46481.webp 1420w" src="/assets/img/ba074c1682b46481.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vignesh-2gtcgw" data-vignesh-name="Frame 1739329296" id="beyond-the-kitchen">
        <div className="vignesh-knvidu" data-vignesh-name="Details">
          <div className="vignesh-1freu00" data-vignesh-name="Frame 1739329469">
            <div className="vignesh-1ojry9f" data-vignesh-name="Beyond the Kitchen" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
              <p dir="auto" style={{ "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNTAw", "--vignesh-font-family": "\"Roboto Mono\", monospace", "--vignesh-font-weight": "500", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgb(138, 138, 133)" }} className="vignesh-text">
                {"Beyond the Kitchen"}
              </p>
            </div>
            <div className="vignesh-wab8cr" data-vignesh-name="Frame 1739329470">
              <div className="vignesh-19kxuk6" data-vignesh-name="Scaling the Interface" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--vignesh-font-size": "24px" }} className="vignesh-text">
                  <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--vignesh-font-family": "\"Inter-Bold\", \"Inter\", sans-serif", "--vignesh-font-size": "24px", "--vignesh-font-weight": "700", "--vignesh-text-color": "rgba(51, 51, 51, 1)" }} className="vignesh-text">
                    {"Scaling the Interface"}
                  </span>
                </p>
              </div>
              <div className="vignesh-112h3ij" data-vignesh-name="What was contributed to the component library, and what the process taught." data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p style={{ "--vignesh-font-size": "16px", "--vignesh-line-height": "24px" }} className="vignesh-text">
                  <span style={{ "--font-selector": "SW50ZXItTGlnaHQ=", "--vignesh-font-family": "\"Inter-Light\", \"Inter\", sans-serif", "--vignesh-font-size": "16px", "--vignesh-font-weight": "300", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgba(51, 51, 51, 1)" }} className="vignesh-text">
                    {"What was contributed to the component library, and what the process taught."}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="vignesh-1lyvyu3" data-vignesh-name="Frame 1739329361">
          <div className="vignesh-1po3i37">
            <div className="vignesh-1v5eue4" data-vignesh-name="Frame 1739329117">
              <div className="vignesh-pexujc" data-vignesh-name="Frame 1739329113">
                <div data-vignesh-component-type="SVG" data-vignesh-name="Handshake" parentsize="0" _constraints="[object Object]" rotation="0" shadows="" className="vignesh-maa9s" aria-hidden="true" style={{ imageRendering: "pixelated", flexShrink: "0", fill: "rgba(0,0,0,1)", color: "rgba(0,0,0,1)" }}>
                  <div className="svgContainer" style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                    <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 32 32">
                      <use href="#svg-1644289626_2450" />
                    </svg>
                  </div>
                </div>
                <div className="vignesh-l50s57" data-vignesh-name="Frame 1739329331">
                  <div className="vignesh-10qmmqz" data-vignesh-name="Balancing guidance vs. flexibility" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                    <p dir="auto" style={{ "--font-selector": "SW50ZXItTWVkaXVt", "--vignesh-font-size": "20px", "--vignesh-font-weight": "500", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgb(102, 102, 102)" }} className="vignesh-text">
                      {"Co-Active Trust Over Automation"}
                    </p>
                  </div>
                </div>
                <div className="vignesh-gfuqx3" data-vignesh-name="Applied the Progressive Disclosure pattern — starting simple (login), then gradually revealing complexity (accordion with summary)." data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p dir="auto" style={{ "--font-selector": "SW50ZXItTGlnaHQ=", "--vignesh-font-size": "14px", "--vignesh-font-weight": "300", "--vignesh-letter-spacing": "-0.01em", "--vignesh-line-height": "20px", "--vignesh-text-color": "rgb(51, 51, 51)" }} className="vignesh-text">
                    {"Aggressive AI carting fails in high-stakes checkout. Transparent confidence intervals and interactive verification chips are the true drivers of cart retention."}
                  </p>
                </div>
              </div>
            </div>
            <div className="vignesh-11b3dl3" data-vignesh-name="Frame 1739329118">
              <div className="vignesh-1ni3du" data-vignesh-name="Frame 1739329113">
                <div data-vignesh-component-type="SVG" data-vignesh-name="HandPointing" parentsize="0" _constraints="[object Object]" rotation="0" shadows="" className="vignesh-fmuqz9" aria-hidden="true" style={{ imageRendering: "pixelated", flexShrink: "0", fill: "rgba(0,0,0,1)", color: "rgba(0,0,0,1)" }}>
                  <div className="svgContainer" style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                    <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 32 32">
                      <use href="#svg201537444_1349" />
                    </svg>
                  </div>
                </div>
                <div className="vignesh-wgkomg" data-vignesh-name="Frame 1739329331">
                  <div className="vignesh-nvzwdw" data-vignesh-name="Building trust in AI outputs" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                    <p dir="auto" style={{ "--font-selector": "SW50ZXItTWVkaXVt", "--vignesh-font-size": "20px", "--vignesh-font-weight": "500", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgb(102, 102, 102)" }} className="vignesh-text">
                      {"Design for High-Stress States"}
                    </p>
                  </div>
                </div>
                <div className="vignesh-12yeg2u" data-vignesh-name="Used Visibility of System Status (Nielsen’s Heuristic) — showing summaries, “what‑if” simulations, and transparent calculations built confidence." data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p dir="auto" style={{ "--font-selector": "SW50ZXItTGlnaHQ=", "--vignesh-font-size": "14px", "--vignesh-font-weight": "300", "--vignesh-letter-spacing": "-0.01em", "--vignesh-line-height": "20px", "--vignesh-text-color": "rgb(51, 51, 51)" }} className="vignesh-text">
                    {"Exhausted transit commuters require extreme accessibility—large 48px touch targets anchored in the bottom 40% comfort sweep zone, and zero typing reliance."}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="vignesh-wd877m">
            <div className="vignesh-139yjnh" data-vignesh-name="Frame 1739329120">
              <div className="vignesh-151riu7" data-vignesh-name="Frame 1739329113">
                <div data-vignesh-component-type="SVG" data-vignesh-name="SpinnerGap" parentsize="0" _constraints="[object Object]" rotation="0" shadows="" className="vignesh-1kuvoul" aria-hidden="true" style={{ imageRendering: "pixelated", flexShrink: "0", fill: "rgba(0,0,0,1)", color: "rgba(0,0,0,1)" }}>
                  <div className="svgContainer" style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                    <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 32 32">
                      <use href="#svg339026846_1676" />
                    </svg>
                  </div>
                </div>
                <div className="vignesh-8jrfv8" data-vignesh-name="Frame 1739329331">
                  <div className="vignesh-ayaxd8" data-vignesh-name="Aligning user frustrations with business goals" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                    <p dir="auto" style={{ "--font-selector": "SW50ZXItTWVkaXVt", "--vignesh-font-size": "20px", "--vignesh-font-weight": "500", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgb(102, 102, 102)" }} className="vignesh-text">
                      {"Progressive Feedback Cures Anxiety"}
                    </p>
                  </div>
                </div>
                <div className="vignesh-1op0tvb" data-vignesh-name="Applied Goal‑Gradient Effect — prioritized task center gave users a sense of progress while driving efficiency for the business. Applied Goal‑Gradient Effect — prioritized task center gave users a sense of progress while driving efficiency for the business." data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p dir="auto" style={{ "--font-selector": "SW50ZXItTGlnaHQ=", "--vignesh-font-size": "14px", "--vignesh-font-weight": "300", "--vignesh-letter-spacing": "-0.01em", "--vignesh-line-height": "20px", "--vignesh-text-color": "rgb(51, 51, 51)" }} className="vignesh-text">
                    {"Chunking multi-second AI OCR scanner parsing into real-time, progressive skeleton chips replaces cognitive loading anxiety with system feedback momentum."}
                  </p>
                </div>
              </div>
            </div>
            <div className="vignesh-115rcij" data-vignesh-name="Frame 1739329119">
              <div className="vignesh-1oaolxg" data-vignesh-name="Frame 1739329113">
                <div data-vignesh-component-type="SVG" data-vignesh-name="SquaresFour" parentsize="0" _constraints="[object Object]" rotation="0" shadows="" className="vignesh-1ymshkx" aria-hidden="true" style={{ imageRendering: "pixelated", flexShrink: "0", fill: "rgba(0,0,0,1)", color: "rgba(0,0,0,1)" }}>
                  <div className="svgContainer" style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                    <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 32 32">
                      <use href="#svg-1885666071_1504" />
                    </svg>
                  </div>
                </div>
                <div className="vignesh-5b3ut9" data-vignesh-name="Frame 1739329331">
                  <div className="vignesh-idv625" data-vignesh-name="Users overwhelmed by too many fields" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                    <p dir="auto" style={{ "--font-selector": "SW50ZXItTWVkaXVt", "--vignesh-font-size": "20px", "--vignesh-font-weight": "500", "--vignesh-letter-spacing": "-0.01em", "--vignesh-text-color": "rgb(102, 102, 102)" }} className="vignesh-text">
                      {"Service Design Crosses the Fridge"}
                    </p>
                  </div>
                </div>
                <div className="vignesh-16gztbh" data-vignesh-name="Leveraged Cognitive Load Theory — chunking information into steps (stepper modal) reduced mental effort." data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p dir="auto" style={{ "--font-selector": "SW50ZXItTGlnaHQ=", "--vignesh-font-size": "14px", "--vignesh-font-weight": "300", "--vignesh-letter-spacing": "-0.01em", "--vignesh-line-height": "20px", "--vignesh-text-color": "rgb(51, 51, 51)" }} className="vignesh-text">
                    {"Great quick-commerce UX orchestrates real-world kitchen logistics, seamlessly mapping physical constraints (like ingredient expiry and dark store portions) directly into the app."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
