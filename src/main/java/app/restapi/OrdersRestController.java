package app.restapi;
import app.Orders.OrdersController;
import app.Pizzas.Ingredient;
import app.Orders.Order;

import app.Pizzas.IngredientsController;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import java.util.ArrayList;

@RestController
@RequestMapping("/api")
public class OrdersRestController {

    private static final Logger logger = LogManager.getLogger(OrdersRestController.class);


    @GetMapping("")
    public ArrayList<Order> getOrders() {
        logger.info("requested all orders. ");
        return OrdersController.getAllOrders();
    }


    @GetMapping("/ingredients")
    public ArrayList<Ingredient> getIngredients() {
        logger.info("requests all ingredients. ");
        return IngredientsController.getIngredients();
    }

    @PostMapping("")
    public ResponseEntity<Order> addOrder(@RequestBody Order order) {
        OrdersController.addOrder(order);
        logger.info("added order {}", order);
        return ResponseEntity.ok(order);
    }

    @GetMapping("{id}")
    public Order getOrder(@PathVariable String id) {
        Order order = OrdersController.getOrder(id);
        logger.info("requests order {}", id);
        if (order == null) {
            logger.info("order not found");
        }
        return order;
    }

    @ExceptionHandler({MethodArgumentTypeMismatchException.class, IllegalArgumentException.class})
    public ResponseEntity<String> handleAllExceptions(Exception ex) {
        return ResponseEntity.badRequest().body("Invalid request: " + ex.getMessage());
    }

}
