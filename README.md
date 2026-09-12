# Finance Tracker

Applicazione full stack per la gestione delle finanze personali, con API FastAPI e interfaccia React in **JavaScript**.**Progetto individuale di apprendimento.** Realizzato per consolidare Python e JavaScript attraverso un’applicazione completa di frontend, API REST e persistenza dei dati. Le funzionalità principali sono implementate; restano da completare l’allineamento dei test e alcune attività di manutenzione del repository, descritte nella sezione finale. È una demo formativa, con un ambito volutamente circoscritto, e non viene presentata come prodotto pronto per la produzione.

## Funzionalità implementate

- Creazione, lettura, modifica ed eliminazione delle transazioni.
- Registrazione di entrate e uscite con importo, categoria, descrizione e data.
- Filtri API per tipo, categoria e intervallo di date.
- Paginazione delle transazioni tramite `limit` e `offset`.
- Dashboard con entrate, uscite, saldo e categorie principali.
- Riepiloghi API per categoria e mese.

## Tecnologie

Python, FastAPI, Pydantic, SQLAlchemy, SQLite, React, JavaScript, React Router, Vite e Tailwind CSS.

## Struttura

- `backend/app/main.py`: applicazione, CORS e registrazione dei router.
- `backend/app/database.py`: connessione SQLite e sessioni.
- `backend/app/models/`, `schemas/`, `routers/`: dati, validazione e API.
- `backend/tests/`: test delle transazioni.
- `frontend/src/`: componenti, pagine, hook e chiamate API.
- `docsproject_decisions.md`: note sulle scelte del progetto.

## Requisiti e avvio locale

Servono Python compatibile con le versioni in `backend/requirements.txt` e Node.js compatibile con Vite 8, con npm. Il codice Python usa annotazioni che richiedono almeno Python 3.10; la compatibilità dell'intero insieme di dipendenze va verificata nell'ambiente scelto.

Dal repository, in PowerShell:

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m uvicorn app.main:app --reload
```

L'avvio va eseguito da `backend`: il percorso SQLite configurato è relativo alla directory corrente. L'applicazione crea le tabelle mancanti all'avvio.

In un secondo terminale, dalla radice del repository:

```powershell
cd frontend
npm ci
npm run dev
```

Aprire `http://localhost:5173`. L'API è su `http://localhost:8000`, con documentazione su `/docs`. La configurazione CORS consente il frontend su `http://localhost:5173`.

## API principali

| Metodo | Percorso | Funzione |
| --- | --- | --- |
| GET / POST | `/transactions/` | Elenco paginato / creazione |
| GET / PATCH / DELETE | `/transactions/{id}` | Dettaglio / modifica / eliminazione |
| GET | `/transactions/summary` | Entrate, uscite e saldo |
| GET | `/transactions/categories` | Totali per categoria |
| GET | `/transactions/monthly` | Riepilogo mensile |
| GET | `/transactions/dashboard` | Dati della dashboard |

## Test e stato

Sono presenti test con FastAPI TestClient. `pytest` e `httpx` non sono elencati nel file dei requisiti e vanno installati separatamente per eseguirli.

La suite richiede aggiornamenti: `test_get_transactions` si aspetta una lista, mentre l'API restituisce un oggetto con `data` e `totalPages`. Inoltre i test usano l'applicazione senza sostituire la dipendenza del database e possono scrivere sul database locale: eseguirli solo in una copia di prova con dati sacrificabili.

Il repository contiene anche database e file generati da rimuovere dal tracciamento in un intervento separato. La descrizione e le istruzioni derivano dall'analisi del codice; l'avvio e la suite non sono stati verificati durante questa revisione documentale.
