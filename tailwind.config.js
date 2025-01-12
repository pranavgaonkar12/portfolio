module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all relevant files
  ],
  theme: {
    extend: {
      animation: {
        borderPulse: 'borderPulse 3s infinite',
        slidein300: "slidein 1s ease 300ms",
        slidein500: "slidein 1s ease 500ms",
        slidein700: "slidein 1s ease 700ms",
        text: "text 5s ease infinite", // Adding gradient animation for text
      },
      keyframes: {
        borderPulse: {
          '0%, 100%': { borderColor: '#ec4899' }, // Pink
          '33%': { borderColor: '#f59e0b' }, // Yellow
          '66%': { borderColor: '#3b82f6' }, // Blue
        },
        borderPulse: {
          '0%, 100%': { borderColor: 'rgba(255, 99, 71, 1)' }, // Tomato color
          '50%': { borderColor: 'rgba(135, 206, 235, 1)' }, // SkyBlue color
        },
        slidein: {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};
