from pydantic import BaseModel
from typing import Literal

class TransactionCreate(BaseModel):
    type: Literal["income", "expense"]
    amount: float
    category: str
    description: str | None = None

class TransactionResponse(BaseModel):
    id : int 
    type: Literal["income", "expense"]
    amount: float
    category: str
    description: str | None = None
