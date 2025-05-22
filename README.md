# 😊 Emoji Mood Oracle

**Emoji Mood Oracle** is a fun and intelligent sentiment analysis app that classifies the emotional tone of emojis. Select an emoji and instantly discover if it's expressing a **Positive**, **Negative**, or **Neutral** sentiment. Built using no-code AI tools like **Lobe** and deployed using a user-friendly interface (e.g., Streamlit or Web), this project demonstrates how emojis alone can reveal emotions in digital communication.

---

## 🎯 Project Aim

To develop a smart emoji sentiment classifier that helps users interpret emotional meaning based on visual emoji input, using machine learning.

---

## ❓ Problem Statement

In the age of digital interaction, emojis are powerful tools for expressing emotions. Traditional sentiment analysis focuses on text and ignores the emotional value carried by emojis — especially when used without any text (e.g., a message with just "😢").

> **Challenge:** Build a model that can correctly identify emotional sentiment (positive, neutral, or negative) from emoji input.

---

## ✅ Solution Overview

This project solves the problem by:
- Collecting emoji images grouped by sentiment.
- Training a no-code ML model using **Lobe AI**.
- Creating an interactive interface where users choose an emoji and get an instant sentiment result.

---

## 🌍 Real-World Applications

- **Social Media Monitoring** – Track public mood in emoji reactions/posts.
- **Chatbots and Virtual Assistants** – Make responses emotionally intelligent.
- **Mental Health Tracking** – Understand mood trends through emoji choices.
- **Customer Feedback Analysis** – Classify satisfaction levels via emoji-only responses.

---

## 🧰 Tools & Technologies

| Tool        | Purpose                             |
|-------------|-------------------------------------|
| Lobe AI     | No-code ML model training (image-based) |
| Streamlit   | Frontend web app to select and display results |
| TensorFlow / ONNX | Model export format |
| Python      | Optional backend logic |
| Emojipedia / Custom Dataset | Emoji images for training |

---

## 📁 Dataset Structure

Organize images into labeled folders for Lobe to learn from:

EmojiSentimentDataset/
├── Positive/
│ ├── smile.png
│ ├── heart.png
│ ├── laugh.png
├── Negative/
│ ├── angry.png
│ ├── frown.png
│ ├── thumbs_down.png
├── Neutral/
│ ├── meh.png
│ ├── neutral_face.png


 How to Run Locally (Streamlit version)

1. Export your Lobe model.
2. Clone or download this repo.
3. Install Streamlit (if not already):
   ```bash
   pip install streamlit
   Run the app:

🧪 Features
Choose emoji to analyze mood

Instantly view sentiment result

Simple and clean UI

Model powered by Lobe AI

Ready to expand with new emojis

🔮 Future Scope
Combine emojis + text sentiment for hybrid analysis

Emoji GIF support

Integration with messaging/chat platforms

Firebase backend for saving usage stats and results

📝 Credits
Emojis sourced from Emojipedia

Model trained using Lobe AI

App UI possibly built using Streamlit or similar

👩‍💻 Author
Maleeha Jabeen
3rd Year IT Engineering Student
Shadan Women's College of Engineering and Technology
Aspiring AI Developer passionate about creating innovative, real-world AI solutions using a combination of no-code tools and traditional programming.
💡 Loves blending creativity with tech to make smart apps that feel human.

Connect:
🔗 Linkedin Profile : www.linkedin.com/in/
maleeha-jabeen-0988462a2


📌 License
This project is open for educational and non-commercial use. Please credit the authors when using this project.
