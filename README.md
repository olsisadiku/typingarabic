# Typing Arabic

A simple Arabic typing practice game that generates random Arabic-like words using a Markov chain model.

## Features

- **Random Word Generation**: Uses n-gram probability models to create Arabic-like words
- **Real-time Feedback**: Highlights correct/incorrect letters as you type
- **Progressive Difficulty**: Words are 5-7 characters long with varied complexity
- **Clean UI**: Modern, responsive design with beautiful gradients

## File Structure

```
typingarabic/
├── index.html              # Main game page
├── assets/
│   ├── css/
│   │   └── style.css       # All styling
│   └── js/
│       └── app.js          # Game logic and word generation
└── README.md
```

## How to Use

### GitHub Pages Deployment

1. Fork or clone this repository
2. Go to your repository settings on GitHub
3. Navigate to "Pages" section
4. Select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Your game will be available at `https://yourusername.github.io/typingarabic`

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/typingarabic.git
   cd typingarabic
   ```

2. Open `index.html` in your browser or serve it with a simple HTTP server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

3. Navigate to `http://localhost:8000`

## How It Works

The game uses a Markov chain model with Arabic letter probabilities to generate realistic-looking Arabic words. Each letter has a set of possible following letters with associated probabilities, creating natural-looking letter combinations.

## Customization

You can modify the word generation by editing the `grams` object in `assets/js/app.js`:

- Add new Arabic letters
- Adjust probability distributions
- Change word length ranges
- Modify the number of words generated per round

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b new-feature`
3. Make your changes
4. Commit: `git commit -am 'Add new feature'`
5. Push: `git push origin new-feature`
6. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
