package app.utils;

import app.Pizzas.Ingredient;

import java.util.ArrayList;

public class Validation {
    public static void checkNotNull(Object o) {
        if (o == null) {
            throw new IllegalArgumentException("Null argument");
        }
    }

    public static void checkNotEmpty(String s) {
        if (s == null || s.isEmpty()) {
            throw new IllegalArgumentException("Empty argument");
        }
    }

    public static void checkNotEmptyAndEqualLength(String s, int length) {
        if (s == null || s.isEmpty() || s.length() != length) {
            throw new IllegalArgumentException("Empty argument");
        }
    }

    public static <T> void checkNotNullAndLengthAboveEq(ArrayList<T> list, int min) {
        if (list == null || list.size() < min) {
            throw new IllegalArgumentException("List must not be null and must have at least " + min + " elements");
        }
    }



}
