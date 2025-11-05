# 📊 Task Manager Data Storage Guide

## 🔍 Where Your Data Is Currently Stored

### Browser localStorage
- **Location**: Your web browser's local storage
- **Key Name**: `tasks`
- **Format**: JSON string
- **Persistence**: Saved until you clear browser data
- **Scope**: Only accessible from the same file/domain

## 📂 How to View Your Data

### Method 1: Browser Developer Tools
1. Open your task manager in the browser
2. Press `F12` to open Developer Tools
3. Go to the **Application** tab (Chrome) or **Storage** tab (Firefox)
4. Click **Local Storage** → `file://`
5. Look for the key named `tasks`
6. Your data will be shown as a JSON string

### Method 2: Console Command
1. Open Developer Tools (`F12`)
2. Go to **Console** tab
3. Type: `localStorage.getItem('tasks')`
4. Press Enter to see your raw data

### Method 3: Export Feature (Added Below)
- Use the new "Export Data" button in the app
- Downloads a JSON file with all your tasks

## 💾 Data Storage Options Available

### Current: localStorage ✅
- **Pros**: No setup required, fast, offline-capable
- **Cons**: Browser-specific, can be lost if browser data cleared

### Enhanced Options Added:
1. **JSON File Export/Import** - Download/upload your data
2. **CSV Export** - For Excel/Google Sheets
3. **Data Backup Reminder** - Periodic backup suggestions
4. **Multiple Browser Sync** - Via file import/export

## 🔧 Data Format Structure

```json
[
  {
    "id": "1699168123456",
    "title": "Sample Task",
    "description": "Task description here",
    "priority": "High",
    "dueDate": "2025-11-10",
    "completed": false
  }
]
```

## 🚨 Data Safety Tips

1. **Regular Backups**: Export your data weekly
2. **Browser Data**: Don't clear browser data without backing up
3. **Multiple Devices**: Use export/import to sync between computers
4. **File Storage**: Keep exported JSON files as backups