export const SLIDE_TRANSLATIONS_ZH_TIER_A = {
  "01": {
    name: "极简产品 Keynote",
    theme: "量子编译器架构",
    densityLabel: "极简 Keynote",
    scenes: [
      {
        id: 1,
        title: "量子相干性公设",
        lede: "叠加态稳定性决定容错量子比特中的编译器延迟边界。",
        beats: [
          {
            id: 1,
            title: "叠加态脆弱性",
            body: "我们建立硬件级编译防护，监控退相干触发因素。",
            beatLine: "保护状态完整性是编译器的绝对指令。",
            action: "初始化球体"
          },
          {
            id: 2,
            title: "连续路径屏蔽",
            body: "通过叠加相位校正路径，我们保护逻辑门免受环境磁漂移影响。",
            beatLine: "屏蔽坐标以纳秒尺度动态映射。",
            action: "激活轨道"
          },
          {
            id: 3,
            title: "主动错误抑制",
            body: "我们将校验子测量直接交错放入路由网格，阻止错误传播。",
            beatLine: "抑制算法比静态调度快 4x 收敛。",
            action: "脉冲核心"
          }
        ]
      },
      {
        id: 2,
        title: "低温相位校准",
        lede: "映射稀释制冷机内的热波动，用于校准门相位边界。",
        beats: [
          {
            id: 1,
            title: "低温热边界",
            body: "序列密度会被限速，以避免超导基态发生热激发。",
            beatLine: "热裕量锁定在 15 milli-Kelvin。",
            action: "映射脉冲"
          },
          {
            id: 2,
            title: "热相位漂移",
            body: "热漂移会改变量子比特结阻抗，因此需要动态重校准相位偏移。",
            beatLine: "重校准将相位误差裕量维持在 0.01% 以下。",
            action: "冷却量子比特"
          },
          {
            id: 3,
            title: "保真度验证",
            body: "单次色散读出以超过 99.98% 的保真度分类量子比特最终状态。",
            beatLine: "读出分类完成量子编译周期。",
            action: "测量保真度"
          }
        ]
      },
      {
        id: 3,
        title: "容错校验子映射",
        lede: "将逻辑门序列转换为拓扑纠错网格调度。",
        beats: [
          {
            id: 1,
            title: "拓扑码网格",
            body: "物理量子比特被组织在 2D 表面码网格中，绑定数百万个元素。",
            beatLine: "表面码结构提供抵御噪声的终极屏障。",
            action: "网格映射"
          },
          {
            id: 2,
            title: "校验子扫描循环",
            body: "连续轮次扫描能隔离物理缺陷，同时不破坏活跃的逻辑信息。",
            beatLine: "扫描以微秒级执行间隔持续运行。",
            action: "运行扫描"
          },
          {
            id: 3,
            title: "逻辑量子比特锁定",
            body: "干净且无错误的逻辑量子比特出现，建立稳定的容错记忆。",
            beatLine: "逻辑稳定性让复杂算法可以安全执行。",
            action: "锁定量子比特"
          }
        ]
      },
      {
        id: 4,
        title: "脉冲序列编译",
        lede: "将抽象数学门分解为物理微波脉冲包络。",
        beats: [
          {
            id: 1,
            title: "包络提取",
            body: "数学酉操作映射到精确的 RF 脉冲形状，例如 Hermite 或 Gaussian 曲线。",
            beatLine: "形状经过计算，用于最小化瞬态频率泄漏。",
            action: "提取脉冲"
          },
          {
            id: 2,
            title: "串扰补偿",
            body: "预失真算法应用到脉冲线，以抵消电磁串扰。",
            beatLine: "预失真确保干净脉冲直接送达芯片。",
            action: "应用失真"
          },
          {
            id: 3,
            title: "动态执行台账",
            body: "计算得到的脉冲下发到任意波形发生器，驱动大规模物理量子比特。",
            beatLine: "下发流水线以低于 12 微秒的延迟执行。",
            action: "下发波形"
          }
        ]
      },
      {
        id: 5,
        title: "拓扑编译台账",
        lede: "完整编译矩阵，映射逻辑门计数、阈值指标和保真度检查摘要。",
        beats: [
          {
            id: 1,
            title: "阈值追踪台账",
            body: "验证物理错误率保持在 1% 容错阈值以下。",
            beatLine: "高密度仪表盘防止静默编译退化。",
            action: "渲染台账表头"
          },
          {
            id: 2,
            title: "指令优化 diff",
            body: "删除冗余恒等门，并替换为组合式相位旋转参数。",
            beatLine: "优化最多可将序列长度压缩 45%。",
            action: "应用语法高亮"
          },
          {
            id: 3,
            title: "最终编译签核",
            body: "已编译二进制通过阈值检查点，并以 100% 合规完成签核。",
            beatLine: "认证保证硬件部署期间的可预测执行。",
            action: "盖章认证签核"
          }
        ]
      }
    ]
  },
  "02": {
    name: "手绘白板 Emoji",
    theme: "离线优先同步引擎设计",
    densityLabel: "极简 Keynote",
    scenes: [
      {
        id: 1,
        title: "建立本地优先事实源",
        lede: "在客户端设备上即时保存变更，绕过服务器网络往返。💡",
        beats: [
          {
            id: 1,
            title: "零写入延迟",
            body: "用户更新会立即写入本地 SQLite 数据库。完全离线，零卡顿。",
            beatLine: "本地数据库是绝对事实源。",
            action: "贴卡片 1"
          },
          {
            id: 2,
            title: "增量台账排队",
            body: "写入会在隔离的仅追加事务台账中生成小型变更记录。",
            beatLine: "台账记录本地变更增量，不阻塞执行。",
            action: "贴卡片 2"
          },
          {
            id: 3,
            title: "连续本地扫描",
            body: "后台服务监控本地磁盘使用量，防止数据库配额耗尽。",
            beatLine: "本地配额会被动态检查，以保护设备安全。",
            action: "添加 emoji 角色"
          }
        ]
      },
      {
        id: 2,
        title: "无冲突协调",
        lede: "运行后台 CRDT 算法，无缝合并远程 peer 变更。",
        beats: [
          {
            id: 1,
            title: "CRDT 状态追踪",
            body: "每个对象都携带唯一状态向量，用于追踪多 peer 写入之间的因果关系。",
            beatLine: "向量无需中心协调即可保留逻辑顺序。",
            action: "标记冲突"
          },
          {
            id: 2,
            title: "自动分支合并",
            body: "后台线程使用交换律、结合律和幂等规则自动解决状态分叉。",
            beatLine: "合并规则保证最终一致状态收敛。",
            action: "显示握手"
          },
          {
            id: 3,
            title: "压缩台账下发",
            body: "已解决的历史合并回单一的 SQLite 基线事务。",
            beatLine: "压缩可减少超过 60% 的元数据存储。",
            action: "压缩台账"
          }
        ]
      },
      {
        id: 3,
        title: "点对点同步流",
        lede: "在弱蜂窝网络中推送最小事务 diff。🔌",
        beats: [
          {
            id: 1,
            title: "增量 payload 压缩",
            body: "我们不传输整行，而是提取并压缩最小 JSON schema 变更集。",
            beatLine: "Payload 压缩将数据传输限制在几百字节内。",
            action: "压缩 JSON"
          },
          {
            id: 2,
            title: "自适应重试循环",
            body: "传输层根据蜂窝信号强度调整重试次数，防止电池耗尽。",
            beatLine: "指数退避在掉线期间保护电池健康。",
            action: "退避循环"
          },
          {
            id: 3,
            title: "增量下发确认",
            body: "远程服务器确认收到增量，清空客户端的临时事务缓冲区。",
            beatLine: "ACK 安全结束本地 peer 同步扫描。",
            action: "确认 ACK"
          }
        ]
      },
      {
        id: 4,
        title: "交互式握手决议",
        lede: "当自动 CRDT 规则遇到逻辑死锁时，呈现人工把关的冲突面板。",
        beats: [
          {
            id: 1,
            title: "逻辑冲突发现",
            body: "自动合并规则遇到重叠时间戳，将字段变更标记为需要人工复核。",
            beatLine: "发现边界保护数据库 schema 完整性。",
            action: "触发警告"
          },
          {
            id: 2,
            title: "冲突卡片展示",
            body: "简洁的对比 modal 以本地和远程标签并排呈现两个选项。",
            beatLine: "Modal 让用户轻松评估冲突编辑。",
            action: "绘制卡片"
          },
          {
            id: 3,
            title: "单击合并决策",
            body: "用户选择偏好的版本。引擎将该选择提交为最终已解决增量。",
            beatLine: "决策覆盖状态向量，锁定稳定共识。",
            action: "提交决策"
          }
        ]
      },
      {
        id: 5,
        title: "离线同步合规台账",
        lede: "完整审计，同步映射增量日志、存储配额和 peer 连接指标。",
        beats: [
          {
            id: 1,
            title: "配额限制监控",
            body: "追踪磁盘配额，确保本地 SQLite 包保持在浏览器分配上限以下。",
            beatLine: "移动浏览器会严格限制 localStorage 存储边界。",
            action: "渲染台账表头"
          },
          {
            id: 2,
            title: "事务增量压缩",
            body: "删除操作会剥离冗余事务历史行，将历史压缩为原子基线。",
            beatLine: "压缩后的基线将同步延迟降至亚秒级平均值。",
            action: "应用语法高亮"
          },
          {
            id: 3,
            title: "同步认证签核",
            body: "台账记录全部绿色下发。所有本地优先设备报告零未同步行。",
            beatLine: "认证同步保证系统数据可靠性。",
            action: "盖章认证签核"
          }
        ]
      }
    ]
  },
  "03": {
    name: "交互式对话舞台",
    theme: "人类与 Agent 协作握手",
    densityLabel: "极简 Keynote",
    scenes: [
      {
        id: 1,
        title: "建立握手边界",
        lede: "为交互式代码编辑循环设置清晰的执行权限。",
        beats: [
          {
            id: 1,
            title: "声明式准则",
            body: "人类定义系统规则，指定目录写入边界和关键库。",
            beatLine: "边界防止 Agent 修改无关资产。",
            action: "打印问题"
          },
          {
            id: 2,
            title: "重构请求",
            body: "人类请求重构数据库锁，防止 UI 线程阻塞。",
            beatLine: "请求识别精确瓶颈，便于定向分析。",
            action: "打印方案"
          },
          {
            id: 3,
            title: "范围批准握手",
            body: "Agent 确认约束，并在编辑代码文件前锁定执行路径。",
            beatLine: "范围锁定防止投机性、不必要的代码修改。",
            action: "验证握手"
          }
        ]
      },
      {
        id: 2,
        title: "计划评审协议",
        lede: "在物理编辑提交到磁盘前评审 AST 重构计划。",
        beats: [
          {
            id: 1,
            title: "AST 重构草案",
            body: "Agent 提议将写锁逻辑隔离到独立后台 worker 线程中。",
            beatLine: "Worker 隔离确保 UI 线程非阻塞执行。",
            action: "起草计划"
          },
          {
            id: 2,
            title: "握手评审对话",
            body: "人类评审计划，确认后台状态维持线程安全约束。",
            beatLine: "评审循环保护系统线程免受竞态条件影响。",
            action: "评审计划"
          },
          {
            id: 3,
            title: "计划接受锁定",
            body: "人类和 Agent 都批准计划，清出开始文件编辑的路径。",
            beatLine: "批准锁定建立协作提交基础。",
            action: "锁定计划"
          }
        ]
      },
      {
        id: 3,
        title: "协作打磨循环",
        lede: "通过快速交互对话迭代打磨代码逻辑。",
        beats: [
          {
            id: 1,
            title: "人类批评触发",
            body: "人类指出一个边界场景：“热重启期间不会出现竞态条件吗？”",
            beatLine: "建设性反馈循环识别隐蔽的多线程问题。",
            action: "批评逻辑"
          },
          {
            id: 2,
            title: "事务日志兜底",
            body: "Agent 更新计划，在执行内存迁移前先将事务日志写入磁盘。",
            beatLine: "恢复台账确保崩溃状态下的线程一致性。",
            action: "应用日志"
          },
          {
            id: 3,
            title: "修订循环握手",
            body: "修订后的计划干净编译，并通过本地事务重放测试套件。",
            beatLine: "已验证循环把潜在错误转化为稳健软件。",
            action: "完成握手"
          }
        ]
      },
      {
        id: 4,
        title: "协调写入批准",
        lede: "在物理写入下发到 git 仓库前检查已变更的文件片段。",
        beats: [
          {
            id: 1,
            title: "Dry-run 写入输出",
            body: "Agent 执行虚拟编辑，将修改后的文件隔离在内存缓冲区中。",
            beatLine: "虚拟缓冲区保护本地工作区免受意外破坏。",
            action: "运行 dry-run"
          },
          {
            id: 2,
            title: "并排 diff 审计",
            body: "比较代码变更，高亮结构性删除和绿色新增行。",
            beatLine: "Diff 审计支持人类快速验证修改行。",
            action: "显示代码 diff"
          },
          {
            id: 3,
            title: "提交下发许可",
            body: "人类盖章批准写入，将虚拟缓冲区直接下发到工作区文件。",
            beatLine: "原子下发让 git 历史分支更干净。",
            action: "批准下发"
          }
        ]
      },
      {
        id: 5,
        title: "协作审计台账",
        lede: "完整日志，映射代码评审、验证扫描和测试执行细节。",
        beats: [
          {
            id: 1,
            title: "交互式合规追踪",
            body: "跨 multi-agent 会话追踪代码评审批准，并检查安全合规。",
            beatLine: "已审计会话防止投机性、未经批准的编辑。",
            action: "渲染台账表头"
          },
          {
            id: 2,
            title: "重构增量压缩",
            body: "删除操作剪除中间调试行，将提交压缩为干净的生产历史。",
            beatLine: "修剪后的历史让代码评审保持直接清晰。",
            action: "应用语法高亮"
          },
          {
            id: 3,
            title: "握手认证签核",
            body: "整个协作循环关闭，并对 100% 验证通过的非阻塞数据库代码完成签核。",
            beatLine: "已验证的协作构建交付可靠的生产代码库。",
            action: "盖章认证签核"
          }
        ]
      }
    ]
  },
  "04": {
    name: "动态排版重击",
    theme: "样板代码之死",
    densityLabel: "极简 Keynote",
    scenes: [
      {
        id: 1,
        title: "样板代码幻觉",
        lede: "生成模板不是生产力，而是债务累积。",
        beats: [
          {
            id: 1,
            title: "模板生成债务",
            body: "传统工具生成数百行样板包装代码。我们称之为架构风险。",
            beatLine: "每一行生成的样板代码，都是等待崩溃的代码。",
            action: "划掉样板代码"
          },
          {
            id: 2,
            title: "认知维护负担",
            body: "审查成千上万份复制粘贴文件会拖慢未来升级，并把系统锁死在过时 API 上。",
            beatLine: "样板代码会制造僵硬、脆弱的系统软件。",
            action: "高亮原语"
          },
          {
            id: 3,
            title: "声明式压缩",
            body: "我们用干净的声明式定义替代物理文件，并在运行中动态编译。",
            beatLine: "声明式规范将代码体积压缩超过 80%。",
            action: "打出数字"
          }
        ]
      },
      {
        id: 2,
        title: "静态模板崩塌",
        lede: "脚手架工具会冻结你的架构，阻碍数据库迁移。",
        beats: [
          {
            id: 1,
            title: "冻结 schema 路障",
            body: "静态模板一旦生成，修改底层数据库表就需要手动重写。",
            beatLine: "脆弱脚手架阻止系统平滑更新。",
            action: "冻结模板"
          },
          {
            id: 2,
            title: "升级摩擦升级",
            body: "升级库版本意味着要在成千上万个文件中修补生成的样板结构。",
            beatLine: "每增加一个复制粘贴文件，摩擦都会指数级复合。",
            action: "阻塞升级"
          },
          {
            id: 3,
            title: "动态编译脚手架",
            body: "只在 schema 定义中变更一次定义，让编译器重新生成活跃脚手架路径。",
            beatLine: "声明式编译让系统级升级变得简单。",
            action: "折叠样板代码"
          }
        ]
      },
      {
        id: 3,
        title: "动态编译原语",
        lede: "将抽象 schema 直接编译为优化后的原生机器码。",
        beats: [
          {
            id: 1,
            title: "Schema 解析摄取",
            body: "引擎读取仅含元数据的 schema 表，忽略物理样板代码需求。",
            beatLine: "修剪后的 schema 显著降低编译时间。",
            action: "解析 schema"
          },
          {
            id: 2,
            title: "动态编译器映射",
            body: "数据库操作在运行时通过低层直接内存映射解析。",
            beatLine: "直接映射的性能高于传统静态包装调用。",
            action: "映射内存"
          },
          {
            id: 3,
            title: "无样板代码交付",
            body: "编译产物干净执行，排除物理复制粘贴样板代码块。",
            beatLine: "干净可执行文件最小化内存占用开销。",
            action: "输出产物"
          }
        ]
      },
      {
        id: 4,
        title: "最小化代码开销",
        lede: "过滤中间包装块，降低开发者的认知负担。",
        beats: [
          {
            id: 1,
            title: "包装代码发现",
            body: "审计模块以定位冗余 wrapper、getter 和样板 setter。",
            beatLine: "冗余 wrapper 会增加追踪复杂度。",
            action: "审计 wrapper"
          },
          {
            id: 2,
            title: "语义压缩扫描",
            body: "用优化后的单行声明式参数替代显式样板循环。",
            beatLine: "压缩降低代码维护开销。",
            action: "压缩循环"
          },
          {
            id: 3,
            title: "修剪后的编译路径",
            body: "干净直接的编译器路径绕过样板代码，驱动高性能执行。",
            beatLine: "修剪路径保证稳定执行速度。",
            action: "优化路径"
          }
        ]
      },
      {
        id: 5,
        title: "样板代码移除台账",
        lede: "完整审计，记录代码压缩系数、行数压缩和速度收益。",
        beats: [
          {
            id: 1,
            title: "代码库指标仪表盘",
            body: "比较代码体积，显示编译模块平均减少 80%。",
            beatLine: "轻薄代码库更容易评审、审计和信任。",
            action: "渲染台账表头"
          },
          {
            id: 2,
            title: "脚手架移除代码 diff",
            body: "冗余静态文件被删除，替换为干净的动态 schema 配置。",
            beatLine: "删除静态文件可消除技术架构债。",
            action: "应用语法高亮"
          },
          {
            id: 3,
            title: "无样板代码签核",
            body: "编译台账通过并干净编译，认证为 100% 无样板代码包。",
            beatLine: "认证编译确保最佳软件可维护性。",
            action: "盖章认证签核"
          }
        ]
      }
    ]
  },
  "05": {
    name: "物件隐喻主视觉",
    theme: "上下文驱动交接包",
    densityLabel: "极简 Keynote",
    scenes: [
      {
        id: 1,
        title: "组装交接 Payload",
        lede: "让 Agent 上手需要结构化、完整的工作区上下文打包。",
        beats: [
          {
            id: 1,
            title: "Payload 编译",
            body: "我们将活跃数据库 schema、API 规格和 linter 定义收集到单个 JSON payload 中。",
            beatLine: "完整上下文 payload 不留下任何投机猜测空间。",
            action: "放下 payload"
          },
          {
            id: 2,
            title: "边界约束锁定",
            body: "非目标和白名单目录路径被锁定，防止越界文件写入。",
            beatLine: "约束锁防止修改指定工作区之外的内容。",
            action: "保护边界"
          },
          {
            id: 3,
            title: "自动验证设置",
            body: "Playwright 测试配置被打包，允许即时、实时的编辑检查。",
            beatLine: "验证工具确保每次保存后的代码行为正确。",
            action: "锁上公文包"
          }
        ]
      },
      {
        id: 2,
        title: "解包 Payload",
        lede: "Agent 如何提取、验证并初始化已打包的交接 payload。",
        beats: [
          {
            id: 1,
            title: "目录路径映射",
            body: "Agent 映射目录树，验证路径格式并检查写入权限。",
            beatLine: "路径映射避免文件创建期间出错。",
            action: "解包文件"
          },
          {
            id: 2,
            title: "增量 dry-run",
            body: "编辑以虚拟文件流形式应用，让物理文件保持不变。",
            beatLine: "Dry-run 确保系统在修改磁盘前可以编译。",
            action: "运行 dry-run"
          },
          {
            id: 3,
            title: "原子文件下发",
            body: "验证后的缓冲区以原子方式写入磁盘，维护干净的 git 变更历史。",
            beatLine: "原子提交让变更保持安全和干净。",
            action: "提交变更"
          }
        ]
      },
      {
        id: 3,
        title: "验证测试流水线",
        lede: "在更新后的 payload 缓冲区上运行自动 linter 和测试检查。",
        beats: [
          {
            id: 1,
            title: "静态语法检查",
            body: "Linter 引擎分析文件格式，立即捕获拼写错误和模式违规。",
            beatLine: "Linter 在毫秒内捕获简单语法错误。",
            action: "运行 linter"
          },
          {
            id: 2,
            title: "Playwright 浏览器检查",
            body: "Headless 浏览器启动并执行 E2E 视觉流程，验证 UI 组件。",
            beatLine: "E2E 测试验证跨视图的用户可见行为。",
            action: "运行 playwright"
          },
          {
            id: 3,
            title: "验证批准绿灯",
            body: "所有测试成功通过。代码变更已验证为稳定且可投产。",
            beatLine: "绿色测试建立高保真部署信心。",
            action: "亮绿灯"
          }
        ]
      },
      {
        id: 4,
        title: "风险隔离协议",
        lede: "将实验性逻辑隔离在沙箱文件路径中，以保护父系统。",
        beats: [
          {
            id: 1,
            title: "沙箱文件操作",
            body: "新文件写入隔离的临时目录，绕过主路径。",
            beatLine: "沙箱目录保护主目录免受实验性代码影响。",
            action: "沙箱路径"
          },
          {
            id: 2,
            title: "受限命令执行",
            body: "只有白名单内、非破坏性的 CLI 工具允许在沙箱中执行。",
            beatLine: "命令阻断可防止未授权系统访问。",
            action: "限制 CLI"
          },
          {
            id: 3,
            title: "审计日志追踪",
            body: "每条 shell 命令和每次文件写入都会动态记录到不可变审计台账。",
            beatLine: "已审计执行确保 Agent 操作可透明追踪。",
            action: "追踪审计"
          }
        ]
      },
      {
        id: 5,
        title: "交接合规台账",
        lede: "高细节仪表盘，映射 payload 变量、linter 日志和合规状态。",
        beats: [
          {
            id: 1,
            title: "集成检查台账",
            body: "验证测试覆盖率索引保持高于强制 85% 要求。",
            beatLine: "高密度台账保护部署稳定性。",
            action: "渲染台账表头"
          },
          {
            id: 2,
            title: "代码重构压缩",
            body: "冗余调试行被删除，替换为干净且已验证的代码块。",
            beatLine: "压缩提交维护清晰、可评审的 git 历史。",
            action: "应用语法高亮"
          },
          {
            id: 3,
            title: "最终交接签核",
            body: "所有合规标准已检查。Payload 已签名并获准上线发布。",
            beatLine: "认证交接保证零回归的软件部署流水线。",
            action: "盖章认证签核"
          }
        ]
      }
    ]
  },
  "06": {
    name: "黑板粉笔讲解",
    theme: "量子计算第一性原理",
    densityLabel: "极简 Keynote",
    scenes: [
      {
        id: 1,
        title: "第一性原理：叠加态",
        lede: "量子比特并不存在于二进制 0 或 1；它们跨越连续相位球。",
        beats: [
          {
            id: 1,
            title: "波函数状态 |Ψ⟩",
            body: "量子比特的物理状态是组合 α|01⟩ + β|10⟩ 振幅的向量。",
            beatLine: "信息在发生物理测量前保持连续。",
            action: "描绘波函数"
          },
          {
            id: 2,
            title: "相位旋转门",
            body: "微波脉冲门沿 Bloch Sphere 表面旋转状态向量。",
            beatLine: "微波门以纳秒级计时精度旋转向量。",
            action: "绘制干涉"
          },
          {
            id: 3,
            title: "相干衰减警告",
            body: "与周围环境交互会让波函数坍缩回静态状态。",
            beatLine: "隔离对于在处理运行期间维持相干性至关重要。",
            action: "高亮衰减"
          }
        ]
      },
      {
        id: 2,
        title: "纠缠与 Bell 态",
        lede: "将不同物理量子比特连接成一个共享量子系统。",
        beats: [
          {
            id: 1,
            title: "CNOT 耦合门",
            body: "应用 controlled-NOT 门，将目标量子比特状态绑定到控制相位。",
            beatLine: "耦合门创建绝对状态关联。",
            action: "描绘耦合"
          },
          {
            id: 2,
            title: "非局域关联检查",
            body: "测量 Qubit 1 会让 Qubit 2 立即坍缩，即使跨越巨大的物理距离。",
            beatLine: "量子关联绕过经典光速边界。",
            action: "绘制 Bell 态"
          },
          {
            id: 3,
            title: "复合状态矩阵",
            body: "两个独立向量合并为单一的多维波系统。",
            beatLine: "纠缠系统在计算上不可分离。",
            action: "给矩阵上色"
          }
        ]
      },
      {
        id: 3,
        title: "量子干涉路径",
        lede: "相长与相消波路径重叠，塑造正确计算结果。",
        beats: [
          {
            id: 1,
            title: "酉相位偏移",
            body: "相位偏移门旋转目标路径，精确调整坐标角度。",
            beatLine: "相位经过调整，用于引导正确答案选择。",
            action: "偏移相位"
          },
          {
            id: 2,
            title: "相消抵消",
            body: "错误路径被设计为通过相消波干涉互相抵消。",
            beatLine: "抵消会把错误答案概率降为零。",
            action: "抵消波形"
          },
          {
            id: 3,
            title: "相长峰值锁定",
            body: "正确计算路径触达相长峰值，锁定输出结果。",
            beatLine: "高振幅峰值确保读出准确性。",
            action: "锁定峰值"
          }
        ]
      },
      {
        id: 4,
        title: "量子傅里叶变换（QFT）",
        lede: "使用并行相位扫描提取量子波寄存器中的隐藏周期性。",
        beats: [
          {
            id: 1,
            title: "寄存器初始化",
            body: "量子比特组织成统一寄存器，扩展并行计算状态路径。",
            beatLine: "寄存器提供指数级扩展的数据容量。",
            action: "初始化寄存器"
          },
          {
            id: 2,
            title: "相位扫描旋转",
            body: "级联受控相位门将寄存器值旋转到频域。",
            beatLine: "相位扫描在纳秒内将信号映射到频率。",
            action: "运行相位扫描"
          },
          {
            id: 3,
            title: "周期性提取",
            body: "隐藏波周期峰值出现，解决复杂质因数分解算法。",
            beatLine: "周期性检测是 Shor 算法背后的核心加速器。",
            action: "提取峰值"
          }
        ]
      },
      {
        id: 5,
        title: "量子计算台账",
        lede: "高细节仪表盘，映射门计数、相位容差和相干诊断。",
        beats: [
          {
            id: 1,
            title: "保真度分析台账",
            body: "验证单次读出保真度指标保持高于 99.9% 目标阈值。",
            beatLine: "实时指标防止校准漂移失效。",
            action: "渲染台账表头"
          },
          {
            id: 2,
            title: "容错错误码",
            body: "不需要的辅助量子比特状态被修剪，将物理量子比特压缩成逻辑块。",
            beatLine: "纠错码保护算法免受噪声影响。",
            action: "应用语法高亮"
          },
          {
            id: 3,
            title: "量子编译签核",
            body: "算法流水线已验证。相位旋转干净编译到硬件驱动。",
            beatLine: "认证编译保证物理执行成功。",
            action: "盖章认证签核"
          }
        ]
      }
    ]
  },
  "07": {
    name: "街机 Boss 战",
    theme: "遗留代码库重构 Boss",
    densityLabel: "极简 Keynote",
    scenes: [
      {
        id: 1,
        title: "遗留代码库 Boss 战！",
        lede: "一个巨型单体控制器阻塞生产发布流水线。👾",
        beats: [
          {
            id: 1,
            title: "意大利面单体出现",
            body: "15,000 行意大利面代码、全局可变状态和未文档化库。HP: 100%。",
            beatLine: "警告：进入不稳定的遗留代码区域。",
            action: "遭遇 Boss"
          },
          {
            id: 2,
            title: "重构打击",
            body: "将单体类拆解为隔离的纯函数，造成重击。HP: 45%。",
            beatLine: "重构对遗留结构造成暴击伤害。",
            action: "攻击 Boss"
          },
          {
            id: 3,
            title: "Boss 被击败！",
            body: "单体被压缩为 3 个模块化组件，流水线已清空。HP: 0%。",
            beatLine: "单体已清除！代码库健康度：100%。",
            action: "击败 Boss"
          }
        ]
      },
      {
        id: 2,
        title: "依赖地牢",
        lede: "深入传递依赖洞穴，寻找嵌套 bug 藏身处。🕸️",
        beats: [
          {
            id: 1,
            title: "循环 import 陷阱",
            body: "Module A import Module B，Module B 又 import Module A。执行会无限挂起在循环中。",
            beatLine: "循环依赖会锁死编译引擎。",
            action: "揭示陷阱"
          },
          {
            id: 2,
            title: "注入接口护盾",
            body: "在模块之间放置共享接口契约，解耦直接 import。",
            beatLine: "护盾契约立即解决依赖循环。",
            action: "屏蔽循环"
          },
          {
            id: 3,
            title: "地牢已清除！",
            body: "解耦后的模块并行编译，将编译时间减少 65%。",
            beatLine: "地牢已清除！干净编译路径已解锁。",
            action: "清除地牢"
          }
        ]
      },
      {
        id: 3,
        title: "遗留 DB 巨龙",
        lede: "击败未加索引查询巨龙，恢复数据库响应指标。",
        beats: [
          {
            id: 1,
            title: "表扫描吐息",
            body: "未加索引查询请求触发全表顺序扫描，耗时超过 1500ms。",
            beatLine: "表扫描消耗服务器容量，导致延迟尖峰。",
            action: "生成巨龙"
          },
          {
            id: 2,
            title: "B-Tree 索引剑斩",
            body: "将自定义组合式 B-Tree 索引键直接注入搜索条件列。",
            beatLine: "索引将查找时间削减到对数尺度。",
            action: "斩击索引"
          },
          {
            id: 3,
            title: "巨龙已斩杀！",
            body: "数据库查询在低于 2ms 内完成。连接池健康度恢复正常。",
            beatLine: "巨龙已击败！高速数据库性能已锁定。",
            action: "斩杀巨龙"
          }
        ]
      },
      {
        id: 4,
        title: "内存泄漏法师",
        lede: "扑灭让 Node heap 膨胀并越过容器边界的内存泄漏法师。",
        beats: [
          {
            id: 1,
            title: "Heap 膨胀陷阱",
            body: "内存消耗线性增长并超过 85% 安全上限，触发告警信号。",
            beatLine: "Heap 泄漏会导致容器 OOM 崩溃。",
            action: "揭示法师"
          },
          {
            id: 2,
            title: "Heapdump 分析法术",
            body: "获取动态 heap 内存快照，定位代码中被保留的对象根。",
            beatLine: "快照可在数秒内定位内存泄漏。",
            action: "施放 heapdump"
          },
          {
            id: 3,
            title: "清除未用引用",
            body: "垃圾回收清除僵尸闭包。内存消耗降至平坦基线。",
            beatLine: "清除引用可保障运行中集群的可靠性。",
            action: "清理内存"
          }
        ]
      },
      {
        id: 5,
        title: "重构征服台账",
        lede: "高细节摘要仪表盘，追踪 Boss 清除时间、内存节省和删除行数。",
        beats: [
          {
            id: 1,
            title: "战役统计追踪",
            body: "验证总删除行数指标超过 5000 行里程碑。",
            beatLine: "删除代码是终极重构成就。",
            action: "渲染台账表头"
          },
          {
            id: 2,
            title: "意大利面移除代码 diff",
            body: "冗余类代码块被删除，替换为干净、纯粹、无状态的函数。",
            beatLine: "写更少的代码意味着更简单的架构可维护性。",
            action: "应用语法高亮"
          },
          {
            id: 3,
            title: "征服认证印章",
            body: "所有地牢指标已清除。所有测试绿色通过。发布获准进入生产部署。",
            beatLine: "认证重构交付可靠、高性能的系统。",
            action: "盖章认证签核"
          }
        ]
      }
    ]
  },
  "08": {
    name: "聚光灯引言海报",
    theme: "整洁代码哲学",
    densityLabel: "极简 Keynote",
    scenes: [
      {
        id: 1,
        title: "代码是写给人读的",
        lede: "计算机只关心机器指令；整洁代码是为人的心智而存在。",
        beats: [
          {
            id: 1,
            title: "可读性原则",
            body: "如果人类队友读起来吃力，这个软件就还不完整。优先明显，而不是炫技。",
            beatLine: "明显的代码可持续；炫技的代码是负债。",
            action: "淡入引言"
          },
          {
            id: 2,
            title: "明确意图",
            body: "不要把假设藏在嵌套捷径后面。变量名必须直喊自己的目的。",
            beatLine: "自文档化代码降低上手成本。",
            action: "聚焦聚光灯"
          },
          {
            id: 3,
            title: "零认知摩擦",
            body: "阅读整洁代码时，执行路径应该显而易见，逻辑流动且没有意外。",
            beatLine: "最小化认知负担是整洁设计的核心。",
            action: "强调文本"
          }
        ]
      },
      {
        id: 2,
        title: "隐藏状态的腐化",
        lede: "隐式可变状态是系统架构的安静破坏者。",
        beats: [
          {
            id: 1,
            title: "共享可变状态",
            body: "当远处模块修改同一份内存状态时，执行结果会变得非确定。",
            beatLine: "副作用未标记时，确定性就会丢失。",
            action: "调暗聚光灯"
          },
          {
            id: 2,
            title: "隔离变更",
            body: "后果必须局部化。把状态变更包裹在事务边界内。",
            beatLine: "隔离防止局部失败拖垮整个系统。",
            action: "瞄准激光"
          },
          {
            id: 3,
            title: "纯函数核心",
            body: "将复杂业务逻辑隔离在无状态函数中，把 IO 操作推到最外层 shell。",
            beatLine: "纯核心易测试、易追踪、也更可信。",
            action: "点亮中心"
          }
        ]
      },
      {
        id: 3,
        title: "小组件规则",
        lede: "将臃肿系统拆解为微小、单一职责函数。",
        beats: [
          {
            id: 1,
            title: "臃肿识别",
            body: "任何执行超过一个概念任务的类，都代表架构风险。",
            beatLine: "单一职责是模块化的基石。",
            action: "拆分块"
          },
          {
            id: 2,
            title: "提取扫描",
            body: "将辅助任务隔离到小型 helper 函数中，保持父接口干净。",
            beatLine: "小型 helper 函数易于跨模块复用。",
            action: "提取 helper"
          },
          {
            id: 3,
            title: "达成松耦合",
            body: "组件通过严格、最小接口通信，解耦实现细节。",
            beatLine: "松耦合支持无缝组件替换。",
            action: "解耦链接"
          }
        ]
      },
      {
        id: 4,
        title: "防御式编码护栏",
        lede: "设计在外层边界优雅失败的软件，以保护核心状态。",
        beats: [
          {
            id: 1,
            title: "即时边界验证",
            body: "传入输入在系统入口点立即验证，阻断坏结构。",
            beatLine: "早期验证防止坏输入污染内部数据库。",
            action: "审计边界"
          },
          {
            id: 2,
            title: "不可变状态护盾",
            body: "使用只读数据对象，防止下游意外修改状态。",
            beatLine: "不可变性保证执行路径中的状态稳定。",
            action: "应用护盾"
          },
          {
            id: 3,
            title: "安全兜底循环",
            body: "显式捕获异常，触发可预测的兜底路径，保护用户安全。",
            beatLine: "优雅错误恢复保障稳定用户体验。",
            action: "注入兜底"
          }
        ]
      },
      {
        id: 5,
        title: "整洁代码合规台账",
        lede: "高细节审计仪表盘，追踪认知复杂度、命名评分和测试健康度。",
        beats: [
          {
            id: 1,
            title: "认知复杂度检查",
            body: "验证嵌套深度限制保持在最多 3 层以下。",
            beatLine: "保持低复杂度可以保护未来开发速度。",
            action: "渲染台账表头"
          },
          {
            id: 2,
            title: "炫技代码清理",
            body: "复杂 hack 被删除，替换为干净、明显的语法循环。",
            beatLine: "明显的代码更容易调试和维护。",
            action: "应用语法高亮"
          },
          {
            id: 3,
            title: "设计合规签核",
            body: "所有整洁代码检查已通过。仓库干净编译，并获准发布。",
            beatLine: "认证整洁代码库保证长期产品成功。",
            action: "盖章认证签核"
          }
        ]
      }
    ]
  }
};
