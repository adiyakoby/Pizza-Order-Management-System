package app.Orders;

import app.Pizzas.Pizza;

import java.util.ArrayList;

public class Order {
    private Long id;
    private String firstName;
    private String lastName;
    private String address;
    private String number;
//    private ArrayList<Pizza> pizzas;

    public Order() {
    }

    public Order(String firstName, String lastName, String address, String number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.number = number;
    }

    public Order(Order order) {
        this.id = order.id;
        this.firstName = order.firstName;
        this.lastName = order.lastName;
        this.address = order.address;
        this.number = order.number;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }


//    public ArrayList<Pizza> getPizzas() {
//        return this.pizzas;
//    }
//
//    public void setPizzas(ArrayList<Pizza> pizzas) {
//        this.pizzas = pizzas;
//    }
}
