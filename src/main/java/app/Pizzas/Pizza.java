package app.Pizzas;

import java.util.ArrayList;
import static app.utils.Validation.checkNotNullAndLengthAboveEq;


public class Pizza {
    private final ArrayList<Ingredient> ingredients;




    public Pizza(){
        this.ingredients = new ArrayList<>();
    }

    public Pizza(ArrayList<Ingredient> ingredients) {
        checkNotNullAndLengthAboveEq(ingredients, 2);
        this.ingredients = ingredients;
    }



    public ArrayList<Ingredient> getIngredients() {
        return ingredients;
    }
}
