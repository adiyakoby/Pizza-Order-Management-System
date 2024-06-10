package app.Orders;

import java.util.ArrayList;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

public  class OrdersController {

    private static final ConcurrentHashMap<String, Order> orders = new ConcurrentHashMap<>();

    public static synchronized ArrayList<Order> getAllOrders() {
        return new ArrayList<>(orders.values());
    }

    public static synchronized Order getOrder(String id) {
        return orders.get(id);
    }

    public static synchronized void addOrder(Order order) {
        order.setId(UUID.randomUUID().toString());
        orders.put(order.getId(), order);
    }
}
