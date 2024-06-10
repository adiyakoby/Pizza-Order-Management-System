package app.Orders;

import app.Pizzas.Pizza;

import java.util.ArrayList;

import static app.utils.Validation.*;

public class Order {
    private String id;
    private String firstName;
    private String lastName;
    private Address address;
    private String number;
    private ArrayList<Pizza> pizzas;


    public Order(String firstName, String lastName, Address address, String number, ArrayList<Pizza> pizzas) {
        checkNotEmpty(firstName);
        checkNotEmpty(lastName);
        checkNotNull(address);
        checkNotEmptyAndEqualLength(number, 10);
        checkNotNull(pizzas);

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.number = number;
        this.pizzas = pizzas;
    }

    public Order(Order order) {
        this.id = order.id;
        this.firstName = order.firstName;
        this.lastName = order.lastName;
        this.address = order.address;
        this.number = order.number;
        pizzas = order.pizzas;
    }

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
