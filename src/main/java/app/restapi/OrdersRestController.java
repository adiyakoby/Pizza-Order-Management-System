package app.restapi;
import app.Orders.OrdersController;
import app.Pizzas.Ingredients;
import app.Orders.Order;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class OrdersRestController {

    private static final Logger logger = LogManager.getLogger(OrdersRestController.class);


    @GetMapping("")
    public ArrayList<Order> getOrders() {
        logger.info("request all orders, sent: " + OrdersController.getAllOrders());
        return OrdersController.getAllOrders();
    }


    @GetMapping("/ingredients")
    public Map<String, String> getIngredients() {
        logger.info("got all books");
        return Ingredients.getAllIngredients();
    }

    @PostMapping("")
    public ResponseEntity<Order> addOrder(@RequestBody Order order) {
        OrdersController.addOrder(order);
        logger.info("added order {}", order);
        return ResponseEntity.ok(order);
    }

    @GetMapping("{id}")
    public ResponseEntity<Order> getOrder(@PathVariable int id) {
        Order order = OrdersController.getOrder(id);
        logger.info("got order {}", id);
        if (order == null) {
            logger.info("order not found");
        }
        return ResponseEntity.ok(order);
    }

    @ExceptionHandler({MethodArgumentTypeMismatchException.class, IllegalArgumentException.class})
    public ResponseEntity<String> handleAllExceptions(Exception ex) {
        return ResponseEntity.badRequest().body("Invalid request: " + ex.getMessage());
    }

}
