# 🛠️ Live Code Playground

Experiment with electronics and embedded code right in your browser.

## 1. The electronics IDE (code-server)

Your browser IDE with Arduino/ESP32 toolchains (arduino-cli, AVR core, ESP-IDF-ready) is at **`ide.sektor9.dev`**. It opens into `/workspace/Electronics` with a working blink project.

[🔗 Open ide.sektor9.dev](https://ide.sektor9.dev/)

> Requires the `osdev` login. Files persist in the workspace.

## 2. Simulate circuits in-browser (Wokwi)

Simulate an Arduino Uno, ESP32, or Raspberry Pi Pico instantly — code, wiring, serial monitor all live in the browser:

<iframe src="https://wokwi.com/projects/new/arduino-uno" style="width:100%;height:560px;border:1px solid var(--md-default-fg-color--lightest,#333);border-radius:12px" title="Wokwi simulator" loading="lazy"></iframe>

## 3. Quick Arduino sketch (try in the IDE)

```cpp
// Blink the built-in LED — the classic first project
const int LED = 13;
void setup() {
  pinMode(LED, OUTPUT);
}
void loop() {
  digitalWrite(LED, HIGH);
  delay(1000);
  digitalWrite(LED, LOW);
  delay(1000);
}
```

In the IDE: create `blink/blink.ino`, compile with `arduino-cli compile --fqbn arduino:avr:uno blink`, and flash when you have a board connected.

---

## Try it yourself

- Change the blink delay and watch the timing change
- Add a second LED on pin 12 with a different pattern
- Switch to the ESP32 and try the Wi-Fi scan example from the tutorials
