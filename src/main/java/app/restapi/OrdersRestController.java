package app.restapi;
import app.Orders.OrdersController;
import app.Pizzas.Ingredient;
import app.Orders.Order;

import app.Pizzas.IngredientsController;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import java.util.ArrayList;

/**
 * REST controller for managing orders and ingredients.
 */
@RestController
@RequestMapping("/api")
public class OrdersRestController {

    private static final Logger logger = LogManager.getLogger(OrdersRestController.class);

    /**
     * Get all orders.
     *
     * @return a list of all orders.
     */
    @GetMapping("")
    public ArrayList<Order> getOrders() {
        logger.info("requested all orders. ");
        return OrdersController.getAllOrders();
    }

    /**
     * Get all ingredients.
     *
     * @return a list of all ingredients.
     */
    @GetMapping("/ingredients")
    public ArrayList<Ingredient> getIngredients() {
        logger.info("requests all ingredients. ");
        return IngredientsController.getIngredients();
    }

    /**
     * Add a new order.
     *
     * @param order the order to add.
     * @return the added order.
     */
    @PostMapping("")
    public ResponseEntity<String> addOrder(@RequestBody Order order) {
        OrdersController.addOrder(order);
        logger.info("added order {}", order);
        return ResponseEntity.ok().body("{\"id\": \"" + order.getId() + "\"}");
    }

    /**
     * Get an order by ID.
     *
     * @param id the ID of the order to retrieve.
     * @return the requested order.
     */
    @GetMapping("{id}")
    public ResponseEntity<?> getOrder(@PathVariable String id) {
        Order order = OrdersController.getOrder(id);
        logger.info("requests order {}", id);
        if (order == null) {
            logger.info("order not found");
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(order, HttpStatus.OK);
    }

    /**
     * Handle exceptions.
     *
     * @param ex the exception.
     * @return a bad request response with an error message.
     */
    @ExceptionHandler({MethodArgumentTypeMismatchException.class, IllegalArgumentException.class})
    public ResponseEntity<String> handleAllExceptions(Exception ex) {
        return ResponseEntity.badRequest().body("Invalid request: " + ex.getMessage());
    }

}
