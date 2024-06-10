package app.Pizzas;

import java.util.ArrayList;
import static app.utils.Validation.checkNotNullAndLengthAboveEq;


public class Pizza {
    private ArrayList<Ingredient> ingredients;

    public Pizza() {
        ingredients = new ArrayList<>();
    }

    public Pizza(ArrayList<Ingredient> ingredients) {
        this.ingredients = ingredients;
    }

    public ArrayList<Ingredient> getIngredients() {
        return ingredients;
    }
}
