# Python tabanlı bir imaj kullan
FROM python:3.9-slim

# Uygulama dosyalarını kopyala
COPY . /app

# FastAPI ve Uvicorn'u yükle
RUN pip install -r /app/requirements.txt

EXPOSE 8080

# Uygulamayı çalıştır
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8080"]