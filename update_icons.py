import os
from PIL import Image

def process_icon(source_path, res_path):
    try:
        # Open the source image
        img = Image.open(source_path)
        
        # Calculate crop dimensions to make it square (from center)
        width, height = img.size
        new_size = min(width, height)
        
        left = (width - new_size) / 2
        top = (height - new_size) / 2
        right = (width + new_size) / 2
        bottom = (height + new_size) / 2
        
        # Crop to square
        img_square = img.crop((left, top, right, bottom))
        
        # Define the target folders and sizes
        targets = [
            ("mipmap-mdpi", 48),
            ("mipmap-hdpi", 72),
            ("mipmap-xhdpi", 96),
            ("mipmap-xxhdpi", 144),
            ("mipmap-xxxhdpi", 192)
        ]
        
        # Process and save for each size
        for folder, size in targets:
            full_folder_path = os.path.join(res_path, folder)
            
            # Resize
            resized_img = img_square.resize((size, size), Image.Resampling.LANCZOS)
            
            # Allow overwriting existing launcher icons (save as ic_launcher.png and ic_launcher_round.png)
            launcher_path = os.path.join(full_folder_path, "ic_launcher.png")
            round_path = os.path.join(full_folder_path, "ic_launcher_round.png")
            
            resized_img.save(launcher_path, "PNG")
            resized_img.save(round_path, "PNG")
            
            # Also update foreground if it exists (for adaptive icons)
            foreground_path = os.path.join(full_folder_path, "ic_launcher_foreground.png")
            if os.path.exists(foreground_path):
                 resized_img.save(foreground_path, "PNG")
            
            print(f"Updated icons in {folder} to size {size}x{size}")

    except Exception as e:
        print(f"Error processing image: {e}")

# Run the function
source_image = "/Users/yalcindegirmenci/.gemini/antigravity/brain/8253dedd-1470-41a7-b18b-9b5581b6a162/uploaded_media_1769993433590.jpg"
android_res_path = "/Users/yalcindegirmenci/Desktop/app/android/app/src/main/res"

process_icon(source_image, android_res_path)
