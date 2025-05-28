from pydantic import BaseSettings

class Settings(BaseSettings):
    MONGO_DETAILS: str = "mongodb://localhost:27017"
    SECRET_KEY: str = "SenpaiSaysWin"  # Change this in production!
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    JIKAN_BASE_URL: str = "https://api.jikan.moe/v4"

settings = Settings()
