package app.Orders;

import java.util.ArrayList;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Controller for managing orders.
 */
public  class OrdersController {

    private static final ConcurrentHashMap<String, Order> orders = new ConcurrentHashMap<>();


    /**
     * Get all orders.
     *
     * @return a list of all orders.
     */
    public static synchronized ArrayList<Order> getAllOrders() {
        return new ArrayList<>(orders.values());
    }

    /**
     * Get an order by ID.
     *
     * @param id the ID of the order to retrieve.
     * @return the requested order.
     */
    public static synchronized Order getOrder(String id) {
        return orders.get(id);
    }

    /**
     * Add a new order.
     *
     * @param order the order to add.
     */
    public static synchronized void addOrder(Order order) {
        order.setId(UUID.randomUUID().toString().substring(0, 8));
        orders.put(order.getId(), order);
    }
}
