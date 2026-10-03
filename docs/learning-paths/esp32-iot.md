# ESP32 / IoT Mastery

> **Level:** 🟢 Beginner → ⚫ Advanced · **Est. time:** ~12 weeks (5-8 hrs/week) · **Progress:** tick each step as you finish it

**What you'll learn:** The ESP32 end-to-end — from first blink to Wi-Fi, BLE, MQTT, deep sleep, OTA updates, and production-grade IoT firmware.

**Who it's for:** Anyone who wants to build connected devices: sensors, home automation, and battery-powered IoT.

---

## How this path works

Follow the steps **in order** — each builds on the last. Tick a checkbox when you finish a step. Steps are 📚 book, 📝 tutorial, or 🎬 video.

**Legend:** 🟢 Beginner · 🟠 Intermediate · 🔴 Hard · ⚫ Advanced

---

## 🟢 Stage 1 — ESP32 basics (weeks 1-3)

*Goal: a working board and the mental model of the chip.*

- [ ] **1. ESP32 beginner** · 🟢 · 📝 [ESP32 Beginner](https://elecdocs.sektor9.dev/paths/esp32/beginner/) · **Learn:** the board, the IDE (Arduino + ESP-IDF), and the first blink + serial. **Why:** get something on the board working in hour one.
- [ ] **2. ESP-IDF docs** · 🟢 · 📚 [ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/latest/) · **Learn:** Espressif's official framework — project structure, components, build system. **Why:** ESP-IDF is the professional path; Arduino is the easy path. Learn both.
- [ ] **3. ESP32 technical reference** · 🟠 · 📚 [ESP32 Technical Reference Manual](https://www.espressif.com/sites/default/files/documentation/esp32_technical_reference_manual_en.pdf) · **Learn:** the hardware — GPIO, timers, ADC, RTC, memory. **Why:** the datasheet-level truth under the framework.
- [ ] **4. The ESP32 ecosystem** · 🟠 · 🎬 [Andreas Spiess](https://www.youtube.com/@AndreasSpiess) · **Learn:** the definitive ESP32 channel — thoughtful, honest, deep comparisons. **Why:** learn what actually works in practice, not just spec sheets.
- [ ] **5. Simulate before you build** · 🟢 · 📝 [Wokwi ESP32 simulator](https://docs.wokwi.com/) · **Learn:** run ESP32 firmware in the browser. **Why:** iterate on logic without flashing hardware.

## 🟠 Stage 2 — Connectivity (weeks 4-7)

*Goal: your device talks to the world.*

- [ ] **6. Wi-Fi on ESP32** · 🟠 · 📝 [Wi-Fi on ESP32](https://elecdocs.sektor9.dev/synthesized/esp32-advanced/) · **Learn:** connect to a network, run an HTTP server, serve a page that controls an LED. **Why:** the classic first IoT milestone — control hardware from a browser.
- [ ] **7. BLE basics** · 🟠 · 📝 [Bluetooth (BLE) Basics](https://elecdocs.sektor9.dev/synthesized/esp32-advanced/) · **Learn:** BLE GATT — services, characteristics, advertising. **Why:** BLE is how your device talks to phones without Wi-Fi.
- [ ] **8. Internet of Things Projects with ESP32** · 🟠 · 📚 [IoT Projects with ESP32 (free PDF)](https://else.fcim.utm.md/pluginfile.php/90372/mod_resource/content/1/esp32%20programming.pdf) · **Learn:** sensor-to-cloud projects — GPIO, sensors, and cloud dashboards. **Why:** a structured project book end to end.
- [ ] **9. Interfacing sensors** · 🟠 · 📝 [ESP32 ADC & sensors](https://elecdocs.sektor9.dev/synthesized/esp32-advanced/) · **Learn:** read analog sensors, I²C sensors (BME280, MPU6050). **Why:** sensors are why IoT exists.

## 🔴 Stage 3 — IoT engineering (weeks 8-10)

*Goal: robust, efficient, real-time firmware.*

- [ ] **10. MQTT** · 🔴 · 📝 [MQTT essentials (HiveMQ)](https://www.hivemq.com/blog/mqtt-essentials-part-1-introducing-publish-subscribe/) · **Learn:** the IoT protocol — brokers, topics, QoS, retained messages. **Why:** MQTT is the de-facto IoT transport; master it.
- [ ] **11. FreeRTOS on ESP32** · 🔴 · 📝 [RTOS on MCU (FreeRTOS)](https://elecdocs.sektor9.dev/synthesized/rtos-on-mcu/) · **Learn:** tasks, queues, mutexes — the real-time model under the ESP-IDF. **Why:** the ESP-IDF runs on FreeRTOS; structuring firmware as tasks is the professional way.
- [ ] **12. Deep sleep & power** · 🔴 · 📝 [ESP32 Advanced (sleep)](https://elecdocs.sektor9.dev/synthesized/esp32-advanced/) · **Learn:** deep sleep, wake-on-timer/GPIO, and measuring battery life. **Why:** battery-powered IoT is all about the sleep budget.
- [ ] **13. ESP-NOW** · 🔴 · 📝 [ESP-NOW (Espressif)](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/network/esp_now.html) · **Learn:** connectionless peer-to-peer — low-latency device-to-device. **Why:** the efficient path for local mesh without a router.
- [ ] **14. Security & provisioning** · 🔴 · 📝 [ESP-IDF Security (Secure Boot, Flash Encryption)](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/security/index.html) · **Learn:** secure boot, flash encryption, and Wi-Fi provisioning (SmartConfig/BLE). **Why:** a device anyone can reflash isn't a product.

## ⚫ Stage 4 — Production (weeks 11-12)

*Goal: firmware you'd ship.*

- [ ] **15. Over-the-air updates** · ⚫ · 📝 [ESP-IDF OTA](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/system/ota.html) · **Learn:** roll out firmware remotely with rollback. **Why:** OTA is how real devices get patched in the field.
- [ ] **16. TinyML on ESP32** · ⚫ · 📝 [TensorFlow Lite Micro on ESP32](https://www.tensorflow.org/lite/microcontrollers) · **Learn:** run a small model on-device (keyword spotting, anomaly detection). **Why:** edge AI is the frontier of MCU development.
- [ ] **17. PlatformIO** · 🟠 · 📝 [PlatformIO](https://platformio.org/) · **Learn:** the pro toolchain — multi-framework, unit tests, CI. **Why:** the professional build environment for ESP32 projects.
- [ ] **18. Deploy & monitor** · ⚫ · 📝 [ESP-IDF Logging & Error handling](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/system/log.html) · **Learn:** structured logging, error handling, and remote monitoring. **Why:** you can't debug a device in the field without good logs.

---

## 🎯 Milestone project — "Battery-powered sensor node"

**Goal:** the complete IoT lifecycle. Estimated 3-4 weeks. **Prereq:** all stages.

1. **Build** a battery-powered ESP32 sensor node (temperature/humidity).
2. **Read** the sensor, **deep-sleep** between reads, wake on a timer.
3. **Publish** to an MQTT broker over Wi-Fi.
4. **Add** OTA so you can update it remotely.
5. **Measure** battery life and optimize the sleep duty cycle.
6. **Write** `docs/design.md` documenting the architecture and power budget.

**Checklist**

- [ ] sensor read works
- [ ] deep sleep + wake on timer works
- [ ] MQTT publish works
- [ ] OTA update works
- [ ] power measured, duty cycle optimized
- [ ] `docs/design.md` written

## 📌 Related resources

- **Community:** [ESP32 communities](https://elecdocs.sektor9.dev/resources/curated/communities/)
- **Simulate:** [Wokwi ESP32](https://docs.wokwi.com/)
- **Toolchain:** [PlatformIO](https://platformio.org/), [ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/)
