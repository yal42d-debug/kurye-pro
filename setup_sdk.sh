#!/bin/bash
export JAVA_HOME="/opt/homebrew/opt/openjdk@17"
export PATH="$JAVA_HOME/bin:$PATH"
export ANDROID_HOME="/opt/homebrew/share/android-commandlinetools"
export PATH="$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$PATH"

echo "Checking sdkmanager..."
which sdkmanager

echo "Accepting licenses..."
yes | sdkmanager --licenses > /dev/null 2>&1

echo "Installing packages..."
sdkmanager "platform-tools" "platforms;android-33" "build-tools;33.0.1"
