# Twilio Call Tracking

This is a super simple call tracker.

## How It Works

- Someone calls your twilio number.
- Twilio makes a POST request to this app.
- This app sees which Twilio number is being called and increments a counter on
  for that number.

Now you can login to see how many times which numbers are called.

## Setup

Clone this repo. Post it to Firebase Functions as a serverless function. Update
the env variables as needed.

## Further questions?

Hey, it's free... okay fine. Tweet at me or make an issue here.
