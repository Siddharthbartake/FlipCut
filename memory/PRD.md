# FlipCut - Product Requirements Document

## Overview
FlipCut is an AI-powered image processing application that removes backgrounds from images and horizontally flips them, storing the results in the cloud for easy access and sharing.

## Architecture
```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   React SPA     │────▶│   FastAPI       │────▶│   MongoDB       │
│   (Frontend)    │     │   (Backend)     │     │   (Database)    │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                               │
                    ┌──────────┴──────────┐
                    ▼                      ▼
            ┌─────────────┐       ┌─────────────┐
            │  remove.bg  │       │  Cloudinary │
            │  (AI BG)    │       │  (Storage)  │
            └─────────────┘       └─────────────┘
```

## User Personas
1. **Content Creators** - Need quick background removal for social media
2. **E-commerce Sellers** - Product photo editing for listings
3. **Designers** - Rapid prototyping with transparent images
4. **Social Media Managers** - Bulk image processing needs

## Core Requirements
- [x] User authentication (Google OAuth via Emergent Auth)
- [x] Image upload (PNG, JPEG, WebP up to 8MB)
- [x] AI background removal (remove.bg API)
- [x] Horizontal flip transformation
- [x] Cloud storage (Cloudinary)
- [x] Image gallery with CRUD operations
- [x] Copy shareable URL
- [x] Download processed images
- [x] Delete images (cloud + DB)

## What's Been Implemented

### January 2025
- **Backend (FastAPI)**
  - Auth endpoints: /api/auth/session, /api/auth/me, /api/auth/logout
  - Image endpoints: upload, process, list, get, delete
  - remove.bg integration for background removal
  - Cloudinary integration for cloud storage
  - Pillow for horizontal flip

- **Frontend (React)**
  - Landing page with "Neon Void" dark theme
  - Google OAuth authentication flow
  - Dashboard with drag-and-drop upload
  - Image gallery with status badges
  - Processing steps indicator
  - Toast notifications
  - Delete confirmation dialog
  - Side-by-side image comparison

- **Database (MongoDB)**
  - Users collection
  - User sessions collection
  - Images collection with status tracking

## Tech Stack
- Frontend: React 19, TailwindCSS, shadcn/ui, Framer Motion
- Backend: FastAPI, Pydantic, Motor (async MongoDB)
- Database: MongoDB
- External Services: Cloudinary, remove.bg, Emergent Auth

## Prioritized Backlog

### P0 (Completed)
- [x] Basic auth flow
- [x] Image upload & processing
- [x] Gallery management
- [x] Cloud storage integration

### P1 (Next Phase)
- [ ] Batch image processing
- [ ] Processing history with timestamps
- [ ] Usage quota tracking
- [ ] Image transformations (resize, crop)

### P2 (Future)
- [ ] Multiple background options (solid colors, gradients)
- [ ] API rate limiting & throttling
- [ ] Webhook notifications
- [ ] Team/workspace features

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/session | Exchange OAuth session |
| GET | /api/auth/me | Get current user |
| POST | /api/auth/logout | Logout |
| POST | /api/images/upload | Upload image |
| POST | /api/images/{id}/process | Process image |
| GET | /api/images | List user images |
| GET | /api/images/{id} | Get single image |
| DELETE | /api/images/{id} | Delete image |

## Environment Variables
### Backend (.env)
- MONGO_URL
- DB_NAME
- CORS_ORIGINS
- REMOVEBG_API_KEY
- CLOUDINARY_CLOUD_NAME
- CLOUDINARY_API_KEY
- CLOUDINARY_API_SECRET

### Frontend (.env)
- REACT_APP_BACKEND_URL

## Next Tasks
1. Add batch processing for multiple images
2. Implement processing time tracking
3. Add image quality/format options
4. Create usage analytics dashboard
