#!/bin/bash

SOURCE_IMG="/Users/yalcindegirmenci/.gemini/antigravity/brain/8253dedd-1470-41a7-b18b-9b5581b6a162/uploaded_media_1769993433590.jpg"
RES_PATH="/Users/yalcindegirmenci/Desktop/app/android/app/src/main/res"

# Get dimensions
WIDTH=$(sips -g pixelWidth "$SOURCE_IMG" | tail -n1 | awk '{print $2}')
HEIGHT=$(sips -g pixelHeight "$SOURCE_IMG" | tail -n1 | awk '{print $2}')

# Calculate crop size (min side)
if [ "$WIDTH" -lt "$HEIGHT" ]; then
  CROP_SIZE=$WIDTH
else
  CROP_SIZE=$HEIGHT
fi

# Create a temporary square master image
sips --cropToHeightWidth $CROP_SIZE $CROP_SIZE "$SOURCE_IMG" --out temp_icon.png

# Function to resize and copy
update_icon() {
    FOLDER=$1
    SIZE=$2
    DEST="$RES_PATH/$FOLDER"
    
    echo "Updating $FOLDER to ${SIZE}x${SIZE}..."
    
    # Create icons
    sips -z $SIZE $SIZE temp_icon.png --out "$DEST/ic_launcher.png"
    sips -z $SIZE $SIZE temp_icon.png --out "$DEST/ic_launcher_round.png"
    
    # If foreground exists, update it too
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
