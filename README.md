🍽️ Food Ordering System

A web-based food ordering application built using HTML, CSS, JavaScript, and a JSON-based mock API.
The app allows users to browse a menu, view item details, and place simple orders that are stored locally via json-server.

# Features

Dynamic food menu display

Item images, names, and prices

Smooth background transitions

Ability to submit orders

Mock REST API for menu and order storage

Easy to run locally with minimal setup

# 📦 Project Structure
index.html       → Main interface  
style.css        → Stylesheet  
app.js           → Application logic  
db.json          → Mock database storing menu + orders  
images/          → Image assets

# 🛠️ Requirements

Node.js (includes npm)
https://nodejs.org

JSON Server for running the mock backend

▶️ Running the Application
1. Clone or download the project
git clone <your-repo-url>
cd food-ordering-system

2. Start the mock backend (JSON Server)
npx json-server --watch db.json --port 3000


Endpoints created automatically:

http://localhost:3000/menu

http://localhost:3000/orders

Keep this terminal running.

3. Open the frontend
Option A — Recommended (Local server)
npx serve .


Then open the URL shown (often http://localhost:5173).

Option B — Direct open

Double-click index.html
(Note: API requests still require JSON Server running.)

📌 How the App Works
Menu Loading

loadFoodMenu() fetches items from GET /menu and renders them dynamically.

Ordering

orderFood(itemId) sends:

POST /orders  
Body: { itemId: <id> }


The order is added to db.json, and a confirmation alert is shown.

⚙️ Troubleshooting
Issue	Possible Cause / Fix
Menu not loading = 	JSON Server not running
"Failed to fetch" error = 	Open via local server (npx serve .)
Orders not saving	= Check API_URL in app.js
Port conflict =	Change JSON Server port: --port 4001
✔️ Summary

This application provides a simple, clean food ordering interface supported by a mock REST API, making it easy to run, test, and customize locally.# hotel-management-system
