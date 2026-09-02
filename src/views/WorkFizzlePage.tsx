import React, { Suspense } from "react";
import Frame1739329357 from "@/src/sections/work-fizzle/Frame1739329357";
import Variant1 from "@/src/sections/work-fizzle/Variant1";
import Content from "@/src/sections/work-fizzle/Content";
import Frame1739329355 from "@/src/sections/work-fizzle/Frame1739329355";
import Frame1739329356 from "@/src/sections/work-fizzle/Frame1739329356";
import Frame17393293552 from "@/src/sections/work-fizzle/Frame17393293552";
import Frame17393293562 from "@/src/sections/work-fizzle/Frame17393293562";

/** The "/work/fizzle" page, composed from its Framer sections.
 *
 *  Rendered to static HTML by scripts/prerender.mts at build time — never
 *  shipped as a page.tsx, which would duplicate every byte of this markup into
 *  the RSC flight payload on top of the HTML itself. */
export default function WorkFizzlePage() {
  return (
    <body>
      {"\n\t\n\t"}
      <span data-fnj-slot={"0"} />
      {"\n    \n    "}
      <span data-fnj-slot={"1"} />
      {"\n\t\n\t"}
      <div id="main" data-framer-hydrate-v2={"{\"routeId\":\"WHxQTQ3dh\",\"localeId\":\"default\",\"breakpoints\":[{\"hash\":\"vpks58\",\"mediaQuery\":\"(min-width: 1200px)\"},{\"hash\":\"vh5ito\",\"mediaQuery\":\"(max-width: 1199.98px)\"}]}"} data-framer-ssr-released-at="2026-07-06T15:12:41.348Z" data-framer-page-optimized-at="2026-07-06T20:11:31.844Z" data-framer-generated-page="">
        <Suspense fallback={null}>
          <style data-framer-html-style="" dangerouslySetInnerHTML={{ __html: "html body { background: rgb(255, 255, 255); }" }} />
          <div data-framer-root="" className="framer-dU9WF framer-vpks58" style={{ minHeight: "100vh", width: "auto" }}>
            <Frame1739329357 />
            <div className="framer-4ywjxy" data-framer-name="Rectangle 3">
              <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-framer-background-image-wrapper="true">
                <img width="1813" height="1424" sizes="(min-width: 1200px) 100vw, (max-width: 1199.98px) 100vw" srcSet="/assets/img/e808f9ba8f25080f.webp 512w, /assets/img/a0f33ab6b3a5127a.webp 1024w, /assets/img/a48b30a17dabf74c.webp 1813w" src="/assets/img/a48b30a17dabf74c.webp" alt="Fizzle_Desktop Mockup 1" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} loading="eager" />
              </div>
            </div>
            <div className="framer-kjgmnb">
              <Suspense fallback={null}>
                <div className="framer-qsfeyj-container hidden-vh5ito">
                  <Variant1 />
                </div>
              </Suspense>
              <Content />
              <div className="framer-1vcu42g hidden-vh5ito" data-framer-name="Table of Content" />
            </div>
            <div className="ssr-variant hidden-vh5ito">
              <div className="framer-1ivevgs-container">
                <div className="framer-PPNtr framer-n2gets framer-v-n2gets" data-framer-name="Desktop" style={{ width: "100%" }}>
                  <Frame1739329355 />
                  <Frame1739329356 />
                </div>
              </div>
            </div>
            <div className="ssr-variant hidden-vpks58">
              <div className="framer-1ivevgs-container">
                <div className="framer-PPNtr framer-n2gets framer-v-msne37" data-framer-name="Mobile" style={{ width: "100%" }}>
                  <Frame17393293552 />
                  <Frame17393293562 />
                </div>
              </div>
            </div>
            <div className="framer-tpbud2 hidden-vpks58">
              <Suspense fallback={null}>
                <a className="framer-26cwsu framer-1er50q6" data-framer-name="Frame 2606774" href="../work">
                  <div data-framer-component-type="SVG" data-framer-name="ArrowBendUpLeft" parentsize="0" _constraints="[object Object]" rotation="0" shadows="" className="framer-1j58y6z" aria-hidden="true" style={{ imageRendering: "pixelated", flexShrink: "0", backgroundSize: "100% 100%", backgroundImage: "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 16 16%22><path d=%22M 13.875 12.519 C 13.875 12.641 13.826 12.759 13.739 12.845 C 13.653 12.932 13.535 12.98 13.413 12.98 C 13.291 12.98 13.173 12.932 13.087 12.845 C 13 12.759 12.951 12.641 12.951 12.519 C 12.95 11.173 12.415 9.882 11.463 8.931 C 10.511 7.979 9.221 7.443 7.875 7.442 L 3.45 7.442 L 5.432 9.423 C 5.519 9.51 5.567 9.627 5.567 9.75 C 5.567 9.872 5.519 9.99 5.432 10.076 C 5.345 10.163 5.228 10.211 5.106 10.211 C 4.983 10.211 4.866 10.163 4.779 10.076 L 2.01 7.307 C 1.967 7.264 1.933 7.213 1.91 7.157 C 1.886 7.101 1.875 7.041 1.875 6.98 C 1.875 6.92 1.886 6.86 1.91 6.804 C 1.933 6.748 1.967 6.697 2.01 6.654 L 4.779 3.885 C 4.866 3.798 4.983 3.75 5.106 3.75 C 5.228 3.75 5.345 3.798 5.432 3.885 C 5.519 3.971 5.567 4.089 5.567 4.211 C 5.567 4.334 5.519 4.451 5.432 4.538 L 3.45 6.519 L 7.875 6.519 C 9.465 6.521 10.991 7.153 12.115 8.278 C 13.24 9.403 13.873 10.928 13.875 12.519 Z%22 fill=%22rgb(11,61,145)%22></path></svg>')" }} />
                  <div className="framer-ajaux9" data-framer-name="Back" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                    <p dir="auto" style={{ "--framer-font-size": "12px", "--framer-text-color": "rgb(11, 61, 145)" }} className="framer-text">
                      {"Back"}
                    </p>
                  </div>
                </a>
              </Suspense>
              <div className="framer-dcmawz">
                <div className="framer-1pyx5e6" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p dir="auto" style={{ "--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--framer-font-weight": "600", "--framer-line-height": "32px", "--framer-text-color": "rgb(77, 112, 255)" }} className="framer-text">
                    {"Fizzle"}
                  </p>
                </div>
              </div>
              <Suspense fallback={null}>
                <a className="framer-b1qs8j framer-1er50q6" id="b1qs8j" href="https://framer.com/projects/Untitled--NaFSglVQqL1F5cuwRa71-fsY6P?node=ydnHs9VqT" rel="noopener">
                  <svg className="framer-iZmZi framer-yq7ovb" role="presentation" viewBox="0 0 24 24">
                    <use href="#3559153988" />
                  </svg>
                </a>
              </Suspense>
            </div>
          </div>
          <div id="overlay" />
        </Suspense>
      </div>
      <span data-fnj-slot={"2"} />
      {"\n\t"}
      <span data-fnj-slot={"3"} />
      {"\n\t\n\t\n\t"}
      <span data-fnj-slot={"4"} />
      {"\n                "}
      <span data-fnj-slot={"5"} />
      {"\n                "}
      <span data-fnj-slot={"6"} />
      <span data-fnj-slot={"7"} />
      {"\n\t"}
      <span data-fnj-slot={"8"} />
      {"\n\t"}
      <span data-fnj-slot={"9"} />
      <span data-fnj-slot={"10"} />
      <span data-fnj-slot={"11"} />
      <span data-fnj-slot={"12"} />
      <span data-fnj-slot={"13"} />
      <span data-fnj-slot={"14"} />
      <span data-fnj-slot={"15"} />
      <span data-fnj-slot={"16"} />
      <span data-fnj-slot={"17"} />
      <span data-fnj-slot={"18"} />
      <span data-fnj-slot={"19"} />
      <div id="svg-templates" style={{ position: "absolute", overflow: "hidden", bottom: "0", left: "0", width: "0", height: "0", zIndex: "0", contain: "strict" }} aria-hidden="true">
        {"\n"}
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" id="svg884144090_1201">
          {"\n"}
          <g clipPath="url(#svg884144090_1201_clip0_2357_4289)">
            {"\n"}
            <path d="M8 14H56V48C56 48.5304 55.7893 49.0391 55.4142 49.4142C55.0391 49.7893 54.5304 50 54 50H10C9.46957 50 8.96086 49.7893 8.58579 49.4142C8.21071 49.0391 8 48.5304 8 48V14Z" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M8 26H56" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M8 38H56" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M22 26V50" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
          </g>
          {"\n"}
          <defs>
            {"\n"}
            <clipPath id="svg884144090_1201_clip0_2357_4289">
              {"\n"}
              <rect width="64" height="64" fill="white" style={{ fill: "white", fillOpacity: "1" }} />
              {"\n"}
            </clipPath>
            {"\n"}
          </defs>
          {"\n"}
        </svg>
        {"\n"}
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" id="svg-1248181415_1481">
          {"\n"}
          <g clipPath="url(#svg-1248181415_1481_clip0_2357_4296)">
            {"\n"}
            <path d="M6 44V16C6 14.4087 6.63214 12.8826 7.75736 11.7574C8.88258 10.6321 10.4087 10 12 10H16V38H12C10.4087 38 8.88258 38.6321 7.75736 39.7574C6.63214 40.8826 6 42.4087 6 44ZM6 44C6 45.5913 6.63214 47.1174 7.75736 48.2426C8.88258 49.3679 10.4087 50 12 50H58V16H16" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M32 24V40" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M42 24V40" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M26 28H48" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M26 36H48" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
          </g>
          {"\n"}
          <defs>
            {"\n"}
            <clipPath id="svg-1248181415_1481_clip0_2357_4296">
              {"\n"}
              <rect width="64" height="64" fill="white" style={{ fill: "white", fillOpacity: "1" }} />
              {"\n"}
            </clipPath>
            {"\n"}
          </defs>
          {"\n"}
        </svg>
        {"\n"}
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" id="svg-1950840146_1294">
          {"\n"}
          <g clipPath="url(#svg-1950840146_1294_clip0_2357_4304)">
            {"\n"}
            <path d="M50 56H14C13.4696 56 12.9609 55.7893 12.5858 55.4142C12.2107 55.0391 12 54.5304 12 54V10C12 9.46957 12.2107 8.96086 12.5858 8.58579C12.9609 8.21071 13.4696 8 14 8H38L52 22V54C52 54.5304 51.7893 55.0391 51.4142 55.4142C51.0391 55.7893 50.5304 56 50 56Z" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M38 8V22H52" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M26 32L38 44" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M38 32L26 44" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
          </g>
          {"\n"}
          <defs>
            {"\n"}
            <clipPath id="svg-1950840146_1294_clip0_2357_4304">
              {"\n"}
              <rect width="64" height="64" fill="white" style={{ fill: "white", fillOpacity: "1" }} />
              {"\n"}
            </clipPath>
            {"\n"}
          </defs>
          {"\n"}
        </svg>
        {"\n"}
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" id="svg419943795_1665">
          {"\n"}
          <path d="M48 30.0002L51.07 27.0702C52.8916 25.1841 53.8995 22.6581 53.8767 20.0362C53.854 17.4142 52.8023 14.9061 50.9482 13.052C49.0941 11.1979 46.586 10.1462 43.964 10.1234C41.342 10.1006 38.816 11.1086 36.93 12.9302L34 16.0002" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          {"\n"}
          <path d="M16.0002 34L12.9302 36.93C11.1086 38.816 10.1006 41.342 10.1234 43.964C10.1462 46.586 11.1979 49.0941 13.052 50.9482C14.9061 52.8023 17.4142 53.854 20.0362 53.8767C22.6581 53.8995 25.1841 52.8916 27.0702 51.07L30.0002 48" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          {"\n"}
          <path d="M48 40H54" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          {"\n"}
          <path d="M10 24H16" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          {"\n"}
          <path d="M40 48V54" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          {"\n"}
          <path d="M24 10V16" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          {"\n"}
        </svg>
        {"\n"}
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" id="svg-1665456487_2989">
          {"\n"}
          <g clipPath="url(#svg-1665456487_2989_clip0_2357_4311)">
            {"\n"}
            <path d="M22 34C23.9778 34 25.9112 34.5865 27.5557 35.6853C29.2002 36.7841 30.4819 38.3459 31.2388 40.1732C31.9957 42.0004 32.1937 44.0111 31.8079 45.9509C31.422 47.8907 30.4696 49.6725 29.0711 51.0711C27.6725 52.4696 25.8907 53.422 23.9509 53.8079C22.0111 54.1937 20.0004 53.9957 18.1732 53.2388C16.3459 52.4819 14.7841 51.2002 13.6853 49.5557C12.5865 47.9112 12 45.9778 12 44V42.3175" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M42 34C40.0222 34 38.0888 34.5865 36.4443 35.6853C34.7998 36.7841 33.5181 38.3459 32.7612 40.1732C32.0043 42.0004 31.8063 44.0111 32.1922 45.9509C32.578 47.8907 33.5304 49.6725 34.9289 51.0711C36.3275 52.4696 38.1093 53.422 40.0491 53.8079C41.9889 54.1937 43.9996 53.9957 45.8268 53.2388C47.6541 52.4819 49.2159 51.2002 50.3147 49.5557C51.4135 47.9112 52 45.9778 52 44V42.3175" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M18 43H16C13.1674 43.0025 10.4252 42.0029 8.25863 40.1781C6.09211 38.3532 4.64098 35.8208 4.16205 33.0289C3.68311 30.237 4.20726 27.3657 5.64173 24.9232C7.07619 22.4806 9.32849 20.6242 12 19.6825V18C12 15.3478 13.0536 12.8043 14.929 10.9289C16.8043 9.05357 19.3479 8 22 8C24.6522 8 27.1957 9.05357 29.0711 10.9289C30.9465 12.8043 32 15.3478 32 18V44" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M46 43H48C50.8327 43.0025 53.5749 42.0029 55.7414 40.1781C57.9079 38.3532 59.3591 35.8208 59.838 33.0289C60.3169 30.237 59.7928 27.3657 58.3583 24.9232C56.9238 22.4806 54.6715 20.6242 52 19.6825V18C52 15.3478 50.9464 12.8043 49.0711 10.9289C47.1957 9.05357 44.6522 8 42 8C39.3478 8 36.8043 9.05357 34.9289 10.9289C33.0536 12.8043 32 15.3478 32 18" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M50 28H49C47.1435 28 45.363 27.2625 44.0503 25.9497C42.7375 24.637 42 22.8565 42 21V20" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M14 28H15C16.8565 28 18.637 27.2625 19.9497 25.9497C21.2625 24.637 22 22.8565 22 21V20" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
          </g>
          {"\n"}
          <defs>
            {"\n"}
            <clipPath id="svg-1665456487_2989_clip0_2357_4311">
              {"\n"}
              <rect width="64" height="64" fill="white" style={{ fill: "white", fillOpacity: "1" }} />
              {"\n"}
            </clipPath>
            {"\n"}
          </defs>
          {"\n"}
        </svg>
        {"\n"}
        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" id="svg1525124364_1060">
          {"\n"}
          <rect width="18.6682" height="18" rx="9" fill="black" style={{ fill: "black", fillOpacity: "1" }} />
          {"\n"}
          <path d="M7.65586 6.47461C7.91485 6.51605 8.18421 6.64554 8.46392 6.8631C8.74363 7.07029 8.95082 7.30857 9.0855 7.57792V8.58799C9.00262 8.8159 8.86795 9.10598 8.68147 9.45821C8.50536 9.80008 8.30334 10.1575 8.07543 10.5304C7.85788 10.893 7.63514 11.2245 7.40723 11.525L6.47485 10.95L7.29845 9.03864L6.53701 7.42252C6.68205 7.21533 6.85816 7.02367 7.06536 6.84756C7.28291 6.66108 7.47975 6.53677 7.65586 6.47461ZM10.7638 6.47461C11.0228 6.51605 11.2921 6.64554 11.5718 6.8631C11.8515 7.07029 12.0587 7.30857 12.1934 7.57792V8.58799C12.1105 8.8159 11.9759 9.10598 11.7894 9.45821C11.6133 9.80008 11.4113 10.1575 11.1833 10.5304C10.9658 10.893 10.7431 11.2245 10.5151 11.525L9.58277 10.95L10.4064 9.03864L9.64493 7.42252C9.78996 7.21533 9.96608 7.02367 10.1733 6.84756C10.3908 6.66108 10.5877 6.53677 10.7638 6.47461Z" fill="white" style={{ fill: "white", fillOpacity: "1" }} />
          {"\n"}
        </svg>
        {"\n"}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" id="svg1430632715_1563">
          {"\n"}
          <g clipPath="url(#svg1430632715_1563_clip0_2348_4360)">
            {"\n"}
            <path d="M24 2L30 8" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M27 5L11 21" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M4 28.9998C3.73478 28.9998 3.48043 28.8945 3.29289 28.7069C3.10536 28.5194 3 28.265 3 27.9998V17.9998C2.9999 17.8684 3.02568 17.7384 3.07586 17.617C3.12605 17.4956 3.19967 17.3852 3.2925 17.2923L10.2925 10.2923C10.3854 10.1993 10.4957 10.1256 10.6171 10.0753C10.7385 10.0249 10.8686 9.99902 11 9.99902C11.1314 9.99902 11.2615 10.0249 11.3829 10.0753C11.5043 10.1256 11.6146 10.1993 11.7075 10.2923L21.7075 20.2923C21.8005 20.3852 21.8742 20.4955 21.9246 20.6169C21.9749 20.7383 22.0008 20.8684 22.0008 20.9998C22.0008 21.1312 21.9749 21.2614 21.9246 21.3828C21.8742 21.5041 21.8005 21.6144 21.7075 21.7073L14.7075 28.7073C14.6146 28.8001 14.5042 28.8738 14.3828 28.9239C14.2615 28.9741 14.1314 28.9999 14 28.9998H4Z" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
          </g>
          {"\n"}
          <defs>
            {"\n"}
            <clipPath id="svg1430632715_1563_clip0_2348_4360">
              {"\n"}
              <rect width="32" height="32" fill="white" style={{ fill: "white", fillOpacity: "1" }} />
              {"\n"}
            </clipPath>
            {"\n"}
          </defs>
          {"\n"}
        </svg>
        {"\n"}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" id="svg1529016171_1873">
          {"\n"}
          <path d="M3.99991 13.5001C3.8673 13.5001 3.74013 13.4474 3.64636 13.3536C3.55259 13.2599 3.49991 13.1327 3.49991 13.0001V10.332C3.23318 10.4582 2.93887 10.5149 2.64434 10.4968C2.34981 10.4787 2.06463 10.3865 1.81532 10.2286C1.56601 10.0708 1.36066 9.85247 1.21837 9.59396C1.07608 9.33545 1.00146 9.04516 1.00146 8.75008C1.00146 8.455 1.07608 8.16471 1.21837 7.90621C1.36066 7.6477 1.56601 7.42937 1.81532 7.27152C2.06463 7.11367 2.34981 7.02143 2.64434 7.00336C2.93887 6.9853 3.23318 7.04201 3.49991 7.16821V4.50008C3.49991 4.36747 3.55259 4.2403 3.64636 4.14653C3.74013 4.05276 3.8673 4.00008 3.99991 4.00008H6.91804C6.7917 3.73335 6.73487 3.43899 6.75285 3.1444C6.77082 2.8498 6.86301 2.56454 7.02084 2.31514C7.17867 2.06575 7.39702 1.86032 7.65556 1.71797C7.91411 1.57562 8.20446 1.50098 8.4996 1.50098C8.79474 1.50098 9.08509 1.57562 9.34363 1.71797C9.60218 1.86032 9.82052 2.06575 9.97835 2.31514C10.1362 2.56454 10.2284 2.8498 10.2463 3.1444C10.2643 3.43899 10.2075 3.73335 10.0812 4.00008H12.9999C13.1325 4.00008 13.2597 4.05276 13.3535 4.14653C13.4472 4.2403 13.4999 4.36747 13.4999 4.50008V7.16821C13.2332 7.04201 12.9389 6.9853 12.6443 7.00336C12.3498 7.02143 12.0646 7.11367 11.8153 7.27152C11.566 7.42937 11.3607 7.6477 11.2184 7.90621C11.0761 8.16471 11.0015 8.455 11.0015 8.75008C11.0015 9.04516 11.0761 9.33545 11.2184 9.59396C11.3607 9.85247 11.566 10.0708 11.8153 10.2286C12.0646 10.3865 12.3498 10.4787 12.6443 10.4968C12.9389 10.5149 13.2332 10.4582 13.4999 10.332V13.0001C13.4999 13.1327 13.4472 13.2599 13.3535 13.3536C13.2597 13.4474 13.1325 13.5001 12.9999 13.5001H3.99991Z" stroke="#1439CC" style={{ stroke: "#1439CC", stroke: "color(display-p3 0.0800 0.2217 0.8000)", strokeOpacity: "1" }} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          {"\n"}
        </svg>
        {"\n"}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" id="svg-343734935_925">
          {"\n"}
          <g clipPath="url(#svg-343734935_925_clip0_2442_7233)">
            {"\n"}
            <path d="M3 13C4.10457 13 5 12.1046 5 11C5 9.89543 4.10457 9 3 9C1.89543 9 1 9.89543 1 11C1 12.1046 1.89543 13 3 13Z" stroke="#1439CC" style={{ stroke: "#1439CC", stroke: "color(display-p3 0.0800 0.2217 0.8000)", strokeOpacity: "1" }} strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M13 3L15 5L13 7" stroke="#1439CC" style={{ stroke: "#1439CC", stroke: "color(display-p3 0.0800 0.2217 0.8000)", strokeOpacity: "1" }} strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M5 11C10.5 11 7.5 5 13 5H15" stroke="#1439CC" style={{ stroke: "#1439CC", stroke: "color(display-p3 0.0800 0.2217 0.8000)", strokeOpacity: "1" }} strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
          </g>
          {"\n"}
          <defs>
            {"\n"}
            <clipPath id="svg-343734935_925_clip0_2442_7233">
              {"\n"}
              <rect width="16" height="16" fill="white" style={{ fill: "white", fillOpacity: "1" }} />
              {"\n"}
            </clipPath>
            {"\n"}
          </defs>
          {"\n"}
        </svg>
        {"\n"}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" id="svg-1577824117_2522">
          {"\n"}
          <g clipPath="url(#svg-1577824117_2522_clip0_2442_7268)">
            {"\n"}
            <path d="M12 7.5C12.5822 7.49956 13.1566 7.63492 13.6773 7.8953C14.1981 8.15569 14.651 8.53394 15 9" stroke="#1439CC" style={{ stroke: "#1439CC", stroke: "color(display-p3 0.0800 0.2217 0.8000)", strokeOpacity: "1" }} strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M1 9C1.349 8.53394 1.80187 8.15569 2.32265 7.8953C2.84343 7.63492 3.41775 7.49956 4 7.5" stroke="#1439CC" style={{ stroke: "#1439CC", stroke: "color(display-p3 0.0800 0.2217 0.8000)", strokeOpacity: "1" }} strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M8 11.5C9.38071 11.5 10.5 10.3807 10.5 9C10.5 7.61929 9.38071 6.5 8 6.5C6.61929 6.5 5.5 7.61929 5.5 9C5.5 10.3807 6.61929 11.5 8 11.5Z" stroke="#1439CC" style={{ stroke: "#1439CC", stroke: "color(display-p3 0.0800 0.2217 0.8000)", strokeOpacity: "1" }} strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M4.5 13.5C4.85893 12.8909 5.3706 12.386 5.98444 12.0353C6.59827 11.6845 7.29302 11.5 8 11.5C8.70698 11.5 9.40173 11.6845 10.0156 12.0353C10.6294 12.386 11.1411 12.8909 11.5 13.5" stroke="#1439CC" style={{ stroke: "#1439CC", stroke: "color(display-p3 0.0800 0.2217 0.8000)", strokeOpacity: "1" }} strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M10.0625 5C10.156 4.63785 10.3492 4.30918 10.6201 4.05131C10.891 3.79345 11.2288 3.61672 11.5952 3.5412C11.9615 3.46567 12.3416 3.49439 12.6925 3.62407C13.0433 3.75376 13.3507 3.97922 13.5798 4.27486C13.8089 4.57049 13.9506 4.92445 13.9886 5.29653C14.0267 5.66862 13.9596 6.04392 13.7951 6.37981C13.6305 6.7157 13.3751 6.99872 13.0578 7.19673C12.7405 7.39475 12.374 7.49981 12 7.5" stroke="#1439CC" style={{ stroke: "#1439CC", stroke: "color(display-p3 0.0800 0.2217 0.8000)", strokeOpacity: "1" }} strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M3.99997 7.5C3.62594 7.49981 3.25947 7.39475 2.94216 7.19673C2.62485 6.99872 2.36942 6.7157 2.20489 6.37981C2.04035 6.04392 1.9733 5.66862 2.01135 5.29653C2.0494 4.92445 2.19103 4.57049 2.42015 4.27486C2.64926 3.97922 2.95669 3.75376 3.30751 3.62407C3.65833 3.49439 4.03849 3.46567 4.40481 3.5412C4.77113 3.61672 5.10894 3.79345 5.37986 4.05131C5.65078 4.30918 5.84396 4.63785 5.93747 5" stroke="#1439CC" style={{ stroke: "#1439CC", stroke: "color(display-p3 0.0800 0.2217 0.8000)", strokeOpacity: "1" }} strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
          </g>
          {"\n"}
          <defs>
            {"\n"}
            <clipPath id="svg-1577824117_2522_clip0_2442_7268">
              {"\n"}
              <rect width="16" height="16" fill="white" style={{ fill: "white", fillOpacity: "1" }} />
              {"\n"}
            </clipPath>
            {"\n"}
          </defs>
          {"\n"}
        </svg>
        {"\n"}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" id="svg-1065817295_2000">
          {"\n"}
          <g clipPath="url(#svg-1065817295_2000_clip0_2442_7257)">
            {"\n"}
            <path d="M8.06059 4.43916L4.43932 8.06043C3.85354 8.64622 3.85354 9.59597 4.43932 10.1818L5.81818 11.5606C6.40397 12.1464 7.35371 12.1464 7.9395 11.5606L11.5608 7.93934C12.1466 7.35356 12.1466 6.40381 11.5608 5.81802L10.1819 4.43916C9.59613 3.85338 8.64638 3.85338 8.06059 4.43916Z" stroke="#1439CC" style={{ stroke: "#1439CC", stroke: "color(display-p3 0.0800 0.2217 0.8000)", strokeOpacity: "1" }} strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M5.5 5.5L10.5 10.5" stroke="#1439CC" style={{ stroke: "#1439CC", stroke: "color(display-p3 0.0800 0.2217 0.8000)", strokeOpacity: "1" }} strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M14.5001 1.5L10.8713 5.12875" stroke="#1439CC" style={{ stroke: "#1439CC", stroke: "color(display-p3 0.0800 0.2217 0.8000)", strokeOpacity: "1" }} strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M5.12875 10.8711L1.5 14.4998" stroke="#1439CC" style={{ stroke: "#1439CC", stroke: "color(display-p3 0.0800 0.2217 0.8000)", strokeOpacity: "1" }} strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M6 2L6.5 3.25" stroke="#1439CC" style={{ stroke: "#1439CC", stroke: "color(display-p3 0.0800 0.2217 0.8000)", strokeOpacity: "1" }} strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M2 6L3.25 6.5" stroke="#1439CC" style={{ stroke: "#1439CC", stroke: "color(display-p3 0.0800 0.2217 0.8000)", strokeOpacity: "1" }} strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M12.75 9.5L14 10" stroke="#1439CC" style={{ stroke: "#1439CC", stroke: "color(display-p3 0.0800 0.2217 0.8000)", strokeOpacity: "1" }} strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M9.5 12.75L10 14" stroke="#1439CC" style={{ stroke: "#1439CC", stroke: "color(display-p3 0.0800 0.2217 0.8000)", strokeOpacity: "1" }} strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
          </g>
          {"\n"}
          <defs>
            {"\n"}
            <clipPath id="svg-1065817295_2000_clip0_2442_7257">
              {"\n"}
              <rect width="16" height="16" fill="white" style={{ fill: "white", fillOpacity: "1" }} />
              {"\n"}
            </clipPath>
            {"\n"}
          </defs>
          {"\n"}
        </svg>
        {"\n"}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" id="svg-476006839_742">
          {"\n"}
          <g clipPath="url(#svg-476006839_742_clip0_2164_291)">
            {"\n"}
            <path d="M9 5H23L30 13L16 28L2 13L9 5Z" stroke="white" style={{ stroke: "white", strokeOpacity: "1" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M22 13L16 28L10 13L16 5L22 13Z" stroke="white" style={{ stroke: "white", strokeOpacity: "1" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M2 13H30" stroke="white" style={{ stroke: "white", strokeOpacity: "1" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
          </g>
          {"\n"}
          <defs>
            {"\n"}
            <clipPath id="svg-476006839_742_clip0_2164_291">
              {"\n"}
              <rect width="32" height="32" fill="white" style={{ fill: "white", fillOpacity: "1" }} />
              {"\n"}
            </clipPath>
            {"\n"}
          </defs>
          {"\n"}
        </svg>
        {"\n"}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" id="svg-1778341571_1166">
          {"\n"}
          <g clipPath="url(#svg-1778341571_1166_clip0_2446_9947)">
            {"\n"}
            <path d="M6 22H13V17H19V12H26" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M25 4H7C6.44772 4 6 4.44772 6 5V27C6 27.5523 6.44772 28 7 28H25C25.5523 28 26 27.5523 26 27V5C26 4.44772 25.5523 4 25 4Z" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M13 22H26" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M19 17H26" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
          </g>
          {"\n"}
          <defs>
            {"\n"}
            <clipPath id="svg-1778341571_1166_clip0_2446_9947">
              {"\n"}
              <rect width="32" height="32" fill="white" style={{ fill: "white", fillOpacity: "1" }} />
              {"\n"}
            </clipPath>
            {"\n"}
          </defs>
          {"\n"}
        </svg>
        {"\n"}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" id="svg-1153347411_833">
          {"\n"}
          <g clipPath="url(#svg-1153347411_833_clip0_2446_9954)">
            {"\n"}
            <path d="M16 22C23.1797 22 29 18.4183 29 14C29 9.58172 23.1797 6 16 6C8.8203 6 3 9.58172 3 14C3 18.4183 8.8203 22 16 22Z" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M6 28.2C10 30.2875 16 28.2 16 22.9788C16 16.2713 8.42 15.1663 7.1725 19.8725" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
          </g>
          {"\n"}
          <defs>
            {"\n"}
            <clipPath id="svg-1153347411_833_clip0_2446_9954">
              {"\n"}
              <rect width="32" height="32" fill="white" style={{ fill: "white", fillOpacity: "1" }} />
              {"\n"}
            </clipPath>
            {"\n"}
          </defs>
          {"\n"}
        </svg>
        {"\n"}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" id="svg-1987249017_2136">
          {"\n"}
          <g clipPath="url(#svg-1987249017_2136_clip0_2446_9959)">
            {"\n"}
            <path d="M2 10H13" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M19 10H30" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M16 13C17.6569 13 19 11.6569 19 10C19 8.34315 17.6569 7 16 7C14.3431 7 13 8.34315 13 10C13 11.6569 14.3431 13 16 13Z" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M5 25C6.65685 25 8 23.6569 8 22C8 20.3431 6.65685 19 5 19C3.34315 19 2 20.3431 2 22C2 23.6569 3.34315 25 5 25Z" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M27 25C28.6569 25 30 23.6569 30 22C30 20.3431 28.6569 19 27 19C25.3431 19 24 20.3431 24 22C24 23.6569 25.3431 25 27 25Z" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M18.9724 10.4062C20.9532 10.9637 22.7382 12.0647 24.1252 13.5847C25.5122 15.1047 26.4457 16.9829 26.8199 19.0063" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M5.17993 19.0063C5.55428 16.9829 6.48783 15.1049 7.8748 13.5849C9.26178 12.0649 11.0467 10.9638 13.0274 10.4062" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
          </g>
          {"\n"}
          <defs>
            {"\n"}
            <clipPath id="svg-1987249017_2136_clip0_2446_9959">
              {"\n"}
              <rect width="32" height="32" fill="white" style={{ fill: "white", fillOpacity: "1" }} />
              {"\n"}
            </clipPath>
            {"\n"}
          </defs>
          {"\n"}
        </svg>
        {"\n"}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" id="svg663365851_1309">
          {"\n"}
          <g clipPath="url(#svg663365851_1309_clip0_2446_9969)">
            {"\n"}
            <path d="M20.7076 3.29268L3.29329 20.707C2.90276 21.0975 2.90276 21.7306 3.29329 22.1212L9.8791 28.707C10.2696 29.0975 10.9028 29.0975 11.2933 28.707L28.7076 11.2927C29.0981 10.9022 29.0981 10.269 28.7076 9.8785L22.1218 3.29268C21.7312 2.90216 21.0981 2.90216 20.7076 3.29268Z" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M16 8L20 12" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M12 12L16 16" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
            <path d="M8 16L12 20" stroke="#666666" style={{ stroke: "#666666", stroke: "color(display-p3 0.4000 0.4000 0.4000)", strokeOpacity: "1" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {"\n"}
          </g>
          {"\n"}
          <defs>
            {"\n"}
            <clipPath id="svg663365851_1309_clip0_2446_9969">
              {"\n"}
              <rect width="32" height="32" fill="white" style={{ fill: "white", fillOpacity: "1" }} />
              {"\n"}
            </clipPath>
            {"\n"}
          </defs>
          {"\n"}
        </svg>
        {"\n"}
        <svg viewBox="0 0 30 30" overflow="visible" id="svg-1982340494_1221">
          <g>
            <path d="M 22.5 0 L 7.5 0 C 3.358 0 0 3.358 0 7.5 L 0 22.5 C 0 26.642 3.358 30 7.5 30 L 22.5 30 C 26.642 30 30 26.642 30 22.5 L 30 7.5 C 30 3.358 26.642 0 22.5 0 Z" fill="transparent" strokeWidth="3.75" stroke="rgba(102,102,102,0.4)" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="" />
            <path d="M 21.005 14.056 C 21.191 15.304 20.977 16.579 20.396 17.699 C 19.815 18.819 18.895 19.728 17.768 20.295 C 16.641 20.862 15.363 21.06 14.117 20.859 C 12.871 20.659 11.72 20.071 10.828 19.178 C 9.935 18.286 9.347 17.135 9.147 15.889 C 8.946 14.643 9.144 13.365 9.711 12.238 C 10.278 11.111 11.187 10.191 12.307 9.61 C 13.427 9.029 14.702 8.815 15.95 9.001 C 17.224 9.189 18.403 9.783 19.313 10.693 C 20.223 11.603 20.817 12.782 21.005 14.056 Z" fill="transparent" strokeWidth="3.75" stroke="rgba(102,102,102,0.4)" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="" />
            <path d="M 23.25 6.75 L 23.265 6.75" fill="transparent" strokeWidth="3.75" stroke="rgba(102,102,102,0.4)" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="" />
          </g>
        </svg>
        {"\n"}
        <svg viewBox="0 0 30 30" overflow="visible" id="svg-1470600937_1018">
          <g>
            <path d="M 15 30 C 23.284 30 30 23.284 30 15 C 30 6.716 23.284 0 15 0 C 6.716 0 0 6.716 0 15 C 0 23.284 6.716 30 15 30 Z" fill="transparent" strokeWidth="3" stroke="rgba(102,102,102,0.4)" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="" />
            <path d="M 25.695 4.635 C 19.83 10.71 12 12.66 0.375 13.41" fill="transparent" strokeWidth="3" stroke="rgba(102,102,102,0.4)" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="" />
            <path d="M 29.621 16.262 C 19.691 14.147 11.411 17.762 5.051 25.742" fill="transparent" strokeWidth="3" stroke="rgba(102,102,102,0.4)" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="" />
            <path d="M 9.844 1.125 C 16.399 10.125 18.844 15.255 21.844 27.705" fill="transparent" strokeWidth="3" stroke="rgba(102,102,102,0.4)" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="" />
          </g>
        </svg>
        {"\n"}
        <svg width="45" height="64" viewBox="0 0 45 64" fill="none" id="svg621931287_638">
          {"\n"}
          <path d="M36.5871 11.2687L9.86857 25.8303C9.52101 26.0197 9.54515 26.4843 9.9108 26.6431L34.5217 37.3346C34.8873 37.4934 34.9114 37.958 34.5639 38.1474L7.75468 52.7584C7.37609 52.9647 6.90776 52.6649 6.99435 52.2717L10.1553 37.9159C10.1847 37.7824 10.2775 37.6674 10.4089 37.6018L32.8962 26.3675C33.0178 26.3067 33.1068 26.2035 33.1426 26.0817L37.3401 11.7839C37.4578 11.3828 36.9789 11.0552 36.5871 11.2687Z" stroke="white" strokeOpacity="0.9" style={{ stroke: "white", strokeOpacity: "0.9" }} strokeWidth="3.16399" strokeMiterlimit="10" />
          {"\n"}
        </svg>
        {"\n"}
        <svg id="4175524542" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M 6 17.251 L 6 11.251 L 10.5 11.251 L 10.5 17.251 L 16.5 17.251 L 16.5 8.251 C 16.5 8.052 16.421 7.861 16.281 7.72 L 8.781 0.22 C 8.64 0.079 8.449 0 8.25 0 C 8.051 0 7.86 0.079 7.719 0.22 L 0.219 7.72 C 0.079 7.861 0 8.052 0 8.251 L 0 17.251 Z" fillOpacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="17.250589992311827px" id="Zd1kfaYz1" transform="translate(3.75 2.999)" width="16.500000464425764px" />
          <path d="M 6 17.251 L 6 11.251 L 10.5 11.251 L 10.5 17.251 L 16.5 17.251 L 16.5 8.251 C 16.5 8.052 16.421 7.861 16.281 7.72 L 8.781 0.22 C 8.64 0.079 8.449 0 8.25 0 C 8.051 0 7.86 0.079 7.719 0.22 L 0.219 7.72 C 0.079 7.861 0 8.052 0 8.251 L 0 17.251 Z" fill="transparent" height="17.250589992311827px" id="U148LkUuz" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 2.999)" width="16.500000464425764px" />
        </svg>
        {"\n"}
        <svg id="159041337" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M 9.001 0 C 5.274 0 1.932 2.297 0.597 5.777 C -0.737 9.257 0.211 13.2 2.982 15.692 L 2.982 15.692 C 4.134 13.426 6.46 12 9.001 12 C 6.93 12 5.251 10.321 5.251 8.25 C 5.251 6.179 6.93 4.5 9.001 4.5 C 11.072 4.5 12.751 6.179 12.751 8.25 C 12.751 10.321 11.072 12 9.001 12 C 11.542 11.999 13.868 13.426 15.02 15.691 C 17.79 13.198 18.738 9.256 17.403 5.777 C 16.069 2.297 12.728 0 9.001 0 Z" fillOpacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="15.69187501654227px" id="ZqEqlBeTd" transform="translate(2.999 3)" width="18.00079583996478px" />
          <path d="M 0 3.694 C 1.151 1.428 3.477 0 6.019 0 C 8.561 0 10.887 1.428 12.037 3.694" fill="transparent" height="3.6943252075032547px" id="gGSVCm5lV" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(5.981 14.997)" width="12.037499999999994px" />
          <path d="M 0 9 C 0 4.029 4.029 0 9 0 C 13.971 0 18 4.029 18 9 C 18 13.971 13.971 18 9 18 C 4.029 18 0 13.971 0 9 Z" fill="transparent" height="18px" id="ZwB0TRUBZ" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 3)" width="18px" />
          <path d="M 0 3.75 C 0 1.679 1.679 0 3.75 0 C 5.821 0 7.5 1.679 7.5 3.75 C 7.5 5.821 5.821 7.5 3.75 7.5 C 1.679 7.5 0 5.821 0 3.75 Z" fill="transparent" height="7.5px" id="QLPFV7G5_" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(8.25 7.5)" width="7.5px" />
        </svg>
        {"\n"}
        <svg id="405654161" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M 9 2.408 C 5.84 2.413 2.735 1.583 0 0.001 L 0 0.001 L 0 7.658 C 0 8.073 0.336 8.408 0.75 8.408 L 17.25 8.408 C 17.664 8.408 18 8.073 18 7.658 L 18 0 C 15.265 1.583 12.16 2.413 9 2.408 Z" fillOpacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="8.408437499999991px" id="yZxSY5tM2" transform="translate(3 11.092)" width="18px" />
          <path d="M 0 0 L 3 0" fill="transparent" height="1px" id="ZO1T9W9Kn" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(10.5 10.5)" width="3px" />
          <path d="M 0.75 13.5 C 0.336 13.5 0 13.164 0 12.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 17.25 0 C 17.664 0 18 0.336 18 0.75 L 18 12.75 C 18 13.164 17.664 13.5 17.25 13.5 Z" fill="transparent" height="13.5px" id="U1X8jGTeU" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 6)" width="18px" />
          <path d="M 7.5 3 L 7.5 1.5 C 7.5 0.672 6.828 0 6 0 L 1.5 0 C 0.672 0 0 0.672 0 1.5 L 0 3" fill="transparent" height="3px" id="NHVMwj9J3" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(8.25 3)" width="7.5px" />
          <path d="M 18 0 C 15.265 1.583 12.16 2.413 9 2.408 C 5.84 2.413 2.735 1.583 0 0.001" fill="transparent" height="2.408460292330787px" id="gCBdRGdgX" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 11.092)" width="18px" />
        </svg>
        {"\n"}
        <svg id="4057687013" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 0 L 0 5.25 L 5.25 5.25 Z" fillOpacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="5.25px" id="A8OFpPyYF" transform="translate(14.25 3)" width="5.25px" />
          <path d="M 14.25 18 L 0.75 18 C 0.336 18 0 17.664 0 17.25 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 9.75 0 L 15 5.25 L 15 17.25 C 15 17.664 14.664 18 14.25 18 Z" fill="transparent" height="18px" id="CDKXQRvJo" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(4.5 3)" width="15px" />
          <path d="M 0 0 L 0 5.25 L 5.25 5.25" fill="transparent" height="5.25px" id="tnYIs2JmZ" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(14.25 3)" width="5.25px" />
        </svg>
        {"\n"}
        <svg id="3559153988" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 12 L 0 0 L 16.5 0 L 16.5 12 Z" fillOpacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="12px" id="gwB_ZdJt6" transform="translate(3.75 6)" width="16.5px" />
          <path d="M 0 0 L 16.5 0" fill="transparent" height="1px" id="xGkn4qbwc" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 12)" width="16.5px" />
          <path d="M 0 0 L 16.5 0" fill="transparent" height="1px" id="uQ9bOFKFt" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 6)" width="16.5px" />
          <path d="M 0 0 L 16.5 0" fill="transparent" height="1px" id="hrURkUe9P" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 18)" width="16.5px" />
        </svg>
        {"\n"}
      </div>
      {"\n\t"}
      <span data-fnj-slot={"20"} />
      {"\n    \n    "}
      <span data-fnj-slot={"21"} />
      {"\n\n\n"}
    </body>
  );
}
