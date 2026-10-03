# Embedded C & Rust

> **Level:** 🟠 Intermediate → 🔴 Hard · **Est. time:** ~10 weeks (5-8 hrs/week) · **Progress:** tick each step as you finish it

**What you'll learn:** Professional embedded programming — bare-metal C then modern embedded Rust, on real microcontrollers (STM32/ESP32).

**Who it's for:** Programmers with C or Rust experience who want to write firmware the professional way (no Arduino libraries).

---

## How this path works

Follow the steps **in order** — C first for the hardware model, then Rust for the safety. Tick a checkbox when you finish a step. Steps are 📚 book, 📝 tutorial, or 🎬 video.

**Legend:** 🟢 Beginner · 🟠 Intermediate · 🔴 Hard · ⚫ Advanced

---

## 🟠 Stage 1 — Embedded C (weeks 1-4)

*Goal: the hardware model and register-level C.*

- [ ] **1. Embedded Systems: Shape the World** · 🟠 · 📚 [Embedded Systems: Shape the World (UT Austin, free)](https://users.ece.utexas.edu/~valvano/Volume1/E-Book/Cover_edn8.htm) · **Learn:** the classic first embedded textbook — with an ARM simulator. **Why:** the most beginner-friendly rigorous path into embedded, free from a top university.
- [ ] **2. STM32 register programming** · 🔴 · 📝 [STM32F4 tutorials (register-level)](https://github.com/MYaqoobEmbedded/STM32-Tutorials) · **Learn:** GPIO, clocks (RCC), and UART without HAL libraries. **Why:** the professional ARM path — no Arduino, no HAL, just registers.
- [ ] **3. Introduction to Embedded Systems (Lee & Seshia)** · 🔴 · 📚 [Intro to Embedded Systems (free PDF)](https://ptolemy.berkeley.edu/books/leeseshia/releases/LeeSeshia_DigitalV2_2.pdf) · **Learn:** cyber-physical systems from Berkeley — the theory under the code. **Why:** understand the "systems" in embedded systems, not just the bits.
- [ ] **4. Embedded System Design (Springer, open access)** · 🔴 · 📚 [Embedded System Design (free PDF)](https://library.oapen.org/bitstream/handle/20.500.12657/46817/2021_Book_EmbeddedSystemDesign.pdf) · **Learn:** the modern hardware/software text — boards, buses, memory maps. **Why:** a current, open-access university text.
- [ ] **5. The linker script** · 🔴 · 📝 [STM32 linker script explained](https://github.com/MYaqoobEmbedded/STM32-Tutorials) · **Learn:** where `_start` is, vector tables, and memory regions. **Why:** the linker script is how your C actually lands on the chip.

## 🔴 Stage 2 — Embedded Rust (weeks 5-8)

*Goal: memory-safe firmware with the same hardware model.*

- [ ] **6. The Embedded Rust Book** · 🔴 · 📝 [The Embedded Rust Book](https://docs.rust-embedded.org/book/) · **Learn:** the Embedded WG's official guide — `no_std`, the startup, and the type system for hardware. **Why:** the canonical Rust-on-metal introduction.
- [ ] **7. Rust on ESP32** · 🔴 · 📝 [esp-rs — Rust on ESP32](https://docs.esp-rs.org/) · **Learn:** the modern, `no_std` Rust ecosystem for Espressif chips (esp-hal, esp-idf-hal). **Why:** ESP32 is the most accessible Rust MCU target today.
- [ ] **8. svd2rust & HALs** · 🔴 · 📝 [embedded-hal](https://docs.rs/embedded-hal/) · **Learn:** the HAL abstraction-layer traits; svd2rust generates register code from SVD files. **Why:** this is how Rust makes register access safe and portable.
- [ ] **9. Embedded Rust in action** · 🔴 · 📝 [Rust on embedded (docs)](https://elecdocs.sektor9.dev/synthesized/embedded-rust/) · **Learn:** GPIO, timers, and interrupts in Rust — the same features you did in C. **Why:** see the safety difference side by side.
- [ ] **10. Embassy (async embedded)** · ⚫ · 📝 [Embassy — async embedded Rust](https://embassy.dev/) · **Learn:** the async executor + HAL for Rust on MCUs. **Why:** the modern way to write concurrent firmware without a heavyweight RTOS.

## 🔴 Stage 3 — Professional practice (weeks 9-10)

*Goal: debug like a pro and structure firmware properly.*

- [ ] **11. Debugging with JTAG** · 🔴 · 📝 [OpenOCD](https://openocd.org/) · **Learn:** OpenOCD + GDB on real hardware — breakpoints, watchpoints, memory inspect. **Why:** printf-debugging is amateur hour; JTAG is how pros find bugs.
- [ ] **12. RTOS integration** · 🔴 · 📝 [FreeRTOS book](https://www.freertos.org/Documentation/RTOS_book.html) · **Learn:** bring in an RTOS and structure your firmware as tasks. **Why:** real firmware is multi-task; know how to architect it.
- [ ] **13. Reading schematics & datasheets** · 🔴 · 📝 [How to read schematics + datasheets](https://www.allaboutcircuits.com/textbook/) · **Learn:** wire up a real board from its schematic and datasheet. **Why:** professional embedded means hardware-literate.
- [ ] **14. CI for firmware** · 🟠 · 📝 [GitHub Actions for embedded](https://github.com/actions) · **Learn:** automated build + test for firmware. **Why:** firmware deserves the same CI discipline as web code.

---

## 🎯 Milestone project — "no_std Rust firmware, ported to C"

**Goal:** prove you can write professional firmware in both. Estimated 3-4 weeks. **Prereq:** all stages.

1. **Write** a `no_std` Rust firmware for an STM32 or ESP32.
2. **Blink** via a timer interrupt (not a busy loop).
3. **Read** a button with a GPIO interrupt.
4. **Send** UART logs through the HAL.
5. **Port** the same design to bare C and compare the two.
6. **Write** `docs/design.md` comparing safety, code size, and clarity.

**Checklist**

- [ ] Rust firmware compiles `no_std`
- [ ] timer-interrupt blink works
- [ ] button GPIO interrupt works
- [ ] UART logs work
- [ ] C port works
- [ ] `docs/design.md` comparison written

## 📌 Related resources

- **Community:** [Embedded communities](https://elecdocs.sektor9.dev/resources/curated/communities/), [r/embedded](https://www.reddit.com/r/embedded/)
- **Async:** [Embassy](https://embassy.dev/)
- **Reference:** [The Embedded Rust Book](https://docs.rust-embedded.org/book/)
