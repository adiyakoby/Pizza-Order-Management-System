package app.Orders;

import app.Pizzas.Pizza;

import java.util.ArrayList;

public class Order {
    private Long id;
    private String firstName;
    private String lastName;
    private String address;
    private String number;
    private ArrayList<Pizza> pizzas;

    public Order() {
    }

    public Order(Long id, String firstName, String lastName, String address, String number) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.number = number;
    }
}
