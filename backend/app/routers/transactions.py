from datetime import date

from fastapi import APIRouter, HTTPException
from app.schemas.transaction import TransactionCreate, TransactionResponse, TransactionUpdate
from fastapi import Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.transaction import Transaction

router = APIRouter()

@router.get("/", response_model=list[TransactionResponse])
def get_transactions(
    type: str  | None = None,
    category: str | None = None,
    date_from : date | None = None ,
    date_to : date | None = None,
    db:Session = Depends(get_db)
    ):
    query = db.query(Transaction)
    if type  : 
         query = query.filter(Transaction.type == type)

    if category: 
         query = query.filter(Transaction.category == category)     

    if date_from : 
         query = query.filter(Transaction.date >= date_from)

    if date_to: 
         query = query.filter(Transaction.date <= date_to)     

    return query.order_by(Transaction.date.desc()).all()
  


@router.post("/", response_model=TransactionResponse)
def create_transactions( transaction: TransactionCreate, db: Session = Depends(get_db)):
    db_transaction = Transaction(
        type=transaction.type,
        amount=transaction.amount,
        category=transaction.category,
        description=transaction.description,
        date=transaction.date)

    db.add(db_transaction)
    db.commit()
    db.refresh(db_transaction)

    return db_transaction


@router.get("/{transaction_id}",  response_model = TransactionResponse)
async def read_transaction(transaction_id : int, db: Session = Depends(get_db)):
        transaction =  db.get(Transaction, transaction_id)
        if transaction is None:
         raise HTTPException(status_code=404, detail="Transaction not found")
        return transaction
    
@router.delete("/{transaction_id}")
def delete_transaction(transaction_id : int , db: Session = Depends(get_db)):
         transaction = db.get(Transaction, transaction_id)
         if transaction is None :
            raise HTTPException(status_code=404, detail="Transaction not found")
         db.delete(transaction)
         db.commit()
         return {"eliminato" : True}


@router.patch("/{transaction_id}", response_model=TransactionResponse)
async def update_transaction(
    transaction_id: int,
    update: TransactionUpdate,
    db: Session = Depends(get_db)
):
    transaction = db.get(Transaction, transaction_id)

    if transaction is None:
        raise HTTPException(
            status_code=404,
            detail="Transaction not found"
        )

    update_data = update.model_dump(exclude_unset=True)

    for field, value in update_data.items():
        setattr(transaction, field, value)

    db.commit()
    db.refresh(transaction)

    return transaction
  



