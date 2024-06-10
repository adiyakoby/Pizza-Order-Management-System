package app.Orders;

public class Order {
    private String id;
    private String firstName;
    private String lastName;
    private String address;
    private String number;

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

    public String getAddress() {
        return address;
    }

    public String getNumber() {
        return number;
    }


}
