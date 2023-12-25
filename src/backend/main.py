from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
import json


# MongoDB bağlantısı
client = MongoClient("mongodb://myuser:mymongodbUser01!@my-mongodb:27017/")
db = client["search_db"]
collection = db["news"]


app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:5173",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# GET metodunu işleyen basit bir endpoint
@app.get("/search/{search_text}")
def read_root(search_text):
    #{"GAZETE":"Diken"}
    result = collection.search_text({"GAZETE":f"{search_text}"})

    result_list = []
    for news in result:
        news["_id"]=None
        result_list.append(news)

    return result_list

# POST metodunu işleyen basit bir endpoint
#@app.post("/search")
# def create_item(body:dict):
#     print(body)
#     return {"message": body["search_text"]}



