# RTOS Engineer

> **Level:** 🟠 Intermediate → ⚫ Advanced · **Est. time:** ~8 weeks (5-8 hrs/week) · **Progress:** tick each step as you finish it

**What you'll learn:** Real-time operating systems — FreeRTOS tasks, queues, mutexes, scheduling, and how to architect firmware that meets hard timing requirements.

**Who it's for:** Embedded developers who've outgrown bare-metal loops and need deterministic, priority-driven firmware.

---

## How this path works

Follow the steps **in order** — fundamentals, then depth, then production. Tick a checkbox when you finish a step. Steps are 📚 book, 📝 tutorial, or 🎬 video.

**Legend:** 🟢 Beginner · 🟠 Intermediate · 🔴 Hard · ⚫ Advanced

---

## 🟠 Stage 1 — RTOS fundamentals (weeks 1-3)

*Goal: what an RTOS is and why it exists.*

- [ ] **1. RTOS on MCU (FreeRTOS)** · 🟠 · 📝 [RTOS on Microcontrollers](https://elecdocs.sektor9.dev/synthesized/rtos-on-mcu/) · **Learn:** tasks, the scheduler, and why real-time matters. **Why:** the mental model first — an RTOS is a scheduler, not "just a library."
- [ ] **2. Mastering the FreeRTOS Kernel** · 🟠 · 📚 [FreeRTOS Book — Mastering the RTOS](https://www.freertos.org/Documentation/RTOS_book.html) · **Learn:** the official hands-on book — hands-on tasks, queues, and the kernel model. **Why:** the best single free RTOS text; work it alongside your board.
- [ ] **3. FreeRTOS official docs** · 🟠 · 📝 [FreeRTOS Documentation](https://www.freertos.org/Documentation/) · **Learn:** the API reference and kernel internals. **Why:** your lookup reference for every API.

## 🔴 Stage 2 — RTOS in depth (weeks 4-6)

*Goal: understand the scheduler, not just use it.*

- [ ] **4. Tasks & scheduling** · 🔴 · 📝 [FreeRTOS task docs](https://www.freertos.org/Documentation/02-Kernel/04-API-references/01-Task-creation/00-Task-creation) · **Learn:** priorities, states (ready/blocked/suspended), and the ready list. **Why:** the scheduler is the heart; know exactly how it picks the next task.
- [ ] **5. Queues & mutexes** · 🔴 · 📝 [FreeRTOS queue/mutex docs](https://www.freertos.org/Documentation/) · **Learn:** inter-task communication done right — no shared globals. **Why:** queues are how real firmware stays race-free.
- [ ] **6. Semaphores & event groups** · 🔴 · 📝 [FreeRTOS sync primitives](https://www.freertos.org/Documentation/) · **Learn:** binary/counting semaphores, event groups, and notifications. **Why:** choose the right synchronization tool per problem.
- [ ] **7. Real-Time Systems theory** · ⚫ · 📚 [Real-Time Systems (lecture notes)](https://www.santos.eng.br/) · **Learn:** schedulability analysis, deadlines, priority inversion. **Why:** the theory that tells you *whether* your system meets its deadlines.
- [ ] **8. Watch the RTOS scheduler in action** · 🔴 · 🎬 [DigiKey — RTOS on STM32 series](https://www.youtube.com/@digikey) · **Learn:** practical FreeRTOS on hardware, step by step. **Why:** see the theory on a real board with a real debugger.

## ⚫ Stage 3 — Production RTOS (weeks 7-8)

*Goal: production-grade real-time systems.*

- [ ] **9. Priority inversion & the priority ceiling** · ⚫ · 📝 [Priority inversion (Wikipedia)](https://en.wikipedia.org/wiki/Priority_inversion) · **Learn:** the Mars Pathfinder bug and how mutex priority-inheritance solves it. **Why:** this classic failure teaches more about RTOS design than any tutorial.
- [ ] **10. Zephyr RTOS** · ⚫ · 📝 [Zephyr Documentation](https://docs.zephyrproject.org/latest/) · **Learn:** a modern, production RTOS with a devicetree model. **Why:** the industry favorite for connected embedded — learn it to be employable.
- [ ] **11. Build your own tiny RTOS** · ⚫ · 📝 [A minimal RTOS in C](https://github.com/wolfgang-zhang/rtos) · **Learn:** a scheduler you write yourself — context switch, ready list, tick. **Why:** nothing teaches an RTOS like writing one.
- [ ] **12. Measuring real-time behavior** · ⚫ · 📝 [Using a logic analyzer on RTOS](https://www.saleae.com/) · **Learn:** trace task switches and measure jitter with a logic analyzer/scope. **Why:** "it seems to work" isn't real-time engineering — measure your deadlines.

---

## 🎯 Milestone project — "3-task RTOS with a measured deadline"

**Goal:** a real-time system you can prove meets its timing. Estimated 2-3 weeks. **Prereq:** all stages.

1. **Build** an RTOS firmware with 3+ tasks: sensor reader, controller, telemetry sender.
2. **Communicate** between tasks with queues, not globals.
3. **Protect** a shared resource with a mutex.
4. **Define** a hard deadline (e.g. controller responds within 10 ms).
5. **Measure** the deadline with a scope/logic analyzer (toggle a pin in the task).
6. **Write** `docs/design.md` with your schedulability analysis.

**Checklist**

- [ ] 3+ tasks run
- [ ] queues used for inter-task data
- [ ] mutex protects shared resource
- [ ] hard deadline defined
- [ ] deadline measured and met
- [ ] `docs/design.md` schedulability analysis written

## 📌 Related resources

- **Community:** [RTOS communities](https://elecdocs.sektor9.dev/resources/curated/communities/), [Zephyr Discord](https://discord.gg/zephyr-rtos)
- **Reference:** [FreeRTOS docs](https://www.freertos.org/Documentation/), [Zephyr docs](https://docs.zephyrproject.org/latest/)
