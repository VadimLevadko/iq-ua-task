# Frontend Candidate Task

## Overview

This task evaluates your frontend development skills and software design abilities. You will build a small application that displays user information with weather data for each user's location.

**Submission Deadline: 2 days from receiving this task**

---

## Framework Selection

Choose **one** framework:

| Framework | Track | Requirements |
|-----------|-------|--------------|
| **Angular** | Standard | Base requirements only |
| **React** | Advanced | Base + Advanced requirements, TypeScript required |
| **Vue** | Advanced | Base + Advanced requirements, TypeScript required |

---

## Base Requirements (All Frameworks)

### Route 1: User List (Card View)

Display a list of user cards. Each card must include:

#### User Details
- Name
- Gender
- Profile image
- Location (city, country)
- Email

#### Weather Information
- Weather icon (sunny, cloudy, rainy, etc.)
- Current temperature
- Daily lowest temperature
- Daily highest temperature

---

## Advanced Requirements (React/Vue Only)

Candidates choosing React or Vue must implement the following **in addition to** base requirements.

### State Management (Required)

- **React**: Use Redux Toolkit OR Zustand
- **Vue**: Use Pinia

All API data must flow through the state management solution.

### Route 2: User Detail Page

Clicking a user card navigates to a detail page displaying:

#### Extended User Information
- Name
- Gender
- Profile image (larger)
- Location (city, country)
- Email

#### 7-Day Weather Forecast
- Date
- Weather icon
- High temperature
- Low temperature

#### Navigation
- Back button to return to user list

---

## Data Sources

### User API

**Random User API**
```
https://randomuser.me/api/?results=10
```

Documentation: [https://randomuser.me/documentation](https://randomuser.me/documentation)

### Weather API

**Open-Meteo API**

Current weather example:
```
https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto
```

7-day forecast (for React/Vue):
```
https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto
```

Documentation: [https://open-meteo.com/en/docs](https://open-meteo.com/en/docs)

---

## Technical Requirements

| Requirement | Details                                     |
|-------------|---------------------------------------------|
| **Responsive Design** | Must work on desktop, tablet, and mobile    |
| **TypeScript** | Required for React/Vue/Angular              |
| **Error Handling** | Handle API failures gracefully              |
| **Loading States** | Show loading indicators during data fetching |
| **No Authentication** | Not required                                |

---

## Evaluation Criteria

| Criteria | Weight | Description |
|----------|--------|-------------|
| **Functionality** | High | All features work correctly |
| **Code Quality** | High | Clean, readable, well-organized code |
| **Architecture** | Medium | Proper component structure, separation of concerns |
| **Responsiveness** | Medium | Works across device sizes |
| **Error Handling** | Medium | Graceful handling of edge cases and API failures |
| **TypeScript Usage** | Medium | Proper typing
| **UI/UX** | Low | Functional design; visual polish is secondary |

**Note**: A working application with basic styling is valued over a polished UI with broken functionality.

---

## Deliverables

Submit the following within **2 days**:

1. **GitHub Repository** - Link to public repository with source code
2. **Deployed Application** - Link to live, working application

---

## Summary

| Track | Framework | Routes | State Management | TypeScript |
|-------|-----------|--------|------------------|------------|
| Standard | Angular | 1 (User List) | Optional | Required |
| Advanced | React | 2 (List + Detail) | Required | Required |
| Advanced | Vue | 2 (List + Detail) | Required | Required |