from pydantic import BaseModel
from typing import Literal , Optional
import datetime

class TransactionCreate(BaseModel):
    type: Literal["income", "expense"]
    amount: float
    category: str
    description: str | None = None
    date: datetime.date

class TransactionResponse(BaseModel):
    id : int 
    type: Literal["income", "expense"]
    amount: float
    category: str
    description: str | None = None
    date: datetime.date

class TransactionUpdate(BaseModel):
    type: Literal["income", "expense"] | None = None
    amount: float | None = None
    category: str | None = None
    description: str | None = None
    date: datetime.date | None = None

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