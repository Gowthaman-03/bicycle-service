from PIL import Image

img = Image.open('public/assets/images/hero-dh-bike-3d.jpg').convert('RGBA')
width, height = img.size
pixdata = img.load()

# Let's inspect brightness across the image
# Any pixel with max(R, G, B) <= threshold is background
# For smooth edges, we can feather alpha between threshold_low and threshold_high
# But let's check what the bike's darkest parts are first
for y in range(height):
    for x in range(width):
        r, g, b, a = pixdata[x, y]
        # Luminance
        lum = 0.299 * r + 0.587 * g + 0.114 * b
        max_val = max(r, g, b)
        
        # In the studio render, background is < 12
        # Near the floor reflection, it might be up to 18
        if max_val <= 9:
            pixdata[x, y] = (0, 0, 0, 0)
        elif max_val <= 24:
            alpha = int(255 * (max_val - 9) / 15.0)
            pixdata[x, y] = (r, g, b, alpha)

img.save('public/assets/images/hero-dh-bike-transparent.png', 'PNG')
print("Saved transparent PNG successfully!")
