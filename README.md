<!-- ===================== Header banner ===================== -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:FF71CE,50:01CDFE,100:B967FF&height=200&section=header&text=AttentionCoo&fontSize=70&fontAlignY=35&fontColor=ffffff&animation=twinkling" alt="AttentionCoo banner" />
</p>

<!-- ===================== Typing intro (readme-typing-svg) ===================== -->
<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=26&duration=3000&pause=800&color=FF71CE&center=true&vCenter=true&width=640&height=60&lines=AI+Researcher+%26+Algorithm+Engineer;Computer+Vision+%7C+Deep+Learning+%7C+LLM;Building+Medical+%26+Education+Multi-Agents;1+x+CVPR+Accepted+Paper" alt="Typing intro" />
</p>

<!-- ===================== Character gallery ===================== -->
<p align="center">
  <img src="assets/bqj.jpg" width="180" alt="Profile image 1" />
  <img src="assets/welt.jpg" width="180" alt="Profile image 2" />
  <img src="assets/fnn.jpg" width="180" alt="Profile image 3" />
  <img src="assets/bz.jpg" width="180" alt="Profile image 4" />
</p>

<!-- ===================== Social & status badges ===================== -->
<p align="center">
  <a href="https://github.com/AttentionCoo">
    <img src="https://img.shields.io/badge/GitHub-AttentionCoo-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub: AttentionCoo" />
  </a>
  <a href="https://github.com/AttentionCoo?tab=followers">
    <img src="https://custom-icon-badges.demolab.com/github/followers/AttentionCoo?color=236ad3&labelColor=1155ba&style=for-the-badge&logo=person-add&label=Follow&logoColor=white" alt="GitHub followers" />
  </a>
  <a href="https://github.com/AttentionCoo?tab=repositories&sort=stargazers">
    <img src="https://custom-icon-badges.demolab.com/github/stars/AttentionCoo?color=55960c&style=for-the-badge&labelColor=488207&logo=star" alt="GitHub stars" />
  </a>
  <img src="https://img.shields.io/badge/Researcher-Computer%20Vision-B967FF?style=for-the-badge" alt="Computer Vision Researcher" />
  <img src="https://img.shields.io/badge/CVPR-1%20Accepted%20Paper-01CDFE?style=for-the-badge" alt="One CVPR accepted paper" />
  <a href="https://github.com/AttentionCoo/AttentionCoo/issues">
    <img src="https://img.shields.io/badge/Ask%20me%20anything-FF6F61?style=for-the-badge&logo=github&logoColor=white" alt="Ask me anything" />
  </a>
  <img src="https://komarev.com/ghpvc/?username=AttentionCoo&style=for-the-badge&color=orange" alt="Profile views" />
</p>

---

## 🧑‍💻 关于我

> 深度学习与 LLM 算法和应用工程师，具备扎实的 Java 后端基础 —— 致力于构建生产级的 AI 智能体系统。

- 🔭 **正在构建：** [MedLLM](https://github.com/AttentionCoo/stroke-multi-agent-cdss) — 卒中多智能体临床决策支持系统，以及 [LearnAgent](https://github.com/AttentionCoo/learning-characterizing-mas) — 个性化医学教育多智能体系统
- 🧠 **专注方向：** 计算机视觉、大语言模型、RAG、AI 智能体与多智能体系统、后端工程
- 🎯 **研究兴趣：** Transformer 架构、模型微调（PEFT）、推理优化、多模态 AI
- 📄 **论文发表：** 1 篇论文被 CVPR 接收
- 💬 **问题交流：** [欢迎提 issue](https://github.com/AttentionCoo/AttentionCoo/issues) 一起讨论

---

## 🔬 研究亮点

<p align="center">
  <img src="https://img.shields.io/badge/Transformer%20Architecture-FF71CE?style=flat-square" alt="Transformer architecture" />
  <img src="https://img.shields.io/badge/PEFT-01CDFE?style=flat-square" alt="Parameter efficient fine-tuning" />
  <img src="https://img.shields.io/badge/Model%20Quantization-B967FF?style=flat-square" alt="Model quantization" />
  <img src="https://img.shields.io/badge/Multimodal%20AI-05FFA1?style=flat-square" alt="Multimodal AI" />
  <img src="https://img.shields.io/badge/Agent%20Systems-FF6F61?style=flat-square" alt="Intelligent agent systems" />
</p>

- 📄 **1 篇论文被 CVPR 接收**
- 🔭 研究聚焦于计算机视觉、深度学习与智能 AI 系统

---

## 📌 精选项目

### 🏥 MedLLM · 脑卒中多智能体临床辅助决策系统

<a href="https://github.com/AttentionCoo/stroke-multi-agent-cdss">
  <img src="https://img.shields.io/badge/Repository-stroke--multi--agent--cdss-FF71CE?style=flat-square&logo=github&logoColor=white" alt="stroke-multi-agent-cdss" />
</a>

基于角色扮演的**多智能体卒中临床决策支持系统（CDSS）** —— 证据先行、过程透明、临床可审计。

- 🛡️ **医疗安全三角架构** — 外层 LangGraph 流程控制（关键节点人工/规则审批）· 中层多专家协同推理 · 后层"禁忌症规则硬拦截 + LLM 反思软审查"双重校验，失败自动拉回反思循环
- 🧑‍⚕️ **双轴矩阵多专家协作** — 全科医生 / 神经专科医生 / 临床药师并行推理，Proposer-Critic-Integrator 状态机交叉把关，模拟 MDT 会诊与三级医疗把关（LangGraph）
- 🔎 **证据前置的深度定制 Hybrid RAG** — ChromaDB + BM25 双路并发检索，AI 批量衍生 Q:A 对提升召回，gte-rerank 深度重排，报告强制附文献名称与页码溯源
- ⚡ **全栈响应式流式管道** — Java WebFlux + Python Asyncio + Vue 3 ReadableStream 打通，思维链实时渲染、专家意见并行滚动
- 🧠 **患者电子档案（EHR）** — 连续性健康管理与医生端审计，问诊后异步总结更新上下文，多轮就诊个体化风险评估
- 🛠️ **8 个内置卒中工具** — NIHSS / mRS / GCS 量表、rt-PA 剂量、溶栓时间窗、TOAST 与 LVO 筛查
- 📊 **权威评测表现** — RAGAS 忠实度 0.94 / 上下文精准度 0.91；临床专家盲评：诊断符合率 94.2%、禁忌症遗漏 0%、指南契合度 89.5%
- 🧰 **技术栈** — Vue 3 + Vite 7 · Java 17 Spring Boot 3 (WebFlux) · Redis 6.0 + Redisson · MySQL 8.0 · Python FastAPI · LangGraph · Qwen-Max · gte-rerank

### 🎓 LearnAgent · 医学教育学习多智能体系统

<a href="https://github.com/AttentionCoo/learning-characterizing-mas">
  <img src="https://img.shields.io/badge/Repository-learning--characterizing--mas-B967FF?style=flat-square&logo=github&logoColor=white" alt="learning-characterizing-mas" />
</a>
<img src="https://img.shields.io/badge/15th%20China%20Software%20Cup-A3%20Track%20%7C%20iFLYTEK-01CDFE?style=flat-square" alt="15th China Software Cup, A3 track by iFLYTEK" />

面向卒中医学教育的个性化**多智能体学习系统** —— 以「画像 → 个性化学习 → 效果评估 → 反馈优化」学习闭环贯穿全局，由 10 位领域专家 + 证据仲裁 + 监督者（Supervisor）驱动。

- 🧠 **8 维证据链学习画像** — 每维携带 source/confidence/evidence 与五态证据状态，只记录有证据的事实，画像由证据渲染器确定性生成，杜绝模型推断污染
- 🔄 **学习闭环** — 画像 → 个性化学习 → 效果评估 → 反馈优化，薄弱点自动回流画像、路径动态调整
- 🗺️ **路径规划与资源生成** — 学习路径动态调整、进度跟踪与资源推荐，支持课程讲解、思维导图、练习题、拓展阅读、临床案例等 6 类资源
- 👨‍⚕️ **专家会诊与证据仲裁** — 10 位专家结构化消息会诊 + 共享黑板协作，Claim/Evidence 仲裁逐条判定证据充分性，禁止纯认同、强制信息增量
- ⚖️ **编排驱动与质量控制** — LangGraph 状态图 + RePlan 规划-执行-校验循环，功能级输入守卫、Hybrid RAG、规则校验、反思修正、共享记忆
- 🖼️ **医学多模态** — Qwen VL 影像分析、病例流式分析、多图对比、DICOM 元数据、检验报告与处方 OCR
- 📊 **智能辅导与代码辅助** — 多轮 SSE 问答、六章节结构化输出；Python 执行、代码补全、错误诊断与讲解
- 🧰 **技术栈** — Vue 3.5 + Vite 7 · Java 21 Spring Boot 3.5 · MyBatis-Plus · MySQL 8 + Redis 7 · Python FastAPI · LangGraph · LangChain · ChromaDB · Qwen（Chat / Embedding / Rerank / VL）

### ⚙️ 更多 AI 项目

| 👔 [SuperBizAgent](https://github.com/AttentionCoo/super-biz-agent) | 🔭 [Space-RAG](https://github.com/AttentionCoo/space-rag-model) |
| :--- | :--- |
| 企业级聊天机器人 & AIOps 助手 — RAG 知识库、Plan-Execute-Replan 故障诊断、MCP 工具集成。`FastAPI · LangChain · LangGraph · Milvus` | 天文多源 RAG 问答 — 基于本地天文 PDF 向量库、维基百科内部语料与 Google Serper 实时搜索的 BM25 + M3E 混合检索，由 AI Agent 统一编排。 |

| 🚢 [Titanic FT-Transformer](https://github.com/AttentionCoo/Titanic-FT-Transformer) | 📈 [Store Sales Forecasting](https://github.com/AttentionCoo/store-sales---time-series-forecasting) |
| :--- | :--- |
| FT-Transformer（特征分词器 + Transformer）— Title/FamilySize/Deck 特征工程、DropPath 正则化 + 特征残差，5 折交叉验证 **84.51% ± 1.24%**。 | LightGBM 时间序列预测 — 高阶滞后/滚动特征、多源数据合并（油价 / 节假日 / 商店 / 交易）、log1p 目标变换、严格时间切分验证（RMSLE）。 |

### 🛠️ 工具与收藏

- 🧬 [scrapy-ncbi](https://github.com/AttentionCoo/scrapy-ncbi) — 面向 NCBI 文献（PubMed / PMC / Gene / BLAST）的异步 Scrapy 爬虫，带随机 User-Agent 中间件与合规限速
- 📖 [study-note](https://github.com/AttentionCoo/study-note) — 涵盖 AI / LLM 智能体、Java 后端、中间件与计算机基础的个人知识库，附代码示例
- 💎 [anime-gems](https://github.com/AttentionCoo/anime-gems) — 精心整理的优质动漫美图收藏

---

## 🛠️ 技术栈

### 🧠 AI 与深度学习

<p>
  <img src="https://skillicons.dev/icons?i=py,pytorch,tensorflow,scikitlearn,opencv,anaconda" alt="Python, PyTorch, TensorFlow, scikit-learn, OpenCV, Anaconda" />
</p>

<p>
  <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white" alt="PyTorch" />
  <img src="https://img.shields.io/badge/TensorFlow-FF6F00?style=flat-square&logo=tensorflow&logoColor=white" alt="TensorFlow" />
  <img src="https://img.shields.io/badge/Hugging%20Face-FFD21E?style=flat-square&logo=huggingface&logoColor=black" alt="Hugging Face" />
  <img src="https://img.shields.io/badge/NumPy-013243?style=flat-square&logo=numpy&logoColor=white" alt="NumPy" />
  <img src="https://img.shields.io/badge/Pandas-150458?style=flat-square&logo=pandas&logoColor=white" alt="Pandas" />
  <img src="https://img.shields.io/badge/Jupyter-F37626?style=flat-square&logo=jupyter&logoColor=white" alt="Jupyter" />
  <img src="https://img.shields.io/badge/OpenCV-5C3EE8?style=flat-square&logo=opencv&logoColor=white" alt="OpenCV" />
</p>

### 🧩 LLM 与智能体框架

<p>
  <img src="https://img.shields.io/badge/LangChain-1C3C3C?style=flat-square&logo=langchain&logoColor=white" alt="LangChain" />
  <img src="https://img.shields.io/badge/LangGraph-1C3C3C?style=flat-square&logo=langgraph&logoColor=white" alt="LangGraph" />
  <img src="https://img.shields.io/badge/LlamaIndex-2B4DC9?style=flat-square&logo=llamaindex&logoColor=white" alt="LlamaIndex" />
  <img src="https://img.shields.io/badge/Ollama-000000?style=flat-square&logo=ollama&logoColor=white" alt="Ollama" />
  <img src="https://img.shields.io/badge/ChromaDB-06E07F?style=flat-square&logo=chromadb&logoColor=black" alt="ChromaDB" />
  <img src="https://img.shields.io/badge/Milvus-00A1EA?style=flat-square&logo=milvus&logoColor=white" alt="Milvus" />
  <img src="https://img.shields.io/badge/Qwen-615CED?style=flat-square&logo=qwen&logoColor=white" alt="Qwen" />
  <img src="https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white" alt="FastAPI" />
</p>

### ☕ 后端工程

<p>
  <img src="https://skillicons.dev/icons?i=java,spring,mysql,redis,mongodb,docker,linux,nginx,kafka,vue" alt="Java, Spring, MySQL, Redis, MongoDB, Docker, Linux, Nginx, Kafka, Vue" />
</p>

<p>
  <img src="https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white" alt="Java" />
  <img src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white" alt="Spring Boot" />
  <img src="https://img.shields.io/badge/Spring%20Cloud-6DB33F?style=flat-square&logo=spring&logoColor=white" alt="Spring Cloud" />
  <img src="https://img.shields.io/badge/MyBatis-1F1F1F?style=flat-square&logo=mybatis&logoColor=white" alt="MyBatis" />
  <img src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat-square&logo=vuedotjs&logoColor=white" alt="Vue.js" />
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white" alt="MySQL" />
  <img src="https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white" alt="Redis" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/RabbitMQ-FF6600?style=flat-square&logo=rabbitmq&logoColor=white" alt="RabbitMQ" />
  <img src="https://img.shields.io/badge/Kafka-231F20?style=flat-square&logo=apachekafka&logoColor=white" alt="Kafka" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker" />
  <img src="https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux" />
  <img src="https://img.shields.io/badge/Nginx-009639?style=flat-square&logo=nginx&logoColor=white" alt="Nginx" />
</p>

---

## 📊 GitHub 统计

<p align="center">
  <img height="180" src="generated/github-stats.svg" alt="GitHub stats for AttentionCoo" />
  <img height="180" src="generated/top-langs.svg" alt="Top languages for AttentionCoo" />
</p>

<p align="center">
  <img src="https://streak-stats.demolab.com?user=AttentionCoo&theme=radical" alt="GitHub streak for AttentionCoo" />
</p>

---

## 🏆 GitHub 奖杯

<p align="center">
  <img src="generated/trophy.svg" alt="GitHub trophy for AttentionCoo" />
</p>

---

<!-- ===================== Footer ===================== -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=100:B967FF,50:01CDFE,0:FF71CE&height=120&section=footer" alt="Footer wave" />
</p>

<p align="center">
  用 AI 构建智能系统 ⚡
</p>
