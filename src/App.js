import React,{useEffect} from "react";
import "./App.css"; // Import custom CSS file
// You can add any necessary CSS styles in App.css

function App() {
  // Function to handle theme change
  const handleThemeChange = (theme) => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Store the theme in localStorage
  };

  // Function to load the theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      document.body.setAttribute("data-theme", storedTheme);
    }
  }, []);

  return (
    <div className="content-container">
      <div className="row justify-content-center">
        <div className="col-md-6 hero-section">
          <h1 className="hero-section-title">Theming System</h1>
          <p className="hero-section-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="select-theme">
            <h5 className="select-theme-heading">Select a Theme from below</h5>
            <div className="theme-buttons">
              <button
                className="theme-btn light-theme"
                onClick={() => handleThemeChange("light-theme")}
              >
                Light
              </button>
              <button
                className="theme-btn dark-theme"
                onClick={() => handleThemeChange("dark-theme")}
              >
                Dark
              </button>
              <button
                className="theme-btn sea-theme"
                onClick={() => handleThemeChange("sea-theme")}
              >
                Sea Wave
              </button>
              <button
                className="theme-btn sharp-theme"
                onClick={() => handleThemeChange("sharp-theme")}
              >
                Sharp
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img
            className="hero-img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Hero_MotoCorp_Logo.svg/2560px-Hero_MotoCorp_Logo.svg.png"
            alt="Hero"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
