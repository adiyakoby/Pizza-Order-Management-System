[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/Ke_DgSzD)

## Acknowledgements

Special thanks to Solange for granting permission to submit this project with a delay. Your understanding and support are greatly appreciated.

## Author - [Adi Yakoby - adija@edu.hac.ac.il]




# Pizza Order Management System

## Project Overview

This project is a Pizza Order Management System that allows users to customize pizzas with various ingredients, add them to their cart, and place orders. The system includes features like viewing and editing cart items, placing orders, and displaying order details.

## Features

- **Customizable Pizzas**: Users can select ingredients to create their own pizzas.
- **Cart Management**: Add, remove, and modify pizzas in the cart.
- **Order Placement**: Submit orders with customer details.
- **Order Details**: View details of placed orders using an order ID.

## Technologies Used

- **Frontend**:
    - **React**: Frontend library for building user interfaces.
    - **React Bootstrap**: UI components library based on Bootstrap.
    - **Context API**: State management for cart functionality.
    - **Custom Hooks**: Custom hooks for data fetching and handling.
    - **Local Storage**: Store ingredients and customer details locally.
- **Backend**:
    - **Java**: Programming language for backend logic.
    - **Spring Framework**: Framework for building the backend server.
    - **Spring Boot**: Module of Spring for creating standalone applications.
    - **Spring Data JPA**: For database operations.
    - **Spring MVC**: For handling web requests.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/adiyakoby/pizza-order-management.git
    ```

2. Navigate to the project directory:
    ```bash
    cd pizza-order-management
    ```

3. Install frontend dependencies:
    ```bash
    npm install
    ```

4. Start the frontend development server:
    ```bash
    npm start
    ```

5. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```

6. Install backend dependencies and run the Spring Boot application:
    ```bash
    ./mvnw spring-boot:run
    ```

## Usage

1. **Add Pizzas to Cart**: Select ingredients to create pizzas and add them to your cart.
2. **Manage Cart**: View, edit, and remove pizzas from your cart.
3. **Place Order**: Fill in customer details and place the order.
4. **View Order Details**: Enter the order ID to view details of placed orders.

## Website Capabilities

- **Home Page**: Displays the option to create a new pizza order or check an existing order.
- **Pizza Customization**: Users can select from a variety of ingredients to create their custom pizzas.
- **Cart Page**: Shows all the pizzas added to the cart, with options to modify or remove them.
- **Order Form**: Form for entering customer details and submitting the order.
- **Order Confirmation**: Displays a confirmation message with the order ID once an order is placed.
- **Order Check**: Allows users to check the status and details of their order using the order ID.

## Project Structure

- `src/Components`: Contains React components for the project.
    - `CartTable.js`: Displays the cart with pizzas and ingredients.
    - `OrderForm.js`: Form for entering customer details and placing orders.
    - `OrderDetails.js`: Displays details of placed orders.
    - `CustomerDetails.js`: Displays customer details within order details.
    - `CheckForm.js`: Form for checking order status.
- `src/Context`: Contains the CartContextProvider for managing cart state.
- `src/CustomHooks`: Contains custom hooks for data fetching and state management.
- `src/Utils`: Contains utility functions for handling cookies and other tasks.
- `backend`: Contains the Java Spring backend code.
    - `src/main/java`: Contains Java source files.
    - `src/main/resources`: Contains application properties and other resources.


