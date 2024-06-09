package hac.restapi;
import hac.Orders.Ingredients;
import hac.Orders.Order;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class OrdersRestController {

    private static final Logger logger = LogManager.getLogger(OrdersRestController.class);

    private final Map<Long, Order> orders = new HashMap<Long, Order>();

    @GetMapping("")
    public Map<Long, Order> getOrders() {
        return orders;
    }


    @GetMapping("/ingredients")
    public Map<String, String> getIngredients() {
        logger.info("got all books");
        return Ingredients.getAllIngredients();
    }

    @PostMapping("")
    public ResponseEntity<Order> addOrder(@RequestBody Order order) {
        orders.put((long) orders.size(), order);
        logger.info("added order {}", order);
        return ResponseEntity.ok(order);
    }

    @GetMapping("{id}")
    public ResponseEntity<Order> getOrder(@PathVariable long id) {
        logger.info("got order {}", id);
        Order order = orders.get(id);
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
