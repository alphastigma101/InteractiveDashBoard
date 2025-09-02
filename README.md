# JavaScript, HTML & CSS Learning Project

![HTML CSS JS](https://img.shields.io/badge/-HTML%20%7C%20CSS%20%7C%20JS-3178C6?logo=javascript&logoColor=white)

A simple project covering fundamental concepts of JavaScript, HTML, and CSS.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14+ recommended)

### Installation & Execution
```bash
node name_of_program.js
```

## 📂 Project Structure
```
project/
├── OdinJs/          # Folders that contain a series of lessions from OdinJs
├── Library/src/      # Contains Stylesheets and index.html and index.js which is crucial
├── Library/dist/      # is where main.js is and that is where everything gets executed
├── OdinJs/Notes     # Contains Profiling info
└── README.md        # This file shows you how to run the project
```

## 📚 Learning Resources
- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript.info](https://javascript.info/)
- [CSS-Tricks](https://css-tricks.com/)

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first.

## 📜 License
[MIT](https://choosealicense.com/licenses/mit/)

## Setup Process

1. **Initialize Project**  
   ```bash
   mkdir Library && cd Library
   npm init -y
   ```

2. **Install Dependencies**  
   ```bash
   npm install --save-dev \
     webpack \
     webpack-cli \
     html-webpack-plugin \
     style-loader \
     css-loader \
     html-loader \
     webpack-dev-server
   ```

3. **Configuration**  
   Created `webpack.config.js` with basic setup

4. **Run Development Server**  
   ```bash
   npx webpack serve
   ```
   - Project available at: [http://localhost:8080](http://localhost:8080)

## Getting Started
```bash
cd Library
npx webpack serve
```



