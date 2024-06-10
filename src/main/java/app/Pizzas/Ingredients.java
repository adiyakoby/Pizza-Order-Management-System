package app.Pizzas;

import java.util.HashMap;
import java.util.Map;

public class Ingredients {
    private static final Map<String, String> ingredients = new HashMap<String, String>();

    Ingredients() {
        ingredients.put("mozzarella", ".");
        ingredients.put("Tomatoes", ".");
        ingredients.put("Mushrooms", ".");
        ingredients.put("Green Peppers", ".");
        ingredients.put("Pepperoni", ".");
        ingredients.put("Green Olives", ".");
        ingredients.put("Black Olives", ".");
        ingredients.put("Extra Cheese", ".");
    }

    String getIngredient(String ingredient) {
        return ingredients.get(ingredient);
    }

    public static Map<String, String> getAllIngredients() {
        return ingredients;
    }


}
