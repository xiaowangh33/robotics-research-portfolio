(function () {
  "use strict";

  const storageKey = "portfolio-language";
  const originalNodes = new WeakMap();

  const zh = {
    "Robotics · Fall 2027 PhD": "机器人学 · 2027 年秋季博士申请",
    "Overview": "概览",
    "Wheel-leg": "轮足机器人",
    "Quadruped": "四足机器人",
    "Systems": "系统工程",
    "Proposed research": "拟议研究",
    "Other research": "其他研究",
    "Toggle navigation": "切换导航",
    "CONTACT": "联系",
    "Interested in reliable locomotion beyond simulation assumptions?": "想交流超越仿真假设的可靠运动控制吗？",
    "University of Science and Technology Beijing": "北京科技大学",
    "B.Eng. Robotics Engineering · expected 2027": "机器人工程学士 · 预计 2027 年毕业",
    "Research portfolio · project facts supported by retained hardware evidence and project records": "研究作品集 · 项目事实均由留存的硬件证据与项目记录支持",
    "Back to top ↑": "返回顶部 ↑",

    "ROBOTICS RESEARCH · REAL-TIME CONTROL · SIM2REAL": "机器人研究 · 实时控制 · 仿真到现实",
    "When timing slips,": "当时序发生偏移，",
    "the plant changes.": "被控对象也随之改变。",
    "I build locomotion systems at the boundary between learned policies, embedded control, and real hardware—and study what breaks when their assumptions stop agreeing.": "我在学习型策略、嵌入式控制与真实硬件的交界处构建运动系统，并研究当它们的假设不再一致时会出现什么问题。",
    "Start with hardware evidence ↓": "查看硬件证据 ↓",
    "Read the proposed direction": "阅读拟议方向",
    "FALL 2027 PHD FOCUS": "2027 年秋季博士研究方向",
    "Reliable, timing-aware control for legged and wheel-legged robots under model mismatch, stale sensing, actuation delay, jitter, and missed cycles.": "面向足式与轮足机器人的可靠、时序感知控制：应对模型失配、陈旧感知、执行延迟、抖动与漏周期。",
    "RESEARCH QUESTION / 01": "研究问题 / 01",
    "How can learned and model-based robot controllers remain reliable when real-world dynamics, sensing, actuation, and timing depart from the assumptions used in simulation and planning?": "当真实世界的动力学、感知、执行与时序偏离仿真和规划中的假设时，学习型与模型驱动的机器人控制器如何保持可靠？",
    "25 kg wheel-legged robot": "25 kg 轮足机器人",
    "Outdoor hardware deployment · 2026": "室外硬件部署 · 2026",
    "Real robot video / with controls": "真实机器人视频 / 可操作",
    "Wheel-legged platform": "轮足机器人平台",
    "Actuators · 12 joints + 4 wheels": "执行器 · 12 个关节 + 4 个车轮",
    "Learned locomotion policy": "学习型运动策略",
    "Per-motor CAN refresh": "单电机 CAN 刷新频率",
    "RESEARCH POSITION": "研究立场",
    "Reliability is a property of the whole loop.": "可靠性是整个闭环的属性。",
    "A policy may be correct for its simulator and still fail because the state is old, the action arrives late, the actuator model is wrong, or two devices disagree about which control epoch they belong to.": "策略可能对其仿真器是正确的，却仍会失败：状态已经过时、动作到达太晚、执行器模型有误，或两个设备对所属控制时段存在分歧。",
    "01 / MISMATCH": "01 / 失配",
    "Mismatch is structured.": "失配具有结构性。",
    "Mass, friction, actuator delay, joint offsets, static friction, gains, and coordinate conventions leave different signatures. Instrumentation should help distinguish them.": "质量、摩擦、执行器延迟、关节偏置、静摩擦、增益和坐标约定会留下不同特征；仪器化应帮助区分它们。",
    "02 / TIMING": "02 / 时序",
    "Timing is part of the plant.": "时序是被控对象的一部分。",
    "At 50 Hz policy inference over 500 Hz–2 kHz lower-level loops, observation age and action age alter the effective closed-loop dynamics.": "在 500 Hz–2 kHz 的底层回路之上以 50 Hz 推理策略时，观测与动作的时效会改变实际闭环动力学。",
    "03 / CONFIDENCE": "03 / 置信度",
    "Uncertainty should change behavior.": "不确定性应改变行为。",
    "A controller needs more than a point prediction. Calibrated confidence could determine when to continue, slow down, replan, or choose a lower-risk action.": "控制器需要的不只是点预测。经校准的置信度可决定何时继续、减速、重新规划或选择风险更低的动作。",
    "CORE HARDWARE WORK": "核心硬件工作",
    "Two robots. One continuous research problem.": "两台机器人，一个连续的研究问题。",
    "The projects are presented as a sequence: first, make distributed RL locomotion survive physical disturbances; then, trace model and actuator mismatch through a faster EtherCAT torque-control stack.": "这些项目构成一个序列：先让分布式强化学习运动控制经受住物理扰动，再通过更快的 EtherCAT 力矩控制栈追踪模型和执行器失配。",
    "CORE PROJECT 01": "核心项目 01",
    "May–Aug 2026": "2026 年 5–8 月",
    "25 kg wheel-leg RL Sim2Real": "25 kg 轮足机器人强化学习仿真到现实",
    "From simulation-stable PPO to real standing, rolling locomotion, stair behavior, and kick recovery through dynamics randomization, multi-rate integration, and observation-freshness safeguards.": "通过动力学随机化、多速率集成与观测新鲜度保障，将仿真中稳定的 PPO 策略部署为真实的站立、滚动运动、爬楼梯和受踢恢复。",
    "Hardware verified": "硬件已验证",
    "Dual MCU": "双 MCU",
    "CORE PROJECT 02": "核心项目 02",
    "Sep 2025–Jun 2026": "2025 年 9 月–2026 年 6 月",
    "55 kg quadruped EtherCAT Sim2Real": "55 kg 四足机器人 EtherCAT 仿真到现实",
    "A complete software and control path from an RL policy to 12 Profile-Torque drives, with diagnosis centered on actuator delay, static friction, model parameters, and desired-versus-measured joint motion.": "从强化学习策略到 12 个 Profile Torque 驱动器的完整软件和控制路径；诊断重点包括执行器延迟、静摩擦、模型参数及期望/实测关节运动。",
    "Torque control": "力矩控制",
    "2 kHz bus": "2 kHz 总线",
    "THE EVIDENCE CHAIN": "证据链",
    "The research direction grew out of deployment work—not a detached topic choice.": "研究方向源于部署工作，而非脱离实践的选题。",
    "OBSERVED": "观察到",
    "Simulation success did not identify the hardware failure mode.": "仿真成功并不能识别硬件失效模式。",
    "Oscillation after impact, delayed joint response, static friction, and command/measurement mismatch looked different on the machine than in the nominal model.": "碰撞后的振荡、关节响应延迟、静摩擦以及命令/测量失配，在真实机器上呈现的方式与标称模型不同。",
    "INSTRUMENTED": "已仪器化",
    "The communication path became part of the experiment.": "通信路径成为实验的一部分。",
    "Timestamped epochs, shared-memory interfaces, desired/measured logging, motor-feedback freshness, and explicit policy tensor contracts made failures traceable.": "带时间戳的时段、共享内存接口、期望/实测日志、电机反馈新鲜度与明确的策略张量约定，让故障可以追溯。",
    "REFRAMED": "重新定义",
    "Delay and jitter should become state, not hidden noise.": "延迟和抖动应成为状态，而不是隐藏噪声。",
    "The next question is whether a short-horizon predictor can estimate both current state and confidence, then let RL or MPC respond to the risk.": "下一个问题是：短时域预测器能否同时估计当前状态和置信度，再让强化学习或 MPC 对风险作出响应。",
    "PROPOSED RESEARCH · NOT COMPLETED WORK": "拟议研究 · 尚未完成的工作",
    "Timing-aware state prediction and confidence for RL/MPC.": "面向 RL/MPC 的时序感知状态预测与置信度。",
    "Estimate a short-horizon distribution over the robot state from recent observations, commands, action history, and timing metadata—then use calibrated uncertainty to change control decisions under stale sensing and delayed actuation.": "基于近期观测、命令、动作历史和时序元数据估计机器人状态的短时域分布，再利用经校准的不确定性，在感知陈旧和执行延迟下改变控制决策。",
    "See hypothesis, method, and evaluation →": "查看假设、方法与评估 →",
    "RESEARCH FIT": "研究契合度",
    "ORL is a particularly strong fit because its work treats locomotion as a coupled problem in dynamics, optimization, adaptation, and physical failure—not as policy inference in isolation.": "ORL 非常契合我的研究兴趣，因为该实验室将运动控制视为动力学、优化、自适应和物理失效相互耦合的问题，而非孤立的策略推理。",
    "Personalized for Christian Hubicki / ORL. This module is isolated from the project evidence so the portfolio remains reusable for other PhD applications.": "本模块为 Christian Hubicki / ORL 定制，并与项目证据隔离，因此作品集仍可用于其他博士申请。",
    "Read the specific research connections →": "查看具体研究关联 →",

    "CORE PROJECT 01 · REAL LOCOMOTION": "核心项目 01 · 真实运动控制",
    "25 kg wheel-legged robot: RL Sim2Real across a distributed control stack.": "25 kg 轮足机器人：跨分布式控制栈的强化学习仿真到现实。",
    "A locomotion policy was only one component. The deployed system had to maintain consistent state, action, and timing semantics across Linux, shared memory, two microcontrollers, four CAN buses, and 16 actuators.": "运动策略只是其中一个组件。部署后的系统必须在 Linux、共享内存、两个微控制器、四条 CAN 总线和 16 个执行器之间保持一致的状态、动作和时序语义。",
    "Period": "周期",
    "May–August 2026": "2026 年 5–8 月",
    "My role": "我的职责",
    "Control stack, RL training, deployment, and Sim2Real diagnosis": "控制栈、强化学习训练、部署与仿真到现实诊断",
    "Platform": "平台",
    "25 kg · 16 DoF wheel-legged robot": "25 kg · 16 自由度轮足机器人",
    "Status": "状态",
    "Hardware standing, locomotion, stairs, and disturbance recovery": "硬件站立、运动、上下楼梯与扰动恢复",
    "Hardware evidence.": "硬件证据。",
    "External-disturbance test after expanding the randomization envelope and retuning deployment behavior.": "扩大随机化范围并重新调整部署行为后的外部扰动测试。",
    "Original project video · 2026": "原始项目视频 · 2026",
    "THE DEPLOYMENT PROBLEM": "部署问题",
    "Stable in simulation did not mean recoverable after a real impact.": "仿真中稳定，并不意味着真实碰撞后能恢复。",
    "The first hardware policy could stand and move, but an external kick produced growing oscillation and eventual loss of balance. The useful question was not “does PPO work?” It was which unmodeled effect—contact variation, motor response, gains, body properties, or control timing—was pushing the real closed loop outside the trained distribution.": "第一版硬件策略能站立和运动，但外部踢击会导致振荡加剧，最终失去平衡。关键问题不是“PPO 是否有效”，而是哪种未建模因素——接触变化、电机响应、增益、机身属性或控制时序——把真实闭环推到了训练分布之外。",
    "I broadened dynamics randomization and disturbance exposure, then redeployed through the same verified interface. The retained training configuration includes randomized mass, center of mass, friction, actuator gains, reset state, persistent force/torque offsets, and impulse-like pushes. Action and proprioceptive latency are randomized over zero to five policy steps.": "我扩大了动力学随机化和扰动暴露范围，再通过同一经验证接口重新部署。留存的训练配置包括随机质量、质心、摩擦、执行器增益、重置状态、持续的力/力矩偏置及脉冲式推力；动作和本体感觉延迟在零到五个策略步之间随机化。",
    "The result shown above is qualitative hardware evidence of kick recovery. No unrecorded success rate or robustness percentage is claimed.": "上方结果是受踢恢复的定性硬件证据；未声明任何未经记录的成功率或鲁棒性百分比。",
    "Behavior": "行为",
    "Standing, wheeled locomotion, stair ascent/descent, and disturbance recovery on hardware.": "在硬件上实现站立、轮式运动、上下楼梯与扰动恢复。",
    "Policy": "策略",
    "PPO trained in Isaac Lab / RSL-RL and exported to ONNX.": "在 Isaac Lab / RSL-RL 中训练的 PPO，并导出为 ONNX。",
    "Interface": "接口",
    ", explicitly matched in training and deployment code.": "，在训练和部署代码中显式匹配。",
    "MULTI-RATE ARCHITECTURE": "多速率架构",
    "One control loop, five timing domains.": "一个控制环路，五个时序域。",
    "The deployed path separates policy inference from the higher-rate transport and motor loops. Frequencies below are taken from the archived configuration and source comments.": "部署路径将策略推理与更高频率的传输和电机回路分离。下列频率来自归档配置与源码注释。",
    "ONNX policy": "ONNX 策略",
    "Observation construction, state machine, and 16-D action output.": "观测构建、状态机与 16 维动作输出。",
    "Linux bridge": "Linux 桥接",
    "Shared-memory exchange and dual-device coordination.": "共享内存交换与双设备协调。",
    "MCU service": "MCU 服务",
    "WDP4 transport, local command/feedback handling, and watchdog logic.": "WDP4 传输、本地命令/反馈处理与看门狗逻辑。",
    "Motor refresh": "电机刷新",
    "Per-motor CAN command/feedback across four 1 Mbps buses.": "通过四条 1 Mbps 总线进行单电机 CAN 命令/反馈。",
    "Hybrid actuation": "混合驱动",
    "12 joint-position actions and 4 wheel-velocity actions.": "12 个关节位置动作和 4 个车轮速度动作。",
    "TIMING AS A SAFETY-RELEVANT SIGNAL": "作为安全相关信号的时序",
    "The code already needed an operational definition of “current.”": "代码已经需要“当前”的可操作定义。",
    "Two microcontrollers cannot be merged safely just because both packets arrived. The Linux bridge pairs feedback from the same ": "不能仅因两个数据包都到达，就安全合并两个微控制器的数据。Linux 桥接程序配对来自同一 ",
    " epoch, checks local sample age and USB arrival skew, and stops rather than combining incompatible state.": " 时段的反馈，检查本地样本年龄和 USB 到达偏差；不会组合不兼容状态，而是停止。",
    "EPOCH CONSISTENCY": "时段一致性",
    "Same observation sequence": "相同观测序列",
    "Feedback from the two devices is accepted as one robot observation only when it belongs to the same logical epoch.": "仅当两个设备的反馈属于同一逻辑时段时，才被接受为一个机器人观测。",
    "FRESHNESS BOUNDS": "新鲜度边界",
    "Age and skew checks": "年龄与偏差检查",
    "The archived bridge uses a 10 ms local-age bound and a 30 ms USB arrival-skew bound for paired feedback.": "归档桥接程序对配对反馈采用 10 ms 本地年龄上限和 30 ms USB 到达偏差上限。",
    "FAIL-CLOSED": "故障即停",
    "No common state, no continued motion": "没有共同状态，就不继续运动",
    "If a common observation cannot be formed for 500 ms, the system latches a stop. Per-motor feedback also has its own stale-data handling.": "若 500 ms 内无法形成共同观测，系统将锁定停止；每个电机的反馈也有自己的陈旧数据处理。",
    "SOURCE-TRACEABLE EVIDENCE": "可追溯源码证据",
    "Claims that can be followed from model contract to motor transport.": "可从模型约定追溯到电机传输的主张。",
    "TRAINING CONFIGURATION": "训练配置",
    "Latency is sampled as complete delayed packets.": "延迟以完整的延迟数据包采样。",
    "Archived action and proprioception terms retain a short FIFO and select a delayed policy step, preserving a coherent vector instead of independently corrupting scalar entries.": "归档动作与本体感觉项保留短 FIFO，并选择一个延迟的策略步，从而保持向量一致性，而不是分别破坏标量条目。",
    "DEPLOYMENT MODEL": "部署模型",
    "Exported tensor dimensions are explicit.": "导出的张量维度明确。",
    "The ONNX contract is ": "ONNX 约定为 ",
    "; the deployment state machine constructs the same observation ordering used by training.": "；部署状态机构建与训练相同的观测排序。",
    "COMMUNICATION LAYER": "通信层",
    "Four CAN buses distribute 16 actuators.": "四条 CAN 总线分配 16 个执行器。",
    "The design documentation estimates bus utilization per channel and uses dual STM32F407 controllers rather than hiding transport behind a single nominal “real-time” label.": "设计文档估计各通道的总线利用率，采用双 STM32F407 控制器，而不是用单一的“实时”标签掩盖传输问题。",
    "HARDWARE MEDIA": "硬件媒体",
    "Nominal locomotion and recovery are separately documented.": "标称运动与恢复分别记录。",
    "Outdoor locomotion and short disturbance tests are retained as raw project videos, allowing behavior to be reviewed without an invented aggregate metric.": "室外运动和短时扰动测试以原始项目视频留存，使行为可在不虚构汇总指标的情况下审阅。",
    "OUTDOOR DEPLOYMENT": "室外部署",
    "Locomotion beyond the training scene.": "超越训练场景的运动控制。",
    "The outdoor video records the platform on real pavement and grass. It is included as direct evidence, not as a claim of exhaustive terrain generalization.": "室外视频记录了平台在真实路面和草地上的表现；它作为直接证据展示，而非宣称穷尽的地形泛化能力。",
    "Continue to the 55 kg EtherCAT quadruped →": "继续查看 55 kg EtherCAT 四足机器人 →",
    "Outdoor wheel-legged locomotion.": "室外轮足运动。",
    "Hardware video · 2026": "硬件视频 · 2026",

    "CORE PROJECT 02 · ETHERCAT TORQUE CONTROL": "核心项目 02 · ETHERCAT 力矩控制",
    "55 kg quadruped: tracing RL Sim2Real through actuation and timing.": "55 kg 四足机器人：从驱动与时序追踪强化学习仿真到现实。",
    "The quadruped extended the same reliability question into a heavier machine with 12 EtherCAT drives, Profile Torque mode, and a 2 kHz communication loop beneath the learned policy.": "该四足机器人将同一可靠性问题延伸至一台更重的机器：配备 12 个 EtherCAT 驱动器、Profile Torque 模式，并在学习型策略之下运行 2 kHz 通信回路。",
    "September 2025–June 2026": "2025 年 9 月–2026 年 6 月",
    "Software and control stack, RL deployment, and mismatch diagnosis": "软件与控制栈、强化学习部署与失配诊断",
    "55 kg · 12-actuator quadruped": "55 kg · 12 执行器四足机器人",
    "Hardware walking and obstacle behavior documented": "硬件行走与越障行为已有记录",
    "Recorded quadruped locomotion after model/interface and lower-level control iteration.": "经过模型/接口与底层控制迭代后记录的四足机器人运动。",
    "WHY THIS PROJECT MATTERED": "该项目的重要性",
    "A successful simulator rollout does not tell you which physical assumption will fail first.": "仿真器中成功运行，并不会告诉你哪项物理假设会最先失效。",
    "I developed the software path from a learned locomotion policy to the EtherCAT hardware interface. During deployment, the central work shifted from policy training to diagnosis: model parameter error, actuator response delay, static friction, high-gain PD dynamics, and differences between the simulator’s actuation assumptions and the real drive chain.": "我开发了从学习型运动策略到 EtherCAT 硬件接口的软件路径。部署期间，核心工作从策略训练转向诊断：模型参数误差、执行器响应延迟、静摩擦、高增益 PD 动力学，以及仿真器驱动假设与真实驱动链之间的差异。",
    "Desired and measured joint trajectories were recorded to make that gap observable. I used those traces to revise the model/interface and add dynamics compensation before returning to hardware tests. This is the part of Sim2Real that most influenced my research direction: reliability depends on knowing whether an error came from the robot, the estimator, the action path, or the schedule.": "记录期望和实测的关节轨迹，使这一差距可观察。我用这些轨迹修订模型/接口并加入动力学补偿，然后再回到硬件测试。这是最影响我研究方向的仿真到现实部分：可靠性取决于能否知道误差来自机器人、估计器、动作路径还是时间表。",
    "Hardware walking and obstacle behavior, supported by retained videos and the latest CV.": "硬件行走与越障行为，由留存视频和最新简历支持。",
    "Actuation": "驱动",
    "12 EtherCAT drives in CiA-402 Profile Torque mode.": "12 个运行于 CiA-402 Profile Torque 模式的 EtherCAT 驱动器。",
    " at approximately 50 Hz.": "，频率约为 50 Hz。",
    "CONTROL PATH": "控制路径",
    "Policy, joint control, and fieldbus operate at different rates.": "策略、关节控制与现场总线以不同频率运行。",
    "The rate hierarchy is explicit in the archived hardware-interface source. That hierarchy is also why delay and jitter cannot be reduced to a single fixed parameter.": "归档的硬件接口源码明确了速率层级；这也说明为什么不能将延迟和抖动归结为一个固定参数。",
    "PPO policy": "PPO 策略",
    "45-D proprioceptive observation and command input.": "45 维本体感觉观测与命令输入。",
    "PD recompute": "PD 重计算",
    "Position-derived torque command with joint-specific mapping.": "基于位置的力矩命令，并采用关节特定映射。",
    "SOEM EtherCAT": "SOEM EtherCAT",
    "PDO exchange and CiA-402 drive state management.": "PDO 交换与 CiA-402 驱动状态管理。",
    "Profile Torque": "Profile Torque 模式",
    "Real actuators with delay, friction, saturation, and drive dynamics.": "具有延迟、摩擦、饱和与驱动器动力学的真实执行器。",
    "DIAGNOSTIC LOOP": "诊断闭环",
    "Failure became an instrumentation problem.": "失效成为一个仪器化问题。",
    "01 / OBSERVE": "01 / 观察",
    "Record desired and measured motion.": "记录期望与实测运动。",
    "Joint-level traces exposed lag, tracking shape, offsets, and axis-specific behavior that could not be inferred from body motion alone.": "关节级曲线揭示了仅从机身运动无法推断的滞后、跟踪形状、偏置和各轴特有行为。",
    "02 / LOCALIZE": "02 / 定位",
    "Separate model, actuator, and interface mismatch.": "区分模型、执行器与接口失配。",
    "Deployment checks covered coordinate maps and signs, model parameters, static friction, actuator delay, and the lower-level PD response.": "部署检查涵盖坐标映射与符号、模型参数、静摩擦、执行器延迟和底层 PD 响应。",
    "03 / ITERATE": "03 / 迭代",
    "Correct the model and compensate dynamics.": "修正模型并补偿动力学。",
    "The simulator/interface was revised, compensation was added where justified, and the same signal path was returned to hardware for verification.": "修订仿真器/接口，在有依据之处加入补偿，并将同一信号路径重新用于硬件验证。",
    "MEASURED JOINT EVIDENCE": "测量的关节证据",
    "PACE-based data collection made the lower-level loop visible.": "基于 PACE 的数据采集使底层回路可见。",
    "The project archive includes command-versus-measurement plots and synchronized data-collection video. They are shown as diagnostic evidence, without claiming an unverified summary error metric.": "项目归档包含命令/测量对比图和同步数据采集视频；它们作为诊断证据展示，不声明未经验证的汇总误差指标。",
    "Front-left leg command vs. measurement.": "左前腿命令与测量对比。",
    "Retained visualization from the deployment data archive.": "来自部署数据归档的留存可视化。",
    "PACE data collection.": "PACE 数据采集。",
    "Motion captured for joint-level diagnosis.": "用于关节级诊断的运动采集。",
    "WHAT THE ARCHIVE SUPPORTS": "归档所支持的内容",
    "A narrow, auditable claim is stronger than a polished but ambiguous one.": "狭窄且可审计的主张，比精致但含糊的主张更有力。",
    "The retained source includes several training configurations and exported-model iterations. I therefore claim only the hardware behaviors documented in the CV and media—not that every archived model file is interchangeable or deployment-ready.": "留存源码包含多个训练配置和导出模型迭代。因此我仅主张简历和媒体记录的硬件行为，而不称每个归档模型文件都可互换或可直接部署。",
    "SUPPORTED": "已支持",
    "Multi-rate EtherCAT hardware path": "多速率 EtherCAT 硬件路径",
    "Source-traceable policy, PD, SOEM/PDO, and drive-state logic plus recorded hardware locomotion.": "可追溯的策略、PD、SOEM/PDO 与驱动状态逻辑，及记录在案的硬件运动。",
    "NOT CLAIMED": "未声明",
    "Unrecorded performance percentages": "未经记录的性能百分比",
    "No invented success rate, tracking score, obstacle-clearance statistic, or latency number is presented.": "未展示虚构的成功率、跟踪分数、越障统计或延迟数值。",
    "RESEARCH BRIDGE": "研究桥梁",
    "From delay compensation to delay-aware belief.": "从延迟补偿到时延感知的状态信念。",
    "The next step is to estimate the effective current state and its uncertainty from timestamped history—then let the controller adapt its action or risk level when the communication and actuation path becomes unreliable.": "下一步是从带时间戳的历史中估计有效当前状态及其不确定性，再在通信和驱动路径变得不可靠时让控制器调整动作或风险水平。",
    "Read the proposed study →": "阅读拟议研究 →",
    "See supporting systems work →": "查看支持性系统工作 →",

    "SUPPORTING WORK · SYSTEMS AND DEPLOYMENT": "支持性工作 · 系统与部署",
    "Robotics below the policy—and outside the laboratory.": "策略之下、实验室之外的机器人系统。",
    "These projects support the core locomotion narrative in two ways: migrating a 20-motor control system onto Linux/ROS 2/EtherCAT, and deploying perception on a magnetic inspection robot in an operational hydropower environment.": "这些项目以两种方式支撑核心运动控制叙事：将 20 电机控制系统迁移至 Linux/ROS 2/EtherCAT，以及在运行中的水电环境里为磁吸巡检机器人部署感知系统。",
    "Focus": "重点",
    "Real-time integration and field variability": "实时集成与现场可变性",
    "Included": "包括",
    "Upper-limb/exoskeleton system · wall-climbing inspection robot": "上肢/外骨骼系统 · 爬壁巡检机器人",
    "Evidence rule": "证据准则",
    "Only source- or media-supported claims": "仅使用源码或媒体支持的主张",
    "SYSTEMS PROJECT / 01": "系统项目 / 01",
    "20-motor upper-limb control migration.": "20 电机上肢控制迁移。",
    "Ubuntu · ROS 2 · EtherCAT · Hardware integration": "Ubuntu · ROS 2 · EtherCAT · 硬件集成",
    "I migrated a 20-motor Windows-oriented control workflow toward Ubuntu and ROS 2, adapting EtherCAT master/slave communication and integrating a control card without native Linux support.": "我将面向 Windows 的 20 电机控制工作流迁移至 Ubuntu 和 ROS 2，适配 EtherCAT 主从通信，并集成一张缺乏原生 Linux 支持的控制卡。",
    "The value of the project was architectural: understanding what must remain deterministic when vendor interfaces, operating systems, bus configuration, and application software change together. It strengthened the fieldbus experience later used in quadruped deployment.": "该项目的价值在于架构：当厂商接口、操作系统、总线配置和应用软件同时变化时，理解哪些部分必须保持确定性。它加强了后续用于四足机器人部署的现场总线经验。",
    "20 motors": "20 个电机",
    "ROS 2 migration": "ROS 2 迁移",
    "Hardware media": "硬件媒体",
    "Hardware record.": "硬件记录。",
    "Motion of the integrated multi-motor system.": "集成多电机系统的运动。",
    "Original project video": "原始项目视频",
    "FIELD ROBOTICS PROJECT / 02": "现场机器人项目 / 02",
    "Magnetic wall-climbing inspection robot.": "磁吸爬壁巡检机器人。",
    "Field deployment · Visual inspection · Dataset and model comparison": "现场部署 · 视觉巡检 · 数据集与模型对比",
    "I worked on a visual inspection pipeline for a magnetic climbing robot and participated in field deployment at the Wudongde Hydropower Station. The setting introduced dust, vibration, illumination change, viewpoint shift, and limited access—conditions that make “works on a validation split” an incomplete definition of reliability.": "我参与了磁吸爬壁机器人的视觉巡检流水线，并在乌东德水电站参与现场部署。该环境引入粉尘、振动、光照变化、视角漂移和有限访问等因素，使“在验证集上有效”成为不完整的可靠性定义。",
    "The archive supports individual YOLOv11, RT-DETR, and related model runs plus field media. Because it does not contain a measured end-to-end benchmark for the combined inspection system, this page does not report an aggregate accuracy figure.": "归档支持 YOLOv11、RT-DETR 及相关模型的单独运行和现场媒体。由于不含组合巡检系统的端到端测量基准，本页不报告汇总准确率。",
    "Field verified": "现场已验证",
    "Hydropower inspection": "水电巡检",
    "Object detection": "目标检测",
    "FIELD MECHANICS": "现场力学",
    "Mobility remained a physical systems problem.": "机动性始终是物理系统问题。",
    "The robot’s ability to negotiate a right-angle transition is shown directly. For this portfolio, the field robot is not used to overstate perception performance; it demonstrates that sensing, adhesion, motion, and operating conditions must be evaluated together.": "视频直接展示机器人跨越直角过渡面的能力。本作品集不使用现场机器人来夸大感知性能；它证明感知、吸附、运动和运行条件必须一并评估。",
    "Inverted right-angle transition on hardware.": "硬件上的倒置直角过渡。",
    "WHY THESE PROJECTS BELONG": "这些项目为何相关",
    "They complete the reliability stack around locomotion.": "它们完善了运动控制周围的可靠性栈。",
    "PLATFORM SOFTWARE": "平台软件",
    "Operating-system and API migration": "操作系统和 API 迁移",
    "Control behavior depends on the software path that carries commands, not only the control law that generated them.": "控制行为取决于承载命令的软件路径，而不只取决于生成命令的控制律。",
    "REAL-TIME TRANSPORT": "实时传输",
    "EtherCAT integration": "EtherCAT 集成",
    "Fieldbus configuration, drive state, and update rate create physical consequences when they drift from the intended schedule.": "现场总线配置、驱动状态和更新速率一旦偏离预期时间表，就会产生物理后果。",
    "FIELD VARIABILITY": "现场可变性",
    "Deployment outside controlled scenes": "在受控场景之外部署",
    "Lighting, dust, vibration, traction, and access constraints change what can be sensed, verified, and recovered.": "光照、粉尘、振动、牵引力和访问限制会改变可感知、可验证和可恢复的内容。",
    "See how these experiences shape the proposed research →": "查看这些经历如何塑造拟议研究 →",
    "View PINN and alloy research →": "查看 PINN 与合金研究 →",

    "PROPOSED RESEARCH DIRECTION · NO RESULTS CLAIMED": "拟议研究方向 · 未声明结果",
    "TIMING IS PART OF THE PLANT": "时序是被控对象的一部分",
    "Short-horizon state prediction and calibrated confidence under delay, jitter, and missed cycles.": "在延迟、抖动和漏周期下的短时域状态预测与校准置信度。",
    "A proposed study of how an RL or MPC locomotion controller should update its belief—and its risk tolerance—when sensing, actuation, and computation no longer arrive on the nominal schedule.": "一项拟议研究：当感知、执行和计算不再按标称时间表到达时，强化学习或 MPC 运动控制器应如何更新其状态信念与风险容忍度。",
    "HYPOTHESIS": "假设",
    "Timing faults should be estimated as structured state uncertainty, not absorbed as anonymous noise.": "时序故障应被估计为结构化的状态不确定性，而非吸收为无名噪声。",
    "Legged and wheel-legged controllers often assume that observation ": "足式和轮足控制器通常假定观测 ",
    " and action ": " 与动作 ",
    " refer to the same current instant. Real systems violate this assumption: packets wait, sensors update asynchronously, computation time varies, and low-level loops may miss a cycle.": " 指向同一当前时刻。真实系统违背这一假设：数据包会等待、传感器异步更新、计算时间变化，底层回路也可能漏掉一个周期。",
    "I propose to infer a short-horizon predictive distribution over the effective current state using recent state estimates, issued commands, action history, timestamps, age-of-information, and missed-cycle counters. The controller would receive both a state estimate and calibrated confidence.": "我提出使用近期状态估计、已发出命令、动作历史、时间戳、信息年龄和漏周期计数器，推断有效当前状态的短时域预测分布。控制器将同时获得状态估计和经校准的置信度。",
    "The central test is whether this confidence signal improves graceful degradation: preserving useful motion when uncertainty is modest, while changing gait, speed, action magnitude, or planning risk when the estimate becomes unreliable.": "核心测试是该置信度信号能否改善渐进降级：在不确定性较小时保持有效运动，而在估计不可靠时改变步态、速度、动作幅值或规划风险。",
    "Concept only": "仅为概念",
    "No preliminary performance claim": "无初步性能主张",
    "FAILURE TAXONOMY": "失效分类",
    "Four timing failures that change the effective closed loop.": "改变有效闭环的四类时序失效。",
    "Observation delay": "观测延迟",
    "The controller acts on a state that was valid in the past; contact mode or body velocity may already have changed.": "控制器作用于过去有效的状态；接触模式或机身速度可能已发生变化。",
    "Action delay": "动作延迟",
    "The plant receives a command later than the policy assumes, changing phase and effective feedback gain.": "被控对象接收命令的时间晚于策略假设，改变了相位和有效反馈增益。",
    "Jitter": "抖动",
    "Variable inference, transport, and actuator timing prevents a fixed-delay compensator from matching every cycle.": "可变的推理、传输和执行器时序使固定延迟补偿器无法匹配每个周期。",
    "Missed cycles": "漏周期",
    "A held or skipped command changes the action history and may push the robot across a contact or stability boundary.": "保持或跳过的命令会改变动作历史，并可能使机器人越过接触或稳定性边界。",
    "PROPOSED METHOD": "拟议方法",
    "Predict, calibrate, then let confidence influence control.": "预测、校准，再让置信度影响控制。",
    "This is a research plan, not an implemented system. The blocks define the intended experiment and the interfaces that would need to be validated.": "这是研究计划，而非已实现系统。这些模块定义了拟议实验及需验证的接口。",
    "INPUT / 01": "输入 / 01",
    "Timestamped history": "带时间戳的历史",
    "Recent states, commands, action history, age-of-information, cycle duration, and missed-update indicators.": "近期状态、命令、动作历史、信息年龄、周期时长和漏更新指标。",
    "ESTIMATE / 02": "估计 / 02",
    "Short-horizon distribution": "短时域分布",
    "Predict the effective current or near-future state together with epistemic and/or aleatoric uncertainty.": "预测有效当前或近未来状态，并同时给出认知和/或随机不确定性。",
    "CALIBRATE / 03": "校准 / 03",
    "Reliable confidence": "可靠置信度",
    "Test whether predicted intervals match observed error under both in-distribution and shifted timing conditions.": "测试预测区间是否在分布内和发生时序漂移的条件下都与观测误差相匹配。",
    "CONTROL / 04": "控制 / 04",
    "RL or risk-aware MPC": "强化学习或风险感知 MPC",
    "Use state and confidence as policy context or within chance/risk constraints, while respecting compute deadlines.": "将状态和置信度作为策略上下文，或置于机会/风险约束中，同时遵守计算截止时间。",
    "EVALUATION PLAN": "评估计划",
    "Test recovery, worst cases, calibration, and added latency.": "测试恢复、最坏情况、校准与新增延迟。",
    "Average tracking alone is not enough. A timing-aware controller should be evaluated on whether it recognizes when its belief is weak and whether that recognition changes physical outcomes.": "仅有平均跟踪表现还不够。评估时序感知控制器时，应考察其是否能识别状态信念变弱，以及这种识别是否改变物理结果。",
    "PLATFORMS": "平台",
    "Begin in simulation, then validate on a wheel-legged or quadruped platform with instrumented policy, transport, and actuator timing.": "先在仿真中开始，再在对策略、传输和执行器时序进行仪器化的轮足或四足平台上验证。",
    "PERTURBATIONS": "扰动",
    "Controlled observation delay, action delay, variable jitter, bursty missed cycles, and combinations with mass/friction/actuator mismatch.": "受控的观测延迟、动作延迟、可变抖动、突发漏周期，以及它们与质量/摩擦/执行器失配的组合。",
    "BASELINES": "基线",
    "Domain-randomized PPO, recurrent policy, deterministic state predictor, fixed-delay compensation, and an MPC/RL controller without confidence input.": "域随机化 PPO、循环策略、确定性状态预测器、固定延迟补偿，以及没有置信度输入的 MPC/RL 控制器。",
    "PHYSICAL METRICS": "物理指标",
    "Fall or task success, tracking error, recovery time, intervention threshold, worst-case outcome, and degradation as timing faults grow.": "跌倒或任务成功、跟踪误差、恢复时间、干预阈值、最坏结果，以及随时序故障增长的性能退化。",
    "ESTIMATION METRICS": "估计指标",
    "Prediction error, interval coverage, calibration error, out-of-distribution detection, compute time, and additional closed-loop latency.": "预测误差、区间覆盖率、校准误差、分布外检测、计算时间和额外闭环延迟。",
    "ABLATIONS": "消融实验",
    "Remove timestamps, action history, missed-cycle counters, or confidence-conditioned control to identify which components matter.": "移除时间戳、动作历史、漏周期计数器或置信度条件控制，以识别关键组件。",
    "DESIGN CONSTRAINTS": "设计约束",
    "The estimator cannot solve timing failure by creating more timing failure.": "估计器不能通过制造更多时序故障来解决时序故障。",
    "REAL-TIME BUDGET": "实时预算",
    "Bound worst-case compute.": "限制最坏计算开销。",
    "Report not only average estimator runtime but its tail latency and how it interacts with policy/MPC deadlines.": "不仅报告估计器平均运行时间，还应报告其尾部延迟及其与策略/MPC 截止时间的相互影响。",
    "TIMESTAMP SEMANTICS": "时间戳语义",
    "Define when every signal was valid.": "定义每个信号何时有效。",
    "Sensor acquisition, estimator output, command issue, bus transmission, and actuator application should not share an ambiguous timestamp.": "传感器采集、估计器输出、命令发出、总线传输和执行器应用不应共享一个含糊的时间戳。",
    "CALIBRATION": "校准",
    "Confidence must predict error.": "置信度必须能预测误差。",
    "A numerical variance is only useful if it is calibrated under both nominal data and timing shifts not seen during training.": "数值方差只有在标称数据和训练中未见的时序变化下都得到校准时才有用。",
    "GRACEFUL DEGRADATION": "渐进降级",
    "Uncertainty must change action.": "不确定性必须改变动作。",
    "The system should expose a decision rule: continue, reduce speed, switch behavior, replan, or stop as uncertainty increases.": "系统应给出决策规则：不确定性增加时，继续、减速、切换行为、重新规划或停止。",
    "ADVISOR-SPECIFIC RESEARCH FIT": "导师特定研究契合度",
    "The intended contribution is narrow and testable: determine when timing uncertainty should change the controller’s belief, action, or risk tolerance, then validate the answer on real legged and wheel-legged hardware.": "拟议贡献聚焦且可测试：确定时序不确定性何时应改变控制器的状态信念、动作或风险容忍度，再在真实足式与轮足硬件上验证答案。",
    "Personalization target: Christian Hubicki, Optimal Robotics Laboratory, Florida State University. Project evidence remains independent of this replaceable fit profile.": "定制对象：佛罗里达州立大学 Optimal Robotics Laboratory 的 Christian Hubicki。项目证据与该可替换的契合度档案保持独立。",
    "WHY I CAN START THIS WORK": "我为何能开展此项工作",
    "The proposed question is new; the experimental habits are already in place.": "拟议问题是新的，但实验习惯已经具备。",
    "I have already worked across 50 Hz learned policies, shared-memory processes, dual-MCU synchronization, 500 Hz CAN motor refresh, 1 kHz joint-control computation, and a 2 kHz EtherCAT bus. I have debugged policies that were stable in simulation but unreliable under physical disturbances, delayed actuation, static friction, and model error.": "我已在 50 Hz 学习型策略、共享内存进程、双 MCU 同步、500 Hz CAN 电机刷新、1 kHz 关节控制计算和 2 kHz EtherCAT 总线上开展工作。我调试过在仿真中稳定、但在物理扰动、执行延迟、静摩擦和模型误差下不可靠的策略。",
    "What I have ": "我",
    " yet completed is the proposed probabilistic estimator, calibration study, or risk-aware RL/MPC integration. Those are the PhD research questions—not retroactive labels placed on earlier engineering work.": "尚未完成拟议的概率估计器、校准研究或风险感知 RL/MPC 集成。这些是博士阶段的研究问题，而非事后贴在早期工程工作上的标签。",
    "Review the wheel-leg evidence": "查看轮足证据",
    "Review the quadruped evidence": "查看四足证据",

    "Failure-adaptive and risk-aware control": "故障自适应与风险感知控制",
    "My proposed estimator turns timing faults—stale observations, delayed actions, jitter, and missed cycles—into an explicit uncertainty signal. That creates a concrete bridge to controllers that adapt when failure becomes more likely rather than merely tolerating a fixed disturbance envelope.": "我拟议的估计器将时序故障——陈旧观测、动作延迟、抖动和漏周期——转化为显式不确定性信号。这为控制器提供了具体桥梁：当失效更可能发生时进行自适应，而不只是容忍固定扰动范围。",
    "PaReMPC and fast model adaptation": "PaReMPC 与快速模型自适应",
    "PaReMPC points toward adaptation that remains inside a fast, physically structured control loop. I want to study whether short-horizon state prediction and calibrated confidence can update an RL or MPC controller without making the real-time schedule itself less reliable.": "PaReMPC 指向一种保持在快速、物理结构化控制环路内的自适应。我希望研究短时域状态预测和经校准置信度能否更新 RL 或 MPC 控制器，同时不降低实时调度本身的可靠性。",
    "Real-time optimization": "实时优化",
    "The estimator is only useful if its compute cost, timestamp semantics, and worst-case latency are part of the design. My experience with 50 Hz policies over 500 Hz–2 kHz lower-level loops makes this a systems question as much as an algorithmic one.": "估计器只有在计算代价、时间戳语义和最坏延迟都是设计一部分时才有用。我在 500 Hz–2 kHz 底层回路上运行 50 Hz 策略的经验，使这既是系统问题，也是算法问题。",
    "Hybrid locomotion and all-terrain UGVs": "混合运动与全地形 UGV",
    "A wheel-legged robot exposes discrete contact changes, continuous wheel motion, impacts, and changing traction in one platform. That makes ORL’s hybrid locomotion and all-terrain UGV work a natural setting for testing timing-aware prediction under real terrain transitions.": "轮足机器人在一个平台上呈现离散接触变化、连续车轮运动、碰撞和不断变化的牵引力。这使 ORL 的混合运动与全地形 UGV 工作成为在真实地形过渡下测试时序感知预测的天然场景。",

    "OTHER RESEARCH · PHYSICS AND DATA": "其他研究 · 物理与数据",
    "Research beyond robotics, kept in a supporting role.": "机器人学之外的研究，保持辅助角色。",
    "These projects demonstrate scientific modeling, full-cycle prediction, data augmentation, and manuscript collaboration. They complement—but do not replace—the hardware locomotion evidence at the center of this portfolio.": "这些项目展示了科学建模、全周期预测、数据增强和论文协作；它们补充但不替代本作品集核心的硬件运动控制证据。",
    "Project 01": "项目 01",
    "Time-varying PINN for furnace temperature prediction": "面向炉温预测的时变 PINN",
    "Project 02": "项目 02",
    "Deep-learning workflow for magnesium alloy design": "面向镁合金设计的深度学习工作流",
    "Authorship": "作者身份",
    "Second author on each manuscript, per current CV": "根据当前简历，每篇论文均为第二作者",
    "RESEARCH PROJECT / 01": "研究项目 / 01",
    "Time-varying PINN for furnace heating.": "面向加热炉的时变 PINN。",
    "Physics-informed neural networks · Heat transfer · Full-cycle prediction": "物理信息神经网络 · 传热 · 全周期预测",
    "I extended a static-snapshot PINN workflow into a time-varying prediction process over the full heating cycle and supported nonuniform heat-source conditions. The implementation combines a 2D finite-difference reference path with a PINN trained using PDE, initial-condition, boundary-condition, and reference losses.": "我将静态快照 PINN 工作流扩展为覆盖整个加热周期的时变预测过程，并支持非均匀热源条件。实现结合二维有限差分参考路径，以及使用 PDE、初始条件、边界条件和参考损失训练的 PINN。",
    "The portfolio does not attribute the manuscript’s broader optimization claims to the retained source where an implementation is not present. My contribution is limited to the dynamic prediction workflow described above.": "在未保留实现的情况下，本作品集不会将论文更广泛的优化主张归因于留存源码。我的贡献仅限于上述动态预测工作流。",
    "2D heat equation": "二维热方程",
    "Time-varying": "时变",
    "Second author": "第二作者",
    "RESEARCH PROJECT / 02": "研究项目 / 02",
    "Data-driven magnesium alloy design.": "数据驱动的镁合金设计。",
    "Data augmentation · Transformer · MLP · Stacking": "数据增强 · Transformer · MLP · Stacking",
    "For a small materials dataset, I worked on augmentation and regression models including a Transformer, MLP, and stacking workflow to predict yield strength, elongation, and ultimate tensile strength from composition and process variables.": "对于小型材料数据集，我参与了数据增强和回归模型工作，包括 Transformer、MLP 和 stacking 工作流，用于根据成分和工艺变量预测屈服强度、延伸率和抗拉强度。",
    "The manuscript contains a larger end-to-end design narrative. This page intentionally limits my personal contribution to components supported by the current CV and retained notebooks/scripts; it does not present unverified optimization code or experimental alloy results as my own implementation.": "论文包含更完整的端到端设计叙事。本页有意将个人贡献限制为当前简历和留存 notebook/脚本支持的组件；不将未经验证的优化代码或实验合金结果表述为我的个人实现。",
    "Small-data learning": "小数据学习",
    "VERIFIED CONTRIBUTION SCOPE": "经验证的贡献范围",
    "Data augmentation": "数据增强",
    "Transformer regression": "Transformer 回归",
    "MLP regression": "MLP 回归",
    "Stacking workflow": "Stacking 工作流",
    "Composition & process → mechanical-property prediction": "成分与工艺 → 力学性能预测",
    "MANUSCRIPT-LINKED WORK": "论文关联工作",
    "Research outputs, stated at the level currently verifiable.": "以当前可验证的程度陈述研究产出。",
    "Full author lists, English venue names, volume/pages, and persistent links are still needed before these entries should become formal citations.": "在这些条目成为正式引文之前，仍需补充完整作者列表、英文刊物名称、卷期/页码和持久链接。",
    "ACCEPTED · DETAILS TO CONFIRM": "已接收 · 细节待确认",
    "PINN-Based Material Temperature Forecasting and Heating-Furnace Curve Optimization": "基于 PINN 的材料温度预测与加热炉曲线优化",
    "English translation of the retained Chinese manuscript title.": "留存中文论文标题的英文翻译。",
    "Second author · dynamic PINN workflow": "第二作者 · 动态 PINN 工作流",
    "UNDER REVIEW": "审稿中",
    "Efficient Design of Magnesium Alloys with Superior Mechanical Properties Using Deep Learning": "利用深度学习高效设计高力学性能镁合金",
    "Title taken from the retained English manuscript draft.": "标题取自留存的英文论文草稿。",
    "Second author · data/model workflow": "第二作者 · 数据/模型工作流",
    "TRANSFER TO ROBOTICS": "迁移至机器人学",
    "Useful methods, but the research identity remains physical control.": "方法有用，但研究身份仍是物理控制。",
    "The PINN project trained me to encode governing structure and boundary conditions rather than rely only on labels. The alloy project trained me to be careful with small data, augmentation, validation, and model comparison.": "PINN 项目训练我编码控制结构和边界条件，而不是只依赖标签。合金项目训练我谨慎处理小数据、数据增强、验证与模型比较。",
    "For PhD research, I want to bring that discipline back to robotics: learned estimation and control that respects dynamics, timestamps, computational budgets, and uncertainty on real hardware.": "博士研究中，我希望将这种严谨带回机器人学：在真实硬件上尊重动力学、时间戳、计算预算与不确定性的学习型估计和控制。",
    "Return to the core robotics work →": "返回核心机器人工作 →"
  };

  const attributes = {
    "Wang Gufan portfolio home": "王古帆作品集首页",
    "Primary navigation": "主导航",
    "Wheel-legged robot field evidence": "轮足机器人现场证据",
    "25 kg wheel-legged robot during a disturbance test": "扰动测试中的 25 kg 轮足机器人",
    "55 kg quadruped robot in the laboratory": "实验室中的 55 kg 四足机器人",
    "Diagram of the dual upper-limb and lower-body robotic system": "双上肢与下肢机器人系统示意图",
    "Magnetic wall-climbing inspection robot at a hydropower facility": "水电设施中的磁吸爬壁巡检机器人",
    "Quadruped desired and measured front-left leg joint traces": "四足机器人左前腿期望与实测关节曲线",
    "Schematic of the verified alloy modeling contribution: augmentation, Transformer, MLP, and stacking": "经验证的合金建模贡献示意：数据增强、Transformer、MLP 与 stacking"
  };

  const documentText = {
    "Wang Gufan · Robotics Research Portfolio": "王古帆 · 机器人研究作品集",
    "25 kg Wheel-Legged Robot · Wang Gufan": "25 kg 轮足机器人 · 王古帆",
    "55 kg EtherCAT Quadruped · Wang Gufan": "55 kg EtherCAT 四足机器人 · 王古帆",
    "Real-Time Systems & Field Robotics · Wang Gufan": "实时系统与现场机器人 · 王古帆",
    "Proposed Research Direction · Wang Gufan": "拟议研究方向 · 王古帆",
    "Other Research · Wang Gufan": "其他研究 · 王古帆",
    "Wang Gufan's robotics research portfolio: reliable learned and model-based control beyond simulation assumptions.": "王古帆的机器人研究作品集：超越仿真假设的可靠学习型与模型驱动控制。",
    "25 kg wheel-legged robot RL Sim2Real case study by Wang Gufan.": "王古帆的 25 kg 轮足机器人强化学习仿真到现实案例研究。",
    "55 kg quadruped EtherCAT RL Sim2Real case study by Wang Gufan.": "王古帆的 55 kg 四足机器人 EtherCAT 强化学习仿真到现实案例研究。",
    "Supporting real-time systems and field robotics work by Wang Gufan.": "王古帆的实时系统与现场机器人支持性工作。",
    "Proposed research direction: timing-aware state prediction and confidence for reliable RL/MPC.": "拟议研究方向：面向可靠 RL/MPC 的时序感知状态预测与置信度。",
    "Physics-informed learning and data-driven materials research by Wang Gufan.": "王古帆的物理信息学习与数据驱动材料研究。"
  };

  function getLanguage() {
    try {
      return localStorage.getItem(storageKey) === "zh-CN" ? "zh-CN" : "en";
    } catch {
      return "en";
    }
  }

  function translateTextNodes(language) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || parent.closest("script, style, code")) return NodeFilter.FILTER_REJECT;
        return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      if (!originalNodes.has(node)) originalNodes.set(node, node.nodeValue);
      const original = originalNodes.get(node);
      const key = original.trim();
      node.nodeValue = language === "zh-CN" && zh[key]
        ? original.replace(key, zh[key])
        : original;
    });
  }

  function translateAttributes(language) {
    document.querySelectorAll("[aria-label], [alt]").forEach((node) => {
      ["aria-label", "alt"].forEach((attribute) => {
        const original = node.dataset[`original${attribute.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())}`] || node.getAttribute(attribute);
        if (!original) return;
        node.dataset[`original${attribute.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())}`] = original;
        node.setAttribute(attribute, language === "zh-CN" && attributes[original] ? attributes[original] : original);
      });
    });
  }

  function translateDocument(language) {
    const originalTitle = document.documentElement.dataset.originalTitle || document.title;
    document.documentElement.dataset.originalTitle = originalTitle;
    document.title = language === "zh-CN" && documentText[originalTitle] ? documentText[originalTitle] : originalTitle;
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      const original = description.dataset.originalContent || description.content;
      description.dataset.originalContent = original;
      description.content = language === "zh-CN" && documentText[original] ? documentText[original] : original;
    }
  }

  function render(language) {
    document.documentElement.lang = language;
    document.body.dataset.language = language;
    translateTextNodes(language);
    translateAttributes(language);
    translateDocument(language);
    const button = document.querySelector("[data-language-toggle]");
    if (button) {
      const isChinese = language === "zh-CN";
      button.textContent = isChinese ? "EN" : "中文";
      button.setAttribute("aria-label", isChinese ? "Switch to English" : "切换为简体中文");
      button.setAttribute("title", isChinese ? "Switch to English" : "切换为简体中文");
    }
  }

  const button = document.querySelector("[data-language-toggle]");
  if (button) {
    button.addEventListener("click", () => {
      const language = getLanguage() === "zh-CN" ? "en" : "zh-CN";
      try { localStorage.setItem(storageKey, language); } catch { /* Preference remains for this page. */ }
      render(language);
    });
  }

  render(getLanguage());
})();

