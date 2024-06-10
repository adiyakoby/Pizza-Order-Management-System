package app.Pizzas;


public class Ingredient {
    private final String name;
    private final double price;
    private final String image;

    public Ingredient(String name, double price, String image) {
        this.name = name;
        this.price = price;
        this.image = image;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public String getImage() {
        return image;
    }
}
