package app.Pizzas;

import java.util.ArrayList;

/**
 * Represents a pizza.
 */
public class Pizza {
    private ArrayList<Ingredient> ingredients;

    /**
     * Default constructor for Pizza.
     */
    public Pizza() {
        ingredients = new ArrayList<>();
    }

    /**
     * Constructor for Pizza.
     *
     * @param ingredients the list of ingredients in the pizza.
     */
    public Pizza(ArrayList<Ingredient> ingredients) {
        this.ingredients = ingredients;
    }

    // Getters and setters
    public ArrayList<Ingredient> getIngredients() {
        return ingredients;
    }
}
