from pydantic import BaseModel
from typing import Literal , Optional
from datetime import date

class TransactionCreate(BaseModel):
    type: Literal["income", "expense"]
    amount: float
    category: str
    description: str | None = None
    date: date

class TransactionResponse(BaseModel):
    id : int 
    type: Literal["income", "expense"]
    amount: float
    category: str
    description: str | None = None
    date: date

class TransactionUpdate(BaseModel):
    type: Literal["income", "expense"] | None = None
    amount: float | None = None
    category: str | None = None
    description: str | None = None
    date: Optional[date] = None

class SummaryTransaction(BaseModel):
    total_income: float 
    total_expense: float 
    balance:float  

class CategoryTransaction(BaseModel):
    category : str
    total : float

class MonthlyReportItem(BaseModel):
    month : str
    income : float
    expense : float   