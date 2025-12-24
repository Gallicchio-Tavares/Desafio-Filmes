from pathlib import Path
from PIL import Image

PASTA_ORIGEM = Path("assets/conquistas")
PASTA_DESTINO = Path("assets/conquistas_webp")
QUALIDADE = 85  # equilíbrio tamanho x qualidade

def converter_para_webp():
    if not PASTA_ORIGEM.exists():
        print("Pasta de origem não encontrada:", PASTA_ORIGEM)
        return

    PASTA_DESTINO.mkdir(parents=True, exist_ok=True)

    for img_path in PASTA_ORIGEM.iterdir():
        if img_path.suffix.lower() not in [".jpg", ".jpeg", ".png"]:
            continue

        webp_path = PASTA_DESTINO / f"{img_path.stem}.webp"

        try:
            with Image.open(img_path) as img:
                img.save(
                    webp_path,
                    "WEBP",
                    quality=QUALIDADE,
                    method=6
                )

            print(f"✔ {img_path.name} → conquistas_webp/{webp_path.name}")

        except Exception as e:
            print(f"Erro em {img_path.name}: {e}")

if __name__ == "__main__":
    converter_para_webp()
