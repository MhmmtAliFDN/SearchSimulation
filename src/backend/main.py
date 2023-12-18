from fastapi import FastAPI

app = FastAPI()

# GET metodunu işleyen basit bir endpoint
@app.get("/search/{search_text}")
def read_root(search_text):
    return {"message": f"Hello, FastAPI!{search_text}"}

# POST metodunu işleyen basit bir endpoint
@app.post("/search")
def create_item(search_text):
    return {"search_text_value": search_text}



