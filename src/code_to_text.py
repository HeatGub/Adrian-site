import os


def collect_source_code(extensions, forbidden_phrases, output_file="source_code.txt"):
    root_dir = os.getcwd()
    # Definiujemy foldery do zignorowania
    ignored_dirs = {".nuxt", "node_modules", ".git"}

    with open(output_file, "w", encoding="utf-8") as outfile:
        for root, dirs, files in os.walk(root_dir):
            # MODYFIKACJA: Usuwamy ignorowane foldery z listy dirs
            # Musimy użyć dirs[:] (modyfikacja w miejscu), aby os.walk to uwzględnił
            dirs[:] = [d for d in dirs if d not in ignored_dirs]

            for file in files:
                # Sprawdzenie rozszerzenia
                if any(file.endswith(ext) for ext in extensions):
                    # Sprawdzenie zakazanych fraz
                    if any(phrase in file for phrase in forbidden_phrases):
                        continue

                    if file == output_file:
                        continue

                    file_path = os.path.join(root, file)
                    relative_path = os.path.relpath(file_path, root_dir)

                    try:
                        with open(file_path, "r", encoding="utf-8") as infile:
                            content = infile.read()
                            outfile.write(f"--- START OF FILE: {relative_path} ---\n")
                            outfile.write("```\n")
                            outfile.write(content)
                            outfile.write("\n```\n")
                            outfile.write(f"--- END OF FILE: {relative_path} ---\n\n")
                        print(f"Dodano: {relative_path}")
                    except Exception as e:
                        print(f"Błąd przy odczycie {relative_path}: {e}")


if __name__ == "__main__":
    # KONFIGURACJA:
    EXTENSIONS = [".ts", ".tsx"]  # Jakie rozszerzenia zbierać
    FORBIDDEN = [
        "code_to_text",
        ".pyc",
        "setup",
        "__init__",
    ]  # Jakich fraz unikać w nazwie

    collect_source_code(EXTENSIONS, FORBIDDEN)
    print("\nGotowe! Cały kod został zapisany w: source_code.txt")
