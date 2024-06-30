# GhostMessage - Anonymous SMS Sender

GhostMessage is a simple Node.js application that sends anonymous SMS messages using Twilio. This project is designed to surprise recipients with anonymous messages.

## Prerequisites

Before running the application, make sure you have the following:

- Node.js installed on your machine
- A Twilio account. If you don't have one, you can sign up for free at [Twilio](https://www.twilio.com/)
- Twilio Account SID and Auth Token available (from your Twilio dashboard)
- Two phone numbers:
  - `TWILIO_SENDER_PHONE_NUMBER`: Your Twilio phone number (sender)
  - `TWILIO_RECEIVER_PHONE_NUMBER`: The recipient's phone number

## Installation

1. Clone this repository:

   ```bash
   git clone <repository-url>
   cd GhostMessage
   ```
