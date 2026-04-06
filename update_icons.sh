#!/bin/bash

# Use the user's uploaded photo (assuming the largest signal file)
SOURCE_IMG="signal-2026-02-02-023904.jpeg"
RES_PATH="android/app/src/main/res"

# Get dimensions
WIDTH=$(sips -g pixelWidth "$SOURCE_IMG" | tail -n1 | awk '{print $2}')
HEIGHT=$(sips -g pixelHeight "$SOURCE_IMG" | tail -n1 | awk '{print $2}')

# Determine max dimension for padding
if [ "$WIDTH" -gt "$HEIGHT" ]; then
  MAX_SIZE=$WIDTH
else
  MAX_SIZE=$HEIGHT
fi

# Create a temporary square master image with PADDING (to keep full image visible)
# Use white background (FFFFFF)
sips --padToHeightWidth $MAX_SIZE $MAX_SIZE --padColor FFFFFF "$SOURCE_IMG" --out temp_icon.png

# Function to resize and copy
update_icon() {
    FOLDER=$1
    SIZE=$2
    DEST="$RES_PATH/$FOLDER"
    
    mkdir -p "$DEST"
    echo "Updating $FOLDER to ${SIZE}x${SIZE}..."
    
    # Create icons
    sips -z $SIZE $SIZE temp_icon.png --out "$DEST/ic_launcher.png"
    sips -z $SIZE $SIZE temp_icon.png --out "$DEST/ic_launcher_round.png"
    
    # Update foreground if it exists
    if [ -f "$DEST/ic_launcher_foreground.png" ]; then
        sips -z $SIZE $SIZE temp_icon.png --out "$DEST/ic_launcher_foreground.png"
    fi
}

update_icon "mipmap-mdpi" 48
update_icon "mipmap-hdpi" 72
update_icon "mipmap-xhdpi" 96
update_icon "mipmap-xxhdpi" 144
update_icon "mipmap-xxxhdpi" 192

# Clean up
rm temp_icon.png

echo "All icons updated!"
