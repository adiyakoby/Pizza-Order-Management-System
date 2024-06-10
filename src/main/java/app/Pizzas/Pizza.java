package app.Pizzas;

import static app.utils.Validation.checkNotNullAndLengthAbove;
import java.util.ArrayList;


public class Pizza {
    private final ArrayList<String> ingredients;




    public Pizza(ArrayList<String> ingredients) {
        checkNotNullAndLengthAbove(ingredients, 2);
        this.ingredients = ingredients;
    }



    public ArrayList<String> getIngredients() {
        return ingredients;
    }
}
