# React Language Translation Package

## A lightweight and easy-to-use solution for adding language translation to your React application using Context and Hooks.

## 🚀 Installation
You can install this package in your project using either npm or yarn.

```bash
# Using npm
npm install alurchop-language-switcher

# Using yarn
yarn add alurchop-language-switcher

```
## 💻 Usage
After installation, you can import and use the components and hooks in your application.

### 1. Define your translations

```bash
const myTranslations = {
  en: {
    greeting: "Hello, World!",
    welcome: "Welcome to the application."
  },
  es: {
    greeting: "¡Hola, Mundo!",
    welcome: "Bienvenido a la aplicación."
  }
};
```
### 2. Wrap your application with LanguageProvider
 Import the LanguageProvider and use it to wrap your entire application, or just the parts that need to be translated. You must pass your translations object and a defaultLang string.

 ```bash
 // App.js
import React from 'react';
import { LanguageProvider } from 'alurchop-language-switcher';
// other imports...

const myTranslations = {
  en: {
    greeting: "Hello, World!",
    welcome: "Welcome to the application."
  },
  es: {
    greeting: "¡Hola, Mundo!",
    welcome: "Bienvenido a la aplicación."
  }
};

const App = () => {
  return (
    <LanguageProvider translations={myTranslations} defaultLang="en">
      {/* Your entire app goes here */}
    </LanguageProvider>
  );
};

export default App;
```
### 3. Use the useLanguage hook in your components
In any child component of LanguageProvider, you can import and use the useLanguage hook to get the translation function t and the changeLanguage function.

```bash
import React from 'react';
import { useLanguage } from 'alurchop-language-switcher';

const MyComponent = () => {
  // Access the translation function 't'
  const { t } = useLanguage();

  return (
    <div>
      <h1>{t('greeting')}</h1>
      <p>{t('welcome')}</p>
    </div>
  );
};
```
### 4.  Add a language toggle
You can use the provided LanguageToggle component to easily add a language selection UI to your app. It takes an array of language codes as a prop.

```bash
// App.js
import React from 'react';
import { LanguageProvider, LanguageToggle, changeLanguage } from 'alurchop-language-switcher';

const myTranslations = {
  en: {
    greeting: "Hello, World!",
    welcome: "Welcome to the application."
  },
  es: {
    greeting: "¡Hola, Mundo!",
    welcome: "Bienvenido a la aplicación."
  }
};

const App = () => {
  return (
    <LanguageProvider translations={myTranslations} defaultLang="en">
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <LanguageToggle languages={['en', 'es']} />
         {/* or use a button */}
         <button onClick={() => changeLanguage('es')}>Change to Spanish</button>

        {/* The rest of your application */}
      </div>
    </LanguageProvider>
  );
};

export default App;
```