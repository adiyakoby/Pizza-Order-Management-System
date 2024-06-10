package app.Orders;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

public class OrdersController {

    private static final Map<String, Order> orders = new HashMap<>();

    public static ArrayList<Order> getAllOrders() {
        return new ArrayList<>(orders.values());
    }

    public static Order getOrder(String id) {
        return orders.get(id);
    }

    public static void addOrder(Order order) {
        order.setId(UUID.randomUUID().toString());
        orders.put(order.getId(), order);
    }
}
