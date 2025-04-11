# 🔍 Search Page

- A responsive and fast search interface built using **React 19**, **Vite**, and **Material UI** with tag filtering,
  API integration, and modern UI patterns.


## 🚀 **Features**

1. **Search Interface:**
   - Responsive search bar to filter items from the API.
   - Debounced input handling to reduce excessive API calls.

2. **Tag Filters:**
   - Interactive tag buttons (TagButton) with active state.
   - Automatically triggers search upon tag click.
   - Active tag highlighting.

3. **Dynamic Card Results:**
   - Results displayed using the CardItem component.
   - Each card includes a title, description, image, and external link.

4. **Error & Empty State Handling:**
   - ErrorPage, Loading, and DataNotFound components handle API states.
   - Graceful UI feedback for users on loading, empty, or failed states.
   
5. **Custom Hook:**
   - useLanguageData abstracts API calls using useCallback, improving reusability and state management.


5. **Custom Styling:**
   - Centralized styling via a `styles.ts` file.
   - Centralized MUI styling with sx and customStylesSearch. 
   - Custom illustrations and assets for branding.

---

## 🛠️ **Technologies Used**

- **React 19** – Frontend framework
- **Vite** –  Ultra-fast development server and bundler
- **Material UI (MUI)** –  Component-based UI framework
- **Axios** – HTTP client for API calls
- **TypeScript** – Type-safe development

---

## 🔑 **How to Run the Project**

### 1. **Clone the Repository**
```bash
git clone https://github.com/dcasia/frontend-test.git
```

### 2. **Navigate to the Project Directory**
```bash
cd your-repo
```

### 3. **Install Dependencies**
```bash
npm install
```

### 4. **Start the Application**
```bash
npm run dev
```