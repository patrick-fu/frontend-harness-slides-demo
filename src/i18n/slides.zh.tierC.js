export const SLIDE_TRANSLATIONS_ZH_TIER_C = {
  "17": {
    name: "研究备忘录",
    theme: "延迟对移动端用户留存的影响",
    densityLabel: "文本报告",
    scenes: [
      {
        id: 1,
        title: "延迟阈值假设",
        lede: "分析页面加载超出亚秒级边界时的初始用户跳出率。",
        beats: [
          { id: 1, title: "亚秒级阈值", body: "我们的纵向研究确认，超过初始 400ms 阈值后，延迟每增加 100ms，用户跳出率就会上升 12%。", beatLine: "移动端的认知预期是即时、亚秒级响应。", action: "加载第 1 列" },
          { id: 2, title: "摩擦叠加", body: "等待时间越长，延迟越会改变用户行为，并持续推高跳出率。", beatLine: "初始延迟会永久损害用户会话留存指标。", action: "加载第 2 列" },
          { id: 3, title: "投机加载修复", body: "实施浏览器侧投机预渲染，可挽回最多 45% 的潜在流失会话。", beatLine: "投机加载抵消网络延迟，稳住客户留存。", action: "绘制图表数据" }
        ]
      },
      {
        id: 2,
        title: "交易放弃边界",
        lede: "量化移动购物车中结账延迟激增时的交易流失。",
        beats: [
          { id: 1, title: "结账延迟峰值", body: "当安全支付处理延迟超过 1800ms 时，交易放弃率会飙升至 62% 以上。", beatLine: "结账延迟会直接推动购物车放弃。", action: "绘制抖动基线" },
          { id: 2, title: "会话放弃", body: "用户因结账延迟焦虑而放弃支付，并怀疑交易失败。", beatLine: "摩擦会立即推高安全结账流失。", action: "应用 QUIC 规则" },
          { id: 3, title: "优化支付路径", body: "应用非阻塞后台支付确认后，已完成结账恢复到基线水平。", beatLine: "异步结账保护交易转化指标。", action: "输出摘要备忘录" }
        ]
      },
      {
        id: 3,
        title: "延迟导致的留存衰减",
        lede: "对不同延迟基线下的移动端跳出率进行定量分析。",
        beats: [
          { id: 1, title: "亚秒级阈值", body: "我们的纵向研究确认，超过初始 400ms 阈值后，延迟每增加 100ms，用户跳出率就会上升 12%。", beatLine: "移动端的认知预期是即时、亚秒级响应。", action: "初始化图表" },
          { id: 2, title: "交易放弃边界", body: "一旦交易延迟超过 1800ms，购物车放弃率会飙升至 62% 以上，严重影响结账。", beatLine: "运营摩擦会直接叠加财务结账流失。", action: "绘制曲线" },
          { id: 3, title: "回顾性优化规则", body: "通过实施客户端投机渲染，我们可挽回最多 45% 的潜在放弃结账。", beatLine: "投机加载抵消网络延迟，稳住客户留存。", action: "完成图形" }
        ]
      },
      {
        id: 4,
        title: "丢包退化",
        lede: "观察弱网、高抖动移动蜂窝网络下的交易流失。",
        beats: [
          { id: 1, title: "抖动延迟峰值", body: "较弱的蜂窝连接会触发丢包，导致 socket 握手重启。", beatLine: "socket 重新协商最多会增加 1200ms 延迟开销。", action: "追踪抖动" },
          { id: 2, title: "TCP 连接瓶颈", body: "短暂蜂窝中断期间，TCP 队头阻塞会锁住数据传输。", beatLine: "阻塞调用会冻结浏览器网络通道。", action: "显示瓶颈" },
          { id: 3, title: "QUIC 协议方案", body: "将支付端点迁移到 QUIC 协议，可避免连接中断并维持连续流。", beatLine: "QUIC 协议保护蜂窝网络切换中的交易连续性。", action: "锁定协议" }
        ]
      },
      {
        id: 5,
        title: "留存优化台账",
        lede: "一份高细节学术报告，映射页面体积、网络协议统计和留存收益。",
        beats: [
          { id: 1, title: "延迟合规表", body: "验证移动页面总重量保持在 150KB 预算指标以内。", beatLine: "轻量页面保证低端设备上也能快速加载。", action: "渲染台账表头" },
          { id: 2, title: "冗余 JS 资产删除", body: "删除不需要的跟踪像素，压缩初始 payload 体积。", beatLine: "裁剪跟踪资产会降低 first-contentful-paint 延迟。", action: "应用语法高亮" },
          { id: 3, title: "留存审计签核", body: "学术分析已完成。投机引擎已认证并签核部署。", beatLine: "优化后的网络流水线保护移动端用户留存指标。", action: "盖章认证签核" }
        ]
      }
    ]
  },
  "18": {
    name: "维护者 Issue 简报",
    theme: "事后复盘：连接池耗尽",
    densityLabel: "文本报告",
    scenes: [
      {
        id: 1,
        title: "异常锁定发现",
        lede: "摄取遥测日志，精确定位生产集群上的连接耗尽。",
        beats: [
          { id: 1, title: "池容量上限", body: "告警：连接池达到 98% 容量，导致活跃查询延迟激增。", beatLine: "池上限会锁住数据库连接，阻塞传入请求。", action: "打开 issue 日志" },
          { id: 2, title: "socket 泄漏警告", body: "诊断：查询完成后 socket 仍保持打开，持续消耗池储备。", beatLine: "僵尸 socket 会永久消耗服务器连接容量。", action: "展示代码片段" },
          { id: 3, title: "耗尽确认", body: "事后复盘扫描确认，高并发数据库循环中存在资源泄漏。", beatLine: "未释放资源会造成平台级连接锁定。", action: "合并 pull request" }
        ]
      },
      {
        id: 2,
        title: "对称 socket 跟踪",
        lede: "比较健康集群节点与泄漏节点上的连接分配。",
        beats: [
          { id: 1, title: "Node A：连接泄漏", body: "Node A 在错误异常后仍保持连接线打开，锁住池容量。", beatLine: "缺失错误处理会导致 socket 分配泄漏。", action: "加载查询线程" },
          { id: 2, title: "Node B：健康连接", body: "Node B 使用 finally 块释放资源，在错误发生时立即处置 socket。", beatLine: "显式释放保证数据库连接稳定。", action: "显示索引缺口" },
          { id: 3, title: "资源释放已对齐", body: "为 Node A 应用全局 try-finally 包装器，恢复稳定的池指标。", beatLine: "显式资源处置可防止集群级锁定风险。", action: "应用索引" }
        ]
      },
      {
        id: 3,
        title: "Issue #1409：连接泄漏简报",
        lede: "追踪扩容扫描期间异常数据库锁死的根因。",
        beats: [
          { id: 1, title: "检测到数据库连接泄漏", body: "遥测报告连接池耗尽。僵尸连接在交易完成后仍未关闭。", beatLine: "泄漏连接会永久锁住池容量，阻塞活跃请求。", action: "打开 issue" },
          { id: 2, title: "定位缺失的 finally 块", body: "代码审查发现嵌套错误分支会立即 return，绕过标准 socket 释放脚本。", beatLine: "函数提前返回时仍必须保证资源处置循环。", action: "隔离 bug" },
          { id: 3, title: "已应用显式 try-finally 释放", body: "已添加全局包装，保证所有异常分支都会处置 socket。线程已锁定。", beatLine: "防御性编码确保失败状态下的系统资源稳定。", action: "关闭 issue" }
        ]
      },
      {
        id: 4,
        title: "无索引查询修复",
        lede: "隔离执行顺序全表扫描的慢数据库查询。",
        beats: [
          { id: 1, title: "顺序扫描告警", body: "用户目录查询执行全表扫描，每次扫描超过 1200ms。", beatLine: "全表扫描会导致 CPU 利用率飙过安全上限。", action: "检测扫描" },
          { id: 2, title: "缺失复合索引", body: "Schema 分析确认复合搜索列上缺少搜索索引。", beatLine: "缺失索引会让查询复杂度随数据库大小线性增长。", action: "查找索引缺口" },
          { id: 3, title: "插入 B-Tree 索引", body: "部署复合 B-Tree 索引，将查询查找时间降至亚毫秒范围。", beatLine: "B-Tree 索引保证查询查找按对数规模增长。", action: "应用 B-Tree" }
        ]
      },
      {
        id: 5,
        title: "事故事后复盘台账",
        lede: "一份完整工程简报，映射事故时间线、代码修改和池安全指标。",
        beats: [
          { id: 1, title: "池合规表", body: "验证连接使用指数保持在 65% 目标安全基线以下。", beatLine: "保持较低连接使用率，可防止级联锁定风险。", action: "渲染台账表头" },
          { id: 2, title: "冗余查询代码删除", body: "删除无索引搜索过滤器，裁剪数据库查询包装类。", beatLine: "删除慢查询可避免执行线程阻塞。", action: "应用语法高亮" },
          { id: 3, title: "事后复盘签核", body: "事故已解决。代码变更已合并、审计，并以零回归签核。", beatLine: "认证后的事后复盘保证平台韧性稳固。", action: "盖章认证签核" }
        ]
      }
    ]
  },
  "19": {
    name: "决策记录（ADR）",
    theme: "ADR 009：离线优先同步选择 SQLite",
    densityLabel: "文本报告",
    scenes: [
      {
        id: 1,
        title: "持久性评估基准",
        lede: "比较本地数据库引擎，以选择最佳客户端存储方案。",
        beats: [
          { id: 1, title: "持久性要求", body: "我们比较 IndexedDB 与 SQLite WASM，以确定哪个引擎提供 ACID 事务安全。", beatLine: "本地数据库持久性直接限制客户端事务安全。", action: "加载 ADR 元数据" },
          { id: 2, title: "WASM 写入延迟", body: "基准检查确认，SQLite WASM 在数据库超过 50MB 后仍保持稳定写入速度。", beatLine: "SQLite WASM 会随着数据库规模扩大维持写入性能。", action: "展开决策日志" },
          { id: 3, title: "ACID 合规已锁定", body: "选择 SQLite WASM，是因为它具备稳健的事务边界和 SQL 查询能力。", beatLine: "ACID 事务会在浏览器意外崩溃时保护数据库一致性。", action: "应用绿色印章" }
        ]
      },
      {
        id: 2,
        title: "对称配额边界",
        lede: "在客户端存储可用性与移动设备存储限制之间取得平衡。",
        beats: [
          { id: 1, title: "移动端存储限制", body: "移动浏览器会限制本地数据库存储空间，防止设备磁盘膨胀。", beatLine: "存储限制要求主动管理数据库大小。", action: "加载缓存 ADR" },
          { id: 2, title: "LRU 淘汰规则", body: "实施 Least Recently Used 淘汰，裁剪超过 30 天的本地缓存。", beatLine: "淘汰规则平衡本地离线可用性与空间约束。", action: "注入淘汰规则" },
          { id: 3, title: "存储占用已锁定", body: "数据库大小上限设为 100MB，确保符合浏览器配额安全要求。", beatLine: "设限数据库保护移动设备上的存储稳定性。", action: "盖章 ADR 10" }
        ]
      },
      {
        id: 3,
        title: "ADR 009：本地数据库选择",
        lede: "评估本地存储方案，以支持高速离线同步。",
        beats: [
          { id: 1, title: "评估本地存储边界", body: "我们比较 IndexedDB、SQLite WASM 和 localStorage 的持久性、空间约束与事务延迟。", beatLine: "本地数据库持久性直接限制客户端事务安全。", action: "初始化 ADR" },
          { id: 2, title: "为什么 SQLite WASM 胜出", body: "SQLite WASM 提供严格 ACID 保证、SQL 查询表达力，并在超过 50MB 后仍具备更优写入速度。", beatLine: "ACID 事务会在浏览器意外崩溃时保护数据库一致性。", action: "展开理由" },
          { id: 3, title: "SQLite WASM 选为标准", body: "已批准。所有 local-first 模块必须通过统一 SQLite driver 执行事务。", beatLine: "标准化防止客户端模块之间出现引擎碎片化。", action: "批准 ADR" }
        ]
      },
      {
        id: 4,
        title: "数据裁剪决策",
        lede: "定义数据库裁剪算法，在低磁盘状态下释放空间。",
        beats: [
          { id: 1, title: "低磁盘警告限制", body: "检测低磁盘异常，并触发自动数据库裁剪扫描。", beatLine: "磁盘告警可防止浏览器数据库写入锁定。", action: "检测配额" },
          { id: 2, title: "裁剪算法扫描", body: "从数据库中裁剪不需要的资产和已完成的 delta 事务历史行。", beatLine: "裁剪事务行会压缩本地元数据占用。", action: "扫描事务" },
          { id: 3, title: "已验证裁剪后的数据库", body: "本地数据库通过大小检查，保持在安全边界之内。", beatLine: "紧凑数据库保护各设备上的写入稳定性。", action: "验证数据库" }
        ]
      },
      {
        id: 5,
        title: "ADR 合规签核",
        lede: "一份管理记录，记录数据库选择、配额规则和合规标准。",
        beats: [
          { id: 1, title: "ADR schema 验证", body: "验证数据库配置符合公司合规与安全指南。", beatLine: "合规数据库设计可防止未来数据迁移风险。", action: "渲染台账表头" },
          { id: 2, title: "冗余 driver 代码删除", body: "删除不需要的数据库 driver 代码，裁剪客户端 bundle 大小。", beatLine: "删除重复 driver 会降低客户端加载时间。", action: "应用语法高亮" },
          { id: 3, title: "ADR 注册完成", body: "ADR 已批准、锁定，并以 100% 架构合规签核。", beatLine: "认证 ADR 保证一致的开发标准。", action: "盖章认证签核" }
        ]
      }
    ]
  },
  "20": {
    name: "基准测试矩阵",
    theme: "边缘端 LLM 性能对比",
    densityLabel: "文本报告",
    scenes: [
      {
        id: 1,
        title: "每秒 tokens 基准",
        lede: "测量不同量化模型配置下的编译速度。",
        beats: [
          { id: 1, title: "每秒 tokens 目标", body: "我们运行基准扫描，测量标准边缘模型的编译速度。", beatLine: "一致的基准需要统一硬件和上下文参数。", action: "渲染表格网格" },
          { id: 2, title: "量化延迟边界", body: "使用 4bit 量化配置后，模型编译速度达到每秒 45 tokens。", beatLine: "量化可优化边缘硬件上的模型速度。", action: "缩放 model-a 条形图" },
          { id: 3, title: "编译速度已验证", body: "边缘模型可干净地编译代码 tokens，并维持速度与准确率平衡。", beatLine: "高编译速度保障 agent 操作响应性。", action: "缩放 model-b 条形图" }
        ]
      },
      {
        id: 2,
        title: "对称浏览器启动",
        lede: "比较不同浏览器 JavaScript 引擎上的冷启动编译延迟。",
        beats: [
          { id: 1, title: "Chrome WASM 引擎", body: "Chrome 在 180ms 内解析并编译边缘模型，使用优化后的 WASM runtime。", beatLine: "优化 runtime 确保模型快速初始化。", action: "渲染启动网格" },
          { id: 2, title: "Safari JavaScriptCore", body: "Safari 初始化在 320ms 内完成，呈现轻微编译延迟。", beatLine: "引擎差异反映编译优化差异。", action: "绘制引擎条形图" },
          { id: 3, title: "预编译 bytecode 缓存", body: "缓存已编译 bytecode 后，两个浏览器的初始化平均降至 45ms。", beatLine: "缓存 bytecode 绕过模型初始化延迟瓶颈。", action: "高亮胜出引擎" }
        ]
      },
      {
        id: 3,
        title: "边缘端 LLM 编译基准",
        lede: "在轻量参数下编译每秒代码 tokens。",
        beats: [
          { id: 1, title: "参数与测试条件", body: "我们建立标准基准运行：1,500 个代码 tokens、4bit 量化、本地硬件运行。", beatLine: "一致的指标需要统一硬件和上下文参数。", action: "初始化基准" },
          { id: 2, title: "Model A：速度 vs 准确率", body: "Model A 达到每秒 45 tokens。测试中代码编译器准确率保持在 94.2%。", beatLine: "速度不能破坏代码正确性边界。", action: "绘制 model-a" },
          { id: 3, title: "Model B：高准确率冠军", body: "Model B 实现 98.9% 编译器准确率，同时稳定执行在每秒 32 tokens。", beatLine: "对编译流水线而言，准确率边界优先于速度指标。", action: "绘制 model-b" }
        ]
      },
      {
        id: 4,
        title: "准确率矩阵分析",
        lede: "评估复杂编程任务中的编译正确率百分比。",
        beats: [
          { id: 1, title: "编译准确率扫描", body: "模型编译测试循环，检查递归和锁任务中的正确性。", beatLine: "算法准确率是自主 agent 的强制要求。", action: "检查准确率" },
          { id: 2, title: "语法解析异常", body: "量化压缩偶尔会在深层嵌套函数中触发轻微语法警告。", beatLine: "嵌套复杂度会降低模型解析准确率。", action: "查找异常" },
          { id: 3, title: "优化后的准确率值", body: "添加语法约束后，编译准确率恢复到 99.8% 边界。", beatLine: "语法约束保证输出语法正确。", action: "应用约束" }
        ]
      },
      {
        id: 5,
        title: "基准摘要台账",
        lede: "一份完整对比矩阵，记录模型编译速度、内存限制和正确率评分。",
        beats: [
          { id: 1, title: "模型基准对比", body: "比较 10 个不同模型的性能分数，突出最佳边缘端目标。", beatLine: "对比数据推动科学的模型选择。", action: "渲染台账表头" },
          { id: 2, title: "删除不稳定模型配置", body: "将准确率低于 90% 边界的模型从候选列表中删除。", beatLine: "删除低准确率候选可保障流水线可靠性。", action: "应用语法高亮" },
          { id: 3, title: "基准报告签核", body: "边缘编译器报告已完成，并以 100% 实证验证签核。", beatLine: "认证基准报告确认最优系统性能。", action: "盖章认证签核" }
        ]
      }
    ]
  },
  "21": {
    name: "田野笔记报告",
    theme: "智能家居 UX 田野研究",
    densityLabel: "文本报告",
    scenes: [
      {
        id: 1,
        title: "物理习惯优先",
        lede: "观察用户交互，记录对手动物理开关的偏向性依赖。",
        beats: [
          { id: 1, title: "物理开关障碍", body: "用户会持续绕过语音和 app 控制，出于肌肉记忆伸手按物理墙壁开关。", beatLine: "当软件习惯与身体肌肉记忆相冲突时，软件习惯会失败。", action: "记录开关障碍" },
          { id: 2, title: "肌肉记忆覆盖", body: "在高活动场景中，物理开关仍是首选交互界面。", beatLine: "改变物理开关习惯需要长期适应循环。", action: "记录连接焦虑" },
          { id: 3, title: "Mesh 开关集成", body: "将物理开关集成到本地无线 mesh 中，可保持手动控制循环可用。", beatLine: "以人为中心的设计会先尊重肌肉记忆，再引入自动化。", action: "固定回形针标签" }
        ]
      },
      {
        id: 2,
        title: "对称连接 UX",
        lede: "比较用户对晦涩技术日志与描述性兜底文案的反应。",
        beats: [
          { id: 1, title: "晦涩错误码", body: "展示类似 'SSID handshake failed (0x44)' 的技术错误会触发用户焦虑。", beatLine: "技术术语会直接导致用户会话流失。", action: "记录对抗循环" },
          { id: 2, title: "描述性兜底提醒", body: "使用类似 'Unable to connect to router' 的温和描述性兜底文案，可让用户冷静下来。", beatLine: "描述性文案可防止离线状态下的恐慌。", action: "记录优先级画像" },
          { id: 3, title: "有同理心的反馈循环", body: "我们标准化描述性兜底结构，确保零技术术语泄漏。", beatLine: "清晰反馈稳住用户对设备的信心。", action: "夹住冲突笔记" }
        ]
      },
      {
        id: 3,
        title: "智能家居 UX：田野研究",
        lede: "在农村地区观察设备集成行为的定性研究。",
        beats: [
          { id: 1, title: "物理墙壁开关障碍", body: "用户会持续绕过语音和 app 控制，出于肌肉记忆伸手按物理墙壁开关。", beatLine: "当软件习惯与身体肌肉记忆相冲突时，软件习惯会失败。", action: "观察开关" },
          { id: 2, title: "术语引发的连接焦虑", body: "类似 'SSID handshake failed' 的技术错误日志会触发用户焦虑，并导致设备立即断开连接。", beatLine: "技术术语必须包裹在有同理心的兜底文案中。", action: "观察焦虑" },
          { id: 3, title: "为持续信任而设计", body: "将物理开关集成到本地无线 mesh 中，保持手动切换循环可用。", beatLine: "以人为中心的设计会先尊重肌肉记忆，再引入自动化。", action: "观察 mesh" }
        ]
      },
      {
        id: 4,
        title: "并发命令冲突",
        lede: "当多名家庭成员同时调整设备时，解决状态振荡。",
        beats: [
          { id: 1, title: "发现命令冲突", body: "一名用户通过语音调暗灯光，另一名用户通过 app 调亮灯光，导致状态振荡循环。", beatLine: "并发命令需要显式优先级锁层。", action: "查找冲突" },
          { id: 2, title: "分配优先级锁", body: "将本地手动物理开关触发器设为绝对、高优先级命令覆盖。", beatLine: "手动物理开关动作代表明确、高优先级的用户意图。", action: "分配优先级" },
          { id: 3, title: "命令冲突已解决", body: "状态振荡曲线变得平滑，避免刺眼的物理灯光闪烁。", beatLine: "命令优先级保护本地硬件免受状态振荡压力。", action: "解决冲突" }
        ]
      },
      {
        id: 5,
        title: "定性 UX 台账",
        lede: "一份完整田野研究日记，编目用户习惯、焦虑率和 mesh 稳定性日志。",
        beats: [
          { id: 1, title: "UX 合规评分卡", body: "验证用户连接焦虑分数保持在每日安全限制以下。", beatLine: "有同理心的反馈循环保护客户平台忠诚度。", action: "渲染台账表头" },
          { id: 2, title: "技术术语删除", body: "从移动端日志中删除晦涩的十六进制错误码，并替换为兜底文案。", beatLine: "裁剪技术术语可防止设备断连恐慌。", action: "应用语法高亮" },
          { id: 3, title: "田野研究签核", body: "田野研究已完成。Mesh 开关集成已认证并签核部署。", beatLine: "认证 UX 研究构建高可靠家庭系统。", action: "盖章认证签核" }
        ]
      }
    ]
  },
  "22": {
    name: "操作手册",
    theme: "数据库连接池恢复 Runbook",
    densityLabel: "文本报告",
    scenes: [
      {
        id: 1,
        title: "建立诊断基线",
        lede: "检查事务日志，编译精确的数据库性能基线。",
        beats: [
          { id: 1, title: "检查当前集群指标", body: "执行诊断脚本，识别活跃连接数和目标数据库延迟。", beatLine: "编译基线指标之前，绝不要进入编辑。", action: "加载警告边框" },
          { id: 2, title: "分析池分配日志", body: "检查分配图，确认活跃连接数是否超过 90% 上限。", beatLine: "准确的指标基线可隔离连接泄漏来源。", action: "检查动作 1" },
          { id: 3, title: "诊断基线已锁定", body: "池分配基线已记录，确认存在严重连接耗尽。", beatLine: "执行恢复命令前，基线验证是强制要求。", action: "检查动作 2" }
        ]
      },
      {
        id: 2,
        title: "对称分片绕行",
        lede: "将数据库写入请求从退化分区绕行到副本。",
        beats: [
          { id: 1, title: "识别局部分片故障", body: "精确定位哪个数据库分区正在抛出 500 socket timeout 异常。", beatLine: "隔离故障可防止大范围级联数据库停机。", action: "检查分片故障" },
          { id: 2, title: "执行流量绕行开关", body: "修改活跃路由规则，将读取从故障分区导向分片副本。", beatLine: "重路由会把读取流量安全带离高热崩溃区域。", action: "切换分区开关" },
          { id: 3, title: "验证复制一致性", body: "跨节点执行事务 checksum 审计。确认 100% 数据库一致性。", beatLine: "审计可防止流量恢复后的隐性数据库不同步。", action: "确认分片同步" }
        ]
      },
      {
        id: 3,
        title: "Runbook：池容量恢复",
        lede: "生产集群连接池锁定的标准恢复流程。",
        beats: [
          { id: 1, title: "检查当前集群指标", body: "执行诊断脚本，识别活跃连接数和目标数据库延迟。", beatLine: "编译基线指标之前，绝不要进入编辑。", action: "初始化指标" },
          { id: 2, title: "强制终止僵尸查询", body: "识别并终止超过 30 秒的长运行查询，释放数据库锁约束。", beatLine: "终止僵尸线程会立即释放超过安全边界的容量。", action: "杀掉查询" },
          { id: 3, title: "验证健康稳定", body: "重新运行监控检查项。验证连接指标回落到 65% 容量以下。", beatLine: "指标稳定保持 15 分钟后，事故才算解决。", action: "验证健康" }
        ]
      },
      {
        id: 4,
        title: "级联故障防御",
        lede: "实施数据库查询限流，防止级联节点故障。",
        beats: [
          { id: 1, title: "限流阈值", body: "强制执行 API rate limiter，以约束并发事务流量水平。", beatLine: "Rate limiter 保护数据库免受巨大流量峰值冲击。", action: "应用限流" },
          { id: 2, title: "熔断器激活", body: "打开 circuit breaker，阻止进一步数据库写入，并将流量路由到缓存。", beatLine: "Circuit breaker 防止下游数据库集群崩溃。", action: "激活熔断器" },
          { id: 3, title: "限流后流量基线", body: "连接池指标稳定在 50% 容量以下，保障平台健康。", beatLine: "限流恢复系统运营余量。", action: "验证限流" }
        ]
      },
      {
        id: 5,
        title: "事故解决台账",
        lede: "一份高细节工业日志，详述执行清单、审计时间戳和恢复批准。",
        beats: [
          { id: 1, title: "Runbook 合规评分卡", body: "验证总事故解决时间保持在 15 分钟目标以内。", beatLine: "快速解决可限制业务交易影响。", action: "渲染台账表头" },
          { id: 2, title: "僵尸线程代码清理", body: "终止悬挂写入循环，裁剪整个栈中的冗余查询线程。", beatLine: "裁剪查询线程可消除平台级死锁风险。", action: "应用语法高亮" },
          { id: 3, title: "Runbook 验证签核", body: "平台恢复完成。心跳审计全绿，事故台账已关闭。", beatLine: "认证 Runbook 保证一致、安全的平台恢复。", action: "盖章认证签核" }
        ]
      }
    ]
  },
  "23": {
    name: "检查清单台账",
    theme: "交接就绪发布台账",
    densityLabel: "文本报告",
    scenes: [
      {
        id: 1,
        title: "测试覆盖率断言",
        lede: "验证代码库测试覆盖率数值满足系统合规指标。",
        beats: [
          { id: 1, title: "单元测试覆盖率指数", body: "确保代码覆盖率达到强制 85% 指数。验证所有关键分支都有单元测试。", beatLine: "覆盖率可防止上游迁移期间发生代码回归。", action: "断言覆盖率" },
          { id: 2, title: "断言 schema 覆盖率", body: "检查数据库模型，验证写事务路径具备 100% 测试覆盖率。", beatLine: "高 schema 覆盖率可防止隐性数据库记录泄漏。", action: "审计安全" },
          { id: 3, title: "覆盖率合规已锁定", body: "测试覆盖率指标验证为 89.4% 指数，通过编译门禁。", beatLine: "已验证覆盖率保证代码库迁移稳定。", action: "签署发布台账" }
        ]
      },
      {
        id: 2,
        title: "对称安全扫描",
        lede: "审计输入解析库，拦截 SQL injection 路径。",
        beats: [
          { id: 1, title: "SQL 查询净化审计", body: "扫描 SQL 查询，检查用户提供的输入是否使用 prepared statements。", beatLine: "Prepared statements 可中和恶意输入字符串。", action: "检查指标" },
          { id: 2, title: "环境凭据扫描", body: "审计配置，验证私钥和凭据保持隔离在 environment files 中。", beatLine: "隔离凭据可防止安全凭据意外泄漏。", action: "检查 trace 绑定" },
          { id: 3, title: "安全扫描已清除", body: "静态扫描干净通过，确认代码中零安全漏洞行。", beatLine: "严格安全检查保护数据库免受注入风险。", action: "关闭遥测台账" }
        ]
      },
      {
        id: 3,
        title: "工程发布台账",
        lede: "在将新模块合并到生产前验证合规标准。",
        beats: [
          { id: 1, title: "单元测试覆盖率指数", body: "确保代码覆盖率达到强制 85% 指数。验证所有关键分支都有单元测试。", beatLine: "覆盖率可防止上游迁移期间发生代码回归。", action: "初始化台账" },
          { id: 2, title: "安全 schema 审计", body: "验证用户输入已净化、环境凭据安全，并且 SQL 扫描清除。", beatLine: "合规检查对于保护数据库免受注入风险是必要的。", action: "审计代码" },
          { id: 3, title: "发布候选已签核", body: "所有清单行都已勾选。台账已签署，并获准进入生产部署。", beatLine: "干净台账保证稳固、低风险的部署流水线。", action: "签署台账" }
        ]
      },
      {
        id: 4,
        title: "遥测 hook 验证",
        lede: "在容器集群扩容前确认监控指标已集成。",
        beats: [
          { id: 1, title: "Metric counter hook 检查", body: "确认标准 counter hooks 已绑定到事务端点。", beatLine: "Metric counters 动态追踪事务量指数。", action: "验证 hooks" },
          { id: 2, title: "动态 trace spans 绑定", body: "验证 trace identifiers 会通过服务线传播，用于关联日志。", beatLine: "Trace spans 可隔离生产中的潜伏服务瓶颈。", action: "验证 spans" },
          { id: 3, title: "遥测集成全绿", body: "监控 hooks 验证全绿，确保生产可观测性指标正常工作。", beatLine: "受监控系统保证执行运行安全且可观测。", action: "批准 hooks" }
        ]
      },
      {
        id: 5,
        title: "交接就绪签核",
        lede: "一份管理台账，跟踪测试覆盖率、安全扫描、遥测 hooks 和发布签核。",
        beats: [
          { id: 1, title: "审计台账清单", body: "验证所有预发布清单项满足公司发布要求。", beatLine: "全面检查册可防止不稳定版本触达用户。", action: "渲染台账表头" },
          { id: 2, title: "冗余诊断代码", body: "从构建 bundle 中删除不需要的 console log 行和 debug 工具。", beatLine: "删除诊断日志会压缩生产代码库重量。", action: "应用语法高亮" },
          { id: 3, title: "交接台账签核", body: "发布台账已认证。所有复选框都已清除，构建已签核部署。", beatLine: "认证台账保证安全、合规的发布流水线。", action: "盖章认证签核" }
        ]
      }
    ]
  },
  "24": {
    name: "带注释的源码与 Diff",
    theme: "查询优化：消除全表扫描",
    densityLabel: "文本报告",
    scenes: [
      {
        id: 1,
        title: "顺序搜索瓶颈",
        lede: "识别执行慢速全表扫描的无索引查询。",
        beats: [
          { id: 1, title: "原始顺序查询", body: "原始查询执行全表顺序扫描来查找记录，阻塞数据库线程。", beatLine: "全表扫描会让查询复杂度随数据库大小线性增长。", action: "加载源码" },
          { id: 2, title: "查询响应延迟", body: "顺序扫描每次超过 1200ms，导致数据库连接超时。", beatLine: "表扫描会耗尽服务器容量，阻塞并发请求。", action: "高亮删除" },
          { id: 3, title: "已识别优化路径", body: "选择在用户查找字段上添加 B-Tree 索引作为主要修复路径。", beatLine: "索引化将查询复杂度从线性边界转为对数边界。", action: "注入新增" }
        ]
      },
      {
        id: 2,
        title: "对称查询对比",
        lede: "比较无索引和有索引数据库表的查询性能指标。",
        beats: [
          { id: 1, title: "无索引顺序扫描", body: "无索引搜索耗时 1500ms，连续扫描数百万行。", beatLine: "高负载下，顺序查找会阻塞执行线程。", action: "加载同步代码" },
          { id: 2, title: "B-Tree 索引查找", body: "B-Tree 查找可在 2ms 内定位目标记录，绕过全表扫描。", beatLine: "索引将搜索值直接映射到磁盘位置。", action: "高亮阻塞删除" },
          { id: 3, title: "优化后的数据库性能", body: "部署 B-Tree 索引约束后，查询响应基线恢复为平稳的亚毫秒级。", beatLine: "亚毫秒响应保护连接池稳定。", action: "注入异步新增" }
        ]
      },
      {
        id: 3,
        title: "查询优化：扫描消除",
        lede: "用高速索引查找替代顺序全表扫描。",
        beats: [
          { id: 1, title: "顺序搜索查询", body: "原始查询执行顺序表扫描来查找记录，阻塞数据库线程。", beatLine: "全表扫描线性扩展，随着数据库扩大制造性能瓶颈。", action: "加载查询代码" },
          { id: 2, title: "剥离原始查找循环", body: "我们从数据库查询包装器中剥离顺序循环和无索引查找过滤器。", beatLine: "删除冗余查找循环可释放查询线程。", action: "剥离循环" },
          { id: 3, title: "插入索引约束参数", body: "我们注入索引搜索约束。查询执行从 1200ms 降至亚毫秒范围。", beatLine: "索引查找按对数规模增长，确保数据库查询稳定。", action: "注入索引" }
        ]
      },
      {
        id: 4,
        title: "异步连接循环",
        lede: "将数据库查询重构为异步、非阻塞执行路径。",
        beats: [
          { id: 1, title: "同步线程锁定", body: "同步查询会阻塞 API 线程，在接受调用前等待响应。", beatLine: "阻塞调用会冻结执行线程，限制整体容量。", action: "检测线程阻塞" },
          { id: 2, title: "async-await 实现", body: "将查询调用重构为非阻塞 async-await 语法，释放线程锁。", beatLine: "异步语法会在数据库查询期间释放线程。", action: "应用 async" },
          { id: 3, title: "非阻塞执行全绿", body: "API 并发指标扩展到 10x 以上，同时保持亚毫秒响应率。", beatLine: "非阻塞执行保障可扩展的连接池生命周期。", action: "验证 async" }
        ]
      },
      {
        id: 5,
        title: "优化合规台账",
        lede: "一份高细节数据库简报，映射查询优化、索引大小和延迟收益。",
        beats: [
          { id: 1, title: "数据库延迟统计", body: "验证总查询响应时间保持在 5ms 目标阈值以内。", beatLine: "亚毫秒响应率可防止连接池锁定。", action: "渲染台账表头" },
          { id: 2, title: "冗余索引代码删除", body: "从数据库 schema 中删除不需要的索引键，裁剪索引元数据重量。", beatLine: "裁剪索引元数据可保留设备写入速度。", action: "应用语法高亮" },
          { id: 3, title: "查询优化签核", body: "数据库优化已完成。查询编译干净，零线程阻塞警告行。", beatLine: "认证查询优化保证可靠、高速的平台软件。", action: "盖章认证签核" }
        ]
      }
    ]
  }
};
