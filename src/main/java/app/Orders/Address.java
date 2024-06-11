package app.Orders;

import static app.utils.Validation.checkNotEmpty;

/**
 * Represents an address.
 */
public class Address {
    private String street;
    private String houseNumber;
    private String city;

    /**
     * Constructor for Address.
     *
     * @param street      the street name.
     * @param houseNumber the house number.
     * @param city        the city name.
     */
    public Address(String street, String houseNumber, String city) {
        checkNotEmpty(street);
        checkNotEmpty(houseNumber);
        checkNotEmpty(city);

        this.street = street;
        this.houseNumber = houseNumber;
        this.city = city;
    }

    // Getters and setters
    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getHouseNumber() {
        return houseNumber;
    }

    public void setHouseNumber(String houseNumber) {
        this.houseNumber = houseNumber;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

}
