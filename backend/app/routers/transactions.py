from fastapi import APIRouter, HTTPException
from app.schemas.transaction import TransactionCreate, TransactionResponse

router = APIRouter()

transactions = []

@router.get("/")
def get_transactions():
    return transactions

@router.post("/", response_model = TransactionResponse)
def create_transactions(transaction : TransactionCreate):
    new_transaction = transaction.model_dump()
    new_transaction["id"] = len(transactions) + 1
    transactions.append(new_transaction)
    return new_transaction


@router.get("/{transaction_id}",  response_model = TransactionResponse)
async def read_transaction(transaction_id : int):
        for transaction in transactions : 
           if transaction["id"] == transaction_id:
            return transaction
        raise HTTPException(status_code=404, detail="Item not found")  
    
    
    
@router.delete("/{transaction_id}")
def delete_item(transaction_id : int):
         for transaction in transactions : 
           if transaction["id"] == transaction_id:
            transactions.remove(transaction)
            return {"elemento eliminato"}
           raise HTTPException(status_code=404, detail="Item not found")    
    
