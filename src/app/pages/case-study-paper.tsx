import { motion } from "motion/react";
import { Navigation } from "../components/navigation";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function CaseStudyPaper() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <Navigation />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link
              to="/work/case-study"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}
            >
              <ArrowLeft className="w-4 h-4" />
              {language === 'en' ? 'Back to Case Study' : '返回案例研究'}
            </Link>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <h1
              className="mb-6"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 6vw, 3rem)',
                fontWeight: 500,
                color: 'var(--foreground)',
                lineHeight: '1.2'
              }}
            >
              {language === 'en'
                ? "What are the most impactful ways that It Takes Two makes use of its dynamic mechanisms to tell stories, letting players feel the natural connection between gameplay and narrative?"
                : "《双人成行》如何通过动态机制讲述故事，让玩家感受到游戏玩法与叙事之间的自然联系？"
              }
            </h1>
          </motion.div>

          {/* Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--foreground)'
            }}
          >
            {language === 'en' ? (
              <>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 500, marginTop: '2rem', marginBottom: '1rem' }}>
                  Research Method
                </h2>
                <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
                  This research combines close reading and ethnographic observation to analyze It Takes Two. Close reading means to look carefully at how the game tells its story, builds the world, and shows emotions through its gameplay and design. In this paper, we will focus on the dialogue, level design, meaning of items, and how characters interact to understand the link between story and gameplay. By doing a close reading, we can see how the design of gameplay makes players feel different emotions. This paper mainly looks at how It Takes Two reaches ludonarrative harmony, which means the gameplay (ludus) and the story or theme (narrative) fit together instead of fighting each other. It also examines how the game's special co-op system makes players work together and communicate to move forward, and how each chapter's environment and setting carry emotional and story meanings.
                </p>
                <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
                  Despite the advantage of close reading in researching local co-op games as a technique, certain limits may apply owing to the fundamental essence of this methodology. Close reading tends to explore and interpret the game elements of the scene in detail, and the experience of players may be missed. Therefore, an ethnographic approach is used to present a complete and accurate understanding. Ethnography here means watching and describing how people really play and react. It also includes seeing how players, including myself, talk, cooperate, or argue while playing. The focus is to understand the real behavior and social culture of players, to see how game design turns into real feelings and interactions. This involves observing how players feel each other's presence and solve problems together through talking and action, how game mechanics affect players' feelings, such as frustration, joy, or dependence on each other, and thinking of the virtual game world as a real social space where players show real social behaviors.
                </p>
                <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
                  Close reading helps to find out what the game wants to say, and ethnography shows how players actually feel. Using both gives a more complete view of how It Takes Two connects gameplay design with emotional experience, helping players build teamwork and emotional connection.
                </p>

                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 500, marginTop: '2rem', marginBottom: '1rem' }}>
                  Results
                </h2>
                <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
                  To understand how the ludonarrative harmony impacts player experience, we need to first focus on how designers closely integrated game mechanics and interactive narratives. Gao, R., & Wang, O. (2023) suggest that the mechanics in the game are both constructing elements and results of the assemblage or interaction of different active parts within the game. In other words, whatever happens in the story is something players should be playing.
                </p>

                <div className="my-8 overflow-x-auto">
                  <table className="w-full border-collapse" style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-2 px-4 text-left">No.</th>
                        <th className="py-2 px-4 text-left">Chapter</th>
                        <th className="py-2 px-4 text-left">Mechanics</th>
                        <th className="py-2 px-4 text-left">Match</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="py-2 px-4">1</td>
                        <td className="py-2 px-4">The Shed</td>
                        <td className="py-2 px-4">Hammer/Nails</td>
                        <td className="py-2 px-4">Story</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 px-4">2</td>
                        <td className="py-2 px-4">The Tree</td>
                        <td className="py-2 px-4">Sap gun/Match gun</td>
                        <td className="py-2 px-4">Story</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 px-4">3</td>
                        <td className="py-2 px-4">Rose's Room</td>
                        <td className="py-2 px-4">Gravity boots/Shifting belt</td>
                        <td className="py-2 px-4">Story</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 px-4">4</td>
                        <td className="py-2 px-4">Cuckoo Clock</td>
                        <td className="py-2 px-4">Time rewind/Replicate</td>
                        <td className="py-2 px-4">Story/Emotion(Accompany)</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 px-4">5</td>
                        <td className="py-2 px-4">Snow Globe</td>
                        <td className="py-2 px-4">S & N Magnets</td>
                        <td className="py-2 px-4">Emotion(Attraction)</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 px-4">6</td>
                        <td className="py-2 px-4">Garden</td>
                        <td className="py-2 px-4">Sickle, Watering/Vine, Becoming plants</td>
                        <td className="py-2 px-4">Emotion(Cody's Passion)</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 px-4">7</td>
                        <td className="py-2 px-4">The Attic</td>
                        <td className="py-2 px-4">Sing/Cymbal</td>
                        <td className="py-2 px-4">Emotion(May's Passion)</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-center mt-2 text-sm text-muted-foreground">Table 1. Partial Mechanics' Multi-purpose</p>
                </div>

                <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
                  In It Takes Two, the game designers have meticulously designed seven distinct chapters: the Shed, the Tree, Rose's Room, Cuckoo Clock, Snow Globe, Garden, and The Attic. These chapters revolve around the characters' home and artifacts that bear great emotional significance in their journey (Yao, X., 2023). Each chapter depicts a critical stage in the couple's relationship. Hence, each level features unique mechanics for the protagonists.
                </p>
                <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
                  These mechanics often have multi-purposes, not only requiring high levels of cooperation in gameplay but also aligning with the story or indicating the relationship between the protagonists on an emotional level. Table 1 shows some of the mechanics in the game. For instance, in The Tree chapter, Cody uses a special sap gun that shoots sap, while Mya uses a match launcher that detonates sap to make it explode. Besides the cooperative mechanism, the sap gun is also used as an engine for a boat, or to use the weight of sap to realize a switch or lift function.
                </p>

                <div className="my-8 flex justify-center">
                  <ImageWithFallback
                    src="/image/ITT_Screen2.jpg"
                    alt="Snow globe illustration"
                    className="rounded-lg max-w-2xl w-full object-cover"
                  />
                </div>

                <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
                  In the Snow Globe chapter, May and Cody enter the souvenir snow globe they bought on their date, and each gets a special magnet with only one pole. This is not only a level created by the mechanism of magnets, but also implies that the couple is gradually regaining the lost attraction to each other. In this game, the story emerges entirely through gameplay, with the environments, mechanics, and puzzles themselves driving the narrative. And contrariwise, it is this interactive narrative that gives rise to a wealth of unique gameplay possibilities.
                </p>

                <div className="my-8 flex justify-center">
                  <ImageWithFallback
                    src="/image/ITT_Screen1.jpg"
                    alt="Cooperative gaming illustration"
                    className="rounded-lg max-w-2xl w-full object-cover"
                  />
                </div>

                <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
                  In It Takes Two, the game mechanics are exclusively designed for collaboration only, requiring players to work together and coordinate to solve puzzles, which requires effective communication and attentive listening. However, beyond the numerous teamwork-centric puzzles and boss battles, the game also includes 25 mini-games that encourage players to explore the space and compete with each other, reflecting the conflicting dynamics of Cody and May, a couple going through a divorce. These mini-games serve as narrative interactive elements throughout the story, allowing players to actively shape and influence the story as it unfolds.
                </p>
                <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
                  The game's worldview and mechanics are also highly aligned, perfectly demonstrating the principle of "consistency between player motivation and worldview." On a virtual level, the story's purpose is to help May and Cody repair their relationship, a process that requires cooperation. This synergy deepens as the game progresses, while the story also deepens, leading to the reconciliation between May and Cody. This integration deeply engages players in the game, making the "table-hopping effect" (a game motivation inconsistent with the worldview) virtually impossible. Furthermore, the game's mechanics allow players to develop a story after playing, a factor that players crave. The ability to build or repair real-life relationships through game mechanics is an unexpected aspect of the game, and it's also the most fascinating aspect of the game. From an ethnographic perspective, these interactions reveal how players build teamwork and develop mutual trust, reflecting Josef Fares's intention to make cooperation both a mechanical and emotional experience.
                </p>
                <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
                  For puzzle design, the game fully utilizes environmental clues and players' cognitive tendencies to provide problem-solving guidance. Clues are often embedded in the protagonists' interactions—with each other, the environment, and the dialogue—encouraging players to pay close attention to in-game conversations and narrative developments. According to Johnson-Laird (1983), people build internal models in their minds to understand how things work in the real world. In game design, following such mental models helps reduce cognitive load and learning costs, thereby enhancing player immersion (except when intentional surprise or disharmony is designed on purpose). From this perspective, the game's design excels at leveraging players' pre-existing knowledge, which isn't learned in-game but rather acquired through life experience. As I played through the level, I realized that this kind of thing was happening constantly. For example, when I saw the vacuum cleaner hose in The Shed, I immediately realized that this level needed to rely on the suction conveyor mechanism to pass. Another typical but simple example, "The Button", which players would naturally jump and then hit the ground to press. While button-pressing is common sense, the designers leveraged this common sense to guide players and gain a new skill through the process without them even realizing it. When a game follows these natural ways of thinking, players can learn its rules more easily and stay focused on the story instead of struggling with the controls.
                </p>
                <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
                  There are also many design elements in It Takes Two that show the developers aimed to create a smooth and enjoyable experience, rather than forcing players to repeat the same section over and over. As I was playing, I noticed that the game features a very forgiving death system. In non-boss stages, players respawn almost instantly without any time penalty. During boss battles, as long as one player remains alive, the other can quickly return to the fight. This design prevents players from being stuck in repetitive failure loops and allows them to stay focused on the story and puzzle-solving. Thus, during the gameplay sessions, the participants could learn through trial and error without fear of punishment. For instance, they might not know whether a body of water is safe to swim in or whether a pit can be jumped across—but they can freely test it out. This zero-cost trial-and-error system encourages bold exploration and creativity, keeping the gameplay energetic and cooperative without causing frustration or conflict between players.
                </p>
                <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
                  In terms of the difficulties through game progression, the curve tends to be gradual. Each chapter begins by introducing new skills and mechanics, allowing players to practice before facing intense boss battles later on. This pacing strengthens immersion in the narrative and helps players empathize with the protagonists. Exciting and cinematic, the game makes players feel as though they are part of a thrilling adventure or an epic film.
                </p>
                <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
                  While completing missions that follow a predetermined storyline is important in gaming, it is the cooperation and interaction between players that truly engage them. According to Oliver Granlund, a designer at Hazelight, in It Takes Two, the cooperative gameplay can be broadly categorized into three types: parallel co-op, step-by-step co-op, and simultaneous co-op. In the parallel co-op mode, both players perform distinct yet interdependent tasks concurrently to achieve a shared objective. The step-by-step co-op emphasizes sequential interaction, where one player's action directly enables the other's action. Finally, the simultaneous co-op mode requires precise synchronization, as both players must execute actions at the same moment to succeed. Through these varied cooperative mechanisms, the three gameplay modes alternate to create a perfectly balanced pace. With the tolerant trial and error standards, intuitive clue provision, and the difficulty ramps up gradually, it provides a refreshing change of pace and further enhances the game's immersion. Ultimately, It Takes Two is designed above all for experience and emotional engagement, rather than for challenge—a philosophy that reflects Josef Fares's core design values.
                </p>
                <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
                  When the gameplay constantly shifts with the narrative, it creates a constant sense of freshness that perfectly aligns with the narrative experience, keeping players engaged in the story. Hazelight describes their own game as "a metaphorical merging of gameplay and narrative that pushes the boundaries of interactive storytelling," which reveals one core idea: you're not merely interacting with the gameplay—you're interacting with the narrative itself. This also reflects what the director, Josef Fares, has always wanted to convey to players — the unique charm of interactive storytelling that only video games can offer.
                </p>

                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 500, marginTop: '2rem', marginBottom: '1rem' }}>
                  References
                </h2>
                <ol className="list-decimal list-inside space-y-2" style={{ lineHeight: '1.7', fontSize: '0.9rem' }}>
                  <li>Gao, R., & Wang, O. (2023). How do linear and nonlinear levels inspire game flow in cooperative gameplay?: comparative analysis of collaborative mechanics design in It Takes Two.</li>
                  <li>Yao, X. (2023). Video Gaming and Narratives of Love as a potential stance of cultural-political meaning in current societies: A study of It Takes Two, 2021. Mutual Images Journal, (11), 61-84.</li>
                  <li>GMTK. (2021, 23 Sep). Making It Takes Two's Best Level [Video]. YouTube. <a href="https://youtu.be/QbMF1nCiIkQ?si=5xgFrr-1oxSRndUO" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:text-foreground/80">https://youtu.be/QbMF1nCiIkQ?si=5xgFrr-1oxSRndUO</a></li>
                  <li>Johnson-Laird, P. N. (1983). Mental Models: Towards a Cognitive Science of Language, Inference, and Consciousness. Cambridge University Press.</li>
                </ol>

                <p className="mt-8 text-sm text-muted-foreground" style={{ lineHeight: '1.7' }}>
                  * Generative AI was applied in this paper for grammar correction, wording refinement, and translation of certain terms.
                </p>
              </>
            ) : (
              <>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 500, marginTop: '2rem', marginBottom: '1rem' }}>
                  研究方法
                </h2>
                <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
                  本研究结合了细读法和民族志观察法来分析《双人成行》。细读法意味着仔细观察游戏如何通过其玩法和设计来讲述故事、构建世界和展现情感。在本文中，我们将关注对话、关卡设计、物品的意义以及角色互动，以理解故事与玩法之间的联系。通过细读，我们可以看到玩法设计如何让玩家产生不同的情感。本文主要研究《双人成行》如何达到叙事与玩法的和谐，即玩法（ludus）和故事或主题（narrative）相互融合而不是相互冲突。它还考察了游戏独特的合作系统如何让玩家协作和沟通以推进游戏，以及每个章节的环境和设置如何承载情感和故事意义。
                </p>
                <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
                  尽管细读法在研究本地合作游戏方面具有优势，但由于这种方法的基本性质，可能存在一定的局限性。细读法往往会详细探索和解释场景的游戏元素，但可能会忽略玩家的体验。因此，采用民族志方法来呈现完整准确的理解。这里的民族志是指观察和描述人们如何真实地游玩和反应。它还包括观察玩家（包括我自己）在游玩时如何交谈、合作或争论。重点是理解玩家的真实行为和社会文化，看游戏设计如何转化为真实的感受和互动。这包括观察玩家如何感受彼此的存在并通过交谈和行动共同解决问题，游戏机制如何影响玩家的感受，如挫败感、喜悦或相互依赖，以及将虚拟游戏世界视为真实的社交空间，玩家在其中展现真实的社交行为。
                </p>
                <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
                  细读法有助于找出游戏想要表达的内容，而民族志则展示了玩家的实际感受。两者结合使用可以更全面地了解《双人成行》如何将玩法设计与情感体验联系起来，帮助玩家建立团队合作和情感联系。
                </p>

                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 500, marginTop: '2rem', marginBottom: '1rem' }}>
                  研究结果
                </h2>
                <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
                  要理解叙事与玩法的和谐如何影响玩家体验，我们首先需要关注设计师如何紧密整合游戏机制和互动叙事。Gao, R., & Wang, O. (2023) 认为游戏中的机制既是构建元素，也是游戏内不同活跃部分组合或互动的结果。换句话说，故事中发生的任何事情都是玩家应该玩的东西。
                </p>

                <div className="my-8 overflow-x-auto">
                  <table className="w-full border-collapse" style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-2 px-4 text-left">序号</th>
                        <th className="py-2 px-4 text-left">章节</th>
                        <th className="py-2 px-4 text-left">机制</th>
                        <th className="py-2 px-4 text-left">匹配类型</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="py-2 px-4">1</td>
                        <td className="py-2 px-4">工具棚</td>
                        <td className="py-2 px-4">锤子/钉子</td>
                        <td className="py-2 px-4">故事</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 px-4">2</td>
                        <td className="py-2 px-4">大树</td>
                        <td className="py-2 px-4">树液枪/火柴枪</td>
                        <td className="py-2 px-4">故事</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 px-4">3</td>
                        <td className="py-2 px-4">罗斯的房间</td>
                        <td className="py-2 px-4">重力靴/转移腰带</td>
                        <td className="py-2 px-4">故事</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 px-4">4</td>
                        <td className="py-2 px-4">布谷鸟钟</td>
                        <td className="py-2 px-4">时间倒流/复制</td>
                        <td className="py-2 px-4">故事/情感(陪伴)</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 px-4">5</td>
                        <td className="py-2 px-4">雪球</td>
                        <td className="py-2 px-4">南北磁铁</td>
                        <td className="py-2 px-4">情感(吸引力)</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 px-4">6</td>
                        <td className="py-2 px-4">花园</td>
                        <td className="py-2 px-4">镰刀、浇水/藤蔓、变成植物</td>
                        <td className="py-2 px-4">情感(Cody的热情)</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 px-4">7</td>
                        <td className="py-2 px-4">阁楼</td>
                        <td className="py-2 px-4">唱歌/铙钹</td>
                        <td className="py-2 px-4">情感(May的热情)</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-center mt-2 text-sm text-muted-foreground">表1. 部分机制的多重用途</p>
                </div>

                <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
                  在《双人成行》中，游戏设计师精心设计了七个不同的章节：工具棚、大树、罗斯的房间、布谷鸟钟、雪球、花园和阁楼。这些章节围绕着角色的家和在他们旅程中具有重大情感意义的物品展开（Yao, X., 2023）。每个章节都描绘了这对夫妇关系中的一个关键阶段。因此，每个关卡都为主角设计了独特的机制。
                </p>
                <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
                  这些机制通常具有多重用途，不仅在游戏玩法中需要高度的合作，还与故事保持一致，或在情感层面上指示主角之间的关系。表1显示了游戏中的一些机制。例如，在大树章节中，Cody使用一种特殊的树液枪射击树液，而Mya使用火柴发射器引爆树液使其爆炸。除了合作机制外，树液枪还被用作船的引擎，或利用树液的重量实现开关或升降功能。
                </p>

                <div className="my-8 flex justify-center">
                  <ImageWithFallback
                    src="/image/ITT_Screen2.jpg"
                    alt="雪球插图"
                    className="rounded-lg max-w-2xl w-full object-cover"
                  />
                </div>

                <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
                  在雪球章节中，May和Cody进入他们约会时购买的纪念品雪球，每人获得一个只有一极的特殊磁铁。这不仅是一个由磁铁机制创造的关卡，还暗示着这对夫妇正在逐渐恢复失去的相互吸引力。在这个游戏中，故事完全通过游戏玩法展现，环境、机制和谜题本身推动着叙事。反过来，正是这种互动叙事产生了丰富独特的游戏玩法可能性。
                </p>

                <div className="my-8 flex justify-center">
                  <ImageWithFallback
                    src="/image/ITT_Screen1.jpg"
                    alt="合作游戏插图"
                    className="rounded-lg max-w-2xl w-full object-cover"
                  />
                </div>

                <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
                  在《双人成行》中，游戏机制专为协作设计，要求玩家共同协作和协调解决谜题，这需要有效的沟通和专注的倾听。然而，除了众多以团队合作为中心的谜题和boss战之外，游戏还包括25个小游戏，鼓励玩家探索空间并相互竞争，反映了正在离婚的夫妇Cody和May的冲突动态。这些小游戏在整个故事中充当叙事互动元素，允许玩家积极塑造和影响故事的发展。
                </p>
                <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
                  游戏的世界观和机制也高度一致，完美展示了"玩家动机与世界观一致性"的原则。在虚拟层面上，故事的目的是帮助May和Cody修复他们的关系，这个过程需要合作。这种协同作用随着游戏的推进而加深，同时故事也在加深，最终导致May和Cody的和解。这种整合深深地吸引了玩家进入游戏，使"跳桌效应"（游戏动机与世界观不一致）几乎不可能发生。此外，游戏的机制允许玩家在游玩后发展出一个故事，这是玩家渴望的因素。通过游戏机制建立或修复现实生活中的关系的能力是游戏中一个意想不到的方面，也是游戏最迷人的方面。从民族志的角度来看，这些互动揭示了玩家如何建立团队合作和发展相互信任，反映了Josef Fares让合作既是机制体验又是情感体验的意图。
                </p>
                <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
                  对于谜题设计，游戏充分利用环境线索和玩家的认知倾向来提供解决问题的指导。线索通常嵌入在主角的互动中——彼此之间、与环境之间以及对话中——鼓励玩家密切关注游戏中的对话和叙事发展。根据Johnson-Laird（1983）的说法，人们在脑海中建立内部模型来理解事物在现实世界中的运作方式。在游戏设计中，遵循这样的心智模型有助于减少认知负荷和学习成本，从而增强玩家的沉浸感（除非有意设计惊喜或不和谐）。从这个角度来看，游戏的设计擅长利用玩家预先存在的知识，这些知识不是在游戏中学到的，而是通过生活经验获得的。当我玩关卡时，我意识到这种事情一直在发生。例如，当我在工具棚看到吸尘器软管时，我立即意识到这个关卡需要依靠吸力传送机制来通过。另一个典型但简单的例子是"按钮"，玩家自然会跳起来然后砸地来按下。虽然按按钮是常识，但设计师利用这种常识来引导玩家，并在这个过程中让他们甚至没有意识到就获得了新技能。当游戏遵循这些自然的思维方式时，玩家可以更容易地学习其规则，并专注于故事而不是与控制作斗争。
                </p>
                <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
                  《双人成行》中还有许多设计元素表明开发者旨在创造流畅愉快的体验，而不是强迫玩家一遍又一遍地重复同一部分。在我游玩时，我注意到游戏具有非常宽容的死亡系统。在非boss阶段，玩家几乎立即重生，没有任何时间惩罚。在boss战中，只要一个玩家活着，另一个就可以迅速返回战斗。这种设计防止玩家陷入重复失败的循环，并允许他们专注于故事和解谜。因此，在游戏过程中，参与者可以通过试错学习而不必担心惩罚。例如，他们可能不知道一片水域是否安全游泳，或者一个坑是否可以跳过——但他们可以自由地测试。这种零成本的试错系统鼓励大胆的探索和创造力，保持游戏玩法充满活力和合作，而不会在玩家之间造成挫败感或冲突。
                </p>
                <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
                  就游戏进程的难度而言，曲线往往是渐进的。每个章节都从介绍新技能和机制开始，让玩家在稍后面对激烈的boss战之前进行练习。这种节奏增强了对叙事的沉浸感，并帮助玩家与主角产生共鸣。令人兴奋和电影化的游戏让玩家感觉自己是惊险冒险或史诗电影的一部分。
                </p>
                <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
                  虽然完成遵循预定故事情节的任务在游戏中很重要，但真正吸引玩家的是玩家之间的合作和互动。据Hazelight的设计师Oliver Granlund称，在《双人成行》中，合作游戏玩法可以大致分为三种类型：并行合作、逐步合作和同步合作。在并行合作模式中，两个玩家同时执行不同但相互依赖的任务以实现共同目标。逐步合作强调顺序互动，其中一个玩家的动作直接启用另一个玩家的动作。最后，同步合作模式需要精确的同步，因为两个玩家必须在同一时刻执行动作才能成功。通过这些多样化的合作机制，三种游戏玩法模式交替创造了完美平衡的节奏。凭借宽容的试错标准、直观的线索提供和逐渐上升的难度，它提供了令人耳目一新的节奏变化，进一步增强了游戏的沉浸感。最终，《双人成行》的设计首先是为了体验和情感参与，而不是为了挑战——这一理念反映了Josef Fares的核心设计价值观。
                </p>
                <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
                  当游戏玩法不断随着叙事变化时，它会创造一种持续的新鲜感，与叙事体验完美契合，让玩家参与到故事中。Hazelight将自己的游戏描述为"游戏玩法和叙事的隐喻性融合，推动了互动叙事的界限"，这揭示了一个核心思想：你不仅仅是在与游戏玩法互动——你是在与叙事本身互动。这也反映了导演Josef Fares一直想向玩家传达的内容——只有电子游戏才能提供的互动叙事的独特魅力。
                </p>

                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 500, marginTop: '2rem', marginBottom: '1rem' }}>
                  参考文献
                </h2>
                <ol className="list-decimal list-inside space-y-2" style={{ lineHeight: '1.7', fontSize: '0.9rem' }}>
                  <li>Gao, R., & Wang, O. (2023). How do linear and nonlinear levels inspire game flow in cooperative gameplay?: comparative analysis of collaborative mechanics design in It Takes Two.</li>
                  <li>Yao, X. (2023). Video Gaming and Narratives of Love as a potential stance of cultural-political meaning in current societies: A study of It Takes Two, 2021. Mutual Images Journal, (11), 61-84.</li>
                  <li>GMTK. (2021, 23 Sep). Making It Takes Two's Best Level [Video]. YouTube. <a href="https://youtu.be/QbMF1nCiIkQ?si=5xgFrr-1oxSRndUO" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:text-foreground/80">https://youtu.be/QbMF1nCiIkQ?si=5xgFrr-1oxSRndUO</a></li>
                  <li>Johnson-Laird, P. N. (1983). Mental Models: Towards a Cognitive Science of Language, Inference, and Consciousness. Cambridge University Press.</li>
                </ol>

                <p className="mt-8 text-sm text-muted-foreground" style={{ lineHeight: '1.7' }}>
                  * 本文使用了生成式AI进行语法修正、措辞优化和部分术语翻译。
                </p>
              </>
            )}
          </motion.article>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-border mt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p
              className="text-muted-foreground"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}
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
  );
}
