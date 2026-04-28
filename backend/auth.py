from pydantic import BaseModel
from fastapi import APIRouter, HTTPException

router = APIRouter()

class LoginRequest(BaseModel):
    email: str
    password: str

class SignupRequest(BaseModel):
    name: str
    email: str
    password: str

@router.post("/signup")
async def signup(credentials: SignupRequest):
    # Simulated signup validation
    if not credentials.email or not credentials.password or not credentials.name:
        raise HTTPException(status_code=400, detail="Missing required fields")
    
    # Return simulated token on success
    return {
        "token": "fake-jwt-token-12345", 
        "user": {"email": credentials.email, "name": credentials.name, "role": "admin"}
    }

@router.post("/login")
async def login(credentials: LoginRequest):
    # Hardcoded check for authentic email login for now
    if credentials.email == "admin@scene.app" and credentials.password == "admin123":
        return {"token": "fake-jwt-token-12345", "user": {"email": credentials.email, "role": "admin"}}
    raise HTTPException(status_code=401, detail="Invalid email or password")
