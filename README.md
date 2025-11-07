# 🐄 Cow Catalog (Angular 20)

A simple **Angular 20** app demonstrating standalone components. This is a **frontend-only** application — using local storage. All data is stored in memory during runtime.

---

## 🚀 Features

- **Cow List**
  - View a list of cows with basic details: ear tag, sex, pen, status, and last event.
  - Search by cow ear tag.
  - Filter cows by **status** (`Active`, `In Treatment`, `Deceased`) or **pen** (`North Barn`, `Treatment Zone`, `Quarantine Area`, `South Barn`).
  - Filterable data persists after we come back from add or detail page.

- **Add New Cow**
  - Add a new cow in-memory.
  - Used Template driven form for this implementation with validations.

- **Add Detail Page**
  - When clicking on any row in list page, detailed page is opened up.

- **Standalone Components**
  - Demonstrates Angular's standalone component approach (no module declarations required).

- **Responsive UI**
  - The layout adapts to different screen sizes.
  - Simple toolbar for search and filters.

---

## 🎬 Demo

<video src="https://github.com/YOUR_USERNAME/Cow-Catalog/src/assets/demo.webm" controls width="600">
  Your browser does not support the video tag.
</video>

---

## 🛠️ Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/amohata007/Cow-Catalog.git
cd cow-catalog
ng s --o
