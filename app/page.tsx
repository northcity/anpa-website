const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

const Check = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m6.5 12.5 3.5 3.5 7.5-8" />
  </svg>
);

const Calendar = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6.5 3.5v3M17.5 3.5v3M4 9h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z" />
  </svg>
);

const Spark = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.5c.7 5.4 4.1 8.8 9.5 9.5-5.4.7-8.8 4.1-9.5 9.5-.7-5.4-4.1-8.8-9.5-9.5 5.4-.7 8.8-4.1 9.5-9.5Z" />
  </svg>
);

const List = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01" />
  </svg>
);

const Logo = () => (
  <span className="brand-mark" aria-hidden="true">
    <img src="./anpa-icon.png" alt="" />
  </span>
);

const taskRows = [
  ["完成发布前检查", "周一 10:00"],
  ["准备商店素材", "周二 14:00"],
  ["提交审核", "周三 16:30"],
  ["安排版本发布", "下周三"],
];

export default function Home() {
  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header shell">
        <a className="brand" href="#top" aria-label="Anpa 首页">
          <Logo />
          <span>Anpa</span>
        </a>
        <nav aria-label="主导航">
          <a href="#features">功能</a>
          <a href="#workflow">工作方式</a>
          <a href="#scenes">场景</a>
          <a href="#faq">常见问题</a>
        </nav>
        <a className="header-cta" href="#download">
          立即下载
        </a>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> AI 原生任务助手</div>
          <h1>说一句，<br />Anpa 替你安排好</h1>
          <p>把自然语言变成清晰的待办、日程和可执行步骤。少一点整理，多一点完成。</p>
          <div className="hero-actions">
            <a className="primary-button" href="#download">
              下载 Anpa <ArrowUpRight />
            </a>
            <a className="secondary-button" href="#workflow">看看它如何工作</a>
          </div>
          <div className="hero-note"><span className="pulse" /> iOS 与 Android 已正式上线</div>
        </div>

        <div className="product-stage" aria-label="Anpa 产品演示">
          <div className="stage-glow" />
          <div className="app-window">
            <aside className="app-rail" aria-hidden="true">
              <Logo />
              <span className="rail-active"><Spark /></span>
              <span><Check /></span>
              <span><Calendar /></span>
              <span><List /></span>
              <i />
              <span><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M4.9 4.9 7 7M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1" /></svg></span>
            </aside>
            <div className="app-content">
              <div className="app-label">你说</div>
              <div className="prompt-box">
                <span>下周三前完成新版本发布</span>
                <button aria-label="提交指令"><ArrowUpRight /></button>
              </div>
              <div className="flow-line"><i /></div>
              <div className="app-label result-label"><Spark /> Anpa 安排</div>
              <div className="task-list">
                {taskRows.map(([task, time], index) => (
                  <div className="task-row" key={task} style={{ "--delay": `${index * 120}ms` } as React.CSSProperties}>
                    <span className="task-check"><Check /></span>
                    <strong>{task}</strong>
                    <time>{time}</time>
                    <span className="calendar-icon"><Calendar /></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="signal-bar" aria-label="Anpa 核心能力">
        <div className="shell signal-inner">
          <span>自然语言输入</span><i />
          <span>AI 意图识别</span><i />
          <span>待办与日程</span><i />
          <span>自动拆解步骤</span>
        </div>
      </section>

      <section className="section shell" id="features">
        <div className="section-heading">
          <div>
            <p className="kicker">不是记录更多，而是更快开始</p>
            <h2>一句话背后，<br />Anpa 做完所有整理</h2>
          </div>
          <p>无需先想好该建待办还是日程。Anpa 理解你的表达，再把模糊的念头变成下一步行动。</p>
        </div>

        <div className="feature-grid">
          <article className="feature-card feature-wide">
            <div className="card-copy">
              <span className="card-index">01</span>
              <h3>听懂你真正想做什么</h3>
              <p>识别时间、目标和行动意图，自动判断该生成待办、日程，还是一组可执行步骤。</p>
            </div>
            <div className="intent-visual" aria-hidden="true">
              <div className="intent-input">明天下午提醒我提交版本</div>
              <span className="intent-beam" />
              <div className="intent-output"><Calendar /><span><small>日程</small>提交新版本</span><time>明天 14:00</time></div>
            </div>
          </article>

          <article className="feature-card">
            <span className="card-index">02</span>
            <div className="feature-icon"><List /></div>
            <h3>把大事拆成小步</h3>
            <p>面对复杂目标，Anpa 会整理出有先后关系的子任务，让你不再卡在“从哪开始”。</p>
            <div className="mini-steps" aria-hidden="true">
              <span><i>1</i>确认目标</span>
              <span><i>2</i>拆分步骤</span>
              <span><i>3</i>开始执行</span>
            </div>
          </article>

          <article className="feature-card">
            <span className="card-index">03</span>
            <div className="feature-icon"><Spark /></div>
            <h3>不确定时，把选择留给你</h3>
            <p>AI 先给出建议；当意图不够明确时，再由你快速确认，不替你做武断决定。</p>
            <div className="choice-card" aria-hidden="true">
              <small>你想把它安排为？</small>
              <div><span className="chosen"><Check />待办</span><span><Calendar />日程</span></div>
            </div>
          </article>
        </div>
      </section>

      <section className="workflow-section" id="workflow">
        <div className="shell">
          <div className="workflow-heading">
            <p className="kicker">工作方式</p>
            <h2>从想到，到做到。<br />只需要一句话。</h2>
          </div>
          <div className="workflow-track">
            <article>
              <span>01</span>
              <div className="workflow-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 15a4 4 0 0 0 4-4V6a4 4 0 1 0-8 0v5a4 4 0 0 0 4 4Z" /><path d="M5 11a7 7 0 0 0 14 0M12 18v4M8 22h8" /></svg></div>
              <h3>说出想法</h3>
              <p>像平时说话一样，告诉 Anpa 你想做什么。</p>
            </article>
            <article>
              <span>02</span>
              <div className="workflow-icon"><Spark /></div>
              <h3>理解意图</h3>
              <p>识别目标、时间和上下文，判断最合适的安排。</p>
            </article>
            <article>
              <span>03</span>
              <div className="workflow-icon"><List /></div>
              <h3>自动整理</h3>
              <p>生成待办、日程或拆解后的行动步骤。</p>
            </article>
            <article>
              <span>04</span>
              <div className="workflow-icon"><Check /></div>
              <h3>直接去做</h3>
              <p>确认结果，然后把注意力放回真正重要的事情。</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section shell" id="scenes">
        <div className="scene-heading">
          <p className="kicker">任何念头，都有清晰的下一步</p>
          <h2>适合真实生活里的每一种忙碌</h2>
        </div>
        <div className="scene-grid">
          <article>
            <span className="scene-tag">工作推进</span>
            <blockquote>“周五前把新版本发布出去。”</blockquote>
            <div className="scene-result"><Spark /><span>拆成 4 个步骤，并安排完成时间</span></div>
          </article>
          <article>
            <span className="scene-tag">日程安排</span>
            <blockquote>“下周三下午三点和设计师过一遍页面。”</blockquote>
            <div className="scene-result"><Calendar /><span>识别时间，生成日程</span></div>
          </article>
          <article>
            <span className="scene-tag">日常提醒</span>
            <blockquote>“晚上回家记得拿快递。”</blockquote>
            <div className="scene-result"><Check /><span>生成今天的待办提醒</span></div>
          </article>
        </div>
      </section>

      <section className="section faq-section shell" id="faq">
        <div className="faq-copy">
          <p className="kicker">常见问题</p>
          <h2>你可能想知道的</h2>
          <p>Anpa 仍在持续打磨中。这里先回答关于产品方式的几个核心问题。</p>
        </div>
        <div className="faq-list">
          <details open>
            <summary>它和普通待办工具有什么不同？<span>+</span></summary>
            <p>普通工具需要你先整理清楚再输入；Anpa 从自然语言开始，先理解意图，再帮你组织成适合执行的结构。</p>
          </details>
          <details>
            <summary>Anpa 会自动替我做决定吗？<span>+</span></summary>
            <p>不会。明确的表达会被直接整理；当 Anpa 无法确定你的意图时，会先给出建议，再让你确认。</p>
          </details>
          <details>
            <summary>复杂任务也能处理吗？<span>+</span></summary>
            <p>可以。对于包含多个步骤的目标，Anpa 会尝试拆解为更容易开始和完成的子任务。</p>
          </details>
          <details>
            <summary>现在可以下载吗？<span>+</span></summary>
            <p>可以。Anpa 已正式上线 iOS 与 Android 版本，你可以通过官网下方的下载入口立即安装。</p>
          </details>
        </div>
      </section>

      <section className="download-section shell" id="download">
        <div className="download-glow" />
        <div className="download-grid" />
        <div className="download-copy">
          <img className="download-app-icon" src="./anpa-icon.png" alt="Anpa App 图标" />
          <div>
            <p className="kicker">Anpa · iOS &amp; Android</p>
            <h2>把脑中的事，<br />变成手上的行动。</h2>
            <p>正式版本现已上线。选择你的设备，立即开始用一句话安排待办与日程。</p>
          </div>
        </div>
        <div className="download-options" aria-label="Anpa 下载选项">
          <a
            className="download-card"
            href="https://apps.apple.com/cn/app/anpa/id6757229797"
            target="_blank"
            rel="noreferrer"
          >
            <span className="platform-badge">iOS</span>
            <span className="download-card-copy">
              <small>App Store</small>
              <strong>下载 iOS 版</strong>
              <span>适用于 iPhone</span>
            </span>
            <ArrowUpRight />
          </a>
          <a
            className="download-card"
            href="https://dl.northcity.top/anpa/releases/v1.0.1/Anpa-v1.0.1-release-universal.apk"
            target="_blank"
            rel="noreferrer"
          >
            <span className="platform-badge platform-badge-android">APK</span>
            <span className="download-card-copy">
              <small>Android</small>
              <strong>下载 Android 版</strong>
              <span>V1.0.1 · 通用安装包</span>
            </span>
            <ArrowUpRight />
          </a>
          <small className="download-note">Android 版本为 APK 安装包，下载后请按系统提示完成安装。</small>
        </div>
      </section>

      <footer className="site-footer shell">
        <a className="brand" href="#top"><Logo /><span>Anpa</span></a>
        <p>说一句，Anpa 替你安排好。</p>
        <span>© 2026 Anpa</span>
      </footer>
    </main>
  );
}
