import os
from PIL import Image, ImageFilter

def process_icon(source_path, res_path):
    try:
        # Open the source image
        img = Image.open(source_path).convert("RGBA")
        width, height = img.size
        
        # Determine square size (max dimension)
        size = max(width, height)
        
        # Create blurred background
        # Scale image to cover the square area
        ratio = max(size / width, size / height)
        new_w = int(width * ratio)
        new_h = int(height * ratio)
        
        bg_img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        
        # Center crop the background to square
        left = (new_w - size) / 2
        top = (new_h - size) / 2
        right = (new_w + size) / 2
        bottom = (new_h + size) / 2
        bg_img = bg_img.crop((left, top, right, bottom))
        
        # Apply blur
        bg_img = bg_img.filter(ImageFilter.GaussianBlur(radius=20))
        
        # Center the original image on the canvas
        # Determine position to paste original
        # Resize original if needed to fit (it fits by definition since size=max dim, but just in case)
        # Actually, we want original to be slightly smaller? No, user wants FULL VISIBILITY.
        # But if width < height (portrait), original is 901x1600. Canvas is 1600x1600.
        # So we center it horizontally.
        
        # Create final composite
        final_img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        final_img.paste(bg_img, (0, 0))
        
        # Paste original centered
        paste_x = (size - width) // 2
        paste_y = (size - height) // 2
        final_img.paste(img, (paste_x, paste_y), img) # Use img as mask for transparency if any
        
        # Define the target folders and sizes for Android mipmap
        targets = [
            ("mipmap-mdpi", 48),
            ("mipmap-hdpi", 72),
            ("mipmap-xhdpi", 96),
            ("mipmap-xxhdpi", 144),
            ("mipmap-xxxhdpi", 192)
        ]
        
        # Process and save for each size
        for folder, size_px in targets:
            full_folder_path = os.path.join(res_path, folder)
            os.makedirs(full_folder_path, exist_ok=True)
            
            # Resize final composite
            resized_img = final_img.resize((size_px, size_px), Image.Resampling.LANCZOS)
            
            # Save as standard launcher icons
            launcher_path = os.path.join(full_folder_path, "ic_launcher.png")
            round_path = os.path.join(full_folder_path, "ic_launcher_round.png")
            
            resized_img.save(launcher_path, "PNG")
            resized_img.save(round_path, "PNG")
            
            # Also update foreground if it exists
            foreground_path = os.path.join(full_folder_path, "ic_launcher_foreground.png")
            if os.path.exists(foreground_path):
                 resized_img.save(foreground_path, "PNG")
            
            print(f"Updated icons in {folder} to size {size_px}x{size_px}")

    except Exception as e:
        print(f"Error processing image: {e}")

# Run the function with updated paths
source_image = "signal-2026-02-02-023904.jpeg"
android_res_path = "android/app/src/main/res"

if __name__ == "__main__":
    process_icon(source_image, android_res_path)
