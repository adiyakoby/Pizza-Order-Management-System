package app.utils;

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

    public static void checkNotNullAndLengthAbove(ArrayList<String> ingredients, int min) {
        if (ingredients.size() < 2) {
            throw new IllegalArgumentException("Must have at least two ingredients");
        }
    }
}
