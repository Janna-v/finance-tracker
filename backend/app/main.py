from app.models.transaction import Base
from app.database import engine
from fastapi import FastAPI
from app.routers.transactions import router as transactions_router

app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

@app.get("/")
def root():
    return {"message": "Finance Tracker API"}

@app.get("/health")
def health():
    return {"status" : "ok"}


app.include_router(transactions_router, prefix="/transactions", tags=["Transactions"])

