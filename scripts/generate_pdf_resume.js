import PDFDocument from "pdfkit";
import fs from "node:fs";
import path from "node:path";

function createResume(outputPath) {
  const doc = new PDFDocument({
    size: "A4",
    margin: 36, // 0.5 inch margins
  });

  const stream = fs.createWriteStream(outputPath);
  doc.pipe(stream);

  const leftMargin = 36;
  const rightMargin = 559.28; // 595.28 - 36
  const contentWidth = rightMargin - leftMargin;

  // Primary colors matching the reference document
  const navyColor = "#1B365D"; // Dark navy header color
  const darkTextColor = "#1F2937";
  const grayTextColor = "#4B5563";
  const lineSeparatorColor = "#1B365D";

  // Header: Name
  doc
    .font("Helvetica-Bold")
    .fontSize(20)
    .fillColor(navyColor)
    .text("VIGNESH MUTHU ARUMUGAM", { align: "center" });

  doc.moveDown(0.2);

  // Subtitle
  doc
    .font("Helvetica-Bold")
    .fontSize(11)
    .fillColor(navyColor)
    .text("Product Designer | UX Designer", { align: "center" });

  doc.moveDown(0.25);

  // Contact info
  doc
    .font("Helvetica")
    .fontSize(9.5)
    .fillColor(grayTextColor)
    .text(
      "Chennai | +91 9344148837 | vigneshmuthu.arumugam@gmail.com | linkedin.com/in/vigneshmuthua | vigneshmuthu.me",
      { align: "center" }
    );

  doc.moveDown(0.5);

  // Helper for Section Titles
  function addSectionHeader(title) {
    const y = doc.y;
    doc
      .font("Helvetica-Bold")
      .fontSize(11)
      .fillColor(navyColor)
      .text(title.toUpperCase(), leftMargin, y);

    const lineY = doc.y + 2;
    doc
      .moveTo(leftMargin, lineY)
      .lineTo(rightMargin, lineY)
      .lineWidth(1)
      .strokeColor(lineSeparatorColor)
      .stroke();

    doc.y = lineY + 6;
  }

  // 1. PROFESSIONAL SUMMARY
  addSectionHeader("PROFESSIONAL SUMMARY");

  doc
    .font("Helvetica")
    .fontSize(9)
    .fillColor(darkTextColor)
    .lineGap(2)
    .text(
      "Product Designer with an M.Des in Product Design and 4+ years of experience leading end-to-end UX for digital and hybrid products, from discovery through delivery. Skilled at understanding business requirements and translating them into clear design outcomes running UX audits, driving user research, and building accessible, scalable design systems along the way. Has adopted generative AI to enhance the design workflow, using it to synthesize research and support sharper decision-making. Leads design strategy, guides cross-functional collaboration, and turns user pattern into measurable product improvements.",
      { width: contentWidth, align: "justify" }
    );

  doc.moveDown(0.6);

  // 2. SKILLS
  addSectionHeader("SKILLS");

  const skills = [
    {
      category: "Design",
      items:
        "UX Design, UI Design, Interaction Design, Motion Design, Rapid Prototyping, Wireframing, Visual Design, Design Systems, System Design, Inclusive Design, Accessibility (WCAG 2.1), Data Visualization, Branding",
    },
    {
      category: "UX Leadership & Strategy",
      items:
        "UX Audits, Business Requirement Analysis, Outcome-Driven Design, Design Strategy, Design Critique & Mentorship, Stakeholder Alignment, Cross-Functional Collaboration",
    },
    {
      category: "Gen AI",
      items:
        "AI-Assisted Design & Development Workflows (Claude Code, Codex, Cursor), AI-Powered Research Synthesis (Dovetail, NotebookLM), Conversational UX, Designing for AI Interfaces, Google PAIR Guidebook, Gemini API, MCP & Design Token Integration, Prompt UX, Human-Centered AI",
    },
    {
      category: "Research",
      items:
        "User Research, A/B Testing, Design Thinking, Heuristic Evaluation, Usability Testing, Journey Mapping, Storyboarding, Competitive Benchmarking, Information Architecture, Project Management",
    },
    {
      category: "Tools",
      items:
        "Figma, Adobe Creative Suite (Photoshop, Illustrator, After Effects, Premiere Pro), Sketch, Rive, Hotjar, Miro, FigJam, Blender, Cinema 4D, Keyshot, Procreate, Jira, Notion",
    },
  ];

  skills.forEach((skill, index) => {
    const startY = doc.y;
    doc
      .font("Helvetica-Bold")
      .fontSize(9)
      .fillColor(darkTextColor)
      .text(`${skill.category}: `, leftMargin, startY, {
        continued: true,
      })
      .font("Helvetica")
      .fillColor(darkTextColor)
      .text(skill.items, { width: contentWidth, align: "left" });

    if (index < skills.length - 1) {
      doc.moveDown(0.2);
    }
  });

  doc.moveDown(0.6);

  // 3. PROFESSIONAL EXPERIENCE
  addSectionHeader("PROFESSIONAL EXPERIENCE");

  const experiences = [
    {
      role: "Product Designer II",
      period: "06/2024 – 07/2026",
      company: "Microgate",
      location: "Hyderabad",
      bullets: [
        "Led end-to-end UX for enterprise product features, translating business requirements into clear design outcomes across user flows, wireframes, high-fidelity UI, and interactive prototypes, resulting in a 28% improvement in task completion rates.",
        "Acted as Head of Product Design for the Chiltier project, owning the complete design of a hybrid physical and digital product, including system design and seamless interaction between physical and digital interfaces.",
        "Ran UX audits and applied research methodologies including usability testing and stakeholder workshops to gather insights and translate findings into actionable design improvements, reducing design iteration cycles by 35%.",
        "Designed and maintained design system components aligned with accessibility standards and inclusive design principles, reducing front-end rework by 40%.",
        "Adopted generative AI tools to accelerate prototyping and design-to-code workflows, using Dovetail and NotebookLM to synthesize qualitative research faster, while collaborating cross-functionally to keep UX strategy aligned with business goals.",
      ],
    },
    {
      role: "Product Design Intern",
      period: "05/2023 – 12/2023",
      company: "Designart",
      location: "Chennai",
      bullets: [
        "Undertaken as part of the M.Des curriculum; designed Vehicle HMI Dashboards by analyzing user needs and creating optimized digital interfaces for automotive systems.",
        "Created wireframes, interactive prototypes, and high-fidelity user interfaces focused on improving usability and information hierarchy.",
        "Applied design thinking and iterative prototyping to enhance the overall user experience of complex vehicle data displays.",
      ],
    },
    {
      role: "Product Designer",
      period: "06/2020 – 05/2022",
      company: "Proventus",
      location: "Bengaluru",
      bullets: [
        "Conducted user research and usability testing to understand target user behavior and improve digital product experiences.",
        "Created low- to mid-fidelity prototypes and wireframes that contributed to an 18% improvement in usability test scores.",
        "Collaborated with cross-functional teams to translate user needs into clear, user-centered design solutions.",
      ],
    },
  ];

  experiences.forEach((exp, expIdx) => {
    // Header Line: Role (left), Period (right)
    const yHeader = doc.y;
    doc
      .font("Helvetica-Bold")
      .fontSize(9.5)
      .fillColor(darkTextColor)
      .text(exp.role, leftMargin, yHeader, { width: contentWidth - 100 });

    doc
      .font("Helvetica-Bold")
      .fontSize(9.5)
      .fillColor(darkTextColor)
      .text(exp.period, leftMargin, yHeader, {
        width: contentWidth,
        align: "right",
      });

    // Subheader Line: Company | Location
    doc
      .font("Helvetica-Oblique")
      .fontSize(9)
      .fillColor(grayTextColor)
      .text(`${exp.company} | ${exp.location}`, leftMargin, doc.y + 1);

    doc.moveDown(0.2);

    // Bullets
    exp.bullets.forEach((bullet) => {
      const bY = doc.y;
      doc
        .font("Helvetica")
        .fontSize(8.5)
        .fillColor(darkTextColor)
        .text("•", leftMargin + 4, bY);

      doc
        .font("Helvetica")
        .fontSize(8.5)
        .fillColor(darkTextColor)
        .lineGap(1.5)
        .text(bullet, leftMargin + 14, bY, {
          width: contentWidth - 14,
          align: "left",
        });
      doc.moveDown(0.15);
    });

    if (expIdx < experiences.length - 1) {
      doc.moveDown(0.3);
    }
  });

  doc.moveDown(0.6);

  // 4. EDUCATION
  addSectionHeader("EDUCATION");

  const educations = [
    {
      degree: "M.Des — Product Design",
      institution: "Indian Institute of Information Technology, Design & Manufacturing",
      period: "2022 – 2024",
    },
    {
      degree: "B.E. — Mechanical Engineering",
      institution: "Panimalar Institute of Technology",
      period: "2016 – 2020",
    },
  ];

  educations.forEach((edu) => {
    const eY = doc.y;
    doc
      .font("Helvetica-Bold")
      .fontSize(9)
      .fillColor(darkTextColor)
      .text(edu.degree, leftMargin, eY, { continued: true })
      .font("Helvetica")
      .text(` — ${edu.institution}`);

    doc
      .font("Helvetica-Bold")
      .fontSize(9)
      .fillColor(darkTextColor)
      .text(edu.period, leftMargin, eY, {
        width: contentWidth,
        align: "right",
      });

    doc.moveDown(0.2);
  });

  doc.moveDown(0.4);

  // 5. ACHIEVEMENTS & AWARDS
  addSectionHeader("ACHIEVEMENTS & AWARDS");

  const awards = [
    "Excellent Award — Microgate Technologies (Oct 2024, Jul 2025)",
    "Top Impactor — Microgate Technologies (Dec 2025)",
  ];

  awards.forEach((award) => {
    const aY = doc.y;
    doc
      .font("Helvetica")
      .fontSize(8.5)
      .fillColor(darkTextColor)
      .text("•", leftMargin + 4, aY);

    doc
      .font("Helvetica")
      .fontSize(8.5)
      .fillColor(darkTextColor)
      .text(award, leftMargin + 14, aY, { width: contentWidth - 14 });

    doc.moveDown(0.15);
  });

  doc.end();
}

const publicDir = path.join(process.cwd(), "public");
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

createResume(path.join(publicDir, "vignesh_muthu_resume.pdf"));
createResume(path.join(publicDir, "resume.pdf"));
console.log("Resume PDFs generated successfully!");
