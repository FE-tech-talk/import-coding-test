SOURCE_DIR="./playground-template/"
TARGET_DIR="./playground/"

# Copy all files from source to target directory, overwriting existing files
cp -r "$SOURCE_DIR"* "$TARGET_DIR"

git add "$TARGET_DIR"

echo "$TARGET_FILE has been updated with the template."