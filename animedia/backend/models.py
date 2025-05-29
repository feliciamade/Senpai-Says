from typing import Optional, List
from pydantic import BaseModel, Field
from datetime import datetime

class UserCreate(BaseModel):
    username: str
    password: str

class UserOut(BaseModel):
    id: str = Field(alias="_id")
    username: str

class Token(BaseModel):
    access_token: str
    token_type: str

class AnimeFavorite(BaseModel):
    mal_id: int
    notes: Optional[str] = None

class AnimeFavoriteOut(BaseModel):
    mal_id: int
    notes: Optional[str] = None
    added_at: datetime
    anime_details: dict
