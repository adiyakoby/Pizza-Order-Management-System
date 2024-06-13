package app.Orders;

import app.Pizzas.Pizza;

import java.util.ArrayList;

import static app.utils.Validation.*;

/**
 * Represents an order.
 */
public class Order {
    private String id;
    private String firstName;
    private String lastName;
    private Address address;
    private String number;
    private ArrayList<Pizza> pizzas;

    /**
     * Constructor for Order.
     *
     * @param firstName the first name of the customer.
     * @param lastName  the last name of the customer.
     * @param address   the address of the customer.
     * @param number    the phone number of the customer.
     * @param pizzas    the list of pizzas in the order.
     */
    public Order(String firstName, String lastName, Address address, String number, ArrayList<Pizza> pizzas) {
        checkNotEmpty(firstName);
        checkNotEmpty(lastName);
        checkNotNull(address);
        checkNotEmptyAndEqualLength(number, 10);
        checkNotNullAndLengthAboveEq(pizzas, 1);

        for (Pizza pizza : pizzas) {
            checkNotNullAndLengthAboveEq(pizza.getIngredients(), 2);
        }

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.number = number;
        this.pizzas = pizzas;
    }

    // Getters and setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public Address getAddress() {
        return address;
    }

    public String getNumber() {
        return number;
    }

    public ArrayList<Pizza> getPizzas() {
        return pizzas;
    }

}
