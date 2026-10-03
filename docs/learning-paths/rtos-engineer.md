# RTOS Engineer

> **Level:** 🟠 Intermediate → ⚫ Advanced · **Est. time:** ~8 weeks · **Progress:** track your checkboxes below

**What you'll learn:** Real-time operating systems — FreeRTOS tasks, queues, mutexes, scheduling, and how to architect firmware that meets hard timing requirements.

**Who it's for:** Embedded developers who've outgrown bare-metal loops and need deterministic, priority-driven firmware.

---

## How this path works

Follow the steps **in order**. Tick a checkbox when you finish a step.

**Legend:** 🟢 Beginner · 🟠 Intermediate · 🔴 Hard · ⚫ Advanced

---

## 🟠 Stage 1 — RTOS fundamentals (weeks 1-3)

- [ ] **1. RTOS on MCU (FreeRTOS)** · 🟠 · 📝 [RTOS on Microcontrollers](https://elecdocs.sektor9.dev/synthesized/rtos-on-mcu/) — tasks, the scheduler, and why real-time matters.
- [ ] **2. Mastering the FreeRTOS Kernel** · 🟠 · 📚 [FreeRTOS Book — Mastering the RTOS](https://www.freertos.org/Documentation/RTOS_book.html) — the official hands-on book (free PDF).
- [ ] **3. FreeRTOS official docs** · 🟠 · 📝 [FreeRTOS Documentation](https://www.freertos.org/Documentation/) — the API reference and kernel internals.

## 🔴 Stage 2 — RTOS in depth (weeks 4-6)

- [ ] **4. Tasks & scheduling** · 🔴 · 📝 [FreeRTOS task docs](https://www.freertos.org/Documentation/02-Kernel/04-API-references/01-Task-creation/00-Task-creation) — priorities, states, and the ready/blocked/suspended model.
- [ ] **5. Queues & mutexes** · 🔴 · 📝 [FreeRTOS queue/mutex docs](https://www.freertos.org/Documentation/) — inter-task communication done right (no shared globals).
- [ ] **6. Real-Time Systems (Buttazzo)** · ⚫ · 📚 [Real-Time Systems (lecture notes)](https://www.santos.eng.br/) — the theory: schedulability, deadlines, and priority inversion.
- [ ] **7. Watch the RTOS scheduler in action** · 🔴 · 🎬 [DigiKey — RTOS on STM32 series](https://www.youtube.com/@digikey) — practical FreeRTOS on hardware.

## ⚫ Stage 3 — Production RTOS (weeks 7-8)

- [ ] **8. Zephyr RTOS** · ⚫ · 📝 [Zephyr Documentation](https://docs.zephyrproject.org/latest/) — a modern, production RTOS with a devicetree model.
- [ ] **9. Priority inversion & the priority ceiling** · ⚫ · 📝 [Priority inversion (Wikipedia)](https://en.wikipedia.org/wiki/Priority_inversion) — the famous Mars Pathfinder bug and how mutexes solve it.
- [ ] **10. Build your own tiny RTOS** · ⚫ · 📝 [A minimal RTOS in C (github)](https://github.com/wolfgang-zhang/rtos) — understand the scheduler by writing one.

---

## 🎯 Milestone project

Put it together: **an RTOS firmware with 3+ tasks** — one sensor reader, one controller, one telemetry sender — communicating through queues, with a mutex-protected shared resource, meeting a hard deadline you measure with a scope/logic analyzer.

## 📌 Related resources

- [RTOS community](https://elecdocs.sektor9.dev/resources/curated/communities/)
- [Zephyr forum](https://discord.gg/zephyr-rtos)
