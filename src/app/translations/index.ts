export const translations = {
  en: {
    nav: {
      portfolio: "Portfolio",
      work: "Work",
      about: "About",
      resume: "Resume",
      home: "Home",
    },
    hero: {
      greeting: "Yanmei Cui",
      tagline: "Game Designer & Developer",
      description:
        "Blending innovative mechanics with compelling stories.",
      viewWork: "View Work",
      resume: "Resume",
    },
    work: {
      title: "Selected Work",
      games: [
        {
          description: "No Comment",
          tags: ["Puzzle", "Global GameJam", "Narrative"],
          role: "Game Designer",
          overview:
            "A satirical puzzle game created for Global Game Jam. Playing as a corporate censor, players must use an 'overlap-to-clear' mechanic to manipulate black blocks—strategically redacting critical information from documents to meet the organization's hidden agendas.",
          challenges:
            "Teaching the core 'overlap-to-clear' mechanic intuitively through gameplay, minimizing reliance on explicit text tutorials.",
          solution:
            "Designed an interactive main menu where players must naturally apply the overlap mechanic to generate the 'START' button, creating an 'invisible tutorial' that teaches the rules before the game even begins.",
        },
        {
          description: "An area-control cards-based borad game",
          tags: ["Area Control", "Cards", "Turn-based"],
          role: "Game Designer",
          overview:
            "A turn-based area control board game featuring a unique seasonal magic system. Assuming the roles of the four seasons, players deploy tokens to conquer territories while utilizing spell cards to manipulate the board state and disrupt opponents' hands.",
          challenges:
            "Balancing the asymmetric abilities of four distinct factions (seasons)—ensuring each deck feels thematically authentic while maintaining competitive fairness and continuous player engagement.",
          solution:
            "Conducted 10+ iterative playtesting sessions to fine-tune mutually countering card effects. This fostered deep strategic counterplay, ultimately establishing a dynamic, self-balancing game ecosystem.",
        },
        {
          description:
            "A rudimentary 3D game engine built in c++",
          tags: ["Game Engine", "C++", "Vulkan"],
          role: "Developer",
          overview:
            "A custom cross-platform 3D game engine built from scratch using C++, Vulkan, and SDL3. As a Core Engine Programmer, I co-architected the modular framework and developed the Input and Camera subsystems, ultimately validating the engine's capability by delivering a fully playable 3D game demo.\n\nhttps://github.com/Game-Engine-Team/Engine",
          challenges:
            "The main difficulty lay in architectural decoupling for cross-platform portability. For the Input system, it required completely separating high-level game logic from OS-specific SDL3 hardware calls. For the Camera system, the challenge was flawlessly integrating it into our custom Entity-Node scene graph, decoupling mathematical calculations from the Vulkan rendering pipeline, and designing a highly extensible base class structure.",
          solution:
            "Engineered a robust abstraction layer translating raw SDL3 events into engine-agnostic input signals, and implemented a JSON-based data-driven pipeline for dynamic key binding configurations. Designed a scalable Object-Oriented base camera class, implementing it as a distinct Node component that strictly separates update logic from rendering. Collaborated with the team to successfully build a stable 3D game demo utilizing the complete engine API.",
        },
        {
          description: "MPC - A indirect control puzzle game",
          tags: ["Puzzle", "Step by Step", "NPC control"],
          role: "Creative Designer",
          overview:
            "A deterministic turn-based stealth puzzle game focused on planning and execution. While players have direct WASD control over the protagonist, evasion alone is insufficient. To survive, players must utilize an indirect control system—equipping enemy NPCs with modular 'masks' to alter their behavioral logic and create safe paths.",
          challenges:
            "The core design challenge was shifting the player's mindset from traditional evasion to proactive systemic manipulation. We needed to intuitively teach players that standard movement guarantees failure without the strategic application of different masks to alter NPC logic, all while minimizing text tutorials.",
          solution:
            "Designed a progressive learning curve with meticulously paced introductory levels. By intentionally crafting 'impossible-to-pass' bottlenecks that force the use of specific masks, players naturally observed the cause-and-effect of altered NPC behaviors, organically mastering the synergy between protagonist movement and environmental manipulation.",
        },
        {
          description: "Best theme - Spooky GameJam 2025",
          tags: ["Space", "Survival", "Story-Driven"],
          role: "Game Designer",
          overview:
            "A card-based interactive narrative game blending space survival with psychological horror. Players explore unknown planetary locations to scavenge resources needed to repair their ship, constantly balancing survival against their rapidly declining Sanity.",
          challenges:
            "Designing a controlled RNG system that feels threatening but fair. The main challenge lay in tuning a complex 'probability tree'—balancing resource gains, Sanity drains, and recovery cards—while simultaneously writing diverse and compelling horror events to make each card draw narratively impactful.",
          solution:
            "Spent extensive time iterating on the weighted probability math to perfect the risk-reward tension (risking Sanity for vital ship repairs). Authored a rich database of atmospheric event texts, seamlessly weaving the mechanical dread of drawing high-danger cards into an immersive psychological horror experience.",
        },
        {
          description:
            "Game Design Teardown: Ludonarrative Harmony in 'It Takes Two'",
          tags: ["It Takes Two", "Co-op", "Mechanics"],
          role: "Game Research",
          overview:
            "A comprehensive design analysis and academic research project exploring 'Ludonarrative Harmony' in the critically acclaimed game It Takes Two. This study investigates how dynamic mechanics and cooperative systems are meticulously designed to merge with the narrative, ultimately fostering deep emotional engagement between players.",
          challenges:
            "The analytical challenge was to systematically deconstruct the 'invisible bridge' between game mechanics and player psychology. It required investigating how abstract emotional metaphors (such as a failing relationship) are successfully translated into intuitive, engaging gameplay loops without causing cognitive overload or mechanical frustration.",
          solution:
            "Employed a mixed-method approach combining Ethnographic Observation with structural Close Reading. Mapped distinct game mechanics to specific narrative arcs (e.g., using magnets to symbolize lost attraction) and categorized the cooperative design into three functional frameworks. Ultimately validated how an ultra-forgiving trial-and-error environment empowers players to interact directly with the story rather than struggling with the controls.",
        },
      ],
    },
    about: {
      title: "About",
      paragraph1:
        "I am an MSc Game Design student in Sweden, passionate about crafting intuitive mechanics and the logic behind 'fun.' While fresh to the industry, my background as a Samsung System Engineer equipped me with the cross-functional communication skills essential for aligning diverse development teams.",
      paragraph2:
        "My design philosophy is rooted in childhood couch co-op with my sister and Nintendo's player-first approach: games are best when they bring people together. I now channel this collaborative energy into Game Jams, thriving on rapid prototyping and finding the core 'fun' over a single weekend.",
      paragraph3:
        "When I’m in my spare time, you’ll usually find me swimming, catching a movie, or just binge-watching TV series:D I’m also a terrible but enthusiastic FPS player—currently dividing my free screen time between Valorant and Splatoon 3.",
      skills: {
        development: {
          title: "Development",
          description:
            "Unity, Unreal Engine, custom tools with C++, C",
        },
        design: {
          title: "Design",
          description:
            "Level design, mechanics, narrative systems",
        },
        leadership: {
          title: "Leadership",
          description:
            "Team coordination, architecture, optimization",
        },
        collaboration: {
          title: "Collaboration",
          description:
            "Cross-functional work with creative teams",
        },
      },
      stats: {
        years: "Years",
        games: "Games",
        players: "Players",
        awards: "Awards",
      },
    },
    footer: {
      copyright: "© 2026 Yanmei Cui",
    },
    resume: {
      backToPortfolio: "Back to Portfolio",
      downloadPDF: "Download PDF",
      subtitle: "Game Design and Technology",
      location: "Gothenburg, Sweden",
      summary:
        "A multidisciplinary Game Designer who believes the story is fundamentally told through play. Committed to crafting intuitive systems and engaging experiences, bridging the divide between narrative and mechanics through innovation.",
      education: "Education",
      competencies: "Competencies",
      languagesSkill: "Languages",
      enginesTools: "Engines & Tools",
      designWorkflows: "Design & Workflows",
      awards: "Awards",
      selectedProjects: "Selected Projects",
      experience: "Experience",
      educationContent: {
        msc: {
          degree: "MSc in Game Design & Technology",
          school: "University of Gothenburg",
          location: "Gothenburg, Sweden",
          period: "2025 - Present",
        },
        bsc: {
          degree: "BSc in Computer Science",
          school: "Xidian University",
          location: "Xi'an, China",
          period: "2019 - 2023",
        },
      },
      skillsContent: {
        languages: "C++, C#, Python, JavaScript",
        engines:
          "Unity, Unreal Engine 5, Custom C++ Engines, Git",
        design:
          "Agile/Scrum, Mechanics Prototyping, Level Design, Tabletop Game Design",
      },
    },
  },
  zh: {
    nav: {
      portfolio: "作品集",
      work: "作品",
      about: "关于",
      resume: "简历",
      home: "首页",
    },
    hero: {
      greeting: "崔妍美",
      tagline: "游戏策划/玩法设计",
      description: "机制为笔，游玩叙事",
      viewWork: "查看作品",
      resume: "查看简历",
    },
    work: {
      title: "个人项目",
      games: [
        {
          description: "无可奉告",
          tags: ["解谜", "GGJ", "重叠消除"],
          role: "玩法设计",
          overview:
            "Global GameJam作品。一款反讽与解谜相结合的游戏，玩家需要根据提示通过重叠消除黑块，保留相应信息。",
          challenges:
            "尽量不通过文字，而是通过游戏引导玩家掌握重叠消除的机制。",
          solution:
            "在初始界面通过消除生成START按钮来开启游戏，并让玩家意识到游戏机制",
        },
        {
          description: "区域控制卡牌回合制桌游",
          tags: ["区域控制", "卡牌", "回合制"],
          role: "游戏设计",
          overview:
            "一款区域控制卡牌回合制多人桌游，具有独特的季节魔法卡牌系统，扮演不同季节的玩家目标是尽可能用token占领最多的领域，并通过卡牌影响自己或其他季节的区域或手牌。",
          challenges:
            "平衡四个不同的季节卡牌效果，并且卡牌效果符合季节特性，同时确保每个季节的玩家的参与度。",
          solution:
            "进行10+次测试，实现了相互制衡的卡牌能力，使玩家能够策略性地应对对手，从而创造了一个自我平衡的游戏系统。",
        },
        {
          description: "使用C++构建的基础3D游戏引擎",
          tags: ["游戏引擎", "C++", "Vulkan"],
          role: "开发",
          overview:
            "一款基于 C++、Vulkan 和 SDL3 从零开发的自定义跨平台 3D 游戏引擎。作为核心引擎程序员，参与了整体模块化架构的设计，主导开发了输入与相机子系统，并最终通过构建可玩的 3D 游戏Demo验证了引擎的端到端能力。\n\nhttps://github.com/Game-Engine-Team/Engine",
          challenges:
            "核心难点在于为实现跨平台移植性而进行的架构解耦。输入系统需要建立严格的抽象层，将顶层逻辑与底层 SDL3 硬件调用彻底分离，并避免硬编码；相机系统则需完美融入自定义的 Entity-Node 场景图架构，严格剥离数学计算与 Vulkan 渲染管线，并设计高扩展性的基类结构。",
          solution:
            "构建了严谨的输入抽象层，将底层 SDL3 事件转化为独立于操作系统的引擎级信号，并实现了基于 JSON 的数据驱动管线，支持动态配置键位绑定。对于相机，设计了具备良好面向对象特性的可扩展基类，将其作为独立的 Node 组件接入场景图，严格分离逻辑更新与渲染阶段。与团队紧密协作，成功调用完整引擎 API 打造出运行稳定的 3D 游戏 Demo。",
        },
        {
          description: "MPC - 回合制潜行解谜游戏",
          tags: ["解谜", "步进推进", "NPC控制"],
          role: "设计",
          overview:
            "一款聚焦于预先计划与执行的确定性回合制潜行解谜游戏。虽然玩家可以直接控制主角（WASD）移动，但仅靠基础走位无法通关。为了生存，玩家必须利用间接控制系统——为敌方 NPC 戴上不同的模块化“面具”以改变其行为逻辑，从而为主角开辟安全路线。",
          challenges:
            "核心设计挑战在于如何扭转玩家的思维定势，使其从“传统的走位躲避”转向“主动的系统操纵”。我们需要在极少文字教程的限制下，直觉性地让玩家意识到：如果不策略性地使用面具来改变 NPC 逻辑，单纯的移动必死无疑。",
          solution:
            "设计了平滑的渐进式难度曲线与严密的引导关卡。通过刻意构造仅靠移动“绝对无法通过”的瓶颈路段，强制玩家尝试特定的面具。这让玩家自然地观察到 NPC 行为改变的因果关系，从而有机地掌握“主角走位”与“机制操纵”之间的协同作用。",
        },
        {
          description: "宇宙恐怖主题GameJam——最佳叙事",
          tags: ["太空", "生存", "故事驱动"],
          role: "设计",
          overview:
            "一款融合太空生存与心理恐怖的卡牌交互叙事游戏。玩家通过卡牌探索未知的星球地点，收集修复飞船逃离所需的资源，同时在生存与理智（Sanity）的流失之间艰难权衡。",
          challenges:
            "设计一套充满压迫感却不失公平的“受控随机系统”。核心难点在于平衡复杂的卡牌“概率树”——精准调控资源获取、理智掉落与恢复的数值；同时还要撰写大量多样且引人入胜的恐怖事件文本，确保每一次抽卡都能带来深刻的叙事冲击。",
          solution:
            "花费大量时间反复迭代加权概率的数值公式，将“高风险高回报”（冒着掉 San 值的风险去换取修船资源）的紧张感打磨至完美。同时编写了海量恐怖事件文本，将抽取高危卡牌的机制压迫感与沉浸式的心理恐怖体验无缝编织在一起。",
        },
        {
          description:
            "游戏设计拆解：《双人成行》中的玩法叙事结合法",
          tags: ["双人成行", "合作", "机制"],
          role: "游戏研究",
          overview:
            "一份对于备受赞誉的作品《双人成行》全面深度的游戏设计拆解与学术研究，探讨其中的“玩法叙事和谐（Ludonarrative Harmony）”。本研究深入剖析了游戏中的动态机制与合作系统是如何被精心设计并与叙事无缝融合，最终在玩家之间培养出深度的情感共鸣。",
          challenges:
            "研究的分析难点在于系统性地解构游戏机制与玩家心理学之间的“无形桥梁”。需要探究抽象的情感隐喻（如一段破裂的婚姻关系）是如何被成功转化为直觉性且极具吸引力的玩法循环，并且在这一过程中避免给玩家带来认知超载或操作上的挫败感。",
          solution:
            "采用了将民族志玩家观察（Ethnographic Observation）与结构化文本细读（Close Reading）相结合的混合研究方法。将具体的游戏机制与叙事弧线进行了深度映射（例如用磁铁隐喻失去的吸引力），并将合作关卡设计总结为三大功能框架。最终论证了“极高容错的试错环境”是如何赋能玩家，使其能够直接与叙事本身进行交互，而非在操作中挣扎。",
        },
      ],
    },
    about: {
      title: "关于我",
      paragraph1:
        "我目前瑞典游戏设计硕士生研一在读，平时热衷于打磨直观的游戏机制和探索'乐趣'背后的逻辑。虽然刚接触游戏行业，但我曾在三星担任IT工程师的经历，让我具备了协调不同开发团队所需的跨职能沟通能力。",
      paragraph2:
        "我的设计理念源于童年时和姐姐一起玩co-op游戏，以及任天堂'玩家至上'的理念：游戏最美好的时刻是将人们聚在一起。现在我将这种协作精神投入到Game Jam中，热衷于在一个周末内快速原型开发并找到核心'乐趣'。",
      paragraph3:
        "空闲时间里，通常泡在游泳池、电影院或者疯狂追剧:D 我也是个玩得很烂但永不放弃的FPS玩家——目前主要在玩Valorant和Splatoon 3。",
      skills: {
        development: {
          title: "开发",
          description:
            "Unity、Unreal Engine，使用C++、C开发自定义工具",
        },
        design: {
          title: "设计",
          description: "关卡设计、游戏机制、叙事系统",
        },
        leadership: {
          title: "领导力",
          description: "团队协调、架构设计、优化",
        },
        collaboration: {
          title: "协作",
          description: "与创意团队的跨职能合作",
        },
      },
      stats: {
        years: "年经验",
        games: "游戏",
        players: "名玩家",
        awards: "项奖项",
      },
    },
    footer: {
      copyright: "© 2026 崔妍美",
    },
    resume: {
      backToPortfolio: "返回作品集",
      downloadPDF: "下载PDF",
      subtitle: "游戏设计与技术",
      location: "瑞典 哥德堡",
      summary:
        "优秀的设计应当以直觉化的交互为引，让玩家在严谨的规则下探索无限的可能；当机制不再仅仅是工具，而是成为讲述故事的笔触时，游戏便拥有了触动灵魂的力量。",
      education: "教育背景",
      competencies: "专业能力",
      languagesSkill: "语言能力",
      enginesTools: "引擎与工具",
      designWorkflows: "设计与工作流",
      awards: "获奖情况",
      selectedProjects: "个人项目",
      experience: "工作经历",
      educationContent: {
        msc: {
          degree: "游戏设计与技术硕士",
          school: "哥德堡大学",
          location: "瑞典 哥德堡",
          period: "2025 - 至今",
        },
        bsc: {
          degree: "计算机科学与技术学士",
          school: "西安电子科技大学",
          location: "中国 西安",
          period: "2019 - 2023",
        },
      },
      skillsContent: {
        languages: "C++、C#、Python、JavaScript",
        engines: "Unity、Unreal Engine 5、自定义C++引擎、Git",
        design:
          "敏捷开发/Scrum、机制原型设计、关卡设计、PC/桌游设计",
      },
    },
  },
};