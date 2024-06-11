package app.Pizzas;


import static app.utils.Validation.checkNotEmpty;

/**
 * Represents an ingredient.
 */
public class Ingredient {
    private  String name;
    private  double price;
    private  String image;

    /**
     * Constructor for Ingredient.
     *
     * @param name  the name of the ingredient.
     * @param price the price of the ingredient.
     * @param image the image URL of the ingredient.
     */
    public Ingredient(String name, double price, String image) {
        checkNotEmpty(name);
        checkNotEmpty(image);

        this.name = name;
        this.price = price;
        this.image = image;
    }

    // Getters and setters

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
