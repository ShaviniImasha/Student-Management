# Git Setup Guide - Roots Integrated System

## ✅ Completed Setup

### Repository Information
- **Repository URL**: https://github.com/ShaviniImasha/Student-Management
- **Project**: Roots Integrated System (Student Management Platform)

### Branch Structure

Your repository has been set up with the following branches:

1. **master** - Main branch with complete project code
2. **Student-Management** - Student management features and pages
3. **Exams-&-Results-management** - Exam and results management
4. **Admin-control-and-Main-Dashboard** - Admin controls and main dashboard (includes Teacher & Staff pages)
5. **Fees-management** - Fees management features
6. **Attendance-Management** - Attendance tracking features
7. **Course-and-batch-management** - Course and batch management features

### What Each Branch Contains

All branches contain the **complete project code** including:
- `backend/` - Node.js/Express server with Firebase integration
- `frontend/` - React/Vite frontend application
- `package.json` files for both frontend and backend
- Configuration files and utilities

**Each branch is ready for independent development** on its respective feature area.

---

## 🚀 Quick Start for Team Members

### 1. Clone the Repository
```bash
git clone https://github.com/ShaviniImasha/Student-Management.git
cd Student-Management
```

### 2. Switch to Your Assigned Branch
```bash
# For Student Management feature
git checkout Student-Management

# For Exams & Results feature
git checkout Exams-&-Results-management

# For Admin Dashboard & Teacher/Staff
git checkout Admin-control-and-Main-Dashboard

# For Fees Management
git checkout Fees-management

# For Attendance Management
git checkout Attendance-Management

# For Course Management
git checkout Course-and-batch-management
```

### 3. Install Dependencies
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 4. Create a Local Branch for Your Changes
```bash
git checkout -b feature/your-feature-name
```

### 5. Commit and Push Your Changes
```bash
# Stage changes
git add .

# Commit with meaningful message
git commit -m "Description of your changes"

# Push to your branch
git push origin feature/your-feature-name

# Create a Pull Request on GitHub to merge into the feature branch
```

---

## 📋 Workflow Instructions

### For New Features or Bug Fixes:

1. **Pull latest changes** from your assigned branch:
   ```bash
   git pull origin Student-Management
   ```

2. **Create a feature branch** from your assigned branch:
   ```bash
   git checkout -b feature/FEATURE_NAME
   ```

3. **Make your changes** and test them locally

4. **Commit your changes**:
   ```bash
   git commit -m "feat: Add new feature description"
   ```

5. **Push to remote**:
   ```bash
   git push origin feature/FEATURE_NAME
   ```

6. **Create a Pull Request** on GitHub to merge into your assigned branch

---

## ⚙️ Git Configuration

Your repository is configured with:
- **User**: Root Integrated System Team
- **Email**: team@rootsintegrated.com

If you need to change this for your personal commits:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

## 🔗 Useful Git Commands

### View All Branches
```bash
git branch -a
```

### Pull Latest Changes
```bash
git pull origin BRANCH_NAME
```

### View Commit History
```bash
git log --oneline -10
```

### Check Current Status
```bash
git status
```

### Compare Branches
```bash
git diff BRANCH_NAME..master
```

### Merge Feature Branch Back to Main Branch
```bash
git checkout Student-Management
git pull origin Student-Management
git merge feature/FEATURE_NAME
git push origin Student-Management
```

---

## 📝 Commit Message Convention

Please use clear, descriptive commit messages:

- `feat: Add new feature` - For new features
- `fix: Fix bug description` - For bug fixes
- `docs: Update documentation` - For documentation changes
- `style: Format code` - For code style changes
- `refactor: Refactor module name` - For code refactoring
- `test: Add test cases` - For adding tests

**Example**:
```bash
git commit -m "feat: Add student registration form validation"
```

---

## ⚠️ Important Notes

1. **Do NOT force push** unless absolutely necessary
2. **Always pull before pushing** to avoid conflicts
3. **Test your changes locally** before pushing
4. **Keep branch names consistent** with the assigned branch names
5. **Communicate with team** before making major changes to shared files

---

## 🆘 Troubleshooting

### If you encounter merge conflicts:
```bash
# See which files have conflicts
git status

# Edit the files to resolve conflicts manually
# Then:
git add .
git commit -m "Resolve merge conflicts"
git push origin BRANCH_NAME
```

### If you accidentally committed to the wrong branch:
```bash
# Create a new branch from current state
git branch feature/new-branch

# Go back to master and reset
git checkout master
git reset --hard origin/master
```

### If you need to undo recent commits:
```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1
```

---

## 📞 Support

For issues or questions about Git setup, contact the project lead or check GitHub documentation at: https://docs.github.com/en

---

**Last Updated**: April 27, 2026
**Repository**: https://github.com/ShaviniImasha/Student-Management
