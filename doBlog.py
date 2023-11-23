import os
import re

def process_md_images(md_file_path):
    # Extract the directory and the base name of the Markdown file
    md_dir = os.path.dirname(md_file_path)
    base_name = os.path.splitext(os.path.basename(md_file_path))[0]

    # Folder containing images (assumed to be same name as MD file)
    image_dir = os.path.join(md_dir, base_name)

    # Read the Markdown content from the file
    with open(md_file_path, 'r', encoding='utf-8') as file:
        md_content = file.read()

    # Regular expression to find markdown image syntax
    image_pattern = re.compile(r"!\[.*?\]\((.*?)\)")

    # Counter for numbering images
    counter = 1

    # Dictionary to map old image paths to new image names
    image_map = {}

    # Function to replace image title and path
    def replacer(match):
        nonlocal counter
        new_image_name = f"image{str(counter).zfill(2)}.png"
        image_map[match.group(1)] = new_image_name
        result = f"![{str(counter).zfill(2)}.png]({new_image_name})"
        counter += 1
        return result

    # Replace all image titles and paths with new titles
    new_md_content = re.sub(image_pattern, replacer, md_content)

    # Update the image files
    for old_path, new_name in image_map.items():
        old_full_path = os.path.join(image_dir, old_path.split('/')[-1])  # Get the filename and join with image_dir
        new_full_path = os.path.join(image_dir, new_name)
        if os.path.exists(old_full_path):
            os.rename(old_full_path, new_full_path)

    # Write the modified content back to the file
    with open(md_file_path, 'w', encoding='utf-8') as file:
        file.write(new_md_content)

    return f"Markdown file processed and images renamed in '{md_file_path}'."

# Example file path (replace this with the actual path of your Markdown file)
md_file_path = '/Users/fuping/blog/source/_posts/ios-reverse-reactnative-case.md'

# Process the file and images
process_result = process_md_images(md_file_path)
process_result