from motor.motor_asyncio import AsyncIOMotorClient # type: ignore
from fastapi import FastAPI # type: ignore

MONGO_DETAILS = "mongodb://localhost:27017/" 

client = AsyncIOMotorClient(MONGO_DETAILS)
database = client.your_database_name
anime_collection = database.get_collection("anime_collection")
