import { motion } from "motion/react";
import { Navigation } from "../components/navigation";
import {
  Download,
  ArrowLeft,
  MapPin,
  Mail,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

export function Resume() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <style>{`
        @page {
          size: A4;
          margin: 0;
        }

        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }

          nav, footer, button {
            display: none !important;
          }

          .print-hide {
            display: none !important;
          }

          body, html {
            margin: 0 !important;
            padding: 0 !important;
            font-size: 11pt !important;
            background: var(--background) !important;
            width: 100% !important;
            height: 100% !important;
          }

          main {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }

          .resume-print-root {
            background: var(--background) !important;
          }

          .max-w-4xl {
            width: 210mm !important;
            max-width: 210mm !important;
            min-height: 297mm !important;
            box-sizing: border-box !important;
            padding: 11mm 5mm 6mm 5mm !important;
            margin: 0 auto !important;
            zoom: 0.92;
            transform-origin: top center;
            background: var(--background) !important;
          }

          .resume-header {
            margin-bottom: 1mm !important;
          }

          .resume-summary {
            margin-bottom: 3mm !important;
          }

          .resume-main-grid {
            display: grid !important;
            grid-template-columns: minmax(0, 0.95fr) minmax(0, 2.05fr) !important;
            gap: 4mm !important;
            align-items: start !important;
            margin-top: 2.5mm !important;
          }

          .resume-left-col {
            grid-column: 1 !important;
            min-width: 0 !important;
          }

          .resume-right-col {
            grid-column: 2 !important;
            min-width: 0 !important;
          }

          h1 {
            font-size: 2rem !important;
            margin-bottom: 0.25rem !important;
          }

          h2 {
            font-size: 1rem !important;
            margin-top: 0.25rem !important;
          }

          h3 {
            font-size: 0.7rem !important;
            margin-bottom: 0.5rem !important;
            padding-bottom: 0.25rem !important;
          }

          h4 {
            font-size: 0.8rem !important;
            margin-bottom: 0.25rem !important;
          }

          p, li, span, div {
            font-size: 0.75rem !important;
            line-height: 1.4 !important;
          }

          .mb-12, .mb-8, .mb-6 {
            margin-bottom: 0.75rem !important;
          }

          .space-y-10 > * + * {
            margin-top: 1.5rem !important;
          }

          .space-y-4 > * + * {
            margin-top: 0.5rem !important;
          }

          .space-y-2 > * + * {
            margin-top: 0.25rem !important;
          }

          .gap-12 {
            gap: 1rem !important;
          }

          .gap-6 {
            gap: 0.5rem !important;
          }

          .gap-4 {
            gap: 0.25rem !important;
          }

          .py-12, .py-6, .py-3 {
            padding-top: 0.25rem !important;
            padding-bottom: 0.25rem !important;
          }

          .px-6 {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }

          ul {
            margin-top: 0.5rem !important;
            margin-bottom: 0.5rem !important;
          }

          li {
            margin-bottom: 0.25rem !important;
          }

          section, .mb-8, .mb-6 {
            break-inside: avoid;
            page-break-inside: avoid;
          }
        }
      `}</style>
      <div className="relative min-h-screen overflow-x-hidden bg-background resume-print-root">
        <Navigation />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 resume-header"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 print-hide"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
              }}
            >
              <ArrowLeft className="w-4 h-4" />
              {t.resume.backToPortfolio}
            </Link>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6 pb-6 border-b border-border">
              <div>
                <h1
                  style={{
                    fontFamily:
                      language === "en"
                        ? "var(--font-display)"
                        : "'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif",
                    fontSize: "clamp(2.5rem, 8vw, 4rem)",
                    fontWeight: language === "en" ? 500 : 600,
                    color: "var(--foreground)",
                  }}
                >
                  {language === "en" ? "Yanmei Cui" : "崔妍美"}
                </h1>
                <h2
                  className="text-muted-foreground mt-2"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1.125rem",
                    fontWeight: 500,
                  }}
                >
                  {t.resume.subtitle}
                </h2>
              </div>

              <button
                onClick={() => window.print()}
                className="px-6 py-3 border border-border text-foreground rounded hover:bg-muted transition-colors inline-flex items-center gap-2 cursor-pointer"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                }}
              >
                <Download className="w-4 h-4" />
                {t.resume.downloadPDF}
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-muted-foreground mb-8">
              <div
                className="flex items-center gap-2"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                }}
              >
                <MapPin className="w-4 h-4" />
                {t.resume.location}
              </div>
              <div
                className="flex items-center gap-2"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                }}
              >
                <Mail className="w-4 h-4" />
                gusyancu@student.gu.se
              </div>
              <div
                className="flex items-center gap-2"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                }}
              >
                <ExternalLink className="w-4 h-4" />
                https://yeonmi820.github.io
              </div>
              <div
                className="flex items-center gap-2"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                }}
              >
                <ExternalLink className="w-4 h-4" />
                https://yeonmi820.itch.io/
              </div>
            </div>

            {/* Professional Summary */}
            <p
              className="text-muted-foreground resume-summary"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                lineHeight: "1.7",
              }}
            >
              {t.resume.summary}
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 resume-main-grid">
            {/* Left Column: Education & Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-1 space-y-10 resume-left-col"
            >
              {/* Education */}
              <section>
                <h3
                  className="mb-4 pb-3 border-b border-border uppercase tracking-wider"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--foreground)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {t.resume.education}
                </h3>

                <div className="mb-6">
                  <h4
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--foreground)",
                    }}
                  >
                    {t.resume.educationContent.msc.degree}
                  </h4>
                  <p
                    className="text-muted-foreground mt-1"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.75rem",
                    }}
                  >
                    {t.resume.educationContent.msc.school}
                  </p>
                  <p
                    className="text-muted-foreground mt-0.5"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.75rem",
                    }}
                  >
                    {t.resume.educationContent.msc.location} |{" "}
                    {t.resume.educationContent.msc.period}
                  </p>
                </div>

                <div>
                  <h4
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--foreground)",
                    }}
                  >
                    {t.resume.educationContent.bsc.degree}
                  </h4>
                  <p
                    className="text-muted-foreground mt-1"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.75rem",
                    }}
                  >
                    {t.resume.educationContent.bsc.school}
                  </p>
                  <p
                    className="text-muted-foreground mt-0.5"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.75rem",
                    }}
                  >
                    {t.resume.educationContent.bsc.location} |{" "}
                    {t.resume.educationContent.bsc.period}
                  </p>
                </div>
              </section>

              {/* Skills */}
              <section>
                <h3
                  className="mb-4 pb-3 border-b border-border uppercase tracking-wider"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--foreground)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {t.resume.competencies}
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4
                      className="mb-1"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "var(--foreground)",
                      }}
                    >
                      {t.resume.languagesSkill}
                    </h4>
                    <ul
                      className="text-muted-foreground text-sm"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      <li>
                        {language === "en"
                          ? "Chinese — Native"
                          : "中文 — 母语"}
                      </li>
                      <li>
                        {language === "en"
                          ? "Korean - Native"
                          : "韩语 — 母语"}
                      </li>
                      <li>
                        {language === "en"
                          ? "English — Fluent (IELTS 7.0)"
                          : "英语 — 流利 (雅思 7.0)"}
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4
                      className="mb-1"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "var(--foreground)",
                      }}
                    >
                      {language === "en"
                        ? "Technical Skills"
                        : "技术能力"}
                    </h4>
                    <div
                      className="text-muted-foreground"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                      }}
                    >
                      {language === "en" ? (
                        <>
                          Programming: C, C++ <br />
                          Engines: Unity, UE5 - Editor <br />
                          Tools: Git, Jira
                        </>
                      ) : (
                        <>
                          编程：C、C++ <br />
                          引擎：Unity、UE5 - 编辑器 <br />
                          工具：Git、Jira
                        </>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4
                      className="mb-1"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "var(--foreground)",
                      }}
                    >
                      {t.resume.designWorkflows}
                    </h4>
                    <p
                      className="text-muted-foreground"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                      }}
                    >
                      {t.resume.skillsContent.design}
                    </p>
                  </div>
                </div>
              </section>

              {/* Awards */}
              <section>
                <h3
                  className="mb-4 pb-3 border-b border-border uppercase tracking-wider"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--foreground)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {t.resume.awards}
                </h3>

                <div>
                  <h4
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--foreground)",
                    }}
                  >
                    PHOBOS
                  </h4>
                  <p
                    className="text-muted-foreground mt-1"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.75rem",
                    }}
                  >
                    {language === "en"
                      ? "Best Theme — Spooky Jam 2025"
                      : "最佳主题 — Spooky Jam 2025"}
                  </p>
                </div>
              </section>
            </motion.div>

            {/* Right Column: Projects & Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-2 space-y-10 resume-right-col"
            >
              {/* Projects */}
              <section>
                <h3
                  className="mb-6 pb-3 border-b border-border uppercase tracking-wider"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--foreground)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {t.resume.selectedProjects}
                </h3>

                {/* Project 1: AVEngine */}
                <div className="mb-8">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-2">
                    <h4
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "var(--foreground)",
                      }}
                    >
                      {language === "en"
                        ? "Custom 3D Game Engine (AVEngine)"
                        : "自定义3D游戏引擎（AVEngine）"}
                    </h4>
                    <span
                      className="text-muted-foreground"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                      }}
                    >
                      C++, Vulkan, SDL3
                    </span>
                  </div>
                  <p
                    className="text-muted-foreground italic mb-3"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.75rem",
                    }}
                  >
                    {language === "en"
                      ? "Core Engine Programmer (Architecture & Subsystems) | Team Project"
                      : "核心引擎程序员（架构与子系统）| 团队项目"}
                  </p>
                  <ul className="list-disc list-outside ml-5 space-y-2">
                    <li
                      className="text-muted-foreground"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        lineHeight: "1.6",
                      }}
                    >
                      {language === "en"
                        ? "Co-architected the engine's overall modular framework alongside a cross-functional team, establishing a robust foundation for building and integrating diverse subsystems."
                        : "与跨职能团队共同架构引擎的整体模块化框架，为构建和集成各种子系统建立了坚实的基础。"}
                    </li>
                    <li
                      className="text-muted-foreground"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        lineHeight: "1.6",
                      }}
                    >
                      {language === "en"
                        ? "Engineered the Input and Camera systems from scratch, executing complex cross-module integration with the Scene Graph and Rendering pipeline to ensure precise viewport control and responsive interactions."
                        : "从头设计了输入和相机系统，执行与场景图和渲染管线的复杂跨模块集成，确保精确的视口控制和响应式交互。"}
                    </li>
                    <li
                      className="text-muted-foreground"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        lineHeight: "1.6",
                      }}
                    >
                      {language === "en"
                        ? "Worked closely within a cross-functional team, developing a playable 3D game demo utilizing the complete engine API, demonstrating comprehensive technical understanding of all core modules and validating end-to-end engine stability."
                        : "在跨职能团队中密切合作，开发了一个使用完整引擎API的可玩3D游戏演示，展示了对所有核心模块的全面技术理解，并验证了端到端引擎稳定性。"}
                    </li>
                  </ul>
                </div>

{/* Project 2: Digital Game */}
                <div className="mb-8">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-2">
                    <h4
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "var(--foreground)",
                      }}
                    >
                      {language === "en" ? "MPC" : "MPC"}
                    </h4>
                    <span
                      className="text-muted-foreground"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                      }}
                    >
                      Unity / C#
                    </span>
                  </div>
                  <p
                    className="text-muted-foreground italic mb-3"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.75rem",
                    }}
                  >
                    {language === "en"
                      ? "A Turn-based Puzzle Game｜Game Designer"
                      : "回合制解谜游戏｜游戏设计"}
                  </p>
                  <ul className="list-disc list-outside ml-5 space-y-2">
                    <li
                      className="text-muted-foreground"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        lineHeight: "1.6",
                      }}
                    >
                      {language === "en"
                        ? "Designed core mechanics for a deterministic puzzle game, successfully translating initial paper prototypes into a digital step-by-step simulation focused on planning and execution."
                        : "设计了确定性解谜游戏的核心机制，将最初的纸面原型成功转化为聚焦于“预计划与执行”的数字步进式模拟系统。"}
                    </li>
                    <li
                      className="text-muted-foreground"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        lineHeight: "1.6",
                      }}
                    >
                      {language === "en"
                        ? "Developed an indirect control system using modular \"mask\" abilities, crafting progressive level designs that guide players to solve puzzles through emergent systemic interactions."
                        : "开发了基于模块化“面具”的间接控制系统，通过渐进式的关卡设计，引导玩家利用涌现式系统交互来解决谜题。"}
                    </li>
                    <li
                      className="text-muted-foreground"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        lineHeight: "1.6",
                      }}
                    >
                      {language === "en"
                        ? "Iterated rapidly within a cross-functional Scrum team, utilizing playtest feedback to balance the difficulty curve and seamlessly integrate game assets."
                        : "在跨职能Scrum团队中进行高频敏捷迭代，利用玩家试玩反馈来平滑难度曲线，并无缝集成游戏美术与资产。"}
                    </li>
                  </ul>
                </div>

                {/* Project 3: Board Game */}
                <div className="mb-8">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-2">
                    <h4
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "var(--foreground)",
                      }}
                    >
                      {language === "en"
                        ? "Realm of Seasons"
                        : "四季王国"}
                    </h4>
                    <span
                      className="text-muted-foreground"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                      }}
                    >
                      {language === "en"
                        ? "Tabletop Game"
                        : "桌游设计"}
                    </span>
                  </div>
                  <p
                    className="text-muted-foreground italic mb-3"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.75rem",
                    }}
                  >
                    {language === "en"
                      ? "Board Game｜Designer"
                      : "桌游｜玩法设计"}
                  </p>
                  <ul className="list-disc list-outside ml-5 space-y-2">
                    <li
                      className="text-muted-foreground"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        lineHeight: "1.6",
                      }}
                    >
                      {language === "en"
                        ? "Created an original board game focusing on card- based area control and complex card effect. Integrated seasonal mechanics and resource systems to drive meaningful player decisions and dynamic interactions."
                        : "创作了一款原创桌游，专注于区域控制和复杂的卡牌效果。游戏融入了季节机制和资源系统，旨在引导玩家不仅占领区域，还有互相影响区域，促进互动。"}
                    </li>
                    <li
                      className="text-muted-foreground"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        lineHeight: "1.6",
                      }}
                    >
                      {language === "en"
                        ? "Implemented interdependent card abilities with built-in counterplay, enabling players to strategically respond to opponents and creating a self-balancing gameplay system."
                        : "实现了相互制衡的卡牌能力，并内置了反制手段，使玩家能够策略性地应对对手，从而创造了一个自我平衡的游戏系统。"}
                    </li>
                  </ul>
                </div>
              </section>

              {/* Experience */}
              <section>
                <h3
                  className="mb-6 pb-3 border-b border-border uppercase tracking-wider"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--foreground)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {t.resume.experience}
                </h3>

                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-2">
                    <h4
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "var(--foreground)",
                      }}
                    >
                      {language === "en"
                        ? "Bridge System Engineer (Contract)"
                        : "系统工程师（合同）"}
                    </h4>
                    <span
                      className="text-muted-foreground"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                      }}
                    >
                      {language === "en"
                        ? "Mar 2024 - Sep 2024"
                        : "2024年3月 - 2024年9月"}
                    </span>
                  </div>
                  <p
                    className="text-muted-foreground italic mb-3"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.75rem",
                    }}
                  >
                    {language === "en"
                      ? "Samsung SDS | Xi'an, China"
                      : "三星SDS | 中国西安"}
                  </p>
                  <ul className="list-disc list-outside ml-5 space-y-2">
                    <li
                      className="text-muted-foreground"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        lineHeight: "1.6",
                      }}
                    >
                      {language === "en"
                        ? "Acted as a technical liaison between local teams and Korean HQ, translating technical documentation and facilitating cross-border engineering meetings."
                        : "担任本地团队与韩国总部之间的技术联络人，翻译技术文档并促进跨境工程会议。"}
                    </li>
                    <li
                      className="text-muted-foreground"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        lineHeight: "1.6",
                      }}
                    >
                      {language === "en"
                        ? "Diagnosed and resolved software system issues for the global after-sales module through code debugging, software testing, and SQL development."
                        : "通过代码调试、软件测试和SQL开发，诊断并解决全球售后服务模块的软件系统问题。"}
                    </li>
                    <li
                      className="text-muted-foreground"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        lineHeight: "1.6",
                      }}
                    >
                      {language === "en"
                        ? "Collaborated directly with developers to troubleshoot live-system operational bugs, ensuring stable and robust support for global end-users."
                        : "直接与开发人员合作，排查实时系统运行bug，确保为全球最终用户提供稳定可靠的支持。"}
                    </li>
                  </ul>
                </div>
              </section>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-border mt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p
              className="text-muted-foreground"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
              }}
            >
              {t.footer.copyright}
            </p>
            <div className="flex gap-6">
              <a
                href="https://yeonmi820.itch.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                }}
              >
                Itch.io
              </a>
              <a
                href="https://github.com/yeonmi820"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                }}
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yeonmi-lkin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                }}
              >
                LinkedIn
              </a>
              <a
                href="https://discord.com/users/cym1148"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                }}
              >
                Discord
              </a>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}