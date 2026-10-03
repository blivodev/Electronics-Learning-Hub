# Embedded C & Rust

> **Level:** 🟠 Intermediate → 🔴 Hard · **Est. time:** ~10 weeks · **Progress:** track your checkboxes below

**What you'll learn:** Professional embedded programming — bare-metal C then modern embedded Rust, on real microcontrollers (STM32/ESP32).

**Who it's for:** Programmers with C or Rust experience who want to write firmware the professional way (no Arduino libraries).

---

## How this path works

Follow the steps **in order**. Tick a checkbox when you finish a step.

**Legend:** 🟢 Beginner · 🟠 Intermediate · 🔴 Hard · ⚫ Advanced

---

## 🟠 Stage 1 — Embedded C (weeks 1-4)

- [ ] **1. Embedded Systems Shape the World** · 🟠 · 📚 [Embedded Systems: Shape the World (UT Austin, free)](https://users.ece.utexas.edu/~valvano/Volume1/E-Book/Cover_edn8.htm) — the classic first embedded textbook with a simulator.
- [ ] **2. Introduction to Embedded Systems (Lee & Seshia)** · 🔴 · 📚 [Introduction to Embedded Systems (free PDF)](https://ptolemy.berkeley.edu/books/leeseshia/releases/LeeSeshia_DigitalV2_2.pdf) — cyber-physical systems from Berkeley.
- [ ] **3. STM32 register programming** · 🔴 · 📝 [STM32F4 tutorials (register-level)](https://github.com/MYaqoobEmbedded/STM32-Tutorials) — GPIO, clocks, and UART without HAL libraries.
- [ ] **4. Embedded System Design (Springer, open access)** · 🔴 · 📚 [Embedded System Design (free PDF)](https://library.oapen.org/bitstream/handle/20.500.12657/46817/2021_Book_EmbeddedSystemDesign.pdf) — the modern hardware/software text.

## 🔴 Stage 2 — Embedded Rust (weeks 5-8)

- [ ] **5. The Embedded Rust Book** · 🔴 · 📝 [The Embedded Rust Book](https://docs.rust-embedded.org/book/) — the Embedded WG's official guide.
- [ ] **6. Rust on ESP32** · 🔴 · 📝 [esp-rs — Rust on ESP32](https://docs.esp-rs.org/) — the modern, no_std Rust ecosystem for Espressif chips.
- [ ] **7. svd2rust & HALs** · 🔴 · 📝 [embedded-hal](https://docs.rs/embedded-hal/) — the hardware-abstraction layer traits; svd2rust generates register code from SVD files.
- [ ] **8. Embedded Rust in action** · 🔴 · 📝 [Rust on embedded (docs)](https://elecdocs.sektor9.dev/synthesized/embedded-rust/) — GPIO, timers, and interrupts in Rust.

## 🔴 Stage 3 — Professional practice (weeks 9-10)

- [ ] **9. Debugging with JTAG** · 🔴 · 📝 [JTAG/SWD debugging](https://openocd.org/) — OpenOCD + GDB on real hardware.
- [ ] **10. RTOS integration** · 🔴 · 📝 [FreeRTOS book](https://www.freertos.org/Documentation/RTOS_book.html) — bring in an RTOS and structure your firmware as tasks.

---

## 🎯 Milestone project

Put it together: **a no_std Rust firmware for an STM32 or ESP32** that blinks via a timer interrupt, reads a button, and sends UART logs — written with the HAL, no Arduino. Then port the same design to bare C and compare.

## 📌 Related resources

- [Embedded community](https://elecdocs.sektor9.dev/resources/curated/communities/)
- [Embedded Systems on Twitter/X and Discord (r/embedded)](https://www.reddit.com/r/embedded/)
