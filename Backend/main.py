<<<<<<< HEAD
from api.index import *
=======
from api.index import app

import uvicorn


if __name__ == "__main__":
    uvicorn.run("app.api:app", host="0.0.0.0", port=8000, reload=True)
>>>>>>> 5c3ddea662d964a29808d4aaf5a6f4315557a06b
