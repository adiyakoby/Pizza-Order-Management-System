package app.Pizzas;

import java.util.ArrayList;
import java.util.List;

public class IngredientsController {
    private static final ArrayList<Ingredient> ingredients = new ArrayList<>(List.of(
            new Ingredient("mozzarella", 10, "."),
            new Ingredient("Tomatoes", 10, "."),
            new Ingredient("Mushrooms", 10, "."),
            new Ingredient("Green Peppers", 10, "."),
            new Ingredient("Pepperoni", 10, "."),
            new Ingredient("Green Olives", 10, "."),
            new Ingredient("Black Olives", 10, "."),
            new Ingredient("Extra Cheese", 10, ".")
        ));

    public IngredientsController() {
    }

    public static ArrayList<Ingredient> getIngredients() {
        return ingredients;
    }

    public Ingredient getIngredient(String name) {
        for (Ingredient ingredient : ingredients) {
            if (name.equalsIgnoreCase(ingredient.getName())) {
                return ingredient;
            }
        }
        return null;
    }


}
