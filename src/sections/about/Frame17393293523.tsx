"use client";

import React from "react";

export default function Frame17393293523() {
  const experiences = [
    {
      role: "Product Designer II",
      company: "Microgate Technologies Private Limited",
      period: "06/2024 – 07/2026",
      prominent: true,
    },
    {
      role: "Product Design Intern",
      company: "Designart Design Studio",
      period: "05/2023 – 12/2023",
      prominent: false,
    },
    {
      role: "Product Designer",
      company: "Proventus Business Solutions Pvt Ltd",
      period: "06/2020 – 05/2022",
      prominent: false,
    },
  ];

  return (
    <div className="vignesh-1p8t7th" data-border="true" data-vignesh-name="Frame 1739329352">
      <div className="vignesh-1tvull9" data-border="true" data-vignesh-name="Frame 1739329341">
        <div className="vignesh-1v3udhb" data-vignesh-component-type="RichTextContainer" style={{ transform: "none" }}>
          <p dir="auto" style={{ "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNTAw", "--vignesh-font-family": "\"Roboto Mono\", monospace", "--vignesh-font-size": "20px", "--vignesh-font-weight": "500", "--vignesh-letter-spacing": "-0.02em", "--vignesh-line-height": "28px", "--vignesh-text-color": "rgb(102, 102, 102)" } as React.CSSProperties} className="vignesh-text">
            {"Work experiences"}
          </p>
        </div>
        
        {/* Desktop View */}
        <div className="ssr-variant hidden-cmstll">
          <div className="vignesh-1mm4130-container">
            <div className="vignesh-gWWai vignesh-1j774mf vignesh-v-1j774mf" data-vignesh-name="Desktop" style={{ width: "100%" }}>
              {experiences.map((exp, idx) => (
                <div key={idx} className={idx === 0 ? "vignesh-4oaj2r-container" : idx === 1 ? "vignesh-h0fb0o-container" : "vignesh-k6wvne-container"}>
                  <div
                    className={`vignesh-8RTUc vignesh-195x6kx ${exp.prominent ? "vignesh-v-asceq6" : "vignesh-v-195x6kx"}`}
                    data-border="true"
                    data-vignesh-name={exp.prominent ? "Desktop Prominent" : "Desktop"}
                    style={{
                      "--1u1ttlp": "0px 0.6369534988189116px 0.6369534988189116px -0.25px rgba(0, 0, 0, 0.06), 0px 1.9316049144836143px 1.9316049144836143px -0.5px rgba(0, 0, 0, 0.07), 0px 5.106122817187569px 5.106122817187569px -0.75px rgba(0, 0, 0, 0.1), 0px 16px 16px -1px rgba(0, 0, 0, 0.2)",
                      "--border-bottom-width": "1px",
                      "--border-color": "rgba(102, 102, 102, 0.1)",
                      "--border-left-width": exp.prominent ? "1px" : "0px",
                      "--border-right-width": exp.prominent ? "1px" : "0px",
                      "--border-style": "solid",
                      "--border-top-width": exp.prominent ? "1px" : "0px",
                      backgroundColor: exp.prominent ? "var(--token-22fcb246-38bd-48c6-8a41-8eefd4df124f, rgb(26, 26, 26))" : "var(--token-28ada5df-c75d-45de-b6b6-690e156e6285, rgb(250, 250, 250))",
                      width: "100%",
                      borderBottomLeftRadius: exp.prominent ? "16px" : "0px",
                      borderBottomRightRadius: exp.prominent ? "16px" : "0px",
                      borderTopLeftRadius: exp.prominent ? "16px" : "0px",
                      borderTopRightRadius: exp.prominent ? "16px" : "0px",
                      boxShadow: "var(--1u1ttlp)",
                    } as React.CSSProperties}
                  >
                    <div className="vignesh-1rqju83" data-vignesh-component-type="RichTextContainer">
                      <p dir="auto" className="vignesh-text" style={{
                        "--font-selector": "SW50ZXItTWVkaXVt",
                        "--vignesh-font-open-type-features": "'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on",
                        "--vignesh-font-size": "20px",
                        "--vignesh-font-weight": "500",
                        "--vignesh-letter-spacing": "-0.03em",
                        "--vignesh-line-height": "1.3em",
                        "--vignesh-text-color": exp.prominent ? "var(--token-cd97e533-2924-464e-a04e-2728d8a5b286, rgb(255, 255, 255))" : "var(--token-488eeb43-eb39-49af-8d9c-3e8fc85c371a, rgb(51, 51, 51))",
                      } as React.CSSProperties}>
                        {exp.role}
                      </p>
                    </div>
                    <div className="vignesh-1qsqpmm" data-vignesh-name="Company & Periode">
                      <div className="vignesh-1o7vxyg" data-vignesh-component-type="RichTextContainer">
                        <p dir="auto" className="vignesh-text" style={{
                          "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                          "--vignesh-font-family": "\"Roboto Mono\", monospace",
                          "--vignesh-font-open-type-features": "'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on",
                          "--vignesh-letter-spacing": "-0.03em",
                          "--vignesh-line-height": "1.4em",
                          "--vignesh-text-alignment": "left",
                          "--vignesh-text-color": exp.prominent ? "var(--token-28ada5df-c75d-45de-b6b6-690e156e6285, rgb(250, 250, 250))" : "var(--token-df7e68e6-b73c-4dc3-86d1-b710ddee17b5, rgb(102, 102, 102))",
                        } as React.CSSProperties}>
                          {exp.company}
                        </p>
                      </div>
                      <div className="vignesh-1j9dwtn" data-vignesh-component-type="RichTextContainer">
                        <p dir="auto" className="vignesh-text" style={{
                          "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                          "--vignesh-font-family": "\"Roboto Mono\", monospace",
                          "--vignesh-font-open-type-features": "'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on",
                          "--vignesh-letter-spacing": "-0.03em",
                          "--vignesh-line-height": "1.4em",
                          "--vignesh-text-alignment": "right",
                          "--vignesh-text-color": exp.prominent ? "var(--token-28ada5df-c75d-45de-b6b6-690e156e6285, rgb(250, 250, 250))" : "var(--token-df7e68e6-b73c-4dc3-86d1-b710ddee17b5, rgb(102, 102, 102))",
                        } as React.CSSProperties}>
                          {exp.period}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="ssr-variant hidden-tkd66p">
          <div className="vignesh-1mm4130-container">
            <div className="vignesh-gWWai vignesh-1j774mf vignesh-v-y14563" data-vignesh-name="Phone" style={{ width: "100%" }}>
              {experiences.map((exp, idx) => (
                <div key={idx} className={idx === 0 ? "vignesh-4oaj2r-container" : idx === 1 ? "vignesh-h0fb0o-container" : "vignesh-k6wvne-container"}>
                  <div
                    className={`vignesh-8RTUc vignesh-195x6kx ${exp.prominent ? "vignesh-v-eonkhw" : "vignesh-v-9dl1h2"}`}
                    data-border="true"
                    data-vignesh-name={exp.prominent ? "Phone Prominent" : "Phone"}
                    style={{
                      "--1u1ttlp": "0px 0.6369534988189116px 0.6369534988189116px -0.25px rgba(0, 0, 0, 0.06), 0px 1.9316049144836143px 1.9316049144836143px -0.5px rgba(0, 0, 0, 0.07), 0px 5.106122817187569px 5.106122817187569px -0.75px rgba(0, 0, 0, 0.1), 0px 16px 16px -1px rgba(0, 0, 0, 0.2)",
                      "--border-bottom-width": "1px",
                      "--border-color": "rgba(102, 102, 102, 0.1)",
                      "--border-left-width": exp.prominent ? "1px" : "0px",
                      "--border-right-width": exp.prominent ? "1px" : "0px",
                      "--border-style": "solid",
                      "--border-top-width": exp.prominent ? "1px" : "0px",
                      backgroundColor: exp.prominent ? "var(--token-22fcb246-38bd-48c6-8a41-8eefd4df124f, rgb(26, 26, 26))" : "var(--token-28ada5df-c75d-45de-b6b6-690e156e6285, rgb(250, 250, 250))",
                      width: "100%",
                      borderBottomLeftRadius: exp.prominent ? "16px" : "0px",
                      borderBottomRightRadius: exp.prominent ? "16px" : "0px",
                      borderTopLeftRadius: exp.prominent ? "16px" : "0px",
                      borderTopRightRadius: exp.prominent ? "16px" : "0px",
                      boxShadow: "var(--1u1ttlp)",
                    } as React.CSSProperties}
                  >
                    <div className="vignesh-1rqju83" data-vignesh-component-type="RichTextContainer">
                      <p dir="auto" className="vignesh-text" style={{
                        "--font-selector": "SW50ZXItTWVkaXVt",
                        "--vignesh-font-open-type-features": "'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on",
                        "--vignesh-font-size": "20px",
                        "--vignesh-font-weight": "500",
                        "--vignesh-letter-spacing": "-0.03em",
                        "--vignesh-line-height": "1.3em",
                        "--vignesh-text-color": exp.prominent ? "var(--token-cd97e533-2924-464e-a04e-2728d8a5b286, rgb(255, 255, 255))" : "var(--token-488eeb43-eb39-49af-8d9c-3e8fc85c371a, rgb(51, 51, 51))",
                      } as React.CSSProperties}>
                        {exp.role}
                      </p>
                    </div>
                    <div className="vignesh-1qsqpmm" data-vignesh-name="Company & Periode">
                      <div className="vignesh-1o7vxyg" data-vignesh-component-type="RichTextContainer">
                        <p dir="auto" className="vignesh-text" style={{
                          "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                          "--vignesh-font-family": "\"Roboto Mono\", monospace",
                          "--vignesh-font-open-type-features": "'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on",
                          "--vignesh-letter-spacing": "-0.03em",
                          "--vignesh-line-height": "1.4em",
                          "--vignesh-text-alignment": "left",
                          "--vignesh-text-color": exp.prominent ? "var(--token-28ada5df-c75d-45de-b6b6-690e156e6285, rgb(250, 250, 250))" : "var(--token-df7e68e6-b73c-4dc3-86d1-b710ddee17b5, rgb(102, 102, 102))",
                        } as React.CSSProperties}>
                          {exp.company}
                        </p>
                      </div>
                      <div className="vignesh-1j9dwtn" data-vignesh-component-type="RichTextContainer">
                        <p dir="auto" className="vignesh-text" style={{
                          "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                          "--vignesh-font-family": "\"Roboto Mono\", monospace",
                          "--vignesh-font-open-type-features": "'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on",
                          "--vignesh-letter-spacing": "-0.03em",
                          "--vignesh-line-height": "1.4em",
                          "--vignesh-text-alignment": "right",
                          "--vignesh-text-color": exp.prominent ? "var(--token-28ada5df-c75d-45de-b6b6-690e156e6285, rgb(250, 250, 250))" : "var(--token-df7e68e6-b73c-4dc3-86d1-b710ddee17b5, rgb(102, 102, 102))",
                        } as React.CSSProperties}>
                          {exp.period}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

