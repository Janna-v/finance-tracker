from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


# =========================
# POST - CREATE TRANSACTION
# =========================
def test_create_transaction():
    response = client.post(
        "/transactions/",
        json={
            "type": "income",
            "amount": 100,
            "category": "Food",
            "description": "test",
            "date": "2026-06-15"
        }
    )

    assert response.status_code == 200

    data = response.json()
    assert data["type"] == "income"
    assert data["amount"] == 100
    assert data["category"] == "Food"


# =========================
# GET ALL TRANSACTIONS
# =========================
def test_get_transactions():
    response = client.get("/transactions/")

    assert response.status_code == 200

    data = response.json()
    assert isinstance(data, list)


# =========================
# GET SINGLE TRANSACTION
# =========================
def test_get_single_transaction():
    # prima creo una transazione
    create = client.post(
        "/transactions/",
        json={
            "type": "expense",
            "amount": 50,
            "category": "Transport",
            "description": "bus",
            "date": "2026-06-15"
        }
    )

    transaction_id = create.json()["id"]

    response = client.get(f"/transactions/{transaction_id}")

    assert response.status_code == 200
    assert response.json()["id"] == transaction_id


# =========================
# DELETE TRANSACTION
# =========================
def test_delete_transaction():
    create = client.post(
        "/transactions/",
        json={
            "type": "income",
            "amount": 30,
            "category": "Gift",
            "description": "test delete",
            "date": "2026-06-15"
        }
    )

    transaction_id = create.json()["id"]

    response = client.delete(f"/transactions/{transaction_id}")

    assert response.status_code == 200
    assert response.json()["eliminato"] is True