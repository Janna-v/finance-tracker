from app.models.transaction import Base
from app.database import engine
from fastapi import FastAPI
from app.routers.transactions import router as transactions_router

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Finance Tracker API"}

@app.get("/health")
def health():
    return {"status" : "ok"}


app.include_router(transactions_router, prefix="/transactions", tags=["Transactions"])

Base.metadata.create_all(bind=engine)