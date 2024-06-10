package app.Orders;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class OrdersController {

    private static final Map<Long, Order> orders = new HashMap<>();

    public static ArrayList<Order> getAllOrders() {
        return new ArrayList<>(orders.values());
    }

    public static Order getOrder(long id) {
        return new Order(orders.get(id));
    }

    public static void addOrder(Order order) {
        order.setId((long)orders.size() + 1);
        orders.put((long)orders.size() + 1, order);
    }
}
