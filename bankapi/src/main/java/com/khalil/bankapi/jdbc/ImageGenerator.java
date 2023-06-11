package com.khalil.bankapi.jdbc;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Base64;
import java.util.Random;

import javax.imageio.ImageIO;

public class ImageGenerator {
    private static int clientNumber = 1;

    public static String generateImage() {
        // Créer une image BufferedImage avec une largeur et une hauteur spécifiées
        int width = 400;
        int height = 200;
        BufferedImage image = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);

        // Obtenir le contexte graphique de l'image
        Graphics graphics = image.getGraphics();

        // Générer une couleur de fond aléatoire
        Color backgroundColor = getRandomColor();
        graphics.setColor(backgroundColor);
        graphics.fillRect(0, 0, width, height);

        // Définir la couleur et la police du texte
        Color textColor = Color.WHITE;
        Font font = new Font("Arial", Font.BOLD, 24);
        graphics.setColor(textColor);
        graphics.setFont(font);

        // Générer le texte "client numéro X" en utilisant l'incrémentation du numéro de client
        String text = "client numéro " + clientNumber++;
        int textX = 50;
        int textY = height / 2;
        graphics.drawString(text, textX, textY);

        // Libérer les ressources graphiques
        graphics.dispose();

        // Convertir l'image en tableau de bytes
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        try {
            ImageIO.write(image, "png", baos);
        } catch (IOException e) {
            e.printStackTrace();
        }
        byte[] imageBytes = baos.toByteArray();

        // Convertir le tableau de bytes en représentation base64
        String base64Image = Base64.getEncoder().encodeToString(imageBytes);

        return base64Image;
    }

    private static Color getRandomColor() {
        Random random = new Random();
        int red = random.nextInt(256);
        int green = random.nextInt(256);
        int blue = random.nextInt(256);
        return new Color(red, green, blue);
    }
}