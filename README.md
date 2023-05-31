# Toxicity Detector React Framework Website

This is the front-end component of the Toxicity Detector web application, built using React framework. The React website allows users to input comments and receive predictions on whether the comments fall into any of the toxic categories.

## Prerequisites

Before running the React framework website, ensure that you have the following installed:

- Node.js
- npm (Node package manager)

## Getting Started

To run the React framework website locally, follow these steps:

1. Clone the repository: `git clone <repository_url>`
2. Navigate to the project directory: `cd toxicity-detector`
3. Switch to the `WebFramework` branch: `git checkout WebFramework`
4. Install the required dependencies: `npm install`

## Starting the React Development Server

Once the prerequisites are met and the dependencies are installed, you can start the React development server by following these steps:

1. Ensure you are in the project root directory.
2. Run the following command to start the development server:

   ```bash
   npm start
   ```

   This command starts the development server and automatically opens the Toxicity Detector website in your default browser.

3. The website is now running locally on `http://localhost:3000`. You should see the web interface where you can input comments and receive predictions.

## Making Predictions

The React website allows you to enter a comment and sends a prediction request to the FastAPI backend for toxicity classification. Here's how it works:

1. Enter a comment in the input field.
2. Click the "Predict" button.
3. The website sends a prediction request to the FastAPI backend running on `http://localhost:8000/predict`.
4. The backend processes the request and returns the predicted categories for the comment.
5. The React website displays the prediction results on the screen.

## Customization

You can customize the React website by modifying the `App.tsx` file in the `src` directory. You can update the UI, add additional features, or enhance the user experience according to your requirements.

## Contribution

Contributions to this project are welcome. Feel free to submit any issues or pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

## References

- [React Documentation](https://reactjs.org/)
- [Node.js Documentation](https://nodejs.org/)
- [npm Documentation](https://docs.npmjs.com/)
