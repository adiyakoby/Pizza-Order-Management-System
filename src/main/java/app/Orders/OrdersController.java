package app.Orders;

import ch.qos.logback.core.encoder.ByteArrayUtil;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class OrdersController {

    private static final Map<Long, Order> orders = new HashMap<Long, Order>();

    public static ArrayList<Order> getAllOrders() {
        return new ArrayList<>(orders.values());
    }

    public static Order getOrder(long id) {
        return orders.get(id);
    }

    public static void addOrder(Order order) {
        orders.put((long)orders.size() + 1,order);
    }
}
