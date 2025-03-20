# Chess Multiplayer Game 🎉

A real-time chess game built with **React, WebSockets, and Chess.js**.

## Features
- Play chess in real-time with another player.
- WebSocket-based communication for instant moves.
- Responsive and interactive UI.
- Uses **chess.js** for move validation.

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Chess.js
- **Backend**: Node.js, WebSockets (ws)
- **Communication**: WebSockets for real-time move updates

---

## Getting Started 🚀

### 1. Clone the Repository
```sh
git clone https://github.com/sanketkharat28/playChess
cd playChess
```

### 2. Install Dependencies
Backend:
```sh
cd backend1
npm install
```

Frontend:
```sh
cd frontend
npm install
```

### 3. Run the Application
Start Backend Server:
```sh
cd backend
node dist/index.js
```

Start Frontend:
```sh
cd frontend
npm run dev
```

The frontend will be available at http://http://localhost:5173
## How It Works ⚡
1. User connects to WebSocket server via `ws://localhost:8080`.  
2. Game pairing: When two users connect, they are matched into a game.  
3. Move handling:  
   - Click a piece → Click destination square → Move is sent to the server.  
   - The move is validated and broadcasted to both players.  
4. Game over detection: The game ends when checkmate or draw conditions are met.  



### Contributions & Issues
Feel free to open an issue or submit a pull request! 🤝


