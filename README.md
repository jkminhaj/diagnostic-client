# Health Service Platform

### live link : https://doctor-12-fd0e1.web.app
## Technologies Used:


### Frontend:
- **React.js:** Used for building the client-side application, creating interactive UI components, and managing state efficiently.
- **Axios:** Utilized for making HTTP requests to the server to fetch and send data.
- **SweetAlert2:** Integrated for displaying attractive and responsive alerts.

### Backend:
- **Node.js:** Employed as the runtime environment for the server-side application.
- **Express.js:** Utilized as the web application framework for building robust APIs.
- **MongoDB:** Chosen as the NoSQL database to store and manage data efficiently.
- **Mongoose:** Implemented as an Object Data Modeling (ODM) library for MongoDB and Node.js.

## Features Implemented:

### User Management:
- **User Registration:** Implemented an API endpoint to allow users to register with the platform.
- **User Profile Update:** Provided the ability for users to update their profile details.

### Banner Management:
- **Add Banner:** Created an API endpoint for adding promotional banners with details such as name, title, image, description, coupon code, and coupon rate.
- **View Banners:** Implemented an API endpoint to fetch and display all banners.
- **Activate Banner:** Developed functionality to activate a specific banner for display.

### Test Management:
- **Add Test:** Implemented an API endpoint for adding health tests with details such as test name, image URL, details, price, date, and available slots.
- **View Tests:** Created an API endpoint to fetch and display all available health tests.
- **Update Test:** Provided functionality to update test details, including modifying test name, image, details, price, date, and available slots.

### Reservation Management:
- **Book Test:** Implemented an API endpoint for users to book a health test and reserve a slot.
- **View Reservations:** Developed an API endpoint to fetch and display all reservations made by users.
- **Cancel Reservation:** Provided functionality for users to cancel their test reservations.

### Recommendation Management:
- **View Recommendations:** Created an API endpoint to fetch and display health recommendations.
### General:
- **Pagination:** Implemented pagination for efficiently handling large datasets.
- **Database Connectivity:** Established a connection to MongoDB using the Mongoose library.
- **Error Handling:** Implemented error handling mechanisms to provide informative responses to users in case of issues.
- **Deployment:** Deployed the application to a server and confirmed successful connection to MongoDB.
