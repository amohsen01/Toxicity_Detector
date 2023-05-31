# FAST API Toxicity Detector Backend

This is the backend component of the Toxicity Detector web application, built using FastAPI. The backend is responsible for loading the trained model, processing user comments, and returning the predicted categories for each comment.

## Prerequisites

Before running the FastAPI backend, ensure that you have the following installed:

- Python 3.x
- pip (Python package manager)

## Getting Started

To run the FastAPI backend locally, follow these steps:

1. Clone the repository: `git clone <repository_url>`
2. Navigate to the project directory: `cd toxicity-detector`
3. Install the required Python packages: `pip install -r requirements.txt`

## Starting the FastAPI Backend Server

Once the prerequisites are met and the required packages are installed, you can start the FastAPI backend server by following these steps:

1. Ensure you are in the project root directory.
2. Run the following command to start the server:

   ```bash
   uvicorn main:app --reload
   ```

   This command starts the server using Uvicorn and automatically reloads the server on code changes.

3. The backend server is now running locally on `http://localhost:8000`. You should see log messages indicating that the server has started successfully.

## Testing the API

Once the server is up and running, you can test the API using an API testing tool like [Postman](https://www.postman.com/) or cURL commands.

To test the API using cURL, you can execute the following command in your terminal:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"comment": "Your comment goes here"}' http://localhost:8000/predict
```

Make sure to replace `"Your comment goes here"` with the comment you want to test.

The API endpoint `/predict` expects a JSON object with a single field called `"comment"`, which represents the comment to be classified. The API will respond with a JSON object containing the predicted categories for the comment.

## API Documentation

The FastAPI backend automatically generates interactive API documentation based on the defined endpoints and data models. You can access the API documentation by visiting `http://localhost:8000/docs` in your browser while the server is running.

The documentation provides details about the available API endpoints, request and response models, and allows you to test the API directly from the browser.

## Contribution

Contributions to this project are welcome. Feel free to submit any issues or pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

## References

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Uvicorn Documentation](https://www.uvicorn.org/)
- [cURL Documentation](https://curl.se/docs/)
- [Postman Documentation](https://learning.postman.com/docs/getting-started/introduction/)
