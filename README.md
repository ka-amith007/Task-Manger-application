# React Task Manager (Fresher level)

This is a small React Task Manager app demonstrating forms, state management, conditional rendering, and component structure.

## ✨ Features:
- Create tasks (title required) with description, priority, due date
- Edit, delete, toggle complete
- Filter by status (all/pending/completed) and priority  
- Beautiful modern UI with animations and gradients
- **Data Storage & Backup**:
  - Automatic localStorage persistence
  - Export to JSON backup files
  - Export to CSV for spreadsheets
  - Import from JSON backup files
  - Storage information display

## 💾 Data Storage Details:
- **Current Storage**: Browser localStorage (key: 'tasks')
- **Persistence**: Data saved automatically, persists until browser data cleared
- **Backup Options**: JSON export/import, CSV export
- **Location**: `C:\Users\Anusha\AppData\Local\[Browser]\User Data\Default\Local Storage`
- **Access**: F12 → Application → Local Storage → file:// → 'tasks' key

Quick start (Windows PowerShell):

1. Install dependencies

```powershell
cd "c:\Users\Anusha\Desktop\new one"
npm install
```

2. Run dev server

```powershell
npm run dev
```

Open the shown URL (usually http://localhost:5173) in your browser.

Notes:
- This project uses Vite + React. The UI uses simple CSS in `src/index.css`.
- Feel free to extend: add categories, persistent backend, or nicer UI frameworks (Tailwind/Bootstrap).
