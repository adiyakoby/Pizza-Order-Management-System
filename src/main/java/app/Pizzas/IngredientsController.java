package app.Pizzas;

import java.util.ArrayList;
import java.util.List;

public class IngredientsController {
    private static final ArrayList<Ingredient> ingredients = new ArrayList<>(List.of(
            new Ingredient(IngredientConstants.MOZZARELLA_NAME, IngredientConstants.MOZZARELLA_PRICE, IngredientConstants.MOZZARELLA_IMAGE),
            new Ingredient(IngredientConstants.TOMATOES_NAME, IngredientConstants.TOMATOES_PRICE, IngredientConstants.TOMATOES_IMAGE),
            new Ingredient(IngredientConstants.MUSHROOMS_NAME, IngredientConstants.MUSHROOMS_PRICE, IngredientConstants.MUSHROOMS_IMAGE),
            new Ingredient(IngredientConstants.GREEN_PEPPERS_NAME, IngredientConstants.GREEN_PEPPERS_PRICE, IngredientConstants.GREEN_PEPPERS_IMAGE),
            new Ingredient(IngredientConstants.PEPPERONI_NAME, IngredientConstants.PEPPERONI_PRICE, IngredientConstants.PEPPERONI_IMAGE),
            new Ingredient(IngredientConstants.GREEN_OLIVES_NAME, IngredientConstants.GREEN_OLIVES_PRICE, IngredientConstants.GREEN_OLIVES_IMAGE),
            new Ingredient(IngredientConstants.BLACK_OLIVES_NAME, IngredientConstants.BLACK_OLIVES_PRICE, IngredientConstants.BLACK_OLIVES_IMAGE),
            new Ingredient(IngredientConstants.EXTRA_CHEESES_NAME, IngredientConstants.EXTRA_CHEESES_PRICE, IngredientConstants.EXTRA_CHEESES_IMAGE)
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
